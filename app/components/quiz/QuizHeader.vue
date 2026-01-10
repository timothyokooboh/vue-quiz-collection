<template>
  <section class="text-sm">
    <div class="mb-4 flex flex-col gap-3 md:flex-row md:items-center">
      <div>
        <span>Question {{ questionNumber }} of {{ totalQuestions }}</span>
      </div>

      <ul class="flex items-center gap-2">
        <li v-for="tag in tags" :key="tag">
          <Badge variant="secondary" class="capitalize">{{ tag }}</Badge>
        </li>
      </ul>
    </div>

    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { totalQuestionsKey } from "@/injection-keys";
import { inject } from "vue";
import Badge from "@/components/ui/badge/Badge.vue";

export type QuizHeaderProps = {
  tags: string[];
  questionNumber: number;
};

defineProps<QuizHeaderProps>();

const totalQuestions = inject(totalQuestionsKey);
</script>

<style scoped></style>
