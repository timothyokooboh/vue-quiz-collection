<template>
  <v-box
    is="section"
    position="relative"
    overflow="hidden"
    bg="#ffffff"
    px="sp-4"
    py="6rem"
  >
    <v-box
      bg="rgba(16,185,129,0.05)"
      position="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
      z-index="0"
    />

    <v-box
      bg="rgba(16,185,129,0.10)"
      pointer-events="none"
      position="absolute"
      bottom="0"
      left="50%"
      h="18.75rem"
      w="50rem"
      transform="translateX(-50%)"
      radius="br-full"
      filter="blur(100px)"
    />

    <v-box
      position="relative"
      z-index="10"
      mx="auto"
      max-w="56rem"
      text-align="center"
      display="flex"
      flex-direction="column"
      align-items="center"
    >
      <v-box
        is="h2"
        color="cl-text-main"
        mb="sp-6"
        fs="fs-4xl"
        fw="fw-bold"
        :md="{
          fs: '3rem',
        }"
      >
        Ready to test your knowledge?
      </v-box>

      <v-box
        is="p"
        color="cl-text-muted"
        mx="auto"
        mb="sp-10"
        max-w="36rem"
        fs="fs-lg"
      >
        Join thousands of developers leveling up their Vue.js skills today.
      </v-box>

      <v-box
        as-child
        display="flex"
        align-items="center"
        justify-content="center"
        w="fit-content"
        bg="cl-primary"
        h="3.5rem"
        radius="0.75rem"
        px="sp-10"
        fs="fs-lg"
        fw="fw-bold"
        color="#ffffff"
        shadow="0 10px 30px rgba(16,185,129,0.3)"
        transition="background 0.2s ease-in-out, scale 0.2s ease-in-out"
        :hover="{
          bg: 'cl-primary-dark',
          scale: 1.05,
        }"
        :active="{
          scale: 0.95,
        }"
      >
        <NuxtLink to="/quiz"> Start Your Quiz </NuxtLink>
      </v-box>
    </v-box>
  </v-box>
</template>
