<script setup lang="ts">
import { vConfetti } from "@neoconfetti/vue";
import Button from "~/components/ui/button/Button.vue";

import {
  QuizRoot,
  QuizHeader,
  QuizBody,
  QuizOption,
  QuizFeedback,
  QuizProgress,
} from "@vqc/quiz-ui-kit";
import type { SelectedOption } from "~/types";

const { filteredQuiz: questions } = useFilters();

const showResult = ref(false);
const currentQuestionIndex = ref(0);
const selectedOption = ref<SelectedOption | null>(null);
const currentQuestion = computed(
  () => questions.value[currentQuestionIndex.value],
);

const goToPreviousQuestion = () => {
  showResult.value = false;

  currentQuestionIndex.value--;
};

const goToNextQuestion = () => {
  showResult.value = false;
  selectedOption.value = null;
  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <div
      v-if="
        showResult &&
        selectedOption?.selectedOptionId === selectedOption?.correctOptionId
      "
      v-confetti="{
        particleCount: 200,
        force: 0.2,
        particleSize: 15,
        duration: 3000,
        stageWidth: 2600,
      }"
    />
  </div>

  <QuizProgress
    :current-question-index="currentQuestionIndex"
    :total-questions="questions.length"
  />

  <AppTransition from="right">
    <QuizRoot
      v-if="currentQuestion"
      :key="currentQuestion.id"
      :question-id="currentQuestion.id"
      :correct-option-id="currentQuestion.correctOptionId"
      :total-questions="questions.length"
      :show-result="showResult"
      @select:option="selectedOption = $event"
    >
      <QuizHeader
        :tags="[
          currentQuestion.difficulty,
          currentQuestion.category,
          currentQuestion.topic,
        ]"
        :question-number="currentQuestionIndex + 1"
      >
        <ContentRenderer
          :value="currentQuestion.meta"
          :data="{ questionType: 'question' }"
        />
      </QuizHeader>

      <QuizBody>
        <QuizOption
          v-for="option in currentQuestion.options"
          :key="option.id"
          :option="option"
        />

        <QuizFeedback>
          <template #explanation>
            <div>
              <ContentRenderer
                :value="currentQuestion.meta"
                :data="{ explanationType: 'explanation' }"
              />

              <a
                v-if="currentQuestion.referenceLink"
                :href="currentQuestion.referenceLink"
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
  </AppTransition>

  <div class="mt-4 flex items-center justify-between">
    <Button
      variant="ghost"
      :disabled="currentQuestionIndex === 0"
      @click="goToPreviousQuestion"
      >Previous question</Button
    >

    <Button
      v-if="showResult"
      class="ml-auto"
      variant="ghost"
      @click="goToNextQuestion"
      >Next question</Button
    >
    <Button
      v-else
      variant="ghost"
      :disabled="showResult || !selectedOption"
      @click="showResult = true"
      >Submit</Button
    >
  </div>
</template>
