<template>
  <v-box
    is="button"
    radius="br-lg"
    bg="cl-primary"
    cursor="pointer"
    color="#fff"
    fw="fw-bold"
    display="flex"
    align-items="center"
    justify-content="center"
    gap="sp-2"
    shadow="bs-sm"
    v-bind="dynamicStyles()"
    transition="background 0.2s ease-in-out, scale 0.2s ease-in-out"
    :hover="{
      bg: 'cl-primary-dark',
      scale: 1.05,
    }"
    :active="{
      scale: 0.95,
    }"
  >
    <slot />
  </v-box>
</template>

<script setup lang="ts">
import type { VBoxStyleProps } from "@veebox/core";

const props = withDefaults(
  defineProps<{
    size?: "sm" | "md";
  }>(),
  {
    size: "md",
  },
);

const dynamicStyles = (): VBoxStyleProps => {
  if (props.size === "sm")
    return {
      fs: "fs-sm",
      px: "sp-6",
      py: "sp-2",
    };

  return {
    fs: "fs-base",
    px: "sp-8",
    py: "sp-3",
  };
};
</script>
