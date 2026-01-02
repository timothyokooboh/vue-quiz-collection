import type { ShallowRef } from "vue";
import type { SelectedOption } from "~/pages/quiz.vue";

type ValidationMessageRef = Readonly<ShallowRef<HTMLParagraphElement[] | null>>;

export const useSubmission = (
  validationMessageRef: ValidationMessageRef,
  selectedOptions: Ref<SelectedOption[]>,
) => {
  const { filteredQuiz } = useFilters();
  const showResult = ref(false);
  const isInvalidSubmission = ref(false);

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

  const scrollToFirstQuestionWithoutAnswer = () => {
    if (!validationMessageRef.value) return;
    validationMessageRef.value[0]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const showValidationMessage = (questionId: string) => {
    const hasNoAnswer =
      selectedOptions.value.find((s) => s.questionId === questionId) ===
      undefined;

    return isInvalidSubmission.value && hasNoAnswer;
  };

  const submitQuiz = async () => {
    if (selectedOptions.value.length !== filteredQuiz.value.length) {
      isInvalidSubmission.value = true;
      await nextTick();
      scrollToFirstQuestionWithoutAnswer();
      return;
    }

    showResult.value = true;
    await nextTick();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    submitQuiz,
    isInvalidSubmission,
    showResult,
    showValidationMessage,
    totalCorrectAnswers,
    percentageScore,
  };
};
