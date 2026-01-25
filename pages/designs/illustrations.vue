<template>
  <div
    class="relative h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <Nav variant="designs" />

    <!-- Illustrations -->
    <div
      class="bg-white-soft relative w-full h-auto pb-16 phone-sm:pb-20 tablet-xs:pb-24"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <div class="text-center">
        <h1
          class="font-heading font-bold text-3xl text-black leading-10 mt-4 phone-sm:text-heading-1 phone-sm:leading-tight xl:mt-2 tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-"
        >
          <span class="relative z-10">Designs</span>

          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
          >
            <img
              class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-56"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
              data-cursor-hover
            />
          </span>
        </h1>
      </div>

      <!-- Navigation -->
      <DesignsNav variant="illustrations" />

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tablet-xs:px-14 tablet-xs:gap-14 lg:mt-20 lg:px-24 lg:grid-cols-2 lg:gap-24"
      >
        <!-- Astronaut -->
        <div
          class="relative overflow-hidden rounded-md grid justify-end items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/astronaut.svg"
              alt="Astronaut"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Desktop -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #546dee"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/desktop.svg"
              alt="Desktop"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Standing -->
        <div
          class="relative bg-purple-light overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/standing.svg"
              alt="Standing"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Coding -->
        <div
          class="relative bg-purple-light overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/coding.svg"
              alt="Coding"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Coding 2 -->
        <div
          class="relative bg-purple-light overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/coding-2.svg"
              alt="Coding 2"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Deadpool -->
        <div
          class="relative bg-sky-light overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/deadpool.svg"
              alt="Deadpool"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- macOS Icons -->
        <div
          class="relative bg-macos-dark overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/macos-icons.svg"
              alt="macOS Icons"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- One UI Icons -->
        <div
          class="relative bg-oneui-dark overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/one-ui-icons.svg"
              alt="One UI Icons"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Naruto -->
        <div
          class="relative bg-sky-light overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/naruto.svg"
              alt="Naruto"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Madara -->
        <div
          class="relative bg-purple-light overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute w-full h-full" data-cursor-hover>
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/madara.svg"
              alt="Madara"
              data-cursor-hover
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "@/components/navigation/Nav.vue";
import DesignsNav from "@/components/navigation/DesignsNav.vue";

// SEO Meta tags
useHead({
  title: "Designs - Illustrations",
});

// Reactive state
const active = ref(false);
const zIndex = ref(false);
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
