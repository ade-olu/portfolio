<template>

  <div
    class="relative container font-body bg-whiteSoft"
    :class="{ stop: active }"
    id="container"
  >

    <!-- Nav -->

    <navigation></navigation>

    <!-- Ear1 -->

    <div
      class="bg-whiteSoft relative w-full h-auto pb-16 phoneSm:pb-20 tabletXs:pb-24"
      :class="{ change: zIndex }"
    >

      <!-- Heading -->

      <div class="text-center">

        <h1
          class="font-heading font-bold text-3xl text-blackPrimary leading-10 mt-4 phoneSm:text-heading-1 phoneSm:leading-tight xl:mt-2 tabletXs:text-heading-2 tabletXs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-extraLoose"
        >

          <span class="relative z-20">Ear1</span>

          <span
            class="relative w-full flex justify-center items-center -mt-4 z-0 phoneSm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-28 phoneSm:w-32 tabletXs:w-40 lg:w-44 2xl:w-48"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />

          </span>

        </h1>

      </div>

      <div class="xl:flex xl:justify-between xl:items-start">

        <div
          class="mt-large px-8 phoneSm:mt-14 tabletXs:mt-16 tabletXs:px-14 lg:px-20 xl:px-spacing-1"
        >

          <!-- About -->

          <div>

            <h2
              class="font-heading font-bold text-xl text-blackPrimary phoneSm:text-2xl tabletXs:text-display"
            >
               About
            </h2>

            <p
              class="text-grayDark mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:max-w-max-width-5 2xl:max-w-max-width-6"
            >
               Ear1 is a website design concept project that involves influencers
              getting paid from people who wants to chat with them.
            </p>

          </div>

          <!-- Technologies (For Screens Lower Than 1280px) -->

          <div class="mt-12 tabletXs:mt-14 xl:hidden">

            <h2
              class="font-heading font-bold text-xl text-blackPrimary mb-5 phoneSm:text-2xl tabletXs:mb-8 lg:mb-7 tabletXs:text-display"
            >
               Technologies
            </h2>

            <div class="flex flex-wrap">

              <span
                class="font-bold hidden bg-grayDark text-whiteSoft rounded-full w-auto px-6 py-1.5 sm:block phoneSm:text-lg tabletXs:text-xl tabletXs:py-2 lg:text-xl lg:px-8"
              >
                Figma
              </span>

            </div>

          </div>

          <!-- Link -->

          <div class="mt-16 tabletXs:mt-20 xl:mt-36">

            <h2
              class="font-heading font-bold text-xl text-blackPrimary phoneSm:text-2xl tabletXs:text-display"
            >
               Link
            </h2>

            <a href="https://bit.ly/3uExrLS" target="_blank">
              <p
                class="text-grayDark mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4"
              >

                <hover>Ear1</hover>

              </p>
            </a>

          </div>

        </div>

        <!-- Technologies (For Screens Higher Than 1279px) -->

        <div class="hidden xl:mt-16 xl:pr-spacing-2 xl:block xl:mr-special">

          <div>

            <h2
              class="font-heading font-bold text-xl text-blackPrimary mb-5 phoneSm:text-2xl tabletXs:mb-8 lg:mb-7 tabletXs:text-display"
            >
               Technologies
            </h2>

            <div class="flex mb-6 sm:mb-6 tabletXs:mb-10 lg:mb-10">

              <span
                class="font-bold bg-grayDark text-whiteSoft rounded-full w-auto px-6 py-1.5 phoneSm:text-lg tabletXs:text-xl tabletXs:py-2 lg:text-xl lg:px-8"
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
      title: "Designs - Ear1",
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>
