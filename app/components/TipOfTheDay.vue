<script setup lang="ts">
import gsap from "gsap";

defineProps<{
  meta: Record<string, unknown>;
}>();

onMounted(() => {
  gsap.fromTo(
    ".vue-tip",
    {
      y: 40,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
  );
});
</script>

<template>
  <div v-if="meta" class="vue-tip">
    <v-box is="section" px="sp-4" py="sp-8" max-w="56rem" mx="auto">
      <v-box shadow="bs-xl" border="1px solid cl-border-light" radius="br-lg">
        <ContentRenderer
          :value="meta ?? {}"
          :data="{ tip: 'vue-tip' }"
          v-once
        />
      </v-box>
    </v-box>
  </div>
</template>
