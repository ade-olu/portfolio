<template>
  <ProjectPage
    title="Ear1"
    description="Ear1 is a website design concept project that involves influencers getting paid from people who wants to chat with them."
    :technologies="['Figma']"
    live-url="https://tinyurl.com/3xf4e2ta"
    button-link="View Design"
    accent-img-class="w-28 phone-sm:w-32 tablet-xs:w-40 lg:w-44 2xl:w-48"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - Ear1",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
