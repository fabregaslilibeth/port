<template>
  <div>
    <div class="relative w-48 mx-auto">
      <div class="font-cursive text-4xl text-center">Projects</div>
      <div class="w-24 ml-auto -mt-2">
        <icons-underline />
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

    <div class="max-w-screen-lg mx-auto relative my-8 ">
      <!-- <div class="grid grid-cols-1 gap-4">
        <div class="col-span-1 bg-white text-gray-900 h-52">4</div>
        <div class="col-span-1 bg-white text-gray-900 h-52">5</div>
      </div>
      <div class="col-span-3 md:col-span-1 bg-white text-gray-900 h-100">6</div> -->
      <div v-for="(project, index) in displayedProjects" :key="project.slug" :class="getClass(index)">
        <div v-if="[0, 3, 4].includes(index)" class="col-span-3 md:col-span-1 bg-white text-gray-900 h-52">
          <project-regular :project="project"></project-regular>
          <!-- <project
            :project="project"
            classes="col-span-3 md:col-span-1 bg-white text-gray-900 h-52"
          ></project> -->
        </div>
        <div v-if="[1].includes(index)" class="col-span-3 md:col-span-2 bg-white text-gray-900 h-52">
          <project-horizontal></project-horizontal>
          <!-- <project
            :project="project"
            classes="col-span-3 md:col-span-2 bg-white text-gray-900 h-52"
          ></project> -->
        </div>
        <div v-if="[2, 5].includes(index)" class="col-span-3 md:col-span-1 bg-white text-gray-900 h-100">
          <project-vertical></project-vertical>
          <!-- <project
            :project="project"
            classes="col-span-3 md:col-span-1 bg-white text-gray-900 h-100"
          ></project> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import IconsUnderline from "../components/icons/underline.vue";
import IconsNavHighlight from "../components/icons/navhighlight.vue";
import Project from "../components/Project.vue";
import ProjectRegular from "../components/ProjectRegular.vue";
import ProjectHorizontal from "../components/ProjectHorizontal.vue";
import ProjectVertical from "../components/ProjectVertical.vue";

import projects from "../assets/js/projects.js";

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

const getClass = (index) => {
  if ([1].includes(index)) {
    return "col-span-3 md:col-span-2 bg-white text-gray-900 h-52";
  } else if ([2, 5].includes(index)) {
    return "col-span-3 md:col-span-1 bg-white text-gray-900 h-100"
  } else {
    return "col-span-3 md:col-span-1 bg-white text-gray-900 h-52";
  }
};
const displayedProjects = computed(() => {
  return projects.slice(0, 8);
});

const setActiveNav = (nav: string) => {
  activeNav.value = nav;
};
// const hasMore = () => {
//   if (projects.length === displayedProjects.value.length) {
//     return false;
//   }

//   return true;
// };

// const showMore = () => {
//   interval.value += interval.value;
// };

// const showLess = () => {
//   interval.value = 3;
// };
</script>
<style scoped>
.banner {
  height: 400px;
  background: url("../../src/assets/organic.png") left center no-repeat;
  background-size: contain;
}
</style>
