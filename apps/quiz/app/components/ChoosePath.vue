<template>
  <!---
  <section class="bg-background-alt px-4 py-20">
    <div class="mx-auto max-w-[1100px]">
      <div class="mb-16 text-center">
        <h2 class="text-text-main mb-4 text-3xl font-bold md:text-4xl">
          Choose Your Path
        </h2>
        <p class="text-text-muted mx-auto max-w-lg">
          Whether you're prepping for an interview or just sharpening your
          skills, we have a mode for you.
        </p>
      </div>
      <div class="grid gap-8 md:grid-cols-2">
        <div
          class="border-border-light hover:border-primary group relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-colors hover:shadow-md"
        >
          <div
            class="absolute right-0 top-0 p-8 opacity-5 transition-opacity group-hover:opacity-10"
          >
            <span class="material-symbols-outlined text-[120px] text-slate-900"
              >timer</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="bg-primary/10 text-primary-dark mb-6 flex size-12 items-center justify-center rounded-lg"
            >
              <span class="material-symbols-outlined">timer</span>
            </div>
            <h3 class="text-text-main mb-3 text-2xl font-bold">Quiz Mode</h3>
            <p class="text-text-muted mb-6">
              Simulate a real test environment. Answer questions against the
              clock and get a performance score at the end.
            </p>
            <ul class="mb-8 space-y-3">
              <li class="flex items-center gap-3 text-sm text-slate-600">
                <span class="material-symbols-outlined text-primary text-[18px]"
                  >check_circle</span
                >
                Timed questions
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600">
                <span class="material-symbols-outlined text-primary text-[18px]"
                  >check_circle</span
                >
                Performance analytics
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600">
                <span class="material-symbols-outlined text-primary text-[18px]"
                  >check_circle</span
                >
                Global leaderboard
              </li>
            </ul>
            <button
              class="group-hover:bg-primary w-full rounded-lg bg-slate-100 py-3 font-bold text-slate-700 transition-colors group-hover:text-white"
            >
              Start a Quiz
            </button>
          </div>
        </div>
        <div
          class="border-border-light group relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-colors hover:border-emerald-600 hover:shadow-md"
        >
          <div
            class="absolute right-0 top-0 p-8 opacity-5 transition-opacity group-hover:opacity-10"
          >
            <span class="material-symbols-outlined text-[120px] text-slate-900"
              >menu_book</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="mb-6 flex size-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
            >
              <span class="material-symbols-outlined">menu_book</span>
            </div>
            <h3 class="text-text-main mb-3 text-2xl font-bold">Study Mode</h3>
            <p class="text-text-muted mb-6">
              Learn at your own pace. Get instant feedback and detailed
              explanations for every single question.
            </p>
            <ul class="mb-8 space-y-3">
              <li class="flex items-center gap-3 text-sm text-slate-600">
                <span
                  class="material-symbols-outlined text-[18px] text-emerald-500"
                  >check_circle</span
                >
                Instant feedback
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600">
                <span
                  class="material-symbols-outlined text-[18px] text-emerald-500"
                  >check_circle</span
                >
                Documentation links
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-600">
                <span
                  class="material-symbols-outlined text-[18px] text-emerald-500"
                  >check_circle</span
                >
                Save tricky questions
              </li>
            </ul>
            <button
              class="w-full rounded-lg bg-slate-100 py-3 font-bold text-slate-700 transition-colors group-hover:bg-emerald-500 group-hover:text-white"
            >
              Start Studying
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
-->
  <v-box is="section" bg="cl-background-alt" px="sp-4" py="5rem">
    <v-box mx="auto" max-w="68rem">
      <v-box mb="sp-16" text-align="center">
        <v-box
          is="h2"
          color="cl-text-main"
          mb="sp-4"
          fs="fs-3xl"
          fw="fw-bold"
          :md="{
            fs: 'fs-4xl',
          }"
        >
          Choose Your Path
        </v-box>

        <v-box is="p" color="cl-text-muted" mx="auto" max-w="32rem">
          Whether you're prepping for an interview or just sharpening your
          skills, we have a mode for you.
        </v-box>
      </v-box>

      <v-box
        display="grid"
        gap="sp-8"
        :md="{
          gridTemplateColumns: '1fr 1fr',
        }"
      >
        <ChoosePathCard
          icon="timer"
          title="Quiz Mode"
          description="Simulate a real test environment. Answer questions against the
              clock and get a performance score at the end."
          link="/quiz"
          cta="Start quiz"
          :list="[
            'Timed questions',
            'Performance analytics',
            'Global leaderboard',
          ]"
        />

        <ChoosePathCard
          icon="menu_book"
          title="Study Mode"
          description="Learn at your own pace. Get instant feedback and detailed
              explanations for every single question."
          link="/quiz?mode=study"
          cta="Start studying"
          :list="[
            'Instant feedback',
            'Documentation links',
            'Save tricky questions',
          ]"
        />
      </v-box>
    </v-box>
  </v-box>
</template>
