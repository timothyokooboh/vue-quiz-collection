<script lang="ts" setup>
import ChoosePathCard from "./ChoosePathCard.vue";
</script>
<template>
  <v-box is="section" bg="cl-background-alt" px="sp-4" py="5rem">
    <v-box mx="auto" max-w="68rem">
      <v-box mb="sp-16" text-align="center">
        <v-box
          is="h2"
          color="cl-text-main"
          mb="sp-4"
          fs="fs-3xl"
          fw="fw-bold"
          :md="{
            fs: 'fs-4xl',
          }"
        >
          Choose Your Path
        </v-box>

        <v-box is="p" color="cl-text-muted" mx="auto" max-w="32rem">
          Whether you're prepping for an interview or just sharpening your
          skills, we have a mode for you.
        </v-box>
      </v-box>

      <v-box
        display="grid"
        gap="sp-8"
        :md="{
          gridTemplateColumns: '1fr 1fr',
        }"
      >
        <ChoosePathCard
          icon="timer"
          title="Quiz Mode"
          description="Simulate a real test environment. Answer questions against the
              clock and get a performance score at the end."
          link="/quiz"
          cta="Start quiz"
          :list="[
            'Timed questions',
             'Documentation links',
        
          ]"
        />

        <ChoosePathCard
          icon="menu_book"
          title="Study Mode"
          description="Learn at your own pace. Get instant feedback and detailed
              explanations for every single question."
          link="/quiz?mode=study"
          cta="Start studying"
          :list="[
            'Instant feedback',
            'Documentation links',
          ]"
        />
      </v-box>
    </v-box>
  </v-box>
</template>
