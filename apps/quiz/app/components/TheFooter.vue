<template>
  <v-box
    is="footer"
    bg="cl-background-alt"
    border-top="1px solid cl-border-light"
    px="sp-4"
    pb="sp-8"
    pt="sp-16"
  >
    <v-box mx="auto" max-w="80rem">
      <v-box
        mb="sp-16"
        display="grid"
        grid-template-columns="1fr 1fr"
        gap="sp-10"
        :md="{
          gridTemplateColumns: 'repeat(4, 1fr)',
        }"
      >
        <v-box
          grid-column="span 2 / span 2"
          :md="{
            gridColumn: 'span 1 / span 1',
          }"
        >
          <TradeMark />

          <v-box is="p" color="cl-text-muted" my="sp-6" fs="fs-sm">
            Master the ecosystem. Build better apps.
          </v-box>

          <v-box display="flex" gap="sp-4" class="flex gap-4">
            <v-box
              is="a"
              href="#"
              color="cl-slate-400"
              transition="color 0.2s ease-in-out"
              :hover="{
                color: 'cl-primary',
              }"
            >
              <Icon name="mdi:twitter" size="24" />
            </v-box>

            <v-box
              is="a"
              href="#"
              color="cl-slate-400"
              transition="color 0.2s ease-in-out"
              :hover="{
                color: 'cl-primary',
              }"
            >
              <Icon name="mdi:github" size="24" />
            </v-box>
          </v-box>
        </v-box>

        <div>
          <v-box color="cl-text-main" mb="sp-4" fw="fw-bold">Product</v-box>
          <v-box
            is="ul"
            color="cl-text-muted"
            display="flex"
            flex-direction="column"
            gap="sp-2"
            fs="fs-sm"
          >
            <v-box is="li">
              <v-box
                as-child
                transition="color 0.2s ease-in-out"
                :hover="{
                  color: 'cl-primary',
                }"
                href="#"
              >
                <NuxtLink to="/quiz"> Quiz Mode </NuxtLink>
              </v-box>
            </v-box>

            <v-box is="li">
              <v-box
                as-child
                transition="color 0.2s ease-in-out"
                :hover="{
                  color: 'cl-primary',
                }"
                href="#"
              >
                <NuxtLink to="/quiz?mode=study"> Study Mode </NuxtLink>
              </v-box>
            </v-box>
          </v-box>
        </div>

        <div>
          <v-box color="cl-text-main" mb="sp-4" fw="fw-bold">Resources</v-box>
          <v-box
            is="ul"
            color="cl-text-muted"
            display="flex"
            flex-direction="column"
            gap="sp-2"
            fs="fs-sm"
          >
            <v-box is="li">
              <v-box
                is="a"
                href="https://vuejs.org/guide/introduction"
                target="_blank"
                transition="color 0.2s ease-in-out"
                :hover="{
                  color: 'cl-primary',
                }"
              >
                Vue.js Docs
              </v-box>
            </v-box>

            <v-box is="li">
              <v-box
                is="a"
                href="https://router.vuejs.org/"
                target+_blank
                transition="color 0.2s ease-in-out"
                :hover="{
                  color: 'cl-primary',
                }"
              >
                Vue Router Docs
              </v-box>
            </v-box>

            <v-box is="li">
              <v-box
                is="a"
                href="https://pinia.vuejs.org/"
                target="_blank"
                transition="color 0.2s ease-in-out"
                :hover="{
                  color: 'cl-primary',
                }"
              >
                Pinia Docs
              </v-box>
            </v-box>
          </v-box>
        </div>

        <div>
          <v-box color="cl-text-main" mb="sp-4" fw="fw-bold">Legal</v-box>
          <v-box
            is="ul"
            color="cl-text-muted"
            display="flex"
            flex-direction="column"
            gap="sp-2"
            fs="fs-sm"
          >
            <v-box is="li">
              <v-box
                as-child
                transition="color 0.2s ease-in-out"
                :hover="{
                  color: 'cl-primary',
                }"
                href="#"
              >
                <NuxtLink to="/privacy-policy#introduction">
                  Privacy Policy
                </NuxtLink>
              </v-box>
            </v-box>

            <v-box is="li">
              <v-box
                as-child
                transition="color 0.2s ease-in-out"
                :hover="{
                  color: 'cl-primary',
                }"
                href="#"
              >
                <NuxtLink to="/terms-of-service"> Terms of Service </NuxtLink>
              </v-box>
            </v-box>
          </v-box>
        </div>
      </v-box>

      <v-box
        border-top="1px solid cl-border-light"
        display="flex"
        flex-direction="column"
        align-items="center"
        justify-content="space-between"
        gap="sp-4"
        pt="sp-8"
        :md="{
          flexDirection: 'row',
        }"
      >
        <v-box is="p" color="cl-text-muted" fs="fs-xs">
          © 2023 VueDrill. All rights reserved.
        </v-box>

        <v-box is="p" color="cl-text-muted" fs="fs-xs">
          Styled with
          <v-box
            is="a"
            href="https://veebox.xyz"
            target="_blank"
            color="cl-primary"
          >
            Veebox
          </v-box>
          & built with <v-box is="span" color="cl-red-500">♥</v-box> for the
          Vue Community.
        </v-box>
      </v-box>
    </v-box>
  </v-box>
</template>
