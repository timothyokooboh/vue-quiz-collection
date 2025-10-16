<template>
  <div role="region" aria-live="assertive" aria-atomic="true">
    <div
      v-if="showAnswer"
      class="quiz-feedback rounded-md border p-3"
      :data-quiz-root-status="quizRootStatus"
    >
      <div v-if="quizRootStatus === 'success'" class="flex items-center gap-2">
        <slot name="successIcon" :status="quizRootStatus">
          <div
            class="border-1 flex h-5 w-5 items-center justify-center rounded-full border-green-700"
          >
            <Check
              class="h-3 w-3 text-green-700"
              aria-label="correct answer checkmark"
            />
          </div>
        </slot>

        <slot name="successTitle" :status="quizRootStatus">
          <span class="font-bold text-green-700">Correct!</span>
        </slot>
      </div>

      <div
        v-else-if="quizRootStatus === 'error'"
        class="flex items-center gap-2"
      >
        <slot name="errorIcon" :status="quizRootStatus">
          <div
            class="border-1 flex h-5 w-5 items-center justify-center rounded-full border-red-700"
          >
            <X
              class="h-3 w-3 text-red-700"
              aria-label="incorrect answer ICON"
            />
          </div>
        </slot>

        <slot name="errorTitle" :status="quizRootStatus">
          <span class="font-bold text-red-500">Incorrect!</span>
        </slot>
      </div>

      <slot name="explanation" :status="quizRootStatus">
        <div class="mt-3">
          <div class="text-sm">
            <span class="mr-1 font-bold">Explanation:</span>
            <span>{{ explanation }}</span>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { quizRootStatusKey, showAnswerKey } from "@/injection-keys";
import { Check, X } from "lucide-vue-next";

const props = defineProps<{
  explanation: string;
  theme?: {
    successBgColor?: string;
    successBorderColor?: string;
    errorBgColor?: string;
    errorBorderColor?: string;
  };
}>();

const quizRootStatus = inject(quizRootStatusKey);
const showAnswer = inject(showAnswerKey);

const successBgColor = computed(() => {
  return props.theme?.successBgColor ?? "var(--color-green-50)";
});

const successBorderColor = computed(() => {
  return props.theme?.successBorderColor ?? "var(--color-green-500)";
});

const errorBgColor = computed(() => {
  return props.theme?.errorBgColor ?? "var(--color-red-50)";
});

const errorBorderColor = computed(() => {
  return props.theme?.errorBorderColor ?? "var(--color-red-500)";
});
</script>

<style lang="scss" scoped>
.quiz-feedback {
  &[data-quiz-root-status="success"] {
    border-color: v-bind(successBorderColor);
    background-color: v-bind(successBgColor);
  }

  &[data-quiz-root-status="error"] {
    border-color: v-bind(errorBorderColor);
    background-color: v-bind(errorBgColor);
  }
}
</style>
