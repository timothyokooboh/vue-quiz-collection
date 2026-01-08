<template>
  <div>
    <v-box is="section" px="sp-4" py="sp-8" max-w="56rem" mx="auto">
      <v-box shadow="bs-xl" border="1px solid cl-border-light" radius="br-lg">
        <ContentRenderer
          :value="filteredQuiz[index]?.meta ?? {}"
          :data="{ tip: 'vue-tip' }"
        />
      </v-box>
    </v-box>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    index?: number;
  }>(),
  {
    index: 0,
  },
);

const { filteredQuiz } = useFilters();
</script>
