<template>
  <ProjectPage
    title="Travu"
    description="Travu is a travel project focused on providing seamless travel
              planning and booking experience."
    :technologies="['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Figma']"
    live-url="https://travu.netlify.app"
    accent-img-class="w-28 phone-sm:w-32 tablet-xs:w-40 lg:w-44 2xl:w-48"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - Travu",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
