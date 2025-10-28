<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";
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
        <Button variant="ghost" class="cursor-pointer">
          <Icon name="lucide:x" /> Clear all</Button
        >
      </div>

      <section class="mb-5">
        <h2 class="mb-3 text-sm font-bold">Categories</h2>
        <ul class="flex gap-2">
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Vue.js
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Vue router </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Pinia
            </Button>
          </li>
        </ul>
      </section>

      <section class="mb-5">
        <h2 class="mb-3 text-sm font-bold">Topics</h2>
        <ul class="flex flex-wrap gap-2">
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Vue.js
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Vue router </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Pinia
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Vue.js
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Vue router </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Pinia
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Vue.js
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Vue router </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Pinia
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Vue.js
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Vue router </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Pinia
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Vue.js
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Vue router </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Pinia
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Vue.js
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Vue router </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Pinia
            </Button>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="mb-3 text-sm font-bold">Difficulty</h2>
        <ul class="flex gap-2">
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Easy
            </Button>
          </li>
          <li>
            <Button size="sm" class="rounded-full text-xs"> Medium </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" class="rounded-full text-xs">
              Hard
            </Button>
          </li>
        </ul>
      </section>
    </CollapsibleContent>
  </Collapsible>
</template>

<style scoped></style>
