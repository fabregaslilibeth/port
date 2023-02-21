<template>
  <div id="contact" class="py-20">
    <div class="relative">
      <div
        class="absolute top-12 left-1/2 transform -translate-x-12 hidden md:inline-block"
      >
        <icons-arrow />
      </div>
      <div class="flex justify-center">
        <div class="font-cursive text-4xl text-center">Contact me</div>
        <div class="">
          <icons-exclamation />
        </div>
      </div>
      <div class="md:flex justify-center w-full md:my-20 items-stretch h-full">
        <div class="w-11/2 md:w-1/2 my-8 order-last text-center">
          <form @submit.prevent="submit()">
            <div>
              <input
                type="text"
                class="w-11/12 md:w-9/12 bg-secondary rounded-full py-2 px-3 border-2 border-background duration-200 focus:border-accent focus:ring-none focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="text"
                class="my-4 w-11/12 md:w-9/12 bg-secondary rounded-full py-2 px-3 border-2 border-background duration-200 focus:border-accent focus:ring-none focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <textarea
                type="text"
                class="w-11/12 md:w-9/12 h-48 bg-secondary rounded-xl py-2 px-3 border-2 border-background duration-200 focus:border-accent focus:ring-none focus:outline-none"
                placeholder="Your Message"
              />
            </div>
          </form>
        </div>

        <div class="flex items-center w-full md:w-1/2">
          <div class="mx-auto">
            <div class="flex items-center justify-center my-4 space-x-4">
              <icons-phone />
              <p>+63 930 130 6506</p>
            </div>
            <div class="flex items-center justify-center my-4 space-x-4">
              <icons-facebook />
              <p>+63 930 130 6506</p>
            </div>
            <div class="flex items-center justify-center my-4 space-x-4">
              <icons-youtube />
              <p>+63 930 130 6506</p>
            </div>
            <div class="flex items-center justify-center my-4 space-x-4">
              <icons-email />
              <p>+63 930 130 6506</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

import { useScroll } from "../composables/scroll.js";
import { useNav } from "../composables/nav.js";

import IconsPhone from "../components/icons/phone.vue";
import IconsFacebook from "../components/icons/facebook.vue";
import IconsYoutube from "../components/icons/youtube.vue";
import IconsArrow from "../components/icons/arrow.vue";
import IconsEmail from "../components/icons/email.vue";
import IconsExclamation from "../components/icons/exclamation.vue";

const { navStore } = useNav(); // text reveal && nav
const { activeSection } = useScroll(); // text reveal && nav

watch(
  () => activeSection,
  () => {
    if (activeSection.value === "contact") {
      navStore.setNav("Contact");
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

const submit = () => {
  alert();
};
</script>
