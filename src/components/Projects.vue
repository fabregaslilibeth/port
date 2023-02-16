<template>
  <div>
    <div class="relative w-48 mx-auto">
      <div class="font-cursive text-4xl text-center">Projects</div>
      <div class="w-24 ml-auto -mt-2">
        <icons-underline />
      </div>
    </div>

    <div class="flex my-8 w-3/12 mx-auto">
      <div class="relative mx-auto w-8 group cursor-pointer">
        <div
          class="absolute -top-4 -right-4 opacity-0 duration-200 group-hover:opacity-100"
        >
          <icons-nav-highlight />
        </div>
        <div class="">ALL</div>
      </div>
      <div class="relative mx-auto w-16 group cursor-pointer">
        <div
          class="absolute -top-4 -right-4 opacity-0 duration-200 group-hover:opacity-100"
        >
          <icons-nav-highlight />
        </div>
        <div class="">LARAVEL</div>
      </div>
      <div class="relative mx-auto w-8 group cursor-pointer">
        <div
          class="absolute -top-4 -right-4 opacity-0 duration-200 group-hover:opacity-100"
        >
          <icons-nav-highlight />
        </div>
        <div class="">VUE</div>
      </div>
      <div class="relative mx-auto w-12 group cursor-pointer">
        <div
          class="absolute -top-4 -right-4 opacity-0 duration-200 group-hover:opacity-100"
        >
          <icons-nav-highlight />
        </div>
        <div class="">REACT</div>
      </div>
    </div>
    <div class="max-w-screen-lg mx-auto relative my-8 grid grid-cols-3 gap-4">
      <div class="col-span-3 md:col-span-1 bg-white h-52">SDSD</div>
      <div class="col-span-3 md:col-span-2 bg-white h-52">SDSD</div>
      <div class="col-span-3 md:col-span-1 bg-white h-100">SDSD</div>
      <div class="grid grid-cols-1 gap-4">
        <div class="col-span-1 bg-white h-52">SDSD</div>
        <div class="col-span-1 bg-white h-48">SDSD</div>
      </div>
      <div class="col-span-3 md:col-span-1 bg-white h-100">SDSD</div>
      <!-- <div v-for="(project, index) in displayedProjects" :key="project.slug">
        <div class="md:flex md:items-center">
          <div class="flex justify-between w-1/2">
            <div class="banner w-full" style=""></div>
          </div>
          <div class="w-full md:w-1/2" :class="index % 2 && 'md:order-first'">
            <p class="font-extrabold text-2xl">
              {{ index + 1 }} {{ project.name }}
            </p>
            <p class="my-4">{{ project.description }}</p>
            <div
              class="md:flex items-center my-8 space-x-20"
              :class="index % 2 ? 'justify-end' : 'justify-start'"
            >
              <div class="flex space-x-2">
                <button class="bg-gray-400 rounded-full px-8 py-2">
                  View Code
                </button>
              </div>
              <div class="flex space-x-2">
                <div v-for="tag in project.categories" :key="tag">
                  <span
                    class="bg-gray-400 border border-gray-300 px-4 py-1 rounded-full text-xs uppercase font-semibold"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="text-center">
        <p class="text-xs">
          Showing {{ displayedProjects.length }} of {{ projects.length }}
        </p>
        <button v-if="hasMore()" @click="showMore()">Show More &#8594;</button>
        <button v-else @click="showLess()">Show Less</button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import IconsUnderline from "../components/icons/underline.vue";
import IconsNavHighlight from "../components/icons/navhighlight.vue";
import ProjectRegular from "../components/ProjectRegular.vue";
import { ref, computed } from "vue";
import projects from "../../src/assets/js/projects.js";

const interval = ref(3);

const displayedProjects = computed(() => {
  return projects.slice(0, interval.value);
});

const hasMore = () => {
  if (projects.length === displayedProjects.value.length) {
    return false;
  }

  return true;
};

const showMore = () => {
  interval.value += interval.value;
};

const showLess = () => {
  interval.value = 3;
};
</script>
<style scoped>
.banner {
  height: 400px;
  background: url("../../src/assets/organic.png") left center no-repeat;
  background-size: contain;
}
</style>
