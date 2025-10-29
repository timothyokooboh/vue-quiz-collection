import { ref, computed } from "vue";

export const useQuiz = () => {
  const { data: quiz } = useAsyncData("quiz", () => {
    return queryCollection("quiz").all();
  });

  const categories = ref(["Vue.js", "Vue router", "Pinia"]);

  const difficulties = ref(["Easy", "Medium", "Hard"]);

  const topics = computed(() => {
    return Array.from(
      new Set(quiz.value?.map((question) => question.topic) ?? []),
    );
  });

  return {
    quiz,
    categories,
    topics,
    difficulties,
  };
};
