<script lang="ts" setup>
import HeroSection from "~/components/landing-page/HeroSection.vue";
import TipOfTheDay from "~/components/landing-page/TipOfTheDay.vue";
import ChoosePath from "~/components/landing-page/ChoosePath.vue";
import FaqSection from "~/components/landing-page/FaqSection.vue";
import CtaSection from "~/components/landing-page/CtaSection.vue";
import TheFooter from "~/components/TheFooter.vue";

definePageMeta({
  showStartQuiz: true,
});
</script>

<template>
  <main>
    <HeroSection />
    <TipOfTheDay />
    <ChoosePath />
    <FaqSection />
    <CtaSection />
    <TheFooter />
  </main>
</template>
