<template>
  <ProjectPage
    title="GetFood"
    description="GetFood is an app design project that allows you to easily order meals and pick them up at your school's cafeteria."
    :technologies="['Figma']"
    live-url="https://tinyurl.com/5czz6d9z"
    button-link="View Prototype"
    accent-img-class="w-36 phone-sm:w-40 tablet-xs:w-48 lg:w-52 2xl:w-60"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - GetFood",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
