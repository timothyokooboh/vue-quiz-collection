<template>
  <div>
    <div class="mb-2 flex items-center justify-between text-sm text-[#7B8E86]">
      <span
        >Question {{ currentQuestionIndex + 1 }} of {{ totalQuestions }}</span
      >

      <span>{{ progressPercentage }}% Complete</span>
    </div>

    <QuizProgress
      v-model="progressPercentage"
      :theme="{
        progressIndicatorBg: theme?.progressIndicatorBg,
        progressRootBg: theme?.progressRootBg,
      }"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Progress as QuizProgress } from "@/components/ui/progress";
import type { ProgressTheme } from "@/components/ui/progress";

export type QuizCompletionProgressProps = {
  /**
   * The current question index (0-based).
   */
  currentQuestionIndex: number;
  /**
   * The total number of questions in the quiz.
   */
  totalQuestions: number;

  /**
   * A theme object for customizing the progress component
   */
  theme?: ProgressTheme;
};

const props = defineProps<QuizCompletionProgressProps>();

const progressPercentage = computed(() => {
  if (props.totalQuestions === 0) return 0;
  return ((props.currentQuestionIndex + 1) / props.totalQuestions) * 100;
});
</script>

<style scoped></style>
