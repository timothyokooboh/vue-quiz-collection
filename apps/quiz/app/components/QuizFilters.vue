<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";

const { categories, difficulties } = useQuiz();
const { filters, updateFilters, clearFilters } = useFilters();
</script>

<template>
  <Collapsible class="rounded-md border">
    <CollapsibleTrigger
      class="justify-baseline flex w-full cursor-pointer items-center px-4 py-2"
    >
      <h2 class="text-base font-bold md:text-lg">Filters</h2>

      <Icon name="lucide:chevrons-up-down" class="ml-auto h-4 w-4" />
    </CollapsibleTrigger>
    <CollapsibleContent class="border-t px-4 pb-4 pt-2">
      <div class="flex justify-end">
        <Button variant="ghost" class="cursor-pointer" @click="clearFilters">
          <Icon name="lucide:x" /> Clear all</Button
        >
      </div>

      <section class="mb-5">
        <h2 class="mb-3 text-sm font-bold">Categories</h2>
        <ul class="flex gap-2">
          <li v-for="category in categories" :key="category">
            <Button
              :variant="
                filters.selectedCategories.includes(category)
                  ? 'default'
                  : 'outline'
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
        <h2 class="mb-3 text-sm font-bold">Difficulty</h2>
        <ul class="flex gap-2">
          <li v-for="difficulty in difficulties" :key="difficulty">
            <Button
              :variant="
                filters.selectedDifficulties.includes(difficulty)
                  ? 'default'
                  : 'outline'
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

      <section>
        <h2 class="mb-3 text-sm font-bold">Topics</h2>
        <TransitionGroup name="list" tag="ul" class="flex flex-wrap gap-2">
          <li v-for="topic in filters.availableTopics" :key="topic">
            <Button
              :variant="
                filters.selectedTopics.includes(topic) ? 'default' : 'outline'
              "
              size="sm"
              class="cursor-pointer rounded-full text-xs"
              @click="updateFilters('topic', topic)"
            >
              {{ topic }}
            </Button>
          </li>
        </TransitionGroup>
      </section>
    </CollapsibleContent>
  </Collapsible>
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
