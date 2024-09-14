<template>
  <div
    class="relative container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <navigation></navigation>

    <!-- GetFood -->
    <div
      class="bg-white relative w-full h-auto pb-16 phone:pb-20 tab:pb-24"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <div class="text-center">
        <h1
          class="font-head font-bold text-3xl text-black leading-10 mt-4 phone:text-fsize phone:leading-pht xlarge:mt-2 tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht 2xlarge:text-2xlfsize 2xlarge:leading-xlglht"
        >
          <span class="relative z-20">GetFood</span>
          <span
            class="relative w-full flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
          >
            <img
              class="w-36 phone:w-40 tab:w-48 large:w-52 2xlarge:w-60"
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
              GetFood is an app design project that allows you to easily order
              meals and pick them up at your school's cafeteria.
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
                class="font-bold hidden bg-grey text-white rounded-full w-auto px-6 py-1.5 small:block phone:text-lg tab:text-xl tab:py-2 large:text-xl large:px-8"
              >
                Figma
              </span>
            </div>
          </div>

          <!-- Link -->
          <div class="mt-16 tab:mt-20 xlarge:mt-36">
            <h2
              class="font-head font-bold text-xl text-black phone:text-2xl tab:text-fsz"
            >
              Link
            </h2>
            <a href="https://bit.ly/305QZ1x" target="_blank">
              <p
                class="text-grey mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4"
              >
                <hover>GetFood</hover>
              </p>
            </a>
          </div>
        </div>

        <!-- Technologies (For Screens Higher Than 1279px) -->
        <div
          class="hidden xlarge:mt-16 xlarge:pr-spc2 xlarge:block xlarge:mr-mr-sp"
        >
          <div>
            <h2
              class="font-head font-bold text-xl text-black mb-5 phone:text-2xl tab:mb-8 large:mb-7 tab:text-fsz"
            >
              Technologies
            </h2>
            <div class="flex mb-6 small:mb-6 tab:mb-10 large:mb-10">
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl tab:py-2 large:text-xl large:px-8"
              >
                Figma
              </span>
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
      title: "Designs - GetFood",
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>
