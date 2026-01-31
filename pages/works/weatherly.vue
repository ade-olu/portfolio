<template>
  <ProjectPage
    title="Weatherly"
    description="Weatherly is a weather app that provides real-time weather conditions, forecasts, and metrics for cities around the world."
    :technologies="['HTML', 'CSS', 'JavaScript', 'Node.js', 'Figma']"
    live-url="https://weatherly-website-app.vercel.app"
    accent-img-class="w-44 phone-sm:w-48 tablet-xs:w-56 lg:w-60"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - Weatherly",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
