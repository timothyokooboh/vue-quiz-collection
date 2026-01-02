<template>
  <div class="mx-auto max-w-[960px] p-5">
    <Stepper v-model="activeStep" class="mb-4 flex w-full items-start gap-2">
      <StepperItem
        v-for="step in steps"
        :key="step.step"
        v-slot="{ state }"
        class="relative flex w-full flex-col items-center justify-center"
        :step="step.step"
      >
        <StepperSeparator
          v-if="step.step !== steps[steps.length - 1]?.step"
          class="bg-muted group-data-[state=completed]:bg-primary absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full"
        />

        <StepperTrigger as-child>
          <Button
            :variant="
              state === 'completed' || state === 'active'
                ? 'default'
                : 'outline'
            "
            size="icon"
            class="z-10 shrink-0 rounded-full"
            :class="[
              state === 'active' &&
                'ring-ring ring-offset-background ring-2 ring-offset-2',
            ]"
          >
            <Icon v-if="state === 'completed'" name="lucide:check" />
            <Icon v-if="state === 'active'" name="lucide:circle" />
            <Icon v-if="state === 'inactive'" name="lucide:dot" />
          </Button>
        </StepperTrigger>

        <div class="mt-5 flex flex-col items-center text-center">
          <StepperTitle
            :class="[state === 'active' && 'text-primary']"
            class="text-sm font-semibold transition lg:text-base"
          >
            {{ step.title }}
          </StepperTitle>
        </div>
      </StepperItem>
    </Stepper>

    <AppTransition :duration="0.3" :from="activeStep === 1 ? 'left' : 'right'">
      <div v-if="activeStep === 1">
        <QuizFilters />
        <div class="mt-3 flex justify-end">
          <Button @click="activeStep = 2">Start Quiz</Button>
        </div>
      </div>

      <div v-else class="flex flex-col gap-4">
        <section
          v-if="mode === 'quiz' && showResult"
          class="my-4 flex flex-col items-center gap-2"
        >
          <div
            v-if="showResult && percentageScore >= 80"
            v-confetti="{
              particleCount: 500,
              force: 0.8,
              particleSize: 15,
              duration: 5000,
              stageWidth: 2600,
            }"
          />
          <h2 class="text-xl font-bold md:text-2xl">Quiz Complete!</h2>
          <div class="flex items-center gap-2">
            <p class="text-2xl font-bold text-green-500 md:text-3xl">
              {{ percentageScore }}%
            </p>
            <ScoreBadge :percentage-score="percentageScore" />
          </div>
          <p class="text-muted-foreground text-sm">
            You got {{ totalCorrectAnswers }} out of {{ filteredQuiz.length }}
            questions correct
          </p>
          <Button variant="outline" class="w-fit" @click="restartQuiz"
            >Restart</Button
          >
        </section>

        <Button variant="ghost" class="w-fit" @click="activeStep = 1">
          <Icon name="lucide:arrow-left" />
          Back to Filters
        </Button>

        <template v-if="mode === 'quiz'">
          <div :key="resetKey" class="flex flex-col gap-3">
            <QuizRoot
              v-for="(question, index) in filteredQuiz"
              ref="quizRoot"
              :key="question._id"
              :question-id="question._id"
              :correct-option-id="question.correctOptionId"
              :total-questions="filteredQuiz?.length ?? 0"
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

                <p
                  v-if="showValidationMessage(question._id)"
                  ref="validationMessage"
                  class="text-sm text-red-500"
                >
                  Please provide an answer
                </p>
              </QuizBody>
            </QuizRoot>
          </div>

          <div class="flex justify-end">
            <Button :disabled="showResult" @click="submitQuiz">Submit</Button>
          </div>
        </template>

        <template v-else>
          <div
            v-if="
              showResult &&
              selectedOption?.selectedOptionId ===
                selectedOption?.correctOptionId
            "
            v-confetti="{
              particleCount: 500,
              force: 0.8,
              particleSize: 15,
              duration: 5000,
              stageWidth: 2600,
            }"
          />

          <QuizProgress
            :current-question-index="currentQuestionIndex"
            :total-questions="filteredQuiz?.length ?? 0"
          />

          <AppTransition from="right">
            <QuizRoot
              v-if="!!currentQuestion"
              :key="currentQuestion._id"
              :question-id="currentQuestion._id"
              :correct-option-id="currentQuestion.correctOptionId"
              :total-questions="filteredQuiz?.length ?? 0"
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

                <p v-if="isInvalidSubmission" class="text-sm text-red-500">
                  Please provide an answer
                </p>
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
              :disabled="showResult"
              @click="submit"
              >Submit</Button
            >
          </div>
        </template>
      </div>
    </AppTransition>
  </div>
</template>

<script lang="ts" setup>
import {
  QuizRoot,
  QuizHeader,
  QuizBody,
  QuizOption,
  QuizFeedback,
  QuizProgress,
} from "@vqc/quiz-ui-kit";
import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useRouteQuery } from "@vueuse/router";
import { vConfetti } from "@neoconfetti/vue";

// Todo: extract this type from the quiz-ui-kit
export type SelectedOption = {
  selectedOptionId: null | string;
  questionId: string;
  correctOptionId: string;
};

const steps = [
  {
    step: 1,
    title: "Filters",
    description: "Optionally apply filters to narrow down the questions",
  },
  {
    step: 2,
    title: "Quiz",
    description: "Start answering the questions",
  },
];
const selectedOptions = ref<SelectedOption[]>([]);

const validationMessageRef = useTemplateRef("validationMessage");
useSeoMeta({
  title: "Vue.js Quiz",
  description: "Test your Vue.js knowledge with this interactive quiz!",
  ogTitle: "Vue.js Quiz",
  ogDescription: "Test your Vue.js knowledge with this interactive quiz!",
});
const { mode, filteredQuiz } = useFilters();
const {
  showResult,
  showValidationMessage,
  submitQuiz,
  isInvalidSubmission,
  totalCorrectAnswers,
  percentageScore,
} = useSubmission(validationMessageRef, selectedOptions);
// sync active step with URL
const activeStep = useRouteQuery<number>("step", 1, {
  transform: Number,
});

watch(activeStep, () => {
  selectedOptions.value = [];
  showResult.value = false;
  isInvalidSubmission.value = false;
});

const onSelectOption = (payload: SelectedOption) => {
  const existingIndex = selectedOptions.value.findIndex(
    (opt) => opt.questionId === payload.questionId,
  );
  if (existingIndex !== -1) {
    selectedOptions.value[existingIndex] = payload;
    return;
  }

  selectedOptions.value = [...selectedOptions.value, payload];
};

const resetKey = ref(0);

const restartQuiz = () => {
  selectedOptions.value = [];
  showResult.value = false;
  isInvalidSubmission.value = false;
  resetKey.value++;
};

// study mode
const currentQuestionIndex = ref(0);
const selectedOption = ref<SelectedOption | null>(null);
const currentQuestion = computed(
  () => filteredQuiz.value[currentQuestionIndex.value],
);

const goToPreviousQuestion = () => {
  showResult.value = false;
  isInvalidSubmission.value = false;
  currentQuestionIndex.value--;
};

const goToNextQuestion = () => {
  showResult.value = false;
  isInvalidSubmission.value = false;
  currentQuestionIndex.value++;
};

const submit = () => {
  if (selectedOption.value === null) {
    isInvalidSubmission.value = true;
    return;
  }

  isInvalidSubmission.value = false;
  showResult.value = true;
};
</script>
