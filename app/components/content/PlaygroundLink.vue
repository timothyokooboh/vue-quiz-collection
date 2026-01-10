<template>
  <a :href="href" target="_blank" class="mkd-link text-sm underline"
    >Try it out in Vue Playground</a
  >
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>

<style scoped></style>
