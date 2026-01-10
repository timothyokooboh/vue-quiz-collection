<script lang="ts" setup>
import { keyframes } from "@veebox/core";
import gsap from "gsap";

const pulse = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
});

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.2 });

  tl.fromTo(
    ".hero-title",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
  )
    .fromTo(
      ".hero-subtitle",
      {
        y: 40,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6",
    )
    .fromTo(
      ".hero-cta",
      {
        y: 30,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4",
    )
    .fromTo(
      ".hero-stack-prefixes",
      {
        y: 20,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
      "-=0.2",
    );
});
</script>

<template>
  <v-box
    is="section"
    position="relative"
    min-h="600px"
    display="flex"
    align-items="center"
    justify-content="center"
    px="sp-4"
    py="sp-16"
  >
    <v-box
      position="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
      z-index="0"
      overflow="hidden"
      pointer-events="none"
    >
      <v-box
        position="absolute"
        top="-20%"
        right="-20%"
        w="37.5rem"
        h="27.5rem"
        radius="br-full"
        bg="rgba(16,185,129,0.1)"
        filter="blur(120px)"
      />
      <v-box
        position="absolute"
        top="40%"
        left="-10%"
        w="25rem"
        h="25rem"
        radius="br-full"
        bg="rgba(94, 233, 181, 0.2)"
        filter="blur(100px)"
      />
    </v-box>

    <v-box
      position="relative"
      z-index="10"
      max-w="56rem"
      mx="auto"
      text-align="center"
      display="flex"
      flex-direction="column"
      align-items="center"
      gap="sp-6"
    >
      <v-box
        display="inline-flex"
        align-items="center"
        gap="sp-2"
        px="sp-3"
        py="sp-1"
        radius="br-full"
        bg="#ffffff"
        border="1px solid cl-border-light"
        color="cl-primary-dark"
        fs="fs-xs"
        fw="fw-bold"
        text-transform="uppercase"
        ls="ls-wider"
        shadow="bs-sm"
      >
        <v-box
          is="span"
          radius="br-full"
          bg="cl-primary"
          w="0.5rem"
          h="0.5rem"
          :animation="`${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`"
        />

        Test your Skills
      </v-box>

      <v-box
        is="h1"
        class="hero-title"
        fs="3rem"
        lh="lh-tight"
        ls="ls-tight"
        fw="fw-bold"
        color="transparent"
        background-clip="text"
        bg-image="linear-gradient(to bottom right, #0f172a, #334155, #64748b)"
        :md="{
          fs: '4.5rem',
        }"
      >
        Master the Vue.js Ecosystem.
      </v-box>

      <v-box
        as-child
        class="hero-subtitle"
        color="cl-text-muted"
        fs="fs-lg"
        fw="fw-light"
        max-w="42rem"
        :md="{
          fs: 'fs-xl',
        }"
      >
        <p>
          Deepen your understanding of Vue, Pinia, and Vue Router through
          curated quizzes and interactive study modes.
        </p>
      </v-box>

      <v-box
        class="hero-cta"
        display="flex"
        flex-direction="column-reverse"
        gap="sp-4"
        mt="sp-6"
        w="100%"
        :sm="{
          flexDirection: 'row',
          width: 'auto',
        }"
      >
        <AppButton as-child>
          <NuxtLink to="/quiz?mode=quiz">
            <v-box is="span" fs="1.25rem" class="material-symbols-outlined">
              play_arrow
            </v-box>
            <v-box is="span">Start Quiz</v-box>
          </NuxtLink>
        </AppButton>

        <v-box
          as-child
          h="3rem"
          px="sp-8"
          radius="br-lg"
          bg="#fff"
          color="cl-slate-700"
          fw="fw-bold"
          fs="fs-base"
          display="flex"
          align-items="center"
          justify-content="center"
          gap="sp-2"
          shadow="bs-sm"
          border="1px solid cl-border-light"
          transition="background 0.2s ease-in-out"
          :hover="{
            bg: 'cl-slate-50',
          }"
        >
          <NuxtLink to="/quiz?mode=study">
            <v-box is="span" fs="1.25rem" class="material-symbols-outlined">
              school
            </v-box>
            <v-box is="span">Study Mode</v-box>
          </NuxtLink>
        </v-box>
      </v-box>

      <v-box
        class="hero-stack-prefixes"
        mt="sp-12"
        display="flex"
        align-items="center"
        gap="sp-6"
        opacity="0.8"
        transition="opacity 0.5s ease-in-out"
        :hover="{
          opacity: 1,
        }"
      >
        <v-box
          display="flex"
          flex-direction="column"
          align-items="center"
          gap="sp-2"
        >
          <v-box
            h="2.5rem"
            w="2.5rem"
            bg="#fff"
            radius="br-md"
            display="flex"
            align-items="center"
            justify-content="center"
            border="1px solid cl-border-light"
            shadow="bs-sm"
            title="Vue.js"
          >
            <v-box is="span" color="#42b883" fw="fw-bold">V</v-box>
          </v-box>
        </v-box>

        <v-box
          display="flex"
          flex-direction="column"
          align-items="center"
          gap="sp-2"
        >
          <v-box
            h="2.5rem"
            w="2.5rem"
            bg="#fff"
            radius="br-md"
            display="flex"
            align-items="center"
            justify-content="center"
            border="1px solid cl-border-light"
            shadow="bs-sm"
            title="Vue Router"
          >
            <v-box is="span" color="#ffd859" fw="fw-bold">R</v-box>
          </v-box>
        </v-box>

        <v-box
          display="flex"
          flex-direction="column"
          align-items="center"
          gap="sp-2"
        >
          <v-box
            h="2.5rem"
            w="2.5rem"
            bg="#fff"
            radius="br-md"
            display="flex"
            align-items="center"
            justify-content="center"
            border="1px solid cl-border-light"
            shadow="bs-sm"
            title="Pinia"
          >
            <v-box is="span" color=" #42b883" fw="fw-bold">p</v-box>
          </v-box>
        </v-box>
      </v-box>
    </v-box>
  </v-box>
</template>
