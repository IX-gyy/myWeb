<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0a0a0a;
  color: #ffffff;
}

html {
  scroll-behavior: smooth;
}
</style>
