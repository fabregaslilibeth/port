<template>
  <div class="py-4">
    <div class="grid grid-cols-3 flex items-center">
      <router-link to="/" class="col-span-1">
        <div class="flex space-x-4 items-center">
          <icons-arrow-left />
          <span class="text-accent text-2xl font-semibold">Home</span>
        </div>
      </router-link>
      <div class="relative cols-span-1">
        <div class="font-cursive text-4xl text-center">More about me</div>
      </div>
    </div>

    <div class="flex my-8 w-3/12 mx-auto">
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

    <div>
      <div class="uppercase font-extrabold text-2xl ml-32">Work Experience</div>
      <div class="my-8">
        <job classes="w-9/12 ml-60 mb-20" />
        <div class="w-20 ml-108">
          <icons-arrow-job-1 />
        </div>
        <job classes="w-9/12 ml-32 mt-12 mb-20" />
        <div class="w-full ml-60">
          <icons-arrow-job-2 />
        </div>
        <job classes="w-9/12 ml-48 mt-12 mb-20" />
        <div class="w-full ml-12">
          <icons-arrow-job-3 />
        </div>
        <job classes="w-9/12 ml-48 mt-12 mb-20" />
      </div>
    </div>

    <div>
      <div class="uppercase font-extrabold text-2xl ml-32">Education</div>
      <div class="my-8 ml-48">
        <education />
        <education />
        <education />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconsArrowLeft from "../components/icons/arrowleft.vue";
import IconsArrowJob1 from "../components/icons/arrowjob1.vue";
import IconsArrowJob2 from "../components/icons/arrowjob2.vue";
import IconsArrowJob3 from "../components/icons/arrowjob3.vue";
import IconsNavHighlight from "../components/icons/navhighlight.vue";
import Job from "../components/Job.vue";
import Education from "../components/Education.vue";

const navItems = ref([
  {
    name: "Experience",
    class: "w-24",
  },
  {
    name: "Education",
    class: "w-24",
  },
  {
    name: "Skills",
    class: "w-12",
  },
]);

const activeNav = ref("Experience");

const setActiveNav = (nav: string) => {
  activeNav.value = nav;
};
</script>
