<template>
  <main class="py-5">
    <section class="text-center">
      <h1 class="mb-4 text-balance text-center text-4xl font-bold sm:text-5xl">
        <span class="text-gray-900">Master Vue.js: </span>
        <span class="text-brand"> {{ filteredQuiz.length }} Pro Tips </span>
      </h1>

      <p class="mx-auto max-w-2xl text-pretty text-lg text-gray-600">
        Level up your Vue.js skills with these bite-sized, actionable tips
        covering Vue 3, Composition API, Pinia, and Vue Router.
      </p>
    </section>

    <DynamicScroller class="" :items="filteredQuiz" :min-item-size="50">
      <template #default="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :data-index="index"
          :size-dependencies="[item.meta]"
        >
          <TipOfTheDay :key="item.id" :index />
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </main>
</template>

<script setup lang="ts">
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";

import TipOfTheDay from "~/components/TipOfTheDay.vue";

definePageMeta({
  showStartQuiz: true,
});

const { filteredQuiz } = useFilters();
</script>
