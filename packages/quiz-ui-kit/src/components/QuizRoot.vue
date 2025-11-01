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
  showAnswerKey,
  correctOptionIdKey,
} from "@/injection-keys";

export type QuizRootProps = {
  questionId: string;
  correctOptionId: string;
  totalQuestions: number;
  //selectedOption: SelectedOption;
  showAnswer: boolean;
};

const props = defineProps<QuizRootProps>();
const emit = defineEmits<{
  (e: "select:option", payload: SelectedOption): void;
}>();

const selectedOption = ref<SelectedOption | null>(null);

const quizRootStatus = computed<"default" | "success" | "error">(() => {
  if (!props.showAnswer) return "default";
  return selectedOption.value?.id === props.correctOptionId
    ? "success"
    : "error";
});

console.log("rerender");

const onSelectOption = (optionId: string) => {
  selectedOption.value = {
    questionId: props.questionId,
    id: optionId,
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
  computed(() => selectedOption.value?.id ?? null),
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
