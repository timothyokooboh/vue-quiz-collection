<script setup lang="ts">
import type { ProgressRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ProgressIndicator, ProgressRoot } from "reka-ui";
import { cn } from "@/lib/utils";

export type ProgressTheme = {
  rootBgColor?: string;
  indicatorBgColor?: string;
};

const props = withDefaults(
  defineProps<
    ProgressRootProps & {
      class?: HTMLAttributes["class"];
      theme?: ProgressTheme;
    }
  >(),
  {
    modelValue: 0,
  },
);

const delegatedProps = reactiveOmit(props, "class");

const progressRootBg = computed(
  () =>
    props.theme?.rootBgColor ??
    "color-mix(in oklab, var(--primary) 20%, transparent)",
);

const progressIndicatorBg = computed(
  () => props.theme?.indicatorBgColor ?? "var(--primary)",
);
</script>

<template>
  <ProgressRoot
    data-slot="progress"
    v-bind="delegatedProps"
    :class="cn('relative h-2 w-full overflow-hidden rounded-full', props.class)"
  >
    <ProgressIndicator
      data-slot="progress-indicator"
      class="h-full w-full flex-1 transition-all"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>

<style scoped>
[data-slot="progress"] {
  background-color: v-bind(progressRootBg);
}

[data-slot="progress-indicator"] {
  background-color: v-bind(progressIndicatorBg);
}
</style>
