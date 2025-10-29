import { useRouteQuery } from "@vueuse/router";

export const useFilters = () => {
  const { quiz, topics: allTopics } = useQuiz();

  // sync category filters with URL
  const categories = useRouteQuery<string[]>("categories", [], {
    route: useRoute(),
    router: useRouter(),
  });

  // sync difficulty filters with URL
  const difficulties = useRouteQuery<string[]>("difficulties", [], {
    route: useRoute(),
    router: useRouter(),
  });

  // sync topic filters with URL
  const topics = useRouteQuery<string[]>("topics", [], {
    route: useRoute(),
    router: useRouter(),
  });

  // derive topics based on category and difficulty filters
  const filteredTopics = computed(() => {
    const hasCategories = categories.value.length > 0;
    const hasDifficulties = difficulties.value.length > 0;

    // If no filters are applied, return all topics
    if (!hasCategories && !hasDifficulties) {
      return allTopics.value;
    }

    // Filter questions based on category and difficulty
    const filtered =
      quiz.value?.filter((q) => {
        const matchesCategory =
          !hasCategories || categories.value.includes(q.category);
        const matchesDifficulty =
          !hasDifficulties || difficulties.value.includes(q.difficulty);
        return matchesCategory && matchesDifficulty;
      }) ?? [];

    return Array.from(new Set(filtered.map((q) => q.topic)));
  });

  const filters = computed(() => {
    return {
      selectedCategories: categories.value,
      availableTopics: filteredTopics.value.sort((a, b) => a.localeCompare(b)),
      selectedTopics: topics.value,
      selectedDifficulties: difficulties.value,
    };
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
    type: "category" | "topic" | "difficulty",
    value: string,
  ) => {
    const filterMap = {
      category: categories,
      topic: topics,
      difficulty: difficulties,
    };
    toggleFilter(filterMap[type], value);
  };

  const clearFilters = () => {
    categories.value = [];
    topics.value = [];
    difficulties.value = [];
  };

  return {
    filters,
    updateFilters,
    clearFilters,
  };
};
