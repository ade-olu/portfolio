<template>
  <div
    class="relative h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <DesignsNav />

    <!-- UI -->
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
      <div class="flex justify-center mt-large phone-sm:mt-14 tablet-xs:mt-16">
        <ul
          class="nav-links flex flex-row items-center phone-sm:text-lg lg:text-xl text-black"
          id="nLinks"
        >
          <li class="mx-3 sm:mx-5 phone-sm:mx-6">
            <NuxtLink to="/designs/works" data-cursor-hover>
              <span class="n-active">Works</span>
            </NuxtLink>
          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">
            <NuxtLink to="/designs/ui" data-cursor-hover>
              <span class="active">UI</span>
            </NuxtLink>
          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">
            <NuxtLink to="/designs/illustrations" data-cursor-hover>
              <span class="n-active">Illustrations</span>
            </NuxtLink>
          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">
            <NuxtLink to="/designs/3d" data-cursor-hover>
              <span class="n-active">3D</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tablet-xs:px-14 tablet-xs:gap-14 lg:mt-20 lg:px-24 lg:grid-cols-2 lg:gap-24"
      >
        <!-- Travu -->
        <div
          class="relative bg-travu-dark-2 overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute px-6 tablet-xs:px-10" data-cursor-hover>
            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/travu.svg"
              alt="Travu"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Portfolio -->
        <div
          class="relative bg-black overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >
          <div class="absolute p-6 pb-0 tablet-xs:p-10" data-cursor-hover>
            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/portfolio.svg"
              alt="Portfolio"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Wallet App -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #ebf1ff"
          data-cursor-hover
        >
          <div class="py-6 mx-auto tablet-xs:py-10" data-cursor-hover>
            <img
              class="w-auto h-height-10 sm:h-72 phone-sm:h-height-16 tablet-xs:h-height-18 lg:h-height-15 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/wallet-app.svg"
              alt="Wallet App"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- VenZone -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #f2ebe6"
          data-cursor-hover
        >
          <div class="absolute p-6 pb-0 z-10 tablet-xs:p-10" data-cursor-hover>
            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/venzone.svg"
              alt="VenZone"
              data-cursor-hover
            />
          </div>

          <img
            class="absolute w-full h-full"
            src="../../assets/noise.png"
            alt="Noise"
            data-cursor-hover
          />
        </div>

        <!-- VenZone App -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #f2ebe6"
          data-cursor-hover
        >
          <div class="py-6 z-10 mx-auto flex tablet-xs:py-10" data-cursor-hover>
            <img
              class="w-auto mr-6 h-48 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:mr-10 tablet-xs:h-height-18 lg:h-height-14 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/venzone-app1.svg"
              alt="VenZone App"
              data-cursor-hover
            />

            <img
              class="w-auto h-48 mt-12 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:h-height-18 tablet-xs:mt-0 lg:h-height-14 lg:mt-20 xl:mt-0 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/venzone-app2.svg"
              alt="VenZone App"
              data-cursor-hover
            />
          </div>

          <img
            class="absolute w-full h-full"
            src="../../assets/noise.png"
            alt="Noise"
            data-cursor-hover
          />
        </div>

        <!-- Ear1 -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #00bf69"
          data-cursor-hover
        >
          <div class="absolute p-6 pb-0 tablet-xs:p-10" data-cursor-hover>
            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/ear1.svg"
              alt="Ear1"
              data-cursor-hover
            />
          </div>
        </div>

        <!-- Ear1 App -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #00bf69"
          data-cursor-hover
        >
          <div class="py-6 mx-auto flex tablet-xs:py-10" data-cursor-hover>
            <img
              class="w-auto mr-6 h-48 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:mr-10 tablet-xs:h-height-18 lg:h-height-14 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/ear1-app1.svg"
              alt="Ear1 App"
              data-cursor-hover
            />

            <img
              class="w-auto h-48 mt-12 sm:h-height-11 phone-sm:h-height-13 phone-lg:h-height-14 tablet-xs:h-height-18 tablet-xs:mt-0 lg:h-height-14 lg:mt-20 xl:mt-0 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/ear1-app2.svg"
              alt="Ear1 App"
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

// SEO Meta tags
useHead({
  title: "Designs - UI",
});

// Reactive state
const active = ref(false);
const zIndex = ref(false);
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
