<template>
  <div
    class="relative h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <Nav variant="designs" />

    <div
      class="bg-white-soft relative w-full h-auto pb-16 phone-sm:pb-20 tablet-xs:pb-24"
      :class="{ change: zIndex }"
    >
      <Heading
        heading-class="mt-4 xl:mt-2"
        accent-img-class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-56"
        >Designs</Heading
      >
      <DesignsNav variant="ui" />

      <DesignGallery :items="galleryItems" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Import components
import Nav from "@/components/navigation/Nav.vue";
import DesignsNav from "@/components/navigation/DesignsNav.vue";
import DesignGallery from "@/components/designs/DesignGallery.vue";

// Import images
import travuImage from "../../assets/designs/ui/travu.svg";
import portfolioImage from "../../assets/designs/ui/portfolio.svg";
import walletAppImage from "../../assets/designs/ui/wallet-app.svg";
import venzoneImage from "../../assets/designs/ui/venzone.svg";
import venzoneApp1Image from "../../assets/designs/ui/venzone-app1.svg";
import venzoneApp2Image from "../../assets/designs/ui/venzone-app2.svg";
import ear1Image from "../../assets/designs/ui/ear1.svg";
import ear1App1Image from "../../assets/designs/ui/ear1-app1.svg";
import ear1App2Image from "../../assets/designs/ui/ear1-app2.svg";

useHead({
  title: "Designs - UI",
});

const active = ref(false);
const zIndex = ref(false);

// Define gallery items
const galleryItems = [
  // Travu Web Design
  {
    id: "travu",
    type: "web-design",
    bgColor: "bg-travu-dark-2",
    image: travuImage,
    alt: "Travu",
    containerClass: "absolute px-6 tablet-xs:px-10",
    imageClass: "w-full rounded-md",
  },
  // Portfolio Web Design
  {
    id: "portfolio",
    type: "web-design",
    bgColor: "bg-black",
    image: portfolioImage,
    alt: "Portfolio",
    containerClass: "absolute top-0 p-6 pb-0 tablet-xs:p-10", // Added top-0
    imageClass: "w-full rounded-md",
  },
  // Wallet App Design
  {
    id: "wallet-app",
    type: "mobile-design",
    customStyle: "background: #ebf1ff",
    image: walletAppImage,
    alt: "Wallet App",
    containerClass: "py-6 mx-auto tablet-xs:py-10",
    imageClass:
      "w-auto h-height-10 sm:h-72 phone-sm:h-height-16 tablet-xs:h-height-18 lg:h-height-15 xl:h-height-17 rounded-md",
  },
  // VenZone Web Design
  {
    id: "venzone",
    type: "web-design-textured",
    customStyle: "background: #f2ebe6",
    image: venzoneImage,
    alt: "VenZone",
    containerClass: "absolute top-0 p-6 pb-0 z-10 tablet-xs:p-10",
    imageClass: "w-full rounded-md",
    hasNoise: true,
  },
  // VenZone App Design
  {
    id: "venzone-app",
    type: "mobile-dual",
    customStyle: "background: #f2ebe6",
    images: [
      {
        src: venzoneApp1Image,
        class:
          "w-auto mr-6 h-48 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:mr-10 tablet-xs:h-height-18 lg:h-height-14 xl:h-height-17 rounded-md",
      },
      {
        src: venzoneApp2Image,
        class:
          "w-auto h-48 mt-12 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:h-height-18 tablet-xs:mt-0 lg:h-height-14 lg:mt-20 xl:mt-0 xl:h-height-17 rounded-md",
      },
    ],
    alt: "VenZone App",
    containerClass: "py-6 z-10 mx-auto flex tablet-xs:py-10",
    hasNoise: true,
  },
  // Ear1 Web Design
  {
    id: "ear1",
    type: "web-design",
    customStyle: "background: #00bf69",
    image: ear1Image,
    alt: "Ear1",
    containerClass: "absolute top-0 p-6 pb-0 tablet-xs:p-10",
    imageClass: "w-full rounded-md",
  },
  {
    id: "ear1-app",
    type: "mobile-dual",
    customStyle: "background: #00bf69",
    images: [
      {
        src: ear1App1Image,
        class:
          "w-auto mr-6 h-48 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:mr-10 tablet-xs:h-height-18 lg:h-height-14 xl:h-height-17 rounded-md",
      },
      {
        src: ear1App2Image,
        class:
          "w-auto h-48 mt-12 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:h-height-18 tablet-xs:mt-0 lg:h-height-14 lg:mt-20 xl:mt-0 xl:h-height-17 rounded-md",
      },
    ],
    alt: "Ear1 App",
    containerClass: "py-6 mx-auto flex tablet-xs:py-10",
  },
];
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
