<template>
  <div class="flex bg-background">
    <div
      class="relative w-auto my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('Home')"
    >
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'Home' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-home />
      </div>
    </div>

    <div
      class="relative my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('About')"
    >
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'About' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-about />
      </div>
    </div>

    <div
      class="relative my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('Projects')"
    >
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'Works' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-projects />
      </div>
    </div>

    <div
      class="relative my-4 cursor-pointer mx-auto btn-group"
      @click="slideTo('Contact')"
    >
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center nav-icon duration-200"
        :class="nav === 'Contact' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-contact />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import IconsHome from "./icons/home.vue";
import IconsAbout from "./icons/about.vue";
import IconsProjects from "./icons/projects.vue";
import IconsContact from "./icons/contact.vue";
import { useNavStore } from "@/stores/nav";

const navStore = useNavStore();
const { nav } = storeToRefs(navStore);

const slideTo = (section: string) => {
  navStore.slideToSection(section);
};
</script>

<style scoped>
.nav-icon {
  background-size: 200% 100%;
  background-position: left bottom;
  transition: background-color 300ms cubic-bezier(1, 0.02, 0.35, 1);
}
.btn-group:hover .nav-icon {
  background: #ffae00;
}
</style>
