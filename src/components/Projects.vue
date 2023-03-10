<template>
  <div class="pt-20" id="projects">
    <div class="relative w-48 mx-auto">
      <div class="font-cursive text-4xl text-center">Projects</div>
      <div class="w-24 ml-auto -mt-2 custom-project-underline">
        <icons-underline />
      </div>
    </div>

    <div class="flex my-8 w-full md:w-6/12 lg:w-3/12 mx-auto">
      <div
        class="relative mx-auto group cursor-pointer"
        v-for="(item, index) in navItems"
        :key="index"
        :class="item.class"
      >
        <div
          class="absolute -top-4 -right-4 opacity-0 duration-200 group-hover:opacity-100"
          :class="activeNav === item.name ? 'opacity-100' : 'opacity-0'"
        >
          <icons-nav-highlight />
        </div>
        <div @click="setActiveNav(item.name)" class="uppercase">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto relative my-8 grid grid-cols-3 gap-4">
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.slug"
        :class="getClass(index)"
      >
        <project :project="project"></project>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import IconsUnderline from "../components/icons/underline.vue";
import IconsNavHighlight from "../components/icons/navhighlight.vue";
import Project from "../components/Project.vue";

import { useScroll } from "../composables/scroll.js";
import { useNav } from "../composables/nav.js";
// @ts-ignore
import projects from "../../src/assets/js/projects.js";

gsap.registerPlugin(ScrollTrigger);

const { navStore } = useNav(); // text reveal && nav
const { activeSection } = useScroll(); // text reveal && nav

onMounted(() => {
  setInterval(() => {
    fade();
  }, 200);
});

watch(
  () => activeSection,
  () => {
    if (activeSection.value === "projects") {
      textReveal();
      navStore.setNav("Works");
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
    delay: 0.4,
  });
};

let tl = gsap.timeline();
const fade = () => {
  tl.to(".custom-project-underline", {
    scrollTrigger: ".custom-project-underline",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  });
};

const navItems = ref([
  {
    name: "All",
    class: "w-8",
  },
  {
    name: "Laravel",
    class: "w-16",
  },
  {
    name: "Vue",
    class: "w-8",
  },
  {
    name: "React",
    class: "w-12",
  },
]);
const activeNav = ref("All");
const filteredProjects = ref([...projects]);

const getClass = (index: number) => {
  if (activeNav.value !== "All") {
    return "col-span-3 md:col-span-1 row-span-1 bg-white text-gray-900 h-52";
  } else if ([1].includes(index)) {
    return "col-span-3 md:col-span-2 row-span-1 bg-white text-gray-900 h-52";
  } else if ([2, 4].includes(index)) {
    return "col-span-3 md:col-span-1 row-span-2 bg-white text-gray-900 h-108";
  } else {
    return "col-span-3 md:col-span-1 row-span-1 bg-white text-gray-900 h-52";
  }
};

const setActiveNav = (nav: string) => {
  activeNav.value = nav;
  filter();
};

const filter = () => {
  if (activeNav.value === "All") {
    filteredProjects.value = projects;
    return;
  }

  filteredProjects.value = [];
  // @ts-ignore:
  projects.forEach((project) => {
    if (project.categories.includes(activeNav.value.toLowerCase())) {
      filteredProjects.value.push(project);
    }
  });
};
</script>

<style>
.custom-project-underline {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
}
</style>
