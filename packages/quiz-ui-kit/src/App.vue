<script setup lang="ts">
import { ref } from "vue";
import QuizProgress from "@/components/QuizProgress.vue";
import QuizRoot from "@/components/QuizRoot.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizBody from "@/components/QuizBody.vue";
import QuizOption from "@/components/QuizOption.vue";
import QuizFeedback from "./components/QuizFeedback.vue";

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
    explanation:
      "Paris is the capital and largest city of France. Paris is the capital and largest city of France. Paris is the capital and largest city of France. Paris is the capital and largest city of France. Paris is the capital and largest city of France. Paris is the capital and largest city of France.",
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
    explanation: "2 + 2 equals 4.",
  },
  {
    id: 3,
    question: "What is the purpose of <script setup> in Vue 3?",
    difficulty: "Medium",
    category: "Programming",
    topic: "Vue.js",
    options: [
      { id: "a", option: "To define component styles" },
      {
        id: "b",
        option:
          "To provide a more concise way to write component logic with Composition API",
      },
      { id: "c", option: "To handle component events" },
      { id: "d", option: "To manage component lifecycle hooks" },
    ],
    correctOptionId: "b",
    explanation:
      "<script setup> is a syntax sugar in Vue 3 that allows you to provide a more concise way to write component logic with Composition API.",
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
        indicatorBgColor: '#33B279',
        rootBgColor: '#EEF6F3',
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
          >
          </QuizOption>

          <QuizFeedback :explanation="question.explanation" class="mt-3">
          </QuizFeedback>
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
