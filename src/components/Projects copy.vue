<template>
  <div class="max-w-screen-xl mx-auto relative my-8">
    <div v-for="(project, index) in displayedProjects" :key="project.slug">
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
    </div>
    <div class="text-center">
      <p class="text-xs">
        Showing {{ displayedProjects.length }} of {{ projects.length }}
      </p>
      <button v-if="hasMore()" @click="showMore()">Show More &#8594;</button>
      <button v-else @click="showLess()">Show Less</button>
    </div>
  </div>
</template>

<script setup lang="ts">
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
