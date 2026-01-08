<script lang="ts" setup>
import HeroSection from "~/components/landing-page/HeroSection.vue";
import TipOfTheDay from "~/components/TipOfTheDay.vue";
import ChoosePath from "~/components/landing-page/ChoosePath.vue";
import FaqSection from "~/components/landing-page/FaqSection.vue";
import CtaSection from "~/components/landing-page/CtaSection.vue";
import TheFooter from "~/components/TheFooter.vue";
const { filteredQuiz } = useFilters();

definePageMeta({
  showStartQuiz: true,
});

const randomIndex = computed(() =>
  Array.isArray(filteredQuiz.value)
    ? Math.floor(Math.random() * filteredQuiz.value.length)
    : 0,
);
</script>

<template>
  <main>
    <HeroSection />
    <section>
      <v-box
        mb="sp-6"
        display="flex"
        align-items="center"
        justify-content="center"
        gap="sp-3"
      >
        <v-box
          is="span"
          class="material-symbols-outlined"
          color="cl-primary-dark"
        >
          lightbulb
        </v-box>

        <v-box is="h2" color="cl-text-main" fs="fs-2xl" fw="fw-bold">
          Vue.js Tip
        </v-box>
      </v-box>

      <TipOfTheDay :index="randomIndex" />
    </section>
    <ChoosePath />
    <FaqSection />
    <CtaSection />
    <TheFooter />
  </main>
</template>
