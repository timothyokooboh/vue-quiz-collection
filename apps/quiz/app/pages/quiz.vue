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

    <template v-if="activeStep === 1">
      <QuizFilters />
      <div class="mt-3 flex justify-end">
        <Button @click="activeStep = 2">Start Quiz</Button>
      </div>
    </template>

    <div v-else class="flex flex-col gap-4">
      <Button variant="outline" class="w-fit" @click="activeStep = 1">
        <Icon name="lucide:arrow-left" />
        Back to Filters
      </Button>

      <QuizRoot
        v-for="(question, index) in filteredQuiz"
        :key="question._id"
        :question-id="question._id"
        :correct-option-id="question.correctOptionId"
        :total-questions="filteredQuiz?.length ?? 0"
        :show-answer="showAnswer"
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

      <div v-if="mode === 'quiz'" class="flex justify-end">
        <Button @click="showAnswer = true">Submit</Button>
      </div>
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

import { Button } from "@/components/ui/button";

import {
  Stepper,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useRouteQuery } from "@vueuse/router";

export type SelectedOption = {
  id: null | string;
  questionId: string;
};

useSeoMeta({
  title: "Vue.js Quiz",
  description: "Test your Vue.js knowledge with this interactive quiz!",
  ogTitle: "Vue.js Quiz",
  ogDescription: "Test your Vue.js knowledge with this interactive quiz!",
});

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

const activeStep = useRouteQuery<number>("step", 1, {
  transform: Number,
});

const { mode, filteredQuiz } = useFilters();

const showAnswer = ref(false);
const selectedOptions = ref<SelectedOption[]>([]);

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
</script>
