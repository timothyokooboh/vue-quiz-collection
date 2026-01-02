<template>
  <v-box
    border="1px solid cl-border-light"
    position="relative"
    overflow="hidden"
    radius="1rem"
    bg="#FFF"
    p="sp-8"
    transition="border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
    shadow="bs-sm"
    :hover="{
      borderColor: 'cl-primary',
      shadow: 'bs-md',
      '[data-scope=timer-wrapper]': {
        opacity: 0.1,
      },
      '[data-scope=start-quiz-btn]': {
        background: 'cl-primary',
        color: '#ffffff',
      },
    }"
  >
    <v-box
      data-scope="timer-wrapper"
      position="absolute"
      right="0"
      top="0"
      p="sp-8"
      opacity="0.05"
      transition="opacity 0.2s ease-in-out"
    >
      <v-box
        is="span"
        color="cl-slate-900"
        fs="7.5rem"
        class="material-symbols-outlined"
      >
        {{ icon }}
      </v-box>
    </v-box>

    <v-box position="relative" z-index="10">
      <v-box
        bg="rgba(16,185,129,0.1)"
        color="cl-primary-dark"
        mb="sp-6"
        display="flex"
        align-items="center"
        justify-content="center"
        w="3rem"
        h="3rem"
        radius="br-lg"
      >
        <span class="material-symbols-outlined">{{ icon }}</span>
      </v-box>

      <v-box is="h3" color="cl-text-main" mb="sp-3" fs="fs-2xl" fw="fw-bold">
        {{ title }}
      </v-box>

      <v-box is="p" color="cl-text-muted" mb="sp-6">
        {{ description }}
      </v-box>
    </v-box>

    <v-box is="ul" display="flex" flex-direction="column" gap="sp-3" mb="sp-8 ">
      <v-box
        is="li"
        v-for="item in list"
        :key="item"
        display="flex"
        align-items="center"
        gap="sp-3"
        fs="fs-sm"
        color="cl-slate-600"
      >
        <v-box
          is="span"
          color="cl-primary"
          fs="1.125rem"
          class="material-symbols-outlined"
        >
          check_circle
        </v-box>
        <span>{{ item }}</span>
      </v-box>
    </v-box>

    <v-box
      as-child
      display="block"
      text-align="center"
      data-scope="start-quiz-btn"
      w="100%"
      radius="br-lg"
      bg="cl-slate-100"
      py="sp-3"
      fw="fw-bold"
      color="cl-slate-700"
      transition="color 0.2s ease-in-out, background 0.2s ease-in-out"
    >
      <NuxtLink :to="link"> {{ cta }} </NuxtLink>
    </v-box>
  </v-box>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
  list: string[];
  link: string;
  cta: string;
}>();
</script>
