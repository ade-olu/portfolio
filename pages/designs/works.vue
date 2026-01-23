<template>

  <div
    class="relative h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >

    <!-- Nav -->

    <designs-nav></designs-nav>

    <!-- Works -->

    <div
      class="bg-white-soft relative w-full h-auto pb-16 phone-sm:pb-20 tablet-xs:pb-24"
      :class="{ change: zIndex }"
    >

      <!-- Heading -->

      <div class="text-center">

        <h1
          class="font-heading font-bold text-3xl text-black leading-10 mt-4 phone-sm:text-heading-1 phone-sm:leading-tight xl:mt-2 tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose xl:text-heading-5 xl:leading- 2xl:text-heading-6"
        >

          <span class="relative z-10">Designs</span>

          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 xl:w-56"
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

            <nuxt-link to="/designs/works" data-cursor-hover>

              <span class="active">Works</span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">

            <nuxt-link to="/designs/ui" data-cursor-hover>

              <span class="n-active">UI</span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">

            <nuxt-link to="/designs/illustrations" data-cursor-hover>

              <span class="n-active">Illustrations</span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">

            <nuxt-link to="/designs/3d" data-cursor-hover>

              <span class="n-active">3D</span>

            </nuxt-link>

          </li>

        </ul>

      </div>

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tablet-xs:px-14 tablet-xs:gap-14 lg:mt-20 lg:px-24 lg:grid-cols-2 lg:gap-24"
      >

        <!-- TalkEase -->

        <div
          class="relative bg-talkease rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >

          <img
            class="ml-4 w-width-11 sm:w-28 phone-sm:w-32 tablet-xs:w-width-14 xl:w-width-17"
            src="../../assets/works/talkease.svg"
            alt="TalkEase"
            data-cursor-hover
          />

          <!-- Overlay -->

          <nuxt-link
            to="/works/talkease"
            class="overlay z-20 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
            data-cursor-hover
          >

            <div class="overlay-inner w-full h-full" data-cursor-hover>

              <div
                class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 sm:p-6 tablet-xs:p-10 lg:p-8 xl:p-10"
                data-cursor-hover
              >

                <div
                  class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9"
                  data-cursor-hover
                >

                  <h1
                    class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
                    data-cursor-hover
                  >
                     TalkEase
                  </h1>

                  <p
                    class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                    data-cursor-hover
                  >
                     An app design for real-time multilingual communication using
                    AI translation.
                  </p>

                </div>

                <div
                  class="flex flex-wrap gap-4 tablet-xs:gap-6"
                  data-cursor-hover
                >

                  <span
                    class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                    data-cursor-hover
                  >
                     Figma
                  </span>

                </div>

              </div>

            </div>

          </nuxt-link>

        </div>

        <!-- TripVoyager -->

        <div
          class="relative bg-tripvoyager rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >

          <img
            class="ml-4 w-width-11 sm:w-28 phone-sm:w-32 tablet-xs:w-width-14 xl:w-width-17"
            src="../../assets/works/tripvoyager.svg"
            alt="TripVoyager"
            data-cursor-hover
          />

          <!-- Overlay -->

          <nuxt-link
            to="/works/tripvoyager"
            class="overlay z-20 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
            data-cursor-hover
          >

            <div class="overlay-inner w-full h-full" data-cursor-hover>

              <div
                class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 sm:p-6 tablet-xs:p-10 lg:p-8 xl:p-10"
                data-cursor-hover
              >

                <div
                  class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9"
                  data-cursor-hover
                >

                  <h1
                    class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
                    data-cursor-hover
                  >
                     TripVoyager
                  </h1>

                  <p
                    class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                    data-cursor-hover
                  >
                     An app design for planning vacations and trips.
                  </p>

                </div>

                <div
                  class="flex flex-wrap gap-4 tablet-xs:gap-6"
                  data-cursor-hover
                >

                  <span
                    class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                    data-cursor-hover
                  >
                     Figma
                  </span>

                </div>

              </div>

            </div>

          </nuxt-link>

        </div>

        <!-- FindFont -->

        <div
          class="relative bg-gradient-to-tr from-brand-orange to-brand-orange-light rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >

          <img
            class="ml-4 w-width-11 sm:w-28 phone-sm:w-32 tablet-xs:w-width-14 xl:w-width-17"
            src="../../assets/works/findfont.svg"
            alt="FindFont"
            data-cursor-hover
          />

          <!-- Overlay -->

          <nuxt-link
            to="/works/findfont"
            class="overlay z-20 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
            data-cursor-hover
          >

            <div class="overlay-inner w-full h-full" data-cursor-hover>

              <div
                class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 sm:p-6 tablet-xs:p-10 lg:p-8 xl:p-10"
                data-cursor-hover
              >

                <div
                  class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9"
                  data-cursor-hover
                >

                  <h1
                    class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
                    data-cursor-hover
                  >
                     FindFont
                  </h1>

                  <p
                    class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                    data-cursor-hover
                  >
                     An app design for finding typeface names on images.
                  </p>

                </div>

                <div
                  class="flex flex-wrap gap-4 tablet-xs:gap-6"
                  data-cursor-hover
                >

                  <span
                    class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                    data-cursor-hover
                  >
                     Figma
                  </span>

                </div>

              </div>

            </div>

          </nuxt-link>

        </div>

        <!-- Ear1 -->

        <div
          class="relative bg-ear1 rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >

          <img
            class="w-24 sm:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44"
            src="../../assets/works/ear1.svg"
            alt="Ear1"
            data-cursor-hover
          />

          <!-- Overlay -->

          <nuxt-link
            to="/works/ear1"
            class="overlay z-10 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
            data-cursor-hover
          >

            <div class="overlay-inner w-full h-full" data-cursor-hover>

              <div
                class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 sm:p-6 tablet-xs:p-10 lg:p-8 xl:p-10"
                data-cursor-hover
              >

                <div
                  class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9"
                  data-cursor-hover
                >

                  <h1
                    class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
                    data-cursor-hover
                  >
                     Ear1
                  </h1>

                  <p
                    class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                    data-cursor-hover
                  >
                     A website design concept for Ear1.
                  </p>

                </div>

                <div
                  class="flex flex-wrap gap-4 tablet-xs:gap-6"
                  data-cursor-hover
                >

                  <span
                    class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                    data-cursor-hover
                  >
                     Figma
                  </span>

                </div>

              </div>

            </div>

          </nuxt-link>

        </div>

        <!-- GetFood -->

        <div
          class="relative bg-getfood rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
          data-cursor-hover
        >

          <img
            class="w-24 sm:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44"
            src="../../assets/works/getfood.svg"
            alt="GetFood"
            data-cursor-hover
          />

          <!-- Overlay -->

          <nuxt-link
            to="/works/getfood"
            class="overlay z-10 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
            data-cursor-hover
          >

            <div class="overlay-inner w-full h-full" data-cursor-hover>

              <div
                class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 sm:p-6 tablet-xs:p-10 lg:p-8 xl:p-10"
                data-cursor-hover
              >

                <div
                  class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9"
                  data-cursor-hover
                >

                  <h1
                    class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
                    data-cursor-hover
                  >
                     GetFood
                  </h1>

                  <p
                    class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                    data-cursor-hover
                  >
                     An app design for ordering meals.
                  </p>

                </div>

                <div
                  class="flex flex-wrap gap-4 tablet-xs:gap-6"
                  data-cursor-hover
                >

                  <span
                    class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                    data-cursor-hover
                  >
                     Figma
                  </span>

                </div>

              </div>

            </div>

          </nuxt-link>

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
      title: "Designs - Works",
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

@media screen and (min-width: 1280px) {
  .overlay-inner > * {
    transform: translateY(1.25rem);
    transition: all 200ms;
  }

  .overlay-inner:hover > * {
    transform: translateY(0);
  }
}
</style>

