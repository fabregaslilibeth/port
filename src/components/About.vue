<template>
  <div class="pt-20" id="about">
    <div class="relative w-52 mx-auto">
      <div class="absolute -top-12 animate-icon-sunrays">
        <icons-sunrays />
      </div>
      <div class="font-cursive text-4xl text-right">About me</div>
    </div>
    <div class="">
      <div
        class="w-11/12 mx-auto md:w-full py-20 max-w-screen-xl text-center lg:text-left"
      >
        <div
          class="sm:flex items-stretch justify-center space-x-8 lg:space-x-20 mb-12"
        >
          <p class="w-full sm:w-1/2 text-center lg:text-left about-text-reveal">
            As a Full Stack Web Developer, I bring a unique perspective to my
            work thanks to my previous career in Finance and Accounting. I
            specialize in building web applications that are related to
            Accounting and Finance, leveraging my expertise to create
            user-friendly tools that meet the needs of businesses in these
            industries.
          </p>
          <div
            class="lg:border border-border py-4 px-8 rounded-md shadow-sm about-text-reveal hidden md:inline-block"
          >
            <div class="text-4xl font-extrabold font-cursive text-accent">
              {{ getYears() }}<sup>+</sup> years
            </div>
            <p class="text-center pt-4">Web development</p>
          </div>
        </div>

        <div
          class="sm:flex items-stretch justify-center space-x-8 lg:space-x-20 mb-12"
        >
          <p class="w-full sm:w-1/2 md:ml-20 about-text-reveal">
            My experience in Accounting has taught me the importance of being
            mindful of even the smallest details. I understand that even the
            slightest error can have a significant impact on a company's bottom
            line, so I always strive for accuracy and attention to detail in my
            work. Additionally, I recognize the importance of staying up-to-date
            with the latest industry regulations, and I make a point to
            continuously educate myself so that I can provide the most relevant
            solutions to my clients.
          </p>
          <div
            class="lg:border border-border py-4 px-8 rounded-md shadow-sm order-first flex items-center about-text-reveal hidden md:inline-block"
          >
            <div>
              <div class="text-4xl font-extrabold font-cursive text-accent">
                7<sup>+</sup> years
              </div>
              <p class="text-center pt-4">
                Accounting <span class="font-cursive">&</span> Finance
              </p>
            </div>
          </div>
        </div>

        <div class="w-3/4 mx-auto">
          <p class="text-center about-text-reveal">
            Overall, my background in Accounting has instilled a sense of
            responsibility and diligence in me, which I bring to every project
            that I work on as a Full Stack Web Developer.
          </p>
        </div>

        <router-link to="/about">
          <div
            class="relative w-60 lg:w-90 my-8 cursor-pointer mx-auto btn-group about-text-reveal"
          >
            <div
              class="border border-accent rounded-full pl-8 lg:px-20 h-12 lg:h-16 lg:text-xl uppercase tracking-wider flex items-center font-extrabold"
            >
              More about me
            </div>
            <div
              class="absolute w-12 lg:w-16 h-12 lg:h-16 bg-accent rounded-full top-0 right-0 flex items-center justify-center"
            >
              <icons-arrow-right />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { gsap } from "gsap";

import { useScroll } from "../composables/scroll.js";
import { useNav } from "../composables/nav.js";

import IconsSunrays from "./icons/sunrays.vue";
import IconsArrowRight from "./icons/arrowright.vue";

const { navStore } = useNav(); // text reveal && nav
const { activeSection } = useScroll(); // text reveal && nav

const start = new Date("10/1/2019");
const present = new Date(Date.now());
const tl = gsap.timeline();

const getYears = () => {
  let months = 0;
  months = (start.getFullYear() - present.getFullYear()) * 12;
  months += start.getMonth() - present.getMonth();
  return Math.ceil(months / 12) * -1;
};

onMounted(() => {
  animateSunrays();
});

watch(
  () => activeSection,
  () => {
    if (activeSection.value === "about") {
      textReveal();
      navStore.setNav("About");
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

const textReveal = () => {
  tl.to(".about-text-reveal", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", //square
    ease: "ease-in",
    stagger: 0.3,
    delay: 0.1,
  });
};

// const textHide = () => {
//   // not working
//   tl.from(".about-text-reveal", {
//     clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 1% 100%)", // bottom half
//     ease: "ease-in",
//   });
// };

const animateSunrays = () => {
  gsap.to(".animate-icon-sunrays svg path", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "elastic",
    stagger: 0.1,
    duration: 1,
    repeat: -1,
  });
};
</script>

<style scoped>
.animate-icon-sunrays svg path {
  clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
}

.about-text-reveal {
  /* hidden */
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
</style>
