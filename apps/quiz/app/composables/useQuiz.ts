import { computed } from "vue";

export const useQuiz = async () => {
  const { data: quiz } = await useAsyncData("quiz", () => {
    return queryCollection("quiz").all();
  });

  const categories = computed(() => {
    return quiz.value?.map((q) => q.category);
  });

  const topics = computed(() => {
    return quiz.value?.map((q) => q.topic);
  });

  const difficulties = computed(() => {
    return quiz.value?.map((q) => q.difficulty);
  });

  return {
    quiz,
    categories,
    topics,
    difficulties,
  };
};
