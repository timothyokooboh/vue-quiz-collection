<script setup lang="ts">
import TOC from "~/components/privacy-policy/TOC.vue";
definePageMeta({
  showStartQuiz: true,
});
</script>

<template>
  <div>
    <v-box
      is="main"
      display="flex"
      flex-grow="1"
      flex-direction="column"
      align-items="center"
      px="sp-4"
      py="sp-10"
      :sm="{
        px: 'sp-6',
      }"
      :lg="{
        px: 'sp-6',
      }"
    >
      <v-box
        w="100%"
        max-w="60rem"
        display="flex"
        flex-direction="column"
        gap="sp-12"
      >
        <!-- Page Heading & Meta -->
        <v-box
          display="flex"
          flex-direction="column"
          gap="sp-6"
          text-align="center"
          :md="{
            textAlign: 'left',
          }"
        >
          <v-box display="flex" flex-direction="column" gap="sp-3">
            <v-box
              w="fit-content"
              border="1px solid border-light"
              bg="rgba(16,185,129,0.1)"
              color="cl-primary-dark"
              display="inline-flex"
              align-items="center"
              gap="sp-2"
              radius="br-full"
              py="sp-1"
              px="sp-2"
              fs="fs-xs"
              fw="fw-semi-bold"
            >
              <v-box fs="fs-base" class="material-symbols-outlined">
                verified_user
              </v-box>
              Effective Date: January 1st, 2026
            </v-box>

            <v-box
              is="h1"
              fs="fs-4xl"
              fw="fw-black"
              lh="lh-tight"
              ls="ls-tight"
              color="#111814"
              :sm="{
                fs: 'fs-5xl',
              }"
            >
              Privacy Policy
            </v-box>
            <v-box is="p" max-w="42rem" fs="fs-lg" color="cl-text-muted">
              We value your trust. Here's how we handle your data while you
              master Vue.js, Vue Router, and Pinia.
            </v-box>
          </v-box>
        </v-box>

        <!-- Main Content Area: Sidebar + Content -->
        <v-box
          display="flex"
          flex-direction="column"
          gap="sp-12"
          :lg="{
            flexDirection: 'row',
            alignItems: 'start',
          }"
        >
          <!-- Table of Contents (Sidebar) -->
          <TOC />
          <!-- Policy Text Content -->
          <v-box
            flex-grow="1"
            display="flex"
            flex-direction="column"
            gap="sp-12"
          >
            <!-- Section 1 -->
            <v-box is="section" id="introduction" scroll-margin-top="6rem">
              <v-box mb="sp-4" display="flex" align-items="center" gap="sp-3">
                <v-box
                  bg="rgba(16,185,129,0.1)"
                  color="cl-primary"
                  display="flex"
                  align-items="center"
                  justify-content="center"
                  radius="br-lg"
                  h="2.5rem"
                  w="2.5rem"
                >
                  <span class="material-symbols-outlined">info</span>
                </v-box>

                <v-box is="h2" fs="fs-2xl" fw="fw-bold" color="#111814">
                  1. Introduction
                </v-box>
              </v-box>

              <v-box
                color="cl-text-muted"
                dislay="flex"
                flex-direction="column"
                gap="sp-4"
              >
                <p>
                  Welcome to the Vue.js Quiz App. We are committed to protecting
                  your personal information and your right to privacy. This
                  policy outlines how we handle your data when you use our
                  educational platform designed to help developers master the
                  Vue ecosystem.
                </p>
                <p>
                  By using our services, specifically our Quiz and Study modes
                  covering Vue.js, Vue Router, and Pinia, you agree to the
                  collection and use of information in accordance with this
                  policy.
                </p>
              </v-box>
            </v-box>

            <v-box is="hr" border="1px solid #f0f4f2" />
            <!-- Section 2 -->
            <v-box is="section" id="data-collection" scroll-margin-top="6rem">
              <v-box mb="sp-4" display="flex" align-items="center" gap="sp-3">
                <v-box
                  bg="rgba(16,185,129,0.1)"
                  display="flex"
                  align-items="center"
                  justify-content="center"
                  radius="br-lg"
                  h="2.5rem"
                  w="2.5rem"
                >
                  <span class="material-symbols-outlined">database</span>
                </v-box>

                <v-box is="h2" fs="fs-2xl" fw="fw-bold" color="#111814">
                  2. Data Collection
                </v-box>
              </v-box>

              <v-box
                color="cl-text-muted"
                display="flex"
                flex-direction="column"
                gap="sp-4"
              >
                <p>
                  We collect minimal data necessary to provide a personalized
                  learning experience:
                </p>
                <v-box
                  is="ul"
                  list-style="none"
                  display="flex"
                  flex-direction="column"
                  gap="sp-3"
                  pl="sp-0"
                >
                  <v-box
                    is="li"
                    display="flex"
                    align-items="flex-star"
                    gap="sp-3"
                    radius="br-lg"
                    bg="#f9fafb"
                    p="sp-3"
                  >
                    <v-box
                      is="span"
                      color="cl-primary"
                      mt="-2px"
                      class="material-symbols-outlined"
                    >
                      check_circle
                    </v-box>
                    <span>
                      <strong>Account Information:</strong>
                      When you sign up, we collect your email address and
                      username to create your profile.</span
                    >
                  </v-box>
                  <v-box
                    is="li"
                    display="flex"
                    align-items="flex-star"
                    gap="sp-3"
                    radius="br-lg"
                    bg="#f9fafb"
                    p="sp-3"
                  >
                    <v-box
                      is="span"
                      color="cl-primary"
                      mt="-2px"
                      class="material-symbols-outlined"
                      >check_circle</v-box
                    >
                    <span
                      ><strong>Progress Data:</strong> We track your quiz
                      scores, completion times, and study streaks to generate
                      progress reports and identify areas for improvement in Vue
                      concepts.</span
                    >
                  </v-box>
                  <v-box
                    is="li"
                    display="flex"
                    align-items="flex-star"
                    gap="sp-3"
                    radius="br-lg"
                    bg="#f9fafb"
                    p="sp-3"
                  >
                    <v-box
                      is="span"
                      color="cl-primary"
                      mt="-2px"
                      class="material-symbols-outlined"
                      >check_circle</v-box
                    >
                    <span
                      ><strong>Technical Data:</strong> We use cookies to
                      maintain your session and preferences (e.g., dark mode
                      settings).</span
                    >
                  </v-box>
                </v-box>
              </v-box>
            </v-box>

            <hr class="border-[#f0f4f2] dark:border-white/10" />
            <!-- Section 3 -->
            <section id="data-usage" class="scroll-mt-24">
              <div class="mb-4 flex items-center gap-3">
                <div
                  class="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-lg"
                >
                  <span class="material-symbols-outlined">bar_chart</span>
                </div>
                <h2 class="text-2xl font-bold text-[#111814] dark:text-white">
                  3. Data Usage
                </h2>
              </div>
              <div class="text-[#618975] dark:text-gray-300">
                <p class="mb-4">
                  Your data powers the core features of the Vue.js Quiz App:
                </p>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div
                    class="rounded-xl border border-[#dbe6e0] p-4 dark:border-white/10"
                  >
                    <h4 class="mb-2 font-bold text-[#111814] dark:text-white">
                      Personalization
                    </h4>
                    <p class="text-sm">
                      Tailoring quiz difficulty based on your past performance.
                    </p>
                  </div>
                  <div
                    class="rounded-xl border border-[#dbe6e0] p-4 dark:border-white/10"
                  >
                    <h4 class="mb-2 font-bold text-[#111814] dark:text-white">
                      Analytics
                    </h4>
                    <p class="text-sm">
                      Understanding which Vue documentation topics are most
                      challenging for users.
                    </p>
                  </div>
                  <div
                    class="rounded-xl border border-[#dbe6e0] p-4 dark:border-white/10"
                  >
                    <h4 class="mb-2 font-bold text-[#111814] dark:text-white">
                      Communication
                    </h4>
                    <p class="text-sm">
                      Sending important updates about the platform or your
                      account status.
                    </p>
                  </div>
                  <div
                    class="rounded-xl border border-[#dbe6e0] p-4 dark:border-white/10"
                  >
                    <h4 class="mb-2 font-bold text-[#111814] dark:text-white">
                      Security
                    </h4>
                    <p class="text-sm">
                      Detecting and preventing fraudulent activity or abuse.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <hr class="border-[#f0f4f2] dark:border-white/10" />
            <!-- Section 4 -->
            <section id="third-party-services" class="scroll-mt-24">
              <div class="mb-4 flex items-center gap-3">
                <div
                  class="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-lg"
                >
                  <span class="material-symbols-outlined">cloud</span>
                </div>
                <h2 class="text-2xl font-bold text-[#111814] dark:text-white">
                  4. Third-Party Services
                </h2>
              </div>
              <p class="mb-4 text-[#618975] dark:text-gray-300">
                We may employ third-party companies and individuals to
                facilitate our Service ("Service Providers"), to provide the
                Service on our behalf, to perform Service-related services or to
                assist us in analyzing how our Service is used.
              </p>
              <div
                class="rounded-lg bg-[#f0f4f2] p-4 text-sm text-[#618975] dark:bg-white/5 dark:text-gray-300"
              >
                <p>
                  <strong>Note:</strong> These third parties have access to your
                  Personal Data only to perform these tasks on our behalf and
                  are obligated not to disclose or use it for any other purpose.
                </p>
              </div>
            </section>
            <hr class="border-[#f0f4f2] dark:border-white/10" />
            <!-- Section 5 -->
            <section id="user-rights" class="scroll-mt-24">
              <div class="mb-4 flex items-center gap-3">
                <div
                  class="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-lg"
                >
                  <span class="material-symbols-outlined">shield</span>
                </div>
                <h2 class="text-2xl font-bold text-[#111814] dark:text-white">
                  5. User Rights
                </h2>
              </div>
              <p class="mb-4 text-[#618975] dark:text-gray-300">
                You have full control over your data. Under GDPR and CCPA
                regulations, you have the right to:
              </p>
              <div class="flex flex-col gap-2">
                <div
                  class="flex items-center gap-3 text-[#111814] dark:text-white"
                >
                  <span class="material-symbols-outlined text-primary"
                    >download</span
                  >
                  <span>Request a copy of all data we hold about you.</span>
                </div>
                <div
                  class="flex items-center gap-3 text-[#111814] dark:text-white"
                >
                  <span class="material-symbols-outlined text-primary"
                    >edit</span
                  >
                  <span>Correct any inaccurate personal data.</span>
                </div>
                <div
                  class="flex items-center gap-3 text-[#111814] dark:text-white"
                >
                  <span class="material-symbols-outlined text-primary"
                    >delete</span
                  >
                  <span
                    >Request deletion of your account and all associated quiz
                    history.</span
                  >
                </div>
              </div>
            </section>
            <hr class="border-[#f0f4f2] dark:border-white/10" />
            <!-- Section 6: Contact -->
            <section id="contact-us" class="scroll-mt-24">
              <div class="mb-6 flex items-center gap-3">
                <div
                  class="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-lg"
                >
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <h2 class="text-2xl font-bold text-[#111814] dark:text-white">
                  6. Contact Us
                </h2>
              </div>
              <div
                class="border-primary dark:border-primary/50 overflow-hidden rounded-2xl border bg-white shadow-lg dark:bg-[#151c18]"
              >
                <div class="bg-primary/10 p-6 md:p-8">
                  <h3
                    class="mb-2 text-xl font-bold text-[#111814] dark:text-white"
                  >
                    Have questions about your privacy?
                  </h3>
                  <p class="mb-6 text-[#618975] dark:text-gray-300">
                    Our Data Protection Officer is available to answer any
                    questions or concerns regarding this policy.
                  </p>
                  <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      class="bg-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-bold text-[#111814] transition-all hover:brightness-105"
                      href="mailto:privacy@vuequizapp.com"
                    >
                      <span class="material-symbols-outlined">send</span>
                      privacy@vuequizapp.com
                    </a>
                    <a
                      class="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dbe6e0] bg-white px-6 py-3 font-medium text-[#111814] transition-all hover:bg-gray-50 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
                      href="#"
                    >
                      Visit Help Center
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </v-box>
        </v-box>
      </v-box>
    </v-box>

    <TheFooter />
  </div>
</template>
