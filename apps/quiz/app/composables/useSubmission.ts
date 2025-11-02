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
  };

  return {
    submitQuiz,
    isInvalidSubmission,
    showResult,
    showValidationMessage,
  };
};
