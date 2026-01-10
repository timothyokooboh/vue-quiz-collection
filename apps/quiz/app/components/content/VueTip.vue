<script lang="ts" setup>
import Button from "../ui/button/Button.vue";

withDefaults(
  defineProps<{
    type: string;
    reference: string;
    position?: number;
  }>(),
  {
    position: 1,
  },
);
</script>

<template>
  <v-box
    v-if="type === 'vue-tip'"
    display="grid"
    position="relative"
    :sm="{
      gridTemplateColumns: '1fr 1fr',
    }"
  >
    <v-box position="absolute" top="10px" left="15px" class="mb-4 flex gap-2">
      <v-box w="12px" h="12px" radius="br-full" bg="#ff5f56" />
      <v-box w="12px" h="12px" radius="br-full" bg="#ffbd2e" />
      <v-box w="12px" h="12px" radius="br-full" bg="#27c93f" />
    </v-box>

    <slot name="code" />

    <v-box
      py="sp-3"
      display="flex"
      flex-direction="column"
      color="cl-text-muted"
      fs="fs-base"
      px="1rem"
      lh="lh-loose"
    >
      <v-box pb="sp-2">
        <v-box
          display="flex"
          align-items="center"
          justify-content="space-between"
          mb="sp-3"
        >
          <v-box
            color="cl-primary-dark"
            bg="cl-slate-100"
            px="sp-4"
            py="sp-1"
            display="inline-block"
            w="fit-content"
            radius="br-md"
            fs="fs-sm"
            fw="fw-bold"
          >
            TIP #{{ position }}
          </v-box>
        </v-box>

        <slot name="text" />
      </v-box>

      <v-box
        mt="auto"
        display="flex"
        align-items="center"
        justify-content="space-between"
        fs="fs-sm"
        pt="1rem"
        border-top="1px solid cl-border-light"
        gap="0.7rem"
      >
        <slot name="tag" />

        <v-box
          as-child
          color="cl-primary"
          transition="color 0.2s ease-in-out"
          :hover="{
            color: 'cl-primary-dark',
          }"
        >
          <a :href="reference" target="_blank"> Documentation </a>
        </v-box>
      </v-box>
    </v-box>
  </v-box>
</template>
