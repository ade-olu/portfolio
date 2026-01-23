<template>

  <!-- Projects -->

  <div
    class="mt-14 pt-10 pb-14 bg-backgroundLight relative w-full h-auto phoneSm:mt-16 tabletXs:mt-24 tabletXs:pt-10 tabletXs:pb-14 lg:pt-14 lg:pb-24 xl:mt-0"
    id="projects"
  >

    <div class="flex items-center justify-center">

      <div class="text-center overflow-hidden">

        <!-- Heading -->

        <h1
          class="quote font-heading font-bold text-3xl text-blackPrimary leading-10 phoneSm:text-heading-1 phoneSm:leading-tight tabletXs:text-heading-2 tabletXs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-extraLoose"
        >

          <span class="relative z-10">Projects</span>

          <span
            class="relative flex justify-center items-center -mt-4 z-0 phoneSm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-32 phoneSm:w-36 tabletXs:w-44 lg:w-48 2xl:w-60"
              src="../assets/accent-line.svg"
              alt="Accent Line"
            />

          </span>

        </h1>

      </div>

    </div>

    <div
      class="grid grid-col-1 px-8 gap-14 mt-11 phoneSm:mt-12 tabletXs:px-14 tabletXs:gap-14 lg:mt-16 lg:px-24 lg:grid-cols-2 lg:gap-24"
    >

      <!-- Vect -->

      <div
        class="relative bg-vectPrimary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
      >

        <img
          class="w-24 xs:w-width-11 phoneSm:w-width-12 tabletXs:w-36 xl:w-44 z-10"
          src="../assets/works/vect.svg"
          alt="Vect"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/vect"
          class="overlay z-10 bg-gradient-to-t from-blackOpacity50 to-blackOpacity10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tabletXs:p-10"
            >

              <!-- Overlay Title & Subtitle -->

              <div class="mb-5 tabletXs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white text-2xl phoneSm:text-display tabletXs:text-4xl lg:text-4xl xl:text-heading-3"
                >
                   Vect
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   A simple tool for sketching and drawing.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   HTML
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   SCSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   JavaScript
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Figma
                </span>

              </div>

            </div>

            <hover class="absolute w-full h-full"></hover>

          </div>

        </nuxt-link>

        <img
          class="absolute w-full h-full"
          src="../assets/noise.png"
          alt="noise"
        />

      </div>

      <!-- Weatherly -->

      <div
        class="relative bg-weatherly rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-6 xl:row-span-8"
      >

        <img
          class="w-24 xs:w-width-11 phoneSm:w-width-12 tabletXs:w-36 xl:w-44 z-10"
          src="../assets/works/weatherly.svg"
          alt="Weatherly"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/weatherly"
          class="overlay z-10 bg-gradient-to-t from-blackOpacity50 to-blackOpacity10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tabletXs:p-10"
            >

              <!-- Overlay Title & Subtitle -->

              <div class="mb-5 tabletXs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white text-2xl phoneSm:text-display tabletXs:text-4xl lg:text-4xl xl:text-heading-3"
                >
                   Weatherly
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   An app that provides real-time weather forecasts and metrics for
                  cities around the world.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   HTML
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   CSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   JavaScript
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Node.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Figma
                </span>

              </div>

            </div>

            <hover class="absolute w-full h-full"></hover>

          </div>

        </nuxt-link>

        <img
          class="absolute w-full h-full"
          src="../assets/noise.png"
          alt="noise"
        />

      </div>

      <!-- Travu -->

      <div
        class="relative bg-travuPrimary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-6 xl:row-span-8"
      >

        <img
          class="w-24 xs:w-width-11 phoneSm:w-width-12 tabletXs:w-36 xl:w-44"
          src="../assets/works/travu.svg"
          alt="Travu"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/travu"
          class="overlay z-20 bg-gradient-to-t from-blackOpacity50 to-blackOpacity10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tabletXs:p-10"
            >

              <!-- Overlay Title & Subtitle -->

              <div class="mb-5 tabletXs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white text-2xl phoneSm:text-display tabletXs:text-4xl lg:text-4xl 2xl:text-heading-3"
                >
                   Travu
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   A travel planning and booking website.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Vue.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Nuxt.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Tailwind CSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Figma
                </span>

              </div>

            </div>

            <hover class="absolute w-full h-full"></hover>

          </div>

        </nuxt-link>

      </div>

      <!-- Portfolio -->

      <div
        class="relative bg-blackPrimary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
      >

        <img
          class="w-width-9 xs:w-20 phoneSm:w-24 tabletXs:w-28 xl:w-36"
          src="../assets/works/portfolio.svg"
          alt="Portfolio"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/portfolio"
          class="overlay z-20 bg-gradient-to-t from-blackOpacity50 to-blackOpacity10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
        >

          <div class="overlay-inner w-full h-full">

            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 xs:p-6 tabletXs:p-10"
            >

              <!-- Overlay Title & Subtitle -->

              <div class="mb-5 tabletXs:mb-9 lg:mb-7 xl:mb-9">

                <h1
                  class="font-heading text-white text-2xl phoneSm:text-display tabletXs:text-4xl lg:text-4xl 2xl:text-heading-3"
                >
                   Portfolio
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   My portfolio website.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Vue.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Nuxt.js
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Tailwind CSS
                </span>

                <span
                  class="inline-flex items-center justify-center font-bold bg-gray text-white rounded-full text-xs phoneSm:text-sm tabletXs:text-base px-4 py-1.5 tabletXs:px-6 tabletXs:py-2 whitespace-nowrap"
                >
                   Figma
                </span>

              </div>

            </div>

            <hover class="absolute w-full h-full"></hover>

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

