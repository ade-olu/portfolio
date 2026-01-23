<template>

  <div
    class="relative container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >

    <!-- Nav -->

    <navigation></navigation>

    <!-- TripVoyager -->

    <div
      class="bg-white-soft relative w-full h-auto pb-16 phone-sm:pb-20 tablet-xs:pb-24"
      :class="{ change: zIndex }"
    >

      <!-- Heading -->

      <div class="text-center">

        <h1
          class="font-heading font-bold text-3xl text-black-primary leading-10 mt-4 phone-sm:text-heading-1 phone-sm:leading-tight xl:mt-2 tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose xl:text-heading-5 xl:leading- 2xl:text-heading-6"
        >

          <span class="relative z-20">TripVoyager</span>

          <span
            class="relative w-full flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-52 phone-sm:w-56 tablet-xs:w-64 lg:w-72 xl:w-80"
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
              class="font-heading font-bold text-xl text-black-primary phone-sm:text-2xl tablet-xs:text-display"
            >
               About
            </h2>

            <p
              class="text-gray-dark mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:max-w-max-width-5 2xl:max-w-max-width-6"
            >
               TripVoyager is an app design project that helps people plan their
              vacations and trips more effectively.
            </p>

          </div>

          <!-- Technologies (For Screens Lower Than 1280px) -->

          <div class="mt-12 tablet-xs:mt-14 xl:hidden">

            <h2
              class="font-heading font-bold text-xl text-black-primary mb-5 phone-sm:text-2xl tablet-xs:mb-8 lg:mb-7 tablet-xs:text-display"
            >
               Technologies
            </h2>

            <div class="flex flex-wrap">

              <span
                class="font-bold hidden bg-gray-dark text-white-soft rounded-full w-auto px-6 py-1.5 sm:block phone-sm:text-lg tablet-xs:text-xl tablet-xs:py-2 lg:text-xl lg:px-8"
              >
                Figma
              </span>

            </div>

          </div>

          <!-- Link -->

          <div class="mt-16 tablet-xs:mt-20 xl:mt-36">

            <h2
              class="font-heading font-bold text-xl text-black-primary phone-sm:text-2xl tablet-xs:text-display"
            >
               Link
            </h2>

            <a href="https://bit.ly/4ghBK7v" target="_blank">
              <p
                class="text-gray-dark mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4"
              >
                 TripVoyager
              </p>
            </a>

          </div>

        </div>

        <!-- Technologies (For Screens Higher Than 1279px) -->

        <div class="hidden xl:mt-16 xl:pr-spacing-2 xl:block xl:mr-special">

          <div>

            <h2
              class="font-heading font-bold text-xl text-black-primary mb-5 phone-sm:text-2xl tablet-xs:mb-8 lg:mb-7 tablet-xs:text-display"
            >
               Technologies
            </h2>

            <div class="flex mb-6 sm:mb-6 tablet-xs:mb-10 lg:mb-10">

              <span
                class="font-bold bg-gray-dark text-white-soft rounded-full w-auto px-6 py-1.5 phone-sm:text-lg tablet-xs:text-xl tablet-xs:py-2 lg:text-xl lg:px-8"
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
      title: "Designs - TalkEase",
    };
  },

  data() {
    return {
      active: false,
      zIndex: false,
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>

