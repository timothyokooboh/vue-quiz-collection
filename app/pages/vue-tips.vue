<script setup lang="ts">
import gsap from "gsap";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import TipOfTheDay from "~/components/TipOfTheDay.vue";

definePageMeta({
  showStartQuiz: true,
  keepalive: true,
});

const { filteredQuiz } = useFilters();

const currentPage = ref(1);
const total = computed(() => filteredQuiz.value.length);
const perPage = 5;
const paginationResult = computed(() =>
  filteredQuiz.value.slice(
    perPage * (currentPage.value - 1),
    perPage * currentPage.value
  )
);

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.fromTo(
    ".vue-tips-title",
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  ).fromTo(
    ".vue-tips-subtitle",
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6"
  );
});
</script>

<template>
  <main class="py-5">
    <section class="text-center">
      <h1
        class="vue-tips-title mb-4 text-balance text-center text-3xl font-bold sm:text-5xl"
      >
        <span class="text-gray-900">Master Vue.js: </span>
        <span class="text-brand"> {{ total }} Pro Tips </span>
      </h1>

      <h2
        class="vue-tips-subtitle px-2 mx-auto max-w-2xl text-pretty text-base sm:text-lg text-gray-600"
      >
        Level up your Vue.js skills with these bite-sized, actionable tips
        covering Vue 3, Composition API, Pinia, and Vue Router.
      </h2>
    </section>

    <div class="flex flex-col gap-6 mt-8">
      <Pagination
        v-slot="{ page }"
        :items-per-page="perPage"
        :total="total"
        @update:page="currentPage = $event"
      >
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
            >
              {{ item.value }}
            </PaginationItem>
          </template>
          <PaginationEllipsis :index="4" />
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    </div>

    <TipOfTheDay
      v-for="item in paginationResult"
      :key="item.id"
      :meta="item.meta"
    />
  </main>
</template>
