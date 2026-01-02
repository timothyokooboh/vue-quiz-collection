<template>
  <v-box is="section" bg="cl-background-alt" px="sp-4" pb="5rem">
    <v-box mx="auto" max-w="48rem">
      <v-box
        is="h2"
        text-align="center"
        color="cl-text-main"
        mb="sp-10"
        fs="fs-3xl"
        fw="fw-bold"
      >
        Frequently Asked Questions
      </v-box>

      <v-box display="flex" flex-direction="column" gap="sp-4">
        <FaqSectionDetails>
          <template #title>
            <span>Is this updated for Vue 3 and Composition API?</span>
          </template>

          <template #description>
            <span>
              Yes! All our questions are reviewed to ensure they follow the
              latest best practices for Vue 3, including Script Setup syntax and
              the Composition API.
            </span>
          </template>
        </FaqSectionDetails>

        <FaqSectionDetails>
          <template #title>
            <span>Are Pinia and Vue Router included?</span>
          </template>

          <template #description>
            <span>
              Absolutely. We believe in testing the full ecosystem. You can
              filter quizzes specifically for state management (Pinia) or
              routing if you want to focus on those areas.
            </span>
          </template>
        </FaqSectionDetails>

        <FaqSectionDetails>
          <template #title>
            <span>Can I contribute a question?</span>
          </template>

          <template #description>
            <span
              >We love community contributions! You can submit a question via
              our GitHub repository. If accepted, you'll be credited on the
              question card.
            </span>
          </template>
        </FaqSectionDetails>
      </v-box>
    </v-box>
  </v-box>
</template>
