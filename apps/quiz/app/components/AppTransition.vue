<template>
  <transition :name="`slide-from-${from}`" mode="out-in" appear>
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    from?: "bottom" | "top" | "left" | "right";
    // duration in seconds
    duration?: number;
    // delay in seconds
    delay?: number;
    distance?: `${number}${"px" | "rem" | "em" | "%" | "vh" | "vw"}`;
  }>(),
  {
    from: "bottom",
    duration: 0.2,
    delay: 0, // in seconds
    distance: "30px",
  },
);

const duration = computed(() => `${props.duration}s`);
const delay = computed(() => `${props.delay}s`);
const distance = computed(() => {
  if (props.from === "left" || props.from === "top") {
    return `-${props.distance}`;
  }
  return props.distance;
});
</script>

<style lang="scss">
// slide from top
.slide-from-top-enter-from,
.slide-from-top-enter,
.slide-from-top-leave-to {
  opacity: 0;
  transform: translateY(v-bind(distance));
}

.slide-from-top-enter-to,
.slide-from-top-leave-from,
.slide-from-top-leave {
  opacity: 1;
  transform: translateY(0);
}

.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: all v-bind(duration) ease-out v-bind(delay);
}

// slide from bottom
.slide-from-bottom-enter-from,
.slide-from-bottom-enter,
.slide-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(v-bind(distance));
}

.slide-from-bottom-enter-to,
.slide-from-bottom-leave-from,
.slide-from-bottom-leave {
  opacity: 1;
  transform: translateY(0);
}

.slide-from-bottom-enter-active,
.slide-from-bottom-leave-active {
  transition: all v-bind(duration) ease-out v-bind(delay);
}

// slide from left
.slide-from-left-enter-from,
.slide-from-left-enter,
.slide-from-left-leave-to {
  opacity: 0;
  transform: translateX(v-bind(distance));
}

.slide-from-left-enter-to,
.slide-from-left-leave-from,
.slide-from-left-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-from-left-enter-active,
.slide-from-left-leave-active {
  transition: all v-bind(duration) ease-out v-bind(delay);
}

// slide from right
.slide-from-right-enter-from,
.slide-from-right-enter,
.slide-from-right-leave-to {
  opacity: 0;
  transform: translateX(v-bind(distance));
}

.slide-from-right-enter-to,
.slide-from-right-leave-from,
.slide-from-right-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-from-right-enter-active,
.slide-from-right-leave-active {
  transition: all v-bind(duration) ease-out v-bind(delay);
}
</style>
