<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import gsap from "gsap";

const { categories, difficulties } = useQuiz();
const {
  mode,
  selectedCategories,
  selectedDifficulties,
  selectedTopics,
  availableTopics,
  updateFilters,
  clearFilters,
  filteredQuiz,
} = useFilters();

const numberOfQuestions = ref(0);

watchEffect(() => {
  gsap.to(numberOfQuestions, {
    value: filteredQuiz.value.length,
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      numberOfQuestions.value = Math.floor(numberOfQuestions.value);
    },
  });
});
</script>

<template>
  <div class="bg-background rounded-xl border p-4">
    <div class="mb-5 flex items-center justify-between gap-2">
      <p class="text-muted-foreground text-sm">
        Optionally apply filters to narrow down the questions
      </p>
      <Button variant="ghost" class="cursor-pointer" @click="clearFilters">
        <Icon name="lucide:x" /> Clear all</Button
      >
    </div>

    <section class="mb-5">
      <h2 class="mb-2 text-sm font-bold">Categories</h2>
      <ul class="flex gap-2">
        <li v-for="category in categories" :key="category">
          <Button
            :variant="
              selectedCategories.includes(category) ? 'default' : 'outline'
            "
            size="sm"
            class="cursor-pointer rounded-full text-xs"
            @click="updateFilters('category', category)"
          >
            {{ category }}
          </Button>
        </li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 class="mb-2 text-sm font-bold">Difficulty</h2>
      <ul class="flex gap-2">
        <li v-for="difficulty in difficulties" :key="difficulty">
          <Button
            :variant="
              selectedDifficulties.includes(difficulty) ? 'default' : 'outline'
            "
            size="sm"
            class="cursor-pointer rounded-full text-xs"
            @click="updateFilters('difficulty', difficulty)"
          >
            {{ difficulty }}
          </Button>
        </li>
      </ul>
    </section>

    <section class="mb-5">
      <h2 class="mb-2 text-sm font-bold">Topics</h2>
      <TransitionGroup name="list" tag="ul" class="flex flex-wrap gap-2">
        <li v-for="topic in availableTopics" :key="topic">
          <Button
            :variant="selectedTopics.includes(topic) ? 'default' : 'outline'"
            size="sm"
            class="cursor-pointer rounded-full text-xs"
            @click="updateFilters('topic', topic)"
          >
            {{ topic }}
          </Button>
        </li>
      </TransitionGroup>
    </section>

    <section class="mb-5">
      <h2 class="mb-2 text-sm font-bold">Mode</h2>
      <div
        class="mb-2 flex items-center space-x-2"
        aria-describedby="mode-description"
      >
        <Switch
          id="quiz-mode"
          :model-value="mode !== 'study'"
          @update:model-value="updateFilters('mode', $event ? 'quiz' : 'study')"
        />
        <Label for="quiz-mode" class="text-sm">Quiz Mode</Label>
      </div>

      <AppTransition distance="10px">
        <p
          v-if="mode === 'study'"
          id="mode-description"
          class="text-muted-foreground text-xs"
        >
          Learn as you go. Get feedback and explanations after each question.
        </p>
        <p v-else id="mode-description" class="text-muted-foreground text-xs">
          Complete all questions, then review your score and detailed answers.
        </p>
      </AppTransition>
    </section>

    <section class="border-t pt-5">
      <h2 class="mb-2 text-sm font-bold">Total questions</h2>
      <p class="text-2xl font-bold md:text-3xl">
        {{ numberOfQuestions }}
      </p>
    </section>
  </div>
</template>

<style scoped>
/* https://vuejs.org/guide/built-ins/transition-group.html#move-transitions */

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
