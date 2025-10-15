<template>
  <div
    class="quiz-feedback rounded-md border p-3"
    :data-quiz-root-status="quizRootStatus"
  >
    <div v-if="quizRootStatus === 'success'" class="flex items-center gap-2">
      <div
        class="border-1 flex h-5 w-5 items-center justify-center rounded-full border-green-700"
      >
        <Check class="h-3 w-3 text-green-700" />
      </div>
      <span class="font-bold text-green-700">Correct!</span>
    </div>

    <div v-else-if="quizRootStatus === 'error'" class="flex items-center gap-2">
      <div
        class="border-1 flex h-5 w-5 items-center justify-center rounded-full border-red-500"
      >
        <X class="h-3 w-3 text-red-500" />
      </div>
      <span class="font-bold text-red-500">Incorrect!</span>
    </div>

    <div class="mt-3">
      <div class="text-sm">
        <span class="mr-1 font-bold">Explanation:</span>
        <span>{{ explanation }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { quizRootStatusKey } from "@/injection-keys";
import { Check, X } from "lucide-vue-next";

defineProps<{
  explanation: string;
}>();

const quizRootStatus = inject(quizRootStatusKey);
</script>

<style lang="scss" scoped>
.quiz-feedback {
  &[data-quiz-root-status="success"] {
    border-color: var(--color-green-500);
    background-color: #e6f6f1;
  }

  &[data-quiz-root-status="error"] {
    border-color: var(--destructive-foreground);
    background-color: #ffedec;
  }
}
</style>
