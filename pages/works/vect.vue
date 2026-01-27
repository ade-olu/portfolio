<template>
  <ProjectPage
    title="Vect"
    description="Vect is a simple drawing tool that lets you create sketches, drawings, and visual ideas."
    :technologies="['HTML', 'SCSS', 'JavaScript', 'Figma']"
    live-url="https://vectstudio.vercel.app"
    accent-img-class="w-28 phone-sm:w-32 tablet-xs:w-36"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - Vect",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
