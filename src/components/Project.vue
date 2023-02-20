<template>
  <router-link :to="`projects/${project.slug}`">
    <div class="h-full relative group cursor-pointer">
      <div
        class="w-full h-full"
        :style="`background: url('../../src/assets/project-thumbnails/${project.thumbnail}') center center no-repeat; background-size: cover;`"
      ></div>
      <div
        class="absolute top-0 left-0 right-0 bottom-0 bg-black w-full h-full duration-200 opacity-0 group-hover:opacity-90"
      >
        <div class="text-white p-4">
          <p class="font-extrabold text-2xl">{{ project.name }}</p>
          <p>{{ project.description }}</p>
          <div class="flex space-x-2 my-4">
            <div
              v-for="(skill, index) in project.categories"
              :key="index"
              class="bg-accent px-2 py-1 rounded-full text-xs uppercase"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
  classes: String,
});
</script>
