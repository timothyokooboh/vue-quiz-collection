<template>
  <Card
    class="border-1 border-solid border-[#dbe6e0] px-4"
    :data-status="quizRootStatus"
  >
    <slot />
  </Card>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { Card } from "@/components/ui/card";
import type { SelectedOption } from "@/App.vue";
import {
  quizRootStatusKey,
  onSelectOptionKey,
  totalQuestionsKey,
  selectedOptionIdKey,
  showAnswerKey,
  correctOptionIdKey,
} from "@/injection-keys";

export type QuizRootProps = {
  questionId: string;
  correctOptionId: string;
  totalQuestions: number;
  selectedOption: SelectedOption;
  showAnswer: boolean;
};

const props = defineProps<QuizRootProps>();
const emit = defineEmits<{
  (e: "select:option", payload: SelectedOption): void;
}>();

/**
 * Computes the current status of the quiz root component.
 *
 * - Returns "default" if the answer should not be shown (`props.showAnswer` is false).
 * - Returns "success" if the selected option matches the correct option.
 * - Returns "error" if the selected option does not match the correct option.
 *
 * @returns {"default" | "success" | "error"} The status of the quiz root.
 */
const quizRootStatus = computed<"default" | "success" | "error">(() => {
  if (!props.showAnswer) return "default";
  return props.selectedOption.id === props.correctOptionId
    ? "success"
    : "error";
});

const onSelectOption = (optionId: string) => {
  emit("select:option", {
    questionId: props.questionId,
    id: optionId,
  });
};

/**
 * Provides the quiz root status and the option selection handler to descendant components
 * via Vue's dependency injection system.
 *
 * @provide {Symbol} quizRootStatusKey - Injection key for the quiz root status object.
 * @provide {Symbol} onSelectOptionKey - Injection key for the option selection handler function.
 */
provide(quizRootStatusKey, quizRootStatus);
provide(onSelectOptionKey, onSelectOption);
provide(totalQuestionsKey, props.totalQuestions);
provide(
  selectedOptionIdKey,
  computed(() => props.selectedOption?.id),
);
provide(
  showAnswerKey,
  computed(() => props.showAnswer),
);
provide(correctOptionIdKey, props.correctOptionId);
</script>

<style scoped></style>
