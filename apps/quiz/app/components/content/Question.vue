<template>
  <div v-if="type === 'question'">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: string;
}>();
</script>
