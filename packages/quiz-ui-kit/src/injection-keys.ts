import type { Ref, InjectionKey } from "vue";

export const quizRootStatusKey: InjectionKey<
  Ref<"default" | "success" | "error">
> = Symbol("quizRootStatus");

export const onSelectOptionKey: InjectionKey<(optionId: string) => void> =
  Symbol("onSelectOption");

export const totalQuestionsKey: InjectionKey<number> = Symbol("totalQuestions");

export const selectedOptionIdKey: InjectionKey<Ref<string | null>> =
  Symbol("selectedOptionId");

export const showAnswerKey: InjectionKey<Ref<boolean>> = Symbol("showAnswer");

export const correctOptionIdKey: InjectionKey<string> =
  Symbol("correctOptionId");
