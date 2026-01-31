<template>
  <ProjectPage
    title="TripVoyager"
    description="TripVoyager is an app design project that helps people plan their vacations and trips more effectively."
    :technologies="['Figma']"
    live-url="https://tinyurl.com/2jtt6upu"
    button-link="View Design"
    accent-img-class="w-52 phone-sm:w-56 tablet-xs:w-60 lg:w-72"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - TripVoyager",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
