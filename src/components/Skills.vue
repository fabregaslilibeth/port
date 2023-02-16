<template>
  <div class="flex justify-center space-x-4 py-12 relative overflow-hidden">
    <!-- <div
      class="accent absolute top-0 w-full font-extrabold text-gray-300 opacity-60"
    >
      SKILLS
    </div> -->
    <div v-for="(skill, index) in skills" :key="index" class="">
      <img
        :src="`../../src/assets/${skill.image}`"
        :alt="`${skill.name} Logo`"
        class="w-16 filter duration-200 grayscale hover:grayscale-0"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import skills from "../../src/assets/js/skills.js";
</script>

<style scoped>
.accent {
  font-size: 120px;
}
</style>
