<template>
  <div
    class="relative container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <navigation></navigation>

    <!-- Portfolio -->
    <div
      class="bg-white relative w-full h-auto pb-16 phone:pb-20 tab:pb-24"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <div class="text-center">
        <h1
          class="font-head font-bold text-3xl text-black leading-10 mt-4 phone:text-fsize phone:leading-pht xlarge:mt-2 tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht 2xlarge:text-2xlfsize 2xlarge:leading-xlglht"
        >
          <span class="relative z-10">Portfolio</span>
          <span
            class="relative w-full flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
          >
            <img
              class="w-36 phone:w-40 tab:w-48 large:w-52 2xlarge:w-64"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />
          </span>
        </h1>
      </div>

      <div class="xlarge:flex xlarge:justify-between xlarge:items-start">
        <div
          class="mt-t px-8 phone:mt-14 tab:mt-16 tab:px-14 large:px-20 xlarge:px-spc"
        >
          <!-- About -->
          <div>
            <h2
              class="font-head font-bold text-xl text-black phone:text-2xl tab:text-fsz"
            >
              About
            </h2>
            <p
              class="text-grey mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:max-w-mw 2xlarge:max-w-mw2"
            >
              A portfolio project that showcases my projects and designs.
            </p>
          </div>

          <!-- Technologies (For Screens Lower Than 1280px) -->
          <div class="mt-12 tab:mt-14 xlarge:hidden">
            <h2
              class="font-head font-bold text-xl text-black mb-5 phone:text-2xl tab:mb-8 large:mb-7 tab:text-fsz"
            >
              Technologies
            </h2>
            <div class="flex flex-wrap">
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl tab:py-2 large:px-8 large:py-2"
                >Vue.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 ml-6 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl large:ml-10 large:text-xl tab:py-2 large:px-8 large:py-2"
                >Nuxt.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 mt-6 mr-6 small:mr-6 small:mt-6 phone:text-lg tab:mt-0 tab:ml-10 tab:mr-10 tab:text-xl tab:py-2 large:px-8 large:py-2"
                >Tailwind CSS</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 mt-6 small:mt-6 phone:text-lg tab:mt-0 tab:text-xl tab:py-2 large:px-8"
                >Figma</span
              >
            </div>
          </div>

          <!-- Link -->
          <div class="mt-16 tab:mt-20 xlarge:mt-36">
            <h2
              class="font-head font-bold text-xl text-black phone:text-2xl tab:text-fsz"
            >
              Link
            </h2>
            <a href="https://adeolu.netlify.app" target="_blank"
              ><p
                class="text-grey mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4"
              >
                <hover>https://adeolu.netlify.app</hover>
              </p></a
            >
          </div>
        </div>

        <!-- Technologies (For Screens Higher Than 1279px) -->
        <div class="hidden xlarge:block xlarge:pr-spc2 xlarge:mt-16">
          <div>
            <h2
              class="font-head font-bold text-xl text-black mb-5 phone:text-2xl tab:mb-8 large:mb-7 tab:text-fsz"
            >
              Technologies
            </h2>
            <div class="flex mb-6 small:mb-6 tab:mb-10 large:mb-10">
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 text-xl"
                >Vue.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 ml-10 text-xl"
                >Nuxt.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 ml-10 text-xl"
                >Tailwind CSS</span
              >
            </div>
            <div class="flex">
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 text-xl"
                >Figma</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import Navigation from "../../components/Navigation";

export default {
  components: {
    Navigation,
  },

  head() {
    return {
      title: "Projects - Portfolio",
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>
