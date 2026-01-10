<template>
  <div
    class="inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm"
    :class="
      cn(
        'bg-green-50 text-green-600',
        isLessThan15MinutesRemaining && 'bg-red-50 text-red-600',
      )
    "
    role="timer"
    aria-live="polite"
  >
    <Icon name="lucide:alarm-clock" />
    <span class="font-semibold tabular-nums">{{ formatted }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps<{
  minutes: number;
}>();

const emits = defineEmits(["done"]);

const remainingSeconds = ref(0);
let timer: number | undefined;

const start = () => {
  clear();
  remainingSeconds.value = Math.max(0, Math.floor(props.minutes * 60));

  timer = window.setInterval(() => {
    if (remainingSeconds.value <= 0) {
      clear();
      emits("done");
      return;
    }
    remainingSeconds.value--;
  }, 1000);
};

const clear = () => {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
};

const formatted = computed(() => {
  const total = remainingSeconds.value;
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
});

const isLessThan15MinutesRemaining = computed(() => {
  if (!remainingSeconds.value) return true;

  return remainingSeconds.value < 15 * 60;
});

onMounted(start);
onUnmounted(clear);

watch(() => props.minutes, start);

defineExpose({ clear });
</script>
