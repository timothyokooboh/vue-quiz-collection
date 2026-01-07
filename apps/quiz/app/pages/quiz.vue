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
          <AppButton class="mt-3 flex justify-end" @click="activeStep = 2"
            >Start Session</AppButton
          >
        </div>
      </div>

      <div v-else class="flex flex-col gap-4">
        <div class="my-4 flex items-center justify-between">
          <Button variant="ghost" class="w-fit" @click="activeStep = 1">
            <Icon name="lucide:arrow-left" />
            Back to Filters
          </Button>

          <!-- target for Teleport -->
          <div id="quiz-timer" />
        </div>

        <QuizMode
          v-if="mode === 'quiz'"
          ref="quiz-mode"
          :questions="filteredQuiz"
        />

        <template v-else>
          <StudyMode />
        </template>
      </div>
    </AppTransition>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useRouteQuery } from "@vueuse/router";

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

useSeoMeta({
  title: "Vue.js Quiz",
  description: "Test your Vue.js knowledge with this interactive quiz!",
  ogTitle: "Vue.js Quiz",
  ogDescription: "Test your Vue.js knowledge with this interactive quiz!",
});

const { mode, filteredQuiz } = useFilters();

// sync active step with URL
const activeStep = useRouteQuery<number>("step", 1, {
  transform: Number,
});

// watch(activeStep, () => {
//   selectedOptions.value = [];
//   showResult.value = false;
//   isInvalidSubmission.value = false;
// });

// study mode
</script>
