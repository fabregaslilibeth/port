<template>
  <div class="">
    <div class="relative w-auto my-4 cursor-pointer mx-auto btn-group">
      <div
        class="rounded-full text-right pr-12 h-12 flex items-center justify-end font-semibold text-xs nav-item tracking-widest opacity-0 duration-500"
      >
        HOME 
      </div>
      <div
        class="absolute w-12 h-12 rounded-full top-0 right-0 flex items-center justify-center nav-icon"
        :class="nav === 'Home' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-home />
      </div>
    </div>

    <div class="relative my-4 cursor-pointer mx-auto btn-group">
      <div
        class="rounded-full text-right pl-2 pr-12 h-12 flex items-center justify-end font-semibold text-xs nav-item opacity-0 duration-500"
      >
        ABOUT
      </div>
      <div
        class="absolute w-12 h-12 rounded-full top-0 right-0 flex items-center justify-center nav-icon duration-200"
        :class="nav === 'About' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-about />
      </div>
    </div>

    <div class="relative my-4 cursor-pointer mx-auto btn-group">
      <div
        class="rounded-full text-right pl-2 pr-12 h-12 flex items-center justify-end font-semibold text-xs nav-item opacity-0 duration-500"
      >
        WORKS
      </div>
      <div
        class="absolute w-12 h-12 rounded-full top-0 right-0 flex items-center justify-center nav-icon duration-200"
        :class="nav === 'Works' ? 'bg-accent' : 'bg-navitem'"
      >
        <icons-projects />
      </div>
    </div>

    <div class="relative my-4 cursor-pointer mx-auto btn-group">
      <div
        class="rounded-full pl-3 pr-12 h-12 flex items-center justify-end font-semibold text-xs nav-item opacity-0 duration-500"
        :class="nav === 'Contact' ? 'bg-accent' : 'bg-navitem'"
      >
        CONTACT
      </div>
      <div
        class="absolute w-12 h-12 rounded-full top-0 right-0 flex items-center justify-center nav-icon duration-200"
      >
        <icons-contact />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import IconsHome from "../components/icons/home.vue";
import IconsAbout from "../components/icons/about.vue";
import IconsProjects from "../components/icons/projects.vue";
import IconsContact from "../components/icons/contact.vue";
import { useNavStore } from "@/stores/nav";

const navStore = useNavStore();
const { nav } = storeToRefs(navStore);
</script>

<style scoped>
.nav-item {
  background: linear-gradient(to right, #111 50%, #ffb400 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  transition: all 300ms cubic-bezier(1, 0.02, 0.35, 1);
}

.btn-group:hover .nav-item {
  background-position: right bottom;
  opacity: 1;
}

.nav-icon {
  /* background: linear-gradient(to right, #2b2a2a 50%, #2b2a2a 50%); */
  background-size: 200% 100%;
  background-position: left bottom;
  transition: background-color 300ms cubic-bezier(1, 0.02, 0.35, 1);
}
.btn-group:hover .nav-icon {
  background: #ffae00;
}
</style>
