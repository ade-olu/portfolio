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
import vectImage from "../../assets/designs/ui/vect.svg";
import snkrsImage from "../../assets/designs/ui/snkrs.svg";
import justVibeImage from "../../assets/designs/ui/justvibe.svg";
import justVibeMainImage from "../../assets/designs/ui/justvibe-main.svg";
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
  // Vect Web Design
  {
    id: "vect",
    type: "web-design",
    bgColor: "bg-[#7458ED]",
    image: vectImage,
    alt: "Vect",
    containerClass:
      "absolute p-8 tablet-xs:top-0 tablet-xs:p-10 tablet-xs:pb-0 lg:top-auto lg:p-10",
    imageClass: "w-full rounded-sm",
  },
  // Snkrs Web Design
  {
    id: "snkrs",
    type: "web-design",
    bgColor: "bg-black",
    image: snkrsImage,
    alt: "Snkrs",
    containerClass: "absolute top-0 p-8 pb-0 tablet-xs:p-10 tablet-xs:pb-0",
    imageClass: "w-full rounded-sm",
  },
  // JustVibe Web Design
  {
    id: "justvibe",
    type: "web-design",
    bgColor: "bg-black",
    image: justVibeImage,
    alt: "JustVibe",
    containerClass: "absolute p-8 tablet-xs:p-10",
    imageClass: "w-full rounded-sm",
  },
  // JustVibe Web Design (Main Page)
  {
    id: "justvibe",
    type: "web-design",
    bgColor: "bg-black",
    image: justVibeMainImage,
    alt: "JustVibe",
    containerClass: "absolute top-0 p-8 pb-0 tablet-xs:p-10 tablet-xs:pb-0",
    imageClass: "w-full rounded-sm",
  },
  // Travu Web Design
  {
    id: "travu",
    type: "web-design",
    bgColor: "bg-travu-dark-2",
    image: travuImage,
    alt: "Travu",
    containerClass: "absolute p-8 tablet-xs:p-10",
    imageClass: "w-full rounded-sm",
  },
  // Portfolio Web Design
  {
    id: "portfolio",
    type: "web-design",
    bgColor: "bg-black-primary",
    image: portfolioImage,
    alt: "Portfolio",
    containerClass: "absolute top-0 p-8 pb-0 tablet-xs:p-10 tablet-xs:pb-0", // Added top-0
    imageClass: "w-full rounded-sm",
  },
  // Wallet App Design
  {
    id: "wallet-app",
    type: "mobile-design",
    customStyle: "background: #ebf1ff",
    image: walletAppImage,
    alt: "Wallet App",
    containerClass: "flex justify-center items-center p-8 tablet-xs:p-10",
    imageClass: "max-w-[65%] h-auto rounded-md",
  },
  // VenZone Web Design
  {
    id: "venzone",
    type: "web-design-textured",
    customStyle: "background: #f2ebe6",
    image: venzoneImage,
    alt: "VenZone",
    containerClass: "absolute top-0 p-8 pb-0 tablet-xs:p-10 tablet-xs:pb-0",
    imageClass: "w-full rounded-sm",
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
        class: "max-w-[65%] h-auto rounded-md",
      },
      {
        src: venzoneApp2Image,
        class: "max-w-[65%] h-auto rounded-md",
      },
    ],
    alt: "VenZone App",
    containerClass:
      "flex justify-center items-center p-8 gap-8 max-w-[75%] tablet-xs:p-10 tablet-xs:gap-10 tablet-xs:max-w-[75%]",
    hasNoise: true,
  },
  // Ear1 Web Design
  {
    id: "ear1",
    type: "web-design",
    customStyle: "background: #00bf69",
    image: ear1Image,
    alt: "Ear1",
    containerClass: "absolute top-0 p-8 pb-0 tablet-xs:p-10 tablet-xs:pb-0",
    imageClass: "w-full rounded-sm",
  },
  {
    id: "ear1-app",
    type: "mobile-dual",
    customStyle: "background: #00bf69",
    images: [
      {
        src: ear1App1Image,
        class: "max-w-[65%] h-auto rounded-md",
      },
      {
        src: ear1App2Image,
        class: "max-w-[65%] h-auto rounded-md",
      },
    ],
    alt: "Ear1 App",
    containerClass:
      "flex justify-center items-center p-8 gap-8 max-w-[75%] tablet-xs:p-10 tablet-xs:gap-10 tablet-xs:max-w-[75%]",
  },
];
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
