<template>
  <Card class="px-4">
    <slot />
  </Card>
</template>

<script setup lang="ts">
import { ref, computed, provide } from "vue";
import { Card } from "@/components/ui/card";
import type { SelectedOption } from "@/components/QuizOption.vue";
import {
  quizRootStatusKey,
  onSelectOptionKey,
  totalQuestionsKey,
  selectedOptionIdKey,
  showResultKey,
  correctOptionIdKey,
} from "@/injection-keys";

export type QuizRootProps = {
  questionId: string;
  correctOptionId: string;
  totalQuestions: number;
  showResult: boolean;
};

const props = defineProps<QuizRootProps>();
const emit = defineEmits<{
  (
    e: "select:option",
    payload: SelectedOption & { correctOptionId: string },
  ): void;
}>();

const selectedOption = ref<
  (SelectedOption & { correctOptionId: string }) | null
>(null);

const quizRootStatus = computed<"default" | "success" | "error">(() => {
  if (!props.showResult) return "default";
  return selectedOption.value?.selectedOptionId === props.correctOptionId
    ? "success"
    : "error";
});

const onSelectOption = (optionId: string) => {
  selectedOption.value = {
    questionId: props.questionId,
    selectedOptionId: optionId,
    correctOptionId: props.correctOptionId,
  };

  emit("select:option", selectedOption.value);
};

provide(quizRootStatusKey, quizRootStatus);
provide(onSelectOptionKey, onSelectOption);
provide(
  totalQuestionsKey,
  computed(() => props.totalQuestions),
);
provide(
  selectedOptionIdKey,
  computed(() => selectedOption.value?.selectedOptionId ?? null),
);
provide(
  showResultKey,
  computed(() => props.showResult),
);
provide(
  correctOptionIdKey,
  computed(() => props.correctOptionId),
);

defineExpose({
  selectedOption,
});
</script>

<style scoped></style>
