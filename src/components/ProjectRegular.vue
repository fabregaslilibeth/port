<template>
  <div class="col-span-3 md:col-span-1 bg-white text-gray-900 h-52">
    <div class="md:flex md:items-center">
      <img
        :src="`../../src/assets/project-thumbnails/${project.thumbnail}`"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  project: Object,
});
</script>
