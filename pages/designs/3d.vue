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
      <DesignsNav variant="3d" />

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
import livingRoomImage from "~/assets/designs/3d/living-room.png";
import roomImage from "~/assets/designs/3d/room.png";
import kitchenImage from "~/assets/designs/3d/kitchen.png";
import houseImage from "~/assets/designs/3d/house.png";
import livingRoom2Image from "~/assets/designs/3d/living-room-2.png";

useHead({
  title: "Designs - 3D",
});

const active = ref(false);
const zIndex = ref(false);

// Define gallery items
const galleryItems = [
  // Living Room 3D Design
  {
    id: "living-room",
    type: "full-image",
    image: livingRoomImage,
    imageClass: "object-cover",
    alt: "Living Room",
  },
  // Room 3D Design
  {
    id: "room",
    type: "full-image",
    image: roomImage,
    imageClass: "object-cover",
    alt: "Room",
  },
  // Kitchen 3D Design
  {
    id: "kitchen",
    type: "full-image",
    image: kitchenImage,
    imageClass: "object-cover",
    alt: "Kitchen",
  },
  // House 3D Design
  {
    id: "house",
    type: "full-image",
    image: houseImage,
    imageClass: "object-cover",
    alt: "House",
  },
  // Living Room 2 3D Design
  {
    id: "living-room-2",
    type: "full-image",
    image: livingRoom2Image,
    imageClass: "object-cover",
    alt: "Living Room 2",
  },
];
</script>

<style scoped>
@import "~/assets/styles/nav.css";
</style>
