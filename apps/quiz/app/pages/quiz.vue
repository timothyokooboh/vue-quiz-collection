<template>
  <div class="mx-auto max-w-[960px] p-4">
    <h1 class="mb-3">
      Test your knowledge of Vue.js, Vue router and Pinia xxx
    </h1>

    <QuizFilters class="mb-4" />

    <div v-if="quiz" class="flex flex-col gap-4">
      <QuizRoot
        v-for="(question, index) in quiz"
        :key="question.id"
        :question-id="question.id.toString()"
        :correct-option-id="question.correctOptionId"
        :total-questions="quiz.length"
        :show-answer="true"
        :selected-option="getSelectedOption(question.id.toString())"
        @select:option="onSelectOption"
      >
        <!-- <h2 class="text-base font-bold md:text-lg">{{ question }}</h2> -->
        <QuizHeader
          :tags="[question.difficulty, question.category, question.topic]"
          :question-number="index + 1"
        >
          <ContentRenderer
            :value="question.meta"
            :data="{ questionType: 'question' }"
          />
        </QuizHeader>

        <QuizBody>
          <QuizOption
            v-for="option in question.options"
            :key="option.id"
            :option="option"
          />

          <QuizFeedback>
            <template #explanation>
              <div>
                <ContentRenderer
                  :value="question.meta"
                  :data="{ explanationType: 'explanation' }"
                />

                <a
                  v-if="question.referenceLink"
                  :href="question.referenceLink"
                  target="_blank"
                  class="mt-3 flex w-fit items-center gap-2 text-sm text-cyan-700"
                  >Learn more in official docs
                  <Icon name="lucide:external-link" />
                </a>
              </div>
            </template>
          </QuizFeedback>
        </QuizBody>
      </QuizRoot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  QuizRoot,
  QuizHeader,
  QuizBody,
  QuizOption,
  QuizFeedback,
} from "@vqc/quiz-ui-kit";

useSeoMeta({
  title: "Vue.js Quiz",
  description: "Test your Vue.js knowledge with this interactive quiz!",
  ogTitle: "Vue.js Quiz",
  ogDescription: "Test your Vue.js knowledge with this interactive quiz!",
});

const { data: quiz } = await useAsyncData("quiz", () => {
  return queryCollection("quiz").all();
});

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
</script>
