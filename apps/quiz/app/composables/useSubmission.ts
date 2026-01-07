import type { SelectedOption } from "~/types";

export const useSubmission = (selectedOptions: Ref<SelectedOption[]>) => {
  const { filteredQuiz } = useFilters();
  const showResult = ref(false);

  const totalCorrectAnswers = computed(
    () =>
      selectedOptions.value.filter(
        (s) => s.selectedOptionId === s.correctOptionId,
      ).length,
  );

  const percentageScore = computed(() => {
    return parseInt(
      ((totalCorrectAnswers.value / filteredQuiz.value.length) * 100).toFixed(
        2,
      ),
    );
  });

  const hasAnsweredAllQuestions = computed(
    () => selectedOptions.value.length === filteredQuiz.value.length,
  );

  const submitQuiz = async () => {
    showResult.value = true;
    await nextTick();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    submitQuiz,
    hasAnsweredAllQuestions,
    showResult,
    totalCorrectAnswers,
    percentageScore,
  };
};
