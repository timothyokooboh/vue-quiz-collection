import type { SelectedOption } from "~/types";

export const useSubmission = (selectedOptions: Ref<SelectedOption[]>) => {
  const { filteredQuiz } = useFilters();
  const showResult = ref(false);

  const totalCorrectAnswers = computed(
    () =>
      selectedOptions.value.filter(
        (s) => s.selectedOptionId === s.correctOptionId
      ).length
  );

  const percentageScore = computed(() => {
    return parseInt(
      ((totalCorrectAnswers.value / filteredQuiz.value.length) * 100).toFixed(2)
    );
  });

  const questionsWithoutAnswers = ref<number[]>([]);

  watchEffect(() => {
    if (selectedOptions.value.length === 0) {
      questionsWithoutAnswers.value = filteredQuiz.value.map(
        (question, index) => index + 1
      );
      return;
    }

    questionsWithoutAnswers.value = [];

     for (let i = 0; i < filteredQuiz.value.length; i++) {
      const currentQuestion = filteredQuiz.value[i];
      if (
        selectedOptions.value.find((s) => s.questionId === currentQuestion?.id)
      ) {
        questionsWithoutAnswers.value = questionsWithoutAnswers.value.filter((pos) => pos - 1 !== i);
      } else {
        questionsWithoutAnswers.value.push(i + 1);
      }
    }
  });


  const hasAnsweredAllQuestions = computed(
    () => questionsWithoutAnswers.value.length === 0
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
    questionsWithoutAnswers,
  };
};
