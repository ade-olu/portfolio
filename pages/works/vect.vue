<template>

  <div
    class="relative container font-body bg-whiteSoft"
    :class="{ stop: active }"
    id="container"
  >

    <!-- Nav -->

    <navigation></navigation>

    <!-- Vect -->

    <div
      class="bg-whiteSoft relative w-full h-auto pb-16 phone-sm:pb-20 tablet-xs:pb-24"
      :class="{ change: zIndex }"
    >

      <!-- Heading -->

      <div class="text-center">

        <h1
          class="font-heading font-bold text-3xl text-blackPrimary leading-10 mt-4 phone-sm:text-heading-1 phone-sm:leading-tight xl:mt-2 tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose xl:text-heading-5 xl:leading-extraLoose 2xl:text-heading-6"
        >

          <span class="relative z-20">Vect</span>

          <span
            class="relative w-full flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-28 phone-sm:w-32 tablet-xs:w-40"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />

          </span>

        </h1>

      </div>

      <div class="xl:flex xl:justify-between xl:items-start">

        <div
          class="mt-large px-8 phone-sm:mt-14 tablet-xs:mt-16 tablet-xs:px-14 lg:px-20 xl:px-spacing-1"
        >

          <!-- About -->

          <div>

            <h2
              class="font-heading font-bold text-xl text-blackPrimary phone-sm:text-2xl tablet-xs:text-display"
            >
               About
            </h2>

            <p
              class="text-grayDark mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:max-w-max-width-5 2xl:max-w-max-width-6"
            >
               Vect is a simple drawing tool that lets you create sketches, drawings,
              and visual ideas.
            </p>

          </div>

          <!-- Technologies (For Screens Lower Than 1280px) -->

          <div class="mt-12 tablet-xs:mt-14 xl:hidden">

            <h2
              class="font-heading font-bold text-xl text-blackPrimary mb-5 phone-sm:text-2xl tablet-xs:mb-8 lg:mb-7 tablet-xs:text-display"
            >
               Technologies
            </h2>

            <div class="flex flex-wrap">

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-6 py-1.5 phone-sm:text-lg tablet-xs:text-xl lg:text-xl tablet-xs:py-2 lg:px-8 lg:py-2"
              >
                HTML
              </span>

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-6 py-1.5 ml-6 sm:ml-6 tablet-xs:ml-10 phone-sm:text-lg tablet-xs:text-xl lg:ml-10 lg:text-xl tablet-xs:py-2 lg:px-8 lg:py-2"
              >
                CSS
              </span>

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-6 py-1.5 mt-6 mr-6 sm:mr-6 sm:mt-6 phone-sm:text-lg tablet-xs:mt-0 tablet-xs:ml-10 tablet-xs:mr-10 tablet-xs:text-xl tablet-xs:py-2 lg:px-8 lg:py-2"
              >
                JavaScript
              </span>

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-6 py-1.5 mt-6 sm:mt-6 phone-sm:text-lg tablet-xs:mt-0 tablet-xs:text-xl tablet-xs:py-2 lg:px-8"
              >
                Figma
              </span>

            </div>

          </div>

          <!-- Link -->

          <div class="mt-16 tablet-xs:mt-20 xl:mt-36">

            <h2
              class="font-heading font-bold text-xl text-blackPrimary phone-sm:text-2xl tablet-xs:text-display"
            >
               Link
            </h2>

            <a href="https://vectstudio.vercel.app" target="_blank">
              <p
                class="text-grayDark mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4"
              >

                <hover>https://vectstudio.vercel.app</hover>

              </p>
            </a>

          </div>

        </div>

        <!-- Technologies (For Screens Higher Than 1279px) -->

        <div class="hidden xl:mt-16 xl:pr-spacing-2 xl:block">

          <div>

            <h2
              class="font-heading font-bold text-xl text-blackPrimary mb-5 phone-sm:text-2xl tablet-xs:mb-8 lg:mb-7 tablet-xs:text-display"
            >
               Technologies
            </h2>

            <div class="flex mb-6 sm:mb-6 tablet-xs:mb-10 lg:mb-10">

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-8 py-2 text-xl"
              >
                HTML
              </span>

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-8 py-2 ml-10 text-xl"
              >
                SCSS
              </span>

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-8 py-2 ml-10 text-xl"
              >
                JavaScript
              </span>

            </div>

            <div class="flex">

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-8 py-2 text-xl"
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
      title: "Projects - Vect",
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>

