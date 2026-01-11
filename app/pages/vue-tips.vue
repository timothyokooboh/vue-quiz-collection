<script setup lang="ts">
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import gsap from 'gsap'

import TipOfTheDay from "~/components/TipOfTheDay.vue";

definePageMeta({
  showStartQuiz: true,
});

const { filteredQuiz } = useFilters();

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })

  tl.fromTo('.vue-tips-title', {
    y: 60, opacity: 0
  }, {
    y: 0, opacity: 1, duration: 1, ease: 'power3.out'
  }).fromTo('.vue-tips-subtitle', {
    y: 40, opacity: 0
  }, {
    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
  }, '-=0.6')

})
</script>

<template>
  <main class="py-5">
    <section class="text-center">
      <h1 class="vue-tips-title mb-4 text-balance text-center text-4xl font-bold sm:text-5xl">
        <span class="text-gray-900">Master Vue.js: </span>
        <span class="text-brand"> {{ filteredQuiz.length }} Pro Tips </span>
      </h1>

      <h2 class="vue-tips-subtitle mx-auto max-w-2xl text-pretty text-lg text-gray-600">
        Level up your Vue.js skills with these bite-sized, actionable tips
        covering Vue 3, Composition API, Pinia, and Vue Router.
      </h2>
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


