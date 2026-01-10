<script lang="ts" setup>
const route = useRoute();
</script>

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

      <NuxtLink
        to="/vue-tips"
        class="text-muted hover:text-brand font-medium duration-200"
      >
        Vue.js Tips
      </NuxtLink>

      <v-box display="flex" align-items="center" gap="sp-4">
        <v-box
          display="none"
          :sm="{
            display: 'block',
          }"
        >
          <AppButton v-if="route.meta.showStartQuiz" as-child size="sm">
            <NuxtLink to="/quiz?mode=quiz">Start Quiz</NuxtLink>
          </AppButton>
        </v-box>

        <v-box as-child mt="5px" color="cl-slate-400">
          <a
            href="https://github.com/timothyokooboh/vue-quiz-collection"
            target="_blank"
          >
            <Icon name="mdi:github" size="24" />
          </a>
        </v-box>
      </v-box>
    </v-box>
  </v-box>
</template>
