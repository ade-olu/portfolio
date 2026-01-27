<template>
  <ProjectPage
    title="FindFont"
    description="FindFont is an app design project that helps you find typeface names on images."
    :technologies="['Figma']"
    live-url="https://tinyurl.com/45szh79m"
    button-link="View Prototype"
    accent-img-class="w-40 phone-sm:w-44 tablet-xs:w-52 lg:w-56 2xl:w-64"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - FindFont",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
