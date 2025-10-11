<script setup lang="ts">
import QuizCompletionProgress from "./components/QuizCompletionProgress.vue";
</script>

<template>
  <div class="mx-auto mt-10 max-w-[600px]">
    <img src="" alt="" />
    <QuizCompletionProgress
      :current-question-index="49"
      :total-questions="100"
      :theme="{
        progressIndicatorBg: '#33B279',
        progressRootBg: '#EEF6F3',
      }"
    />
  </div>
</template>

<style scoped></style>
