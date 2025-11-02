import type { ShallowRef } from "vue";
import type { SelectedOption } from "~/pages/quiz.vue";

type ValidationMessageRef = Readonly<ShallowRef<HTMLParagraphElement[] | null>>;

export const useSubmission = (
  validationMessageRef: ValidationMessageRef,
  selectedOptions: Ref<SelectedOption[]>,
) => {
  const { filteredQuiz } = useFilters();
  const showAnswer = ref(false);
  const isInvalidSubmission = ref(false);

  const scrollToFirstInvalidQuestion = () => {
    if (!validationMessageRef.value) return;
    validationMessageRef.value[0]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const showValidationMessage = (questionId: string) => {
    const hasNoSelectedOption =
      selectedOptions.value.find((s) => s.questionId === questionId) ===
      undefined;

    return isInvalidSubmission.value && hasNoSelectedOption;
  };

  const submitQuiz = async () => {
    if (selectedOptions.value.length !== filteredQuiz.value.length) {
      isInvalidSubmission.value = true;
      await nextTick();
      scrollToFirstInvalidQuestion();
      return;
    }

    showAnswer.value = true;
  };

  return {
    submitQuiz,
    isInvalidSubmission,
    showAnswer,
    showValidationMessage,
  };
};
