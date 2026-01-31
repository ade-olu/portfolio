<template>
  <ProjectPage
    title="Vect"
    description="Vect is a simple drawing tool that lets you create sketches, drawings, and visual ideas."
    :technologies="['HTML', 'SCSS', 'JavaScript', 'Figma']"
    live-url="https://vectstudio.vercel.app"
    accent-img-class="w-24 tablet-xs:w-32 2xl:w-40"
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
