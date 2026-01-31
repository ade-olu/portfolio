<template>
  <div
    class="relative h-screen font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <Nav variant="designs" />

    <div
      class="bg-white-soft relative w-full h-auto pb-8 tablet-xs:pb-16"
      :class="{ change: zIndex }"
    >
      <Heading
        accent-img-class="w-[8.5rem] phone-sm:w-[9.5rem] tablet-xs:w-44 lg:w-[11.5rem] 2xl:w-60"
        >Designs</Heading
      >
      <DesignsNav variant="illustrations" />

      <DesignGallery :items="galleryItems" />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Import components
import Nav from "@/components/navigation/Nav.vue";
import DesignsNav from "@/components/navigation/DesignsNav.vue";
import DesignGallery from "@/components/designs/DesignGallery.vue";

// Import images
import astronautImage from "~/assets/designs/illustrations/astronaut.svg";
import desktopImage from "~/assets/designs/illustrations/desktop.svg";
import standingImage from "~/assets/designs/illustrations/standing.svg";
import codingImage from "~/assets/designs/illustrations/coding.svg";
import coding2Image from "~/assets/designs/illustrations/coding-2.svg";
import deadpoolImage from "~/assets/designs/illustrations/deadpool.svg";
import macosIconsImage from "~/assets/designs/illustrations/macos-icons.svg";
import oneuiIconsImage from "~/assets/designs/illustrations/one-ui-icons.svg";
import narutoImage from "~/assets/designs/illustrations/naruto.svg";
import madaraImage from "~/assets/designs/illustrations/madara.svg";

useHead({
  title: "Designs - Illustrations",
});

const active = ref(false);
const zIndex = ref(false);

// Define gallery items
const galleryItems = [
  // Astronaut Illustration
  {
    id: "astronaut",
    type: "full-image",
    image: astronautImage,
    imageClass: "object-cover",
    alt: "Astronaut",
  },
  // Desktop Setup Illustration
  {
    id: "desktop",
    type: "full-image",
    customStyle: "background: #546dee",
    image: desktopImage,
    alt: "Desktop",
  },
  // Standing Character Illustration
  {
    id: "standing",
    type: "full-image",
    bgColor: "bg-purple-light",
    image: standingImage,
    alt: "Standing",
  },
  // Coding Illustration
  {
    id: "coding",
    type: "full-image",
    bgColor: "bg-purple-light",
    image: codingImage,
    alt: "Coding",
  },
  // Coding 2 Illustration
  {
    id: "coding-2",
    type: "full-image",
    bgColor: "bg-purple-light",
    image: coding2Image,
    alt: "Coding 2",
  },
  // Deadpool Illustration
  {
    id: "deadpool",
    type: "full-image",
    bgColor: "bg-sky-light",
    image: deadpoolImage,
    imageClass: "object-cover",
    alt: "Deadpool",
  },
  // macOS Icons Illustration
  {
    id: "macos-icons",
    type: "full-image",
    bgColor: "bg-macos-dark",
    image: macosIconsImage,
    alt: "macOS Icons",
  },
  // One UI Icons Illustration
  {
    id: "oneui-icons",
    type: "full-image",
    bgColor: "bg-oneui-dark",
    image: oneuiIconsImage,
    alt: "One UI Icons",
  },
  // Naruto Illustration
  {
    id: "naruto",
    type: "full-image",
    bgColor: "bg-sky-light",
    image: narutoImage,
    imageClass: "object-cover",
    alt: "Naruto",
  },
  // Madara Illustration
  {
    id: "madara",
    type: "full-image",
    bgColor: "bg-purple-light",
    image: madaraImage,
    imageClass: "object-cover",
    alt: "Madara",
  },
];
</script>

<style scoped>
@import "~/assets/styles/nav.css";
</style>
