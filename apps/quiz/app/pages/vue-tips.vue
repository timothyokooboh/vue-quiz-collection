<template>
  <DynamicScroller class="" :items="filteredQuiz" :min-item-size="100">
    <template #default="{ item, index, active }">
      <DynamicScrollerItem :item="item" :active="active" :data-index="index">
        <TipOfTheDay :key="item._id" :index />
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>

<script setup lang="ts">
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";

const { filteredQuiz } = useFilters();
</script>
