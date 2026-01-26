<template>
  <div
    class="relative min-h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <Nav variant="main" />

    <!-- Home Section -->
    <Home @scroll-to-contact="scrollToContact" />

    <!-- Projects & Designs -->
    <Projects />

    <!-- Contact Section -->
    <Contact />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "@/components/navigation/Nav.vue";
import Home from "@/components/Home.vue";
import Projects from "@/components/projects/Projects.vue";

// Reactive state
const active = ref(false);

// Scroll to contact section
const scrollToContact = () => {
  const contactElement = document.getElementById("contact");
  if (contactElement) {
    contactElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<style scoped>
@import "../assets/styles/nav.css";
</style>
