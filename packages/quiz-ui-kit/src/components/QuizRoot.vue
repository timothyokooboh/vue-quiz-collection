<template>
  <Card class="px-4">
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

provide(quizRootStatusKey, quizRootStatus);
provide(onSelectOptionKey, onSelectOption);
provide(
  totalQuestionsKey,
  computed(() => props.totalQuestions),
);
provide(
  selectedOptionIdKey,
  computed(() => props.selectedOption?.id),
);
provide(
  showAnswerKey,
  computed(() => props.showAnswer),
);
provide(
  correctOptionIdKey,
  computed(() => props.correctOptionId),
);
</script>

<style scoped></style>
