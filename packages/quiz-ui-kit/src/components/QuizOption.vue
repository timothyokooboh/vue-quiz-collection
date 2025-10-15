<template>
  <button
    class="quiz-option border-[#E6EAE6 flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-left duration-300 hover:border-[#9fddc1]"
    :class="{
      'cursor-default': showAnswer,
      'cursor-pointer': !showAnswer,
    }"
    :data-quiz-option-status="quizOptionStatus"
    :data-quiz-root-status="quizRootStatus"
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

    <div
      v-if="showAnswer && option.id === correctOptionId && quizOptionStatus"
      class="border-1 flex h-4 w-4 items-center justify-center rounded-full border-black"
      :class="{
        'border-green-500': quizOptionStatus === 'success',
        'border-black': quizOptionStatus !== 'success',
      }"
    >
      <Check class="h-2 w-2" />
    </div>

    <div
      v-if="showAnswer && quizOptionStatus === 'error'"
      class="border-1 flex h-4 w-4 items-center justify-center rounded-full border-red-500"
    >
      <X class="h-2 w-2 text-red-500" />
    </div>
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
}>();

const selectedOptionId = inject(selectedOptionIdKey);
const showAnswer = inject(showAnswerKey);
const quizRootStatus = inject(quizRootStatusKey);
const correctOptionId = inject(correctOptionIdKey);

const quizOptionStatus = computed(() => {
  if (!showAnswer?.value && props.option.id === selectedOptionId?.value)
    return "selected";
  else if (
    showAnswer?.value &&
    props.option.id === selectedOptionId?.value &&
    props.option.id === correctOptionId
  )
    return "success";
  else if (
    showAnswer?.value &&
    props.option.id === selectedOptionId?.value &&
    props.option.id !== correctOptionId
  )
    return "error";
  else {
    return "default";
  }
});

const onSelectOption = inject(onSelectOptionKey);

const handleSelection = () => {
  if (showAnswer?.value) return;
  if (onSelectOption) onSelectOption(props.option.id);
};
</script>

<style lang="scss" scoped>
.quiz-option {
  &[data-quiz-option-status="default"] {
    .quiz-option__ring-outer {
      border: 1px solid var(--color-green-500);
    }
  }

  &[data-quiz-option-status="selected"] {
    border-color: var(--color-green-500);

    .quiz-option__ring-outer {
      border: 1px solid var(--color-green-500);
    }

    .quiz-option__ring-inner {
      background-color: var(--color-green-500);
    }
  }

  &[data-quiz-option-status="success"] {
    border-color: var(--color-green-500); // #33b279;

    .quiz-option__ring-outer {
      border: 1px solid var(--color-green-500);
    }

    .quiz-option__ring-inner {
      background-color: var(--color-green-500);
    }
  }

  &[data-quiz-option-status="error"] {
    border-color: var(--destructive-foreground);
    background-color: #ffedec;

    .quiz-option__ring-outer {
      border: 1px solid var(--color-green-500);
    }

    .quiz-option__ring-inner {
      background-color: var(--color-green-500);
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
