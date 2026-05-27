<template>
  <ProjectPage
    title="Work Design"
    description="Work Design Magazine is a UX research and redesign project for a live workplace media publication. The project used site audits, user surveys, personas, and journey maps to identify usability issues and improve the user experience."
    :technologies="['Figma']"
    live-url="https://tinyurl.com/bdzdcabr"
    button-link="View Prototype"
    accent-img-class="w-52 phone-sm:w-56 tablet-xs:w-60 lg:w-72 2xl:w-[22rem]"
  />
</template>

<script setup>
import ProjectPage from "@/components/projects/ProjectPage.vue";

// Set page meta
useHead({
  title: "Projects - Work Design",
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
