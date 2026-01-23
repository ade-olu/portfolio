<template>

  <!-- Projects -->

  <div
    class="mt-14 pt-10 pb-14 bg-background-light relative w-full h-auto phone-sm:mt-16 tablet-xs:mt-24 tablet-xs:pt-10 tablet-xs:pb-14 lg:pt-14 lg:pb-24 xl:mt-0"
    id="projects"
  >

    <div class="flex items-center justify-center">

      <div class="text-center overflow-hidden">

        <!-- Heading -->

        <h1
          class="quote font-heading font-bold text-3xl text-black-primary leading-10 phone-sm:text-heading-1 phone-sm:leading-tight tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-"
        >

          <span class="relative z-10">Projects</span>

          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
            data-cursor-hover
          >

            <img
              class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-60"
              src="../assets/accent-line.svg"
              alt="Accent Line"
            />

          </span>

        </h1>

      </div>

    </div>

    <div
      class="grid grid-col-1 px-8 gap-14 mt-11 phone-sm:mt-12 tablet-xs:px-14 tablet-xs:gap-14 lg:mt-16 lg:px-24 lg:grid-cols-2 lg:gap-24"
    >

      <!-- Vect -->

      <div
        class="relative bg-vect rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
      >

        <img
          class="w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44 z-10"
          src="../assets/works/vect.svg"
          alt="Vect"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/vect"
          data-cursor-hover
          class="overlay z-10 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tablet-xs:p-10"
            >

              <!-- Overlay Title & Subtitle -->

              <div class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
                >
                   Vect
                </h1>

                <p
                  class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   A simple tool for sketching and drawing.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tablet-xs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                   HTML
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                   SCSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                   JavaScript
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                   Figma
                </span>

              </div>

            </div>

          </div>

        </nuxt-link>

      </div>

      <!-- Weatherly -->

      <div
        class="relative bg-weatherly rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-6 xl:row-span-8"
      >

        <img
          class="w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44 z-10"
          src="../assets/works/weatherly.svg"
          alt="Weatherly"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/weatherly"
          data-cursor-hover
          class="overlay z-10 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tablet-xs:p-10"
            >

              <div class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
                >
                   Weatherly
                </h1>

                <p
                  class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   An app that provides real-time weather forecasts and metrics for
                  cities around the world.
                </p>

              </div>

              <div class="flex flex-wrap gap-4 tablet-xs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  HTML
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  CSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  JavaScript
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Node.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Figma
                </span>

              </div>

            </div>

          </div>

        </nuxt-link>

      </div>

      <!-- Travu -->

      <div
        class="relative bg-travu-dark-1 rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-6 xl:row-span-8"
      >

        <img
          class="w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44"
          src="../assets/works/travu.svg"
          alt="Travu"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/travu"
          data-cursor-hover
          class="overlay z-20 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tablet-xs:p-10"
            >

              <div class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl 2xl:text-heading-3"
                >
                   Travu
                </h1>

                <p
                  class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   A travel planning and booking website.
                </p>

              </div>

              <div class="flex flex-wrap gap-4 tablet-xs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Vue.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Nuxt.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Tailwind CSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Figma
                </span>

              </div>

            </div>

          </div>

        </nuxt-link>

      </div>

      <!-- Portfolio -->

      <div
        class="relative bg-black-primary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
      >

        <img
          class="w-width-9 xs:w-20 phone-sm:w-24 tablet-xs:w-28 xl:w-36"
          src="../assets/works/portfolio.svg"
          alt="Portfolio"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/portfolio"
          data-cursor-hover
          class="overlay z-20 bg-gradient-to-t from-black-opacity-50 to-black-opacity-10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tablet-xs:p-10"
            >

              <div class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl 2xl:text-heading-3"
                >
                   Portfolio
                </h1>

                <p
                  class="text-gray-light mt-2 phone-sm:text-lg tablet-xs:mt-5 tablet-xs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   My portfolio website.
                </p>

              </div>

              <div class="flex flex-wrap gap-4 tablet-xs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Vue.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Nuxt.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
                >
                  Tailwind CSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs phone-sm:text-sm tablet-xs:text-base px-4 py-1.5 tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap"
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

</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .overlay-inner > * {
    transform: translateY(1.25rem);
    transition: all 200ms;
  }

  .overlay-inner:hover > * {
    transform: translateY(0);
  }
}

@media screen and (min-width: 1500px) {
  .tw-css {
    margin-right: 0px !important;
  }
}
</style>

