<template>
  <div class="text-sm">
    <div class="mb-4 flex items-center gap-3">
      <div>
        <span>Question {{ questionNumber }} of {{ totalQuestions }}</span>
      </div>

      <ul class="flex items-center gap-2">
        <li v-for="tag in tags" :key="tag">
          <Badge variant="secondary">{{ tag }}</Badge>
        </li>
      </ul>
    </div>

    <p class="text-base font-bold md:text-lg">{{ question }}</p>
  </div>
</template>

<script setup lang="ts">
import { totalQuestionsKey } from "@/injection-keys";
import { inject } from "vue";
import Badge from "./ui/badge/Badge.vue";

defineProps<{
  tags: string[];
  questionNumber: number;
  question: string;
}>();

const totalQuestions = inject(totalQuestionsKey);
</script>

<style scoped></style>
