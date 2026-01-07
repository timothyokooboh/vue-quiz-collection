<template>
  <v-box
    is="details"
    border="1px solid cl-border-light"
    radius="br-lg"
    bg="#ffffff"
    shadow="bs-sm"
    :hover="{
      '[data-scope=expand-more]': {
        color: 'cl-primary',
      },
    }"
    :declarations="{
      '&[open]': {
        borderColor: 'rgba(16,185,129,0.5)',
      },
      '&[open] [data-scope=expand-more]': {
        rotate: '180deg',
      },
    }"
  >
    <v-box
      is="summary"
      color="cl-text-main"
      display="flex"
      align-items="start"
      justify-content="space-between"
      cursor="pointer"
      list-style="none"
      p="sp-6"
      fw="fw-medium"
    >
      <slot name="title" />

      <v-box
        is="span"
        data-scope="expand-more"
        color="cl-slate-400"
        class="material-symbols-outlined"
        transition="color 0.2s ease-in-out, rotate 0.2s ease-in-out"
      >
        expand_more
      </v-box>
    </v-box>

    <v-box color="cl-text-muted" px="sp-6" pb="sp-6" fs="fs-sm" lh="lh-relaxed">
      <slot name="description" />
    </v-box>
  </v-box>
</template>
