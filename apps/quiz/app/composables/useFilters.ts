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

  const filters = computed<{
    selectedCategories: string[];
    availableTopics: string[];
    selectedDifficulties: string[];
    selectedTopics: string[];
  }>(() => {
    return {
      selectedCategories: categories.value,
      availableTopics: filteredTopics.value,
      selectedTopics: topics.value,
      selectedDifficulties: difficulties.value,
    };
  });

  const toggleCategory = (filterValue: string) => {
    if (categories.value.includes(filterValue)) {
      categories.value = categories.value.filter(
        (filter) => filter !== filterValue,
      );
    } else {
      categories.value = [...categories.value, filterValue];
    }
  };

  const toggleTopic = (filterValue: string) => {
    if (topics.value.includes(filterValue)) {
      topics.value = topics.value.filter((filter) => filter !== filterValue);
    } else {
      topics.value = [...topics.value, filterValue];
    }
  };

  const toggleDifficulty = (filterValue: string) => {
    if (difficulties.value.includes(filterValue)) {
      difficulties.value = difficulties.value.filter(
        (filter) => filter !== filterValue,
      );
    } else {
      difficulties.value = [...difficulties.value, filterValue];
    }
  };

  const updateFilters = (
    type: "category" | "topic" | "difficulty",
    value: string,
  ) => {
    switch (type) {
      case "category":
        toggleCategory(value);
        break;
      case "topic":
        toggleTopic(value);
        break;
      case "difficulty":
        toggleDifficulty(value);
        break;
      default:
        break;
    }
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
