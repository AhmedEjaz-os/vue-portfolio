<script setup>
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import Aboutme from './components/Aboutme.vue';
import Experience from './components/Experience.vue';
import Project from './components/Projects.vue';
import Contactme from './components/Contactme.vue';
import Footer from './components/Footer.vue';
const path = (window.location.href).split(window.location.origin);
if (path[1] !== '/') {
  window.location.href = '/';
}

</script>

<template>
  <Header />
  <main>
    <Introduction />
    <Aboutme />
    <Experience />
    <Project />
    <Contactme />
  </main>
  <Footer />
</template>

<style scoped></style>
