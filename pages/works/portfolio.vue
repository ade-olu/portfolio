<template>
  <ProjectPage
    title="Portfolio"
    description="A portfolio project that showcases my projects and designs."
    :technologies="['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Figma']"
    live-url="https://adeolu.netlify.app"
    accent-img-class="w-36 phone-sm:w-40 tablet-xs:w-48 lg:w-52 2xl:w-64"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - Portfolio",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
