import type { ComputedRef, InjectionKey } from "vue";
import type { SelectedOption } from "@/App.vue";

export const quizRootStatusKey: InjectionKey<
  ComputedRef<"default" | "success" | "error">
> = Symbol("quizRootStatus");

export const onSelectOptionKey: InjectionKey<(optionId: string) => void> =
  Symbol("onSelectOption");

export const totalQuestionsKey: InjectionKey<ComputedRef<number>> =
  Symbol("totalQuestions");

export const selectedOptionIdKey: InjectionKey<
  ComputedRef<SelectedOption["id"]>
> = Symbol("selectedOptionId");

export const showResultKey: InjectionKey<ComputedRef<boolean>> =
  Symbol("showResult");

export const correctOptionIdKey: InjectionKey<ComputedRef<string>> =
  Symbol("correctOptionId");
