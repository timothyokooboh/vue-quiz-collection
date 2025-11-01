import { useRouteQuery } from "@vueuse/router";

export const useFilters = () => {
  const { quiz, topics: allTopics } = useQuiz();
  const routeQueryOptions = {
    route: useRoute(),
    router: useRouter(),
    transform: (value: string | string[]) => {
      return typeof value === "string" ? [value] : value;
    },
  };

  // sync category filters with URL
  const selectedCategories = useRouteQuery<string[]>(
    "categories",
    [],
    routeQueryOptions,
  );

  // sync difficulty filters with URL
  const selectedDifficulties = useRouteQuery<string[]>(
    "difficulties",
    [],
    routeQueryOptions,
  );

  // sync topic filters with URL
  const selectedTopics = useRouteQuery<string[]>(
    "topics",
    [],
    routeQueryOptions,
  );

  // sync mode with URL
  const mode = useRouteQuery<string>("mode", "quiz");
  const updateMode = (value: string) => {
    mode.value = value;
  };

  // derive topics based on category and difficulty filters
  const filteredTopics = computed(() => {
    const hasCategories = selectedCategories.value.length > 0;
    const hasDifficulties = selectedDifficulties.value.length > 0;

    // If no filters are applied, return all topics
    if (!hasCategories && !hasDifficulties) {
      return allTopics.value;
    }

    // Filter questions based on category and difficulty
    const filtered =
      quiz.value?.filter((q) => {
        const matchesCategory =
          !hasCategories || selectedCategories.value.includes(q.category);
        const matchesDifficulty =
          !hasDifficulties || selectedDifficulties.value.includes(q.difficulty);
        return matchesCategory && matchesDifficulty;
      }) ?? [];

    return Array.from(new Set(filtered.map((q) => q.topic)));
  });

  const availableTopics = computed(() => {
    return [...filteredTopics.value].sort((a, b) => a.localeCompare(b));
  });

  watch(availableTopics, (newValue) => {
    selectedTopics.value.forEach((topic, index) => {
      if (!newValue.includes(topic)) {
        selectedTopics.value.splice(index, 1);
      }
    });
  });

  const toggleFilter = (filterArray: Ref<string[]>, filterValue: string) => {
    const index = filterArray.value.indexOf(filterValue);
    if (index > -1) {
      filterArray.value = filterArray.value.filter(
        (filter) => filter !== filterValue,
      );
    } else {
      filterArray.value = [...filterArray.value, filterValue];
    }
  };

  const updateFilters = (
    type: "category" | "topic" | "difficulty" | "mode",
    value: string,
  ) => {
    const filterMap = {
      category: selectedCategories,
      topic: selectedTopics,
      difficulty: selectedDifficulties,
    };

    if (type === "mode") {
      updateMode(value);
    } else {
      toggleFilter(filterMap[type], value);
    }
  };

  const clearFilters = () => {
    selectedCategories.value = [];
    selectedTopics.value = [];
    selectedDifficulties.value = [];
    updateMode("quiz");
  };

  return {
    mode,
    selectedCategories,
    selectedDifficulties,
    selectedTopics,
    availableTopics,
    updateFilters,
    clearFilters,
  };
};
