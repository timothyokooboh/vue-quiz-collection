<template>
  <button
    class="quiz-option flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-left duration-300 hover:border-[#9fddc1]"
    :class="{
      'cursor-default': showAnswer,
      'cursor-pointer': !showAnswer,
    }"
    :data-quiz-option-status="quizOptionStatus"
    :data-quiz-root-status="quizRootStatus"
    :disabled="showAnswer"
    @click="handleSelection"
  >
    <div class="flex items-center gap-3">
      <div
        class="quiz-option__ring-outer flex h-4 w-4 items-center justify-center rounded-full"
      >
        <div class="quiz-option__ring-inner h-2 w-2 rounded-full"></div>
      </div>
      <p>{{ option.option }}</p>
    </div>

    <slot
      v-if="showAnswer && option.id === correctOptionId && quizOptionStatus"
      name="successIcon"
    >
      <div
        class="border-1 flex h-4 w-4 items-center justify-center rounded-full border-black"
        :class="{
          'border-green-500': quizOptionStatus === 'success',
          'border-black': quizOptionStatus !== 'success',
        }"
      >
        <Check class="h-2 w-2" />
      </div>
    </slot>

    <slot v-if="showAnswer && quizOptionStatus === 'error'" name="errorIcon">
      <div
        class="border-1 flex h-4 w-4 items-center justify-center rounded-full border-red-500"
      >
        <X class="h-2 w-2 text-red-500" />
      </div>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import {
  selectedOptionIdKey,
  showAnswerKey,
  onSelectOptionKey,
  correctOptionIdKey,
  quizRootStatusKey,
} from "@/injection-keys";
import { Check, X } from "lucide-vue-next";

const props = defineProps<{
  option: { id: string; option: string };
  theme?: {
    defaultBorderColor?: string;
    selectedBorderColor?: string;
    successBorderColor?: string;
    errorBorderColor?: string;
    selectedBgColor?: string;
    successBgColor?: string;
    errorBgColor?: string;
  };
}>();

const selectedOptionId = inject(selectedOptionIdKey);
const showAnswer = inject(showAnswerKey);
const quizRootStatus = inject(quizRootStatusKey);
const correctOptionId = inject(correctOptionIdKey);
const onSelectOption = inject(onSelectOptionKey);

const defaultBorderColor = computed(
  () => props.theme?.defaultBorderColor || "#E6EAE6",
);
const selectedBorderColor = computed(
  () => props.theme?.selectedBorderColor || "var(--color-green-500)",
);
const successBorderColor = computed(
  () => props.theme?.successBorderColor || "var(--color-green-500)",
);
const errorBorderColor = computed(
  () => props.theme?.errorBorderColor || "var(--color-red-500)",
);
const selectedBgColor = computed(
  () => props.theme?.selectedBgColor || "transparent",
);
const successBgColor = computed(
  () => props.theme?.successBgColor || "var(--color-green-50)",
);
const errorBgColor = computed(
  () => props.theme?.errorBgColor || "var(--color-red-50)",
);

const quizOptionStatus = computed<"default" | "selected" | "success" | "error">(
  () => {
    if (!showAnswer?.value && props.option.id === selectedOptionId?.value) {
      return "selected";
    }
    if (
      showAnswer?.value &&
      props.option.id === selectedOptionId?.value &&
      props.option.id === correctOptionId
    ) {
      return "success";
    }
    if (
      showAnswer?.value &&
      props.option.id === selectedOptionId?.value &&
      props.option.id !== correctOptionId
    ) {
      return "error";
    }
    return "default";
  },
);

const handleSelection = () => {
  if (showAnswer?.value) return;
  if (onSelectOption) onSelectOption(props.option.id);
};
</script>

<style lang="scss" scoped>
.quiz-option {
  &[data-quiz-option-status="default"] {
    border: 1px solid v-bind(defaultBorderColor);
    .quiz-option__ring-outer {
      border: 1px solid v-bind(successBorderColor);
    }
  }

  &[data-quiz-option-status="selected"] {
    background-color: v-bind(selectedBgColor);
    border-color: v-bind(selectedBorderColor);

    .quiz-option__ring-outer {
      border: 1px solid v-bind(selectedBorderColor);
    }

    .quiz-option__ring-inner {
      background-color: v-bind(selectedBorderColor);
    }
  }

  &[data-quiz-option-status="success"] {
    border-color: v-bind(successBorderColor);
    background-color: v-bind(successBgColor);

    .quiz-option__ring-outer {
      border: 1px solid v-bind(successBorderColor);
    }

    .quiz-option__ring-inner {
      background-color: v-bind(successBorderColor);
    }
  }

  &[data-quiz-option-status="error"] {
    border-color: v-bind(errorBorderColor);
    background-color: v-bind(errorBgColor);

    .quiz-option__ring-outer {
      border: 1px solid v-bind(errorBorderColor);
    }

    .quiz-option__ring-inner {
      background-color: v-bind(errorBorderColor);
    }
  }

  &[data-quiz-root-status="success"],
  &[data-quiz-root-status="error"] {
    .quiz-option__ring-outer,
    .quiz-option__ring-inner {
      opacity: 0.5;
    }
  }
}
</style>
