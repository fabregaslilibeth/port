<template>
  <main class="relative">
    <Hero />
    <About />
    <Projects />
    <Contact />
    <div class="fixed z-50 right-8 top-1/2 hidden lg:inline-block">
      <Nav />
    </div>
    <div class="fixed z-50 bottom-0 left-0 right-0 h-20 lg:hidden">
      <NavMobile />
    </div>
  </main>
</template>

<script setup lang="ts">
import Nav from "../components/Nav.vue";
import NavMobile from "../components/NavMobile.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
</script>
