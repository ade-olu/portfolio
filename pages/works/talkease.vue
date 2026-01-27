<template>
  <ProjectPage
    title="TalkEase"
    description="TalkEase is an app design project that enables real-time communication across different languages using AI for translation."
    :technologies="['Figma']"
    live-url="https://tinyurl.com/2s6abypx"
    button-link="View Case Study"
    accent-img-class="w-40 phone-sm:w-44 tablet-xs:w-52 lg:w-56"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - TalkEase",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
