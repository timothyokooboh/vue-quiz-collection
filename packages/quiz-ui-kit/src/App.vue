<script setup lang="ts">
import { ref } from "vue";
import QuizProgress from "@/components/QuizProgress.vue";
import QuizRoot from "@/components/QuizRoot.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizBody from "@/components/QuizBody.vue";
import QuizOption from "@/components/QuizOption.vue";

export type SelectedOption = {
  id: null | string;
  questionId: string;
};

const showAnswer = ref(false);
const selectedOptions = ref<SelectedOption[]>([]);

const onSelectOption = (payload: SelectedOption) => {
  console.log("Selected Option:", payload);
  const existingIndex = selectedOptions.value.findIndex(
    (opt) => opt.questionId === payload.questionId,
  );
  if (existingIndex !== -1) {
    selectedOptions.value[existingIndex] = payload;
    return;
  }
  selectedOptions.value.push(payload);
};

const getSelectedOption = (questionId: string) => {
  return (
    selectedOptions.value.find(
      (opt) => opt.questionId === questionId.toString(),
    ) || { questionId: questionId.toString(), id: null }
  );
};

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    difficulty: "Easy",
    category: "Geography",
    topic: "Capitals",
    options: [
      { id: "a", option: "Berlin" },
      { id: "b", option: "Madrid" },
      { id: "c", option: "Paris" },
      { id: "d", option: "Rome" },
    ],
    correctOptionId: "c",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    difficulty: "Easy",
    category: "Mathematics",
    topic: "Arithmetic",
    options: [
      { id: "a", option: "3" },
      { id: "b", option: "4" },
      { id: "c", option: "5" },
      { id: "d", option: "6" },
    ],
    correctOptionId: "b",
  },
];
</script>

<template>
  <div class="mx-auto my-10 max-w-[860px]">
    {{ selectedOptions }}
    <QuizProgress
      :current-question-index="49"
      :total-questions="100"
      :theme="{
        progressIndicatorBg: '#33B279',
        progressRootBg: '#EEF6F3',
      }"
      class="mb-4"
    />

    <!--
      const quizRootStatus = computed(() => {
        if(!showAnswer) return 'default'
        return selectedOption.id === correctOptionId ? 'success' : 'error'
      })

      provide('handleSelectOption')
      provide('quizRootStatus')

      const quizOptionStatus = computed<'default' | 'selected' | 'success' | 'error'>(() => {
        if(!showAnswer) return 'default'
        if(option.id !== correctOptionId) return 'default'
        return option.id === selectedOptionId ? 'success' : 'error'
      })

    -->

    <div class="flex flex-col gap-6">
      <QuizRoot
        v-for="(question, index) in questions"
        :key="question.id"
        :question-id="question.id.toString()"
        :correct-option-id="question.correctOptionId"
        :total-questions="questions.length"
        :show-answer="showAnswer"
        :selected-option="getSelectedOption(question.id.toString())"
        @select:option="onSelectOption"
      >
        <QuizHeader
          :tags="[question.difficulty, question.category, question.topic]"
          :question-number="index + 1"
          :question="question.question"
        />

        <QuizBody>
          <QuizOption
            v-for="option in question.options"
            :key="option.id"
            :option="option"
          />
        </QuizBody>
      </QuizRoot>
    </div>

    <button
      @click="showAnswer = true"
      class="mt-6 rounded bg-[#33B279] px-4 py-2 text-white"
    >
      Show Answers
    </button>
  </div>
</template>

<style scoped></style>
