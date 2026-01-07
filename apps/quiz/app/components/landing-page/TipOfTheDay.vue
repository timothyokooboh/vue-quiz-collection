<template>
  <div>
    <v-box is="section" px="sp-4" py="sp-8" max-w="56rem" mx="auto">
      <v-box
        mb="sp-6"
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

      <v-box shadow="bs-xl" border="1px solid cl-border-light" radius="br-lg">
        <ContentRenderer
          v-if="filteredQuiz && filteredQuiz.length > 0"
          :value="filteredQuiz[0]?.meta ?? {}"
          :data="{ tip: 'vue-tip' }"
        />
      </v-box>
    </v-box>
  </div>
</template>

<script setup lang="ts">
const { filteredQuiz } = useFilters();
</script>
