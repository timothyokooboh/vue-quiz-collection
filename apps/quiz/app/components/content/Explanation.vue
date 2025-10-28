<template>
  <div v-if="type === 'explanation'" class="text-black">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  type: string;
}>();
</script>
