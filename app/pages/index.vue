<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "~/components/landing-page/HeroSection.vue";
import TipOfTheDay from "~/components/TipOfTheDay.vue";
import ChoosePath from "~/components/landing-page/ChoosePath.vue";
import FaqSection from "~/components/landing-page/FaqSection.vue";
import CtaSection from "~/components/landing-page/CtaSection.vue";
import TheFooter from "~/components/TheFooter.vue";

definePageMeta({
  showStartQuiz: true,
});

const { filteredQuiz } = useFilters();
const randomIndex = computed(() =>
  Array.isArray(filteredQuiz.value)
    ? Math.floor(Math.random() * filteredQuiz.value.length)
    : 0,
);

gsap.registerPlugin(ScrollTrigger);
const vueTipSectionRef = useTemplateRef("vue-tip-section-ref");
const vueTipRef = useTemplateRef("vue-tip-ref");

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 });

  tl.fromTo(
    ".vuejs-tip-title",
    {
      y: 15,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: vueTipSectionRef.value,
        start: "top 80%",
        end: "bottom: 20%",
      },
      ease: "power3.out",
    },
    "-=0.15",
  );

  gsap.to(vueTipRef.value, {
    y: -10,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
  });
});
</script>

<template>
  <main>
    <HeroSection />
    <section ref="vue-tip-section-ref">
      <v-box
        class="vuejs-tip-title"
        mt="sp-5"
        mb="sp-4"
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

      <div ref="vue-tip-ref">
        <TipOfTheDay :index="randomIndex" />
      </div>
    </section>
    <ChoosePath />
    <FaqSection />
    <CtaSection />
    <TheFooter />
  </main>
</template>
