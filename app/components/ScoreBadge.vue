<template>
  <div>
    <Badge :variant="rank?.variant ?? 'default'">
      {{ rank?.label }}
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import type { BadgeVariants } from "@/components/ui/badge";

const props = defineProps<{ percentageScore: number }>();

const rankMap: {
  [key: number]: {
    variant: BadgeVariants["variant"];
    label: string;
  };
} = {
  0: {
    variant: "destructive",
    label: "Newbie",
  },
  60: {
    variant: "secondary",
    label: "Mid-level",
  },
  80: {
    variant: "default",
    label: "Expert",
  },
};

const rank = computed(() => {
  // ensure ascending order: [0, 60, 80]
  const thresholds = Object.keys(rankMap)
    .map(Number)
    .sort((a, b) => a - b);

  // last match (highest threshold not exceeding the score)
  const matchedThreshold = thresholds
    .filter((t) => props.percentageScore >= t)
    .at(-1);

  return matchedThreshold !== undefined
    ? rankMap[matchedThreshold]
    : rankMap[0];
});
</script>
