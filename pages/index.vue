<template>
  <div
    class="relative min-h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <MainNav />

    <!-- Home Section -->
    <HomeSection @scroll-to-contact="scrollToContact" />

    <!-- Projects -->
    <Projects />

    <!-- Designs -->
    <Designs />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from "vue";

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
