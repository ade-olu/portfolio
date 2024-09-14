<template>
  <div
    class="relative h-screen container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <designs-nav></designs-nav>

    <!-- Illustrations -->
    <div
      class="bg-white relative w-full h-auto pb-16 phone:pb-20 tab:pb-24"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <div class="text-center">
        <h1
          class="font-head font-bold text-3xl text-black leading-10 mt-4 phone:text-fsize phone:leading-pht xlarge:mt-2 tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht 2xlarge:text-2xlfsize 2xlarge:leading-xlglht"
        >
          <span class="relative z-10">Designs</span>
          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
          >
            <img
              class="w-32 phone:w-36 tab:w-44 large:w-48 2xlarge:w-56"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />
          </span>
        </h1>
      </div>

      <!-- Navigation -->
      <div class="flex justify-center mt-t phone:mt-14 tab:mt-16">
        <ul
          class="nav-links flex flex-row items-center phone:text-lg large:text-xl text-black"
          id="nLinks"
        >
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/works">
              <span><hover class="n-active">Works</hover></span>
            </nuxt-link>
          </li>
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/ui">
              <span class="n-active"><hover>UI</hover></span>
            </nuxt-link>
          </li>
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/illustrations">
              <span class="active"><hover>Illustrations</hover></span>
            </nuxt-link>
          </li>
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/3d">
              <span class="n-active"><hover>3D</hover></span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tab:px-14 tab:gap-14 large:mt-20 large:px-24 large:grid-cols-2 large:gap-24"
      >
        <!-- Astronaut -->
        <div
          class="relative overflow-hidden rounded-md grid justify-end items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/astronaut.svg"
              alt="Astronaut"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Desktop -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
          style="background: #546dee;"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/desktop.svg"
              alt="Desktop"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Standing -->
        <div
          class="relative bg-lightpurple overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/standing.svg"
              alt="Standing"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Coding -->
        <div
          class="relative bg-lightpurple overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/coding.svg"
              alt="Coding"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Coding 2 -->
        <div
          class="relative bg-lightpurple overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/coding-2.svg"
              alt="Coding 2"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Deadpool -->
        <div
          class="relative bg-lightskyblue overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/deadpool.svg"
              alt="Deadpool"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- macOS Icons -->
        <div
          class="relative bg-macos overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/macos-icons.svg"
              alt="macOS Icons"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- One UI Icons -->
        <div
          class="relative bg-oneui overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md"
              src="../../assets/designs/illustrations/one-ui-icons.svg"
              alt="One UI Icons"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Naruto -->
        <div
          class="relative bg-lightskyblue overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/naruto.svg"
              alt="Naruto"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Madara -->
        <div
          class="relative bg-lightpurple overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute w-full h-full">
            <img
              class="w-full h-full rounded-md object-cover"
              src="../../assets/designs/illustrations/madara.svg"
              alt="Madara"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import DesignsNav from "../../components/DesignsNav";

export default {
  components: {
    DesignsNav,
  },

  head() {
    return {
      title: "Designs - Illustrations",
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>
