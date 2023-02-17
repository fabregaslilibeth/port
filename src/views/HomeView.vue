<template>
  <main class="relative">
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    <div class="fixed z-50 right-8 top-1/2">
      <Nav />
    </div>
  </main>
</template>

<script setup lang="ts">
import Nav from "../components/Nav.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
</script>
