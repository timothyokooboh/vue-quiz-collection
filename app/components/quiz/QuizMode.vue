<script setup lang="ts">
import { vConfetti } from "@neoconfetti/vue";
import { Button } from "~/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";

import QuizRoot from "./QuizRoot.vue";
import QuizHeader from "./QuizHeader.vue";
import QuizBody from "./QuizBody.vue";
import QuizFeedback from "./QuizFeedback.vue";
import QuizOption from "./QuizOption.vue";

import type { SelectedOption } from "~/types";

const VALIDATE_SUBMISSION = true;

const { filteredQuiz: questions } = useFilters();
const selectedOptions = ref<SelectedOption[]>([]);

const {
  showResult,
  submitQuiz,
  hasAnsweredAllQuestions,
  questionsWithoutAnswers,
  totalCorrectAnswers,
  percentageScore,
} = useSubmission(selectedOptions);

const resetKey = ref(0);
const quizTimerRef = useTemplateRef("quiz-timer-ref");
const showConfirmationModal = ref(false);

const onSelectOption = (payload: SelectedOption) => {
  const existingIndex = selectedOptions.value.findIndex(
    (option) => option.questionId === payload.questionId
  );

  if (existingIndex === -1) {
    console.log("sefunmi");
    selectedOptions.value = [...selectedOptions.value, payload];
    return;
  }

  console.log("pishaun");
  // selectedOptions.value[existingIndex] = payload;
  selectedOptions.value = selectedOptions.value.map((opt) => {
    if (opt.questionId === payload.questionId) return payload;
    return opt;
  });
};

const restartQuiz = () => {
  selectedOptions.value = [];
  showResult.value = false;
  resetKey.value++;
};

const manageSubmission = (validate: boolean = true) => {
  if (validate && !hasAnsweredAllQuestions.value) {
    showConfirmationModal.value = true;
    return;
  }

  submitQuiz();
  showConfirmationModal.value = false;
  quizTimerRef.value?.clear();
};
</script>

<template>
  <Teleport defer to="#quiz-timer">
    <QuizTimer
      ref="quiz-timer-ref"
      :key="resetKey"
      :minutes="questions.length * 2"
      @done="submitQuiz"
    />
  </Teleport>

  <div class="flex flex-col gap-3">
    <section
      v-if="showResult"
      class="my-4 flex flex-col items-center gap-3 bg-gray-50 py-8 rounded-lg"
    >
      <div
        v-if="showResult && percentageScore >= 80"
        v-confetti="{
          particleCount: 200,
          force: 0.2,
          particleSize: 15,
          duration: 3000,
          stageWidth: 2600,
        }"
      />
      <!-- score card -->
      <h2 class="text-xl font-bold md:text-2xl">Quiz Complete!</h2>
      <div class="flex items-center gap-2">
        <p class="text-2xl font-bold text-green-500 md:text-3xl">
          {{ percentageScore }}%
        </p>
        <ScoreBadge :percentage-score="percentageScore" class="rotate-5" />
      </div>
      <p class="text-muted-foreground text-sm">
        You got <span class="font-bold">{{ totalCorrectAnswers }}</span> out of
        <span class="font-bold">{{ questions.length }}</span>
        questions correct
      </p>
      <Button variant="outline" class="w-fit" @click="restartQuiz"
        ><Icon name="lucide:repeat" /> Restart</Button
      >
    </section>

    <QuizRoot
      v-for="(question, index) in questions"
      ref="quizRoot"
      :key="question.id + resetKey"
      :question-id="question.id"
      :correct-option-id="question.correctOptionId"
      :total-questions="questions?.length ?? 0"
      :show-result="showResult"
      @select:option="onSelectOption"
    >
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

  <div class="flex justify-end">
    <Button :disabled="showResult" @click="manageSubmission">Submit</Button>
  </div>

  <AlertDialog :open="showConfirmationModal">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          You have not provided an answer to the following questions:
          <p>{{ questionsWithoutAnswers.join(', ') }}</p>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="showConfirmationModal = false"
          >Cancel</AlertDialogCancel
        >
        <AlertDialogAction @click="manageSubmission(!VALIDATE_SUBMISSION)"
          >Continue</AlertDialogAction
        >
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
