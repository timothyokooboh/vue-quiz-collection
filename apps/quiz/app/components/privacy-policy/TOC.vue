<template>
  <!-- Table of contents -->

  <v-box
    is="aside"
    w="100%"
    :lg="{
      w: '16rem',
      flexShrink: 0,
    }"
  >
    <v-box
      position="sticky"
      top="6rem"
      display="flex"
      flex-direction="column"
      gap="sp-4"
      radius="br-xl"
      border="1px solid #dbe6e0"
      bg="#fff"
      p="sp-5"
      shadow="bs-sm"
    >
      <v-box
        is="h3"
        display="flex"
        align-items="center"
        gap="sp-2"
        fw="fw-bold"
        color="#111814"
      >
        <span class="material-symbols-outlined">toc</span>
        Contents
      </v-box>

      <v-box is="nav" class="flex flex-col space-y-1">
        <v-box
          is="a"
          v-for="(content, index) in contents"
          :key="content.id"
          :href="`#${content.id}`"
          display="block"
          radius="br-lg"
          px="sp-3"
          py="sp-2"
          fs="fs-sm"
          fw="fw-medium"
          :bg="content.id === hashPath ? '#f0f4f2' : 'transparent'"
          :color="content.id === hashPath ? '#111814' : '#618975'"
          transition="color 0.2s ease-in-out, background 0.2s ease-in-out"
          :hover="{
            bg: '#f0f4f2',
            color: '#111814',
          }"
        >
          {{ index + 1 }}.
          <v-box is="span" text-transform="uppercase">{{
            content.label
          }}</v-box>
        </v-box>
        <!---
        <a
          class="text-primary bg-primary/10 block rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          href="#introduction"
          >1. Introduction</a
        >
        <a
          class="block rounded-lg px-3 py-2 text-sm font-medium text-[#618975] transition-colors hover:bg-[#f0f4f2] hover:text-[#111814] dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          href="#data-collection"
          >2. Data Collection</a
        >
        <a
          class="block rounded-lg px-3 py-2 text-sm font-medium text-[#618975] transition-colors hover:bg-[#f0f4f2] hover:text-[#111814] dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          href="#data-usage"
          >3. Data Usage</a
        >
        <a
          class="block rounded-lg px-3 py-2 text-sm font-medium text-[#618975] transition-colors hover:bg-[#f0f4f2] hover:text-[#111814] dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          href="#third-party"
          >4. Third-Party Services</a
        >
        <a
          class="block rounded-lg px-3 py-2 text-sm font-medium text-[#618975] transition-colors hover:bg-[#f0f4f2] hover:text-[#111814] dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          href="#user-rights"
          >5. User Rights</a
        >
        <a
          class="block rounded-lg px-3 py-2 text-sm font-medium text-[#618975] transition-colors hover:bg-[#f0f4f2] hover:text-[#111814] dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          href="#contact"
          >6. Contact Us</a
        > -->
      </v-box>
    </v-box>
  </v-box>
</template>

<script setup lang="ts">
const contents = [
  {
    label: "introduction",
    id: "introduction",
  },
  {
    label: "data collection",
    id: "data-collection",
  },
  {
    label: "data usage",
    id: "data-usage",
  },
  {
    label: "third-party services",
    id: "third-party-services",
  },
  {
    label: "user rights",
    id: "user-rights",
  },
  {
    label: "contact us",
    id: "contact-us",
  },
];

const route = useRoute();
const hashPath = ref("");

watchEffect(() => {
  const hash = route.hash;
  hashPath.value = hash.slice(1);
});
</script>
