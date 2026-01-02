<template>
  <v-box
    is="nav"
    position="fixed"
    top="0"
    w="100%"
    z-index="50"
    border="1px solid cl-border-light"
    border-bottom="1px solid cl-gray-200"
    bg="rgba(255, 255, 255, 0.85)"
    backdrop-filter="blur(12px)"
    :declarations="{
      '-webkit-backdrop-filter': 'blur(12px)',
    }"
  >
    <v-box
      max-w="80rem"
      mx="auto"
      px="sp-4"
      py="sp-3"
      display="flex"
      align-items="center"
      justify-content="space-between"
      :sm="{
        px: 'sp-8',
      }"
    >
      <TradeMark />

      <v-box display="flex" align-items="center" gap="sp-4">
        <v-box
          as-child
          bg="cl-emerald-500"
          shadow="bs-sm"
          radius="br-lg"
          color="#fff"
          fs="fs-sm"
          fw="fw-bold"
          display="flex"
          align-items="center"
          h="2.2rem"
          px="sp-5"
          transition="background 0.2s ease-in-out, color 0.2s ease-in-out, scale 0.2s ease-in-out"
          :hover="{
            bg: 'cl-primary-dark',
          }"
          :active="{
            scale: 0.95,
          }"
          :sm="{
            height: '2.5rem',
          }"
        >
          <NuxtLink to="/quiz">Start Quiz</NuxtLink>
        </v-box>

        <v-box as-child mt="5px" color="cl-slate-400">
          <a href="#">
            <Icon name="mdi:github" size="24" />
          </a>
        </v-box>
      </v-box>
    </v-box>
  </v-box>
</template>
