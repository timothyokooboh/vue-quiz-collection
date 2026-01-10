<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import gsap from "gsap";
import { cn } from "~/lib/utils";

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
  <div class="bg-background flex flex-col gap-5 rounded-xl border p-4">
    <section class="flex items-center justify-between gap-2 border-b pb-3">
      <div>
        <h2 class="mb-1 font-medium">Filter Questions</h2>
        <p class="text-muted-foreground text-sm">
          Optionally apply filters to narrow down the questions
        </p>
      </div>

      <Button variant="ghost" class="cursor-pointer" @click="clearFilters">
        <Icon name="lucide:x" /> Clear all filters
      </Button>
    </section>

    <section>
      <h2 class="text-muted mb-2 text-sm font-bold uppercase tracking-wider">
        Categories
      </h2>
      <ul class="flex gap-2">
        <li v-for="category in categories" :key="category">
          <Button
            variant="outline"
            size="sm"
            class="cursor-pointer rounded-full border border-[#e5e7eb] text-sm"
            :class="
              cn(
                `border-[#e5e7eb], border bg-white ${selectedCategories.includes(category) && 'border-green-600 bg-green-300/10 text-green-600 hover:bg-green-300/20 hover:text-green-600'}`,
              )
            "
            @click="updateFilters('category', category)"
          >
            {{ category }}
          </Button>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-muted mb-2 text-sm font-bold uppercase tracking-wider">
        Difficulty
      </h2>
      <ul class="flex gap-2">
        <li v-for="difficulty in difficulties" :key="difficulty">
          <Button
            variant="outline"
            class="cursor-pointer rounded-full border border-[#e5e7eb] text-sm"
            :class="
              cn(
                `border-[#e5e7eb], border bg-white ${selectedDifficulties.includes(difficulty) && 'border-green-600 bg-green-300/10 text-green-600 hover:bg-green-300/20 hover:text-green-600'}`,
              )
            "
            size="sm"
            @click="updateFilters('difficulty', difficulty)"
          >
            {{ difficulty }}
          </Button>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-muted mb-2 text-sm font-bold uppercase tracking-wider">
        Topics
      </h2>
      <TransitionGroup name="list" tag="ul" class="flex flex-wrap gap-2">
        <li v-for="topic in availableTopics" :key="topic">
          <Button
            :variant="selectedTopics.includes(topic) ? 'default' : 'outline'"
            size="sm"
            class="cursor-pointer rounded-lg border border-[#e5e7eb] text-sm"
            :class="
              cn(
                `border-[#e5e7eb], border bg-white ${selectedTopics.includes(topic) && 'border-green-600 bg-green-300/10 text-green-600 hover:bg-green-300/20 hover:text-green-600'}`,
              )
            "
            @click="updateFilters('topic', topic)"
          >
            {{ topic }}
          </Button>
        </li>
      </TransitionGroup>
    </section>

    <div class="flex flex-col justify-between gap-3 sm:flex-row">
      <section>
        <h2 class="text-muted mb-2 text-sm font-bold uppercase tracking-wider">
          Mode
        </h2>
        <div
          class="mb-2 flex items-center space-x-2"
          aria-describedby="mode-description"
        >
          <Switch
            id="quiz-mode"
            :model-value="mode !== 'study'"
            @update:model-value="
              updateFilters('mode', $event ? 'quiz' : 'study')
            "
          />
          <Label for="quiz-mode" class="text-sm">Quiz Mode</Label>
        </div>

        <AppTransition id="mode-description" distance="10px">
          <p v-if="mode === 'study'" class="text-muted-foreground text-xs">
            Learn as you go. Get feedback and explanations after each question.
          </p>
          <p v-else class="text-muted-foreground text-xs">
            Complete all questions, then review your score and detailed answers.
          </p>
        </AppTransition>
      </section>

      <section
        class="w-full rounded-lg border border-dashed px-4 py-4 sm:max-w-[300px]"
      >
        <h2 class="text-muted mb-2 text-sm font-bold">Total questions found</h2>
        <p class="text-2xl font-bold md:text-3xl">
          {{ numberOfQuestions }}
        </p>
      </section>
    </div>
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
