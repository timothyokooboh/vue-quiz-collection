<template>
  <v-box as-child display="flex" align-items="center" gap="sp-3">
    <NuxtLink to="/">
      <v-box
        w="2rem"
        h="2rem"
        radius="br-sm"
        display="flex"
        align-items="center"
        justify-content="center"
        bg="rgba(16,185,129,0.1)"
        color="cl-primary-dark"
      >
        <span class="material-symbols-outlined">data_object</span>
      </v-box>

      <v-box
        is="h1"
        color="cl-text-muted"
        fs="fs-base"
        fw="fw-bold"
        ls="ls-tight"
        :sm="{
          fs: 'fs-xl',
        }"
      >
        VueDrill
      </v-box>
    </NuxtLink>
  </v-box>
</template>
