<template>

  <!-- Designs -->

  <div
    class="mt-2 pt-10 pb-14 bg-white relative w-full h-auto phoneSm:mt-4 tabletXs:mt-10 tabletXs:pt-10 tabletXs:pb-14 lg:mt-8 lg:pt-14 lg:pb-24 xl:mt-14"
    id="designs"
  >

    <div class="flex items-center justify-center">

      <div class="text-center overflow-hidden">

        <!-- Heading -->

        <h1
          class="quote font-heading font-bold text-3xl text-blackPrimary leading-10 phoneSm:text-heading-1 phoneSm:leading-tight tabletXs:text-heading-2 tabletXs:leading-normal lg:text-heading-4 lg:leading-loose xl:text-heading-5 xl:leading-extraLoose 2xl:text-heading-6"
        >

          <span class="relative z-10">Designs</span>

          <span
            class="relative flex justify-center items-center -mt-4 z-0 phoneSm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-32 phoneSm:w-36 tabletXs:w-44 lg:w-48 xl:w-56"
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

      <!-- Talkease -->

      <div
        class="relative bg-talkeasePrimary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
      >

        <img
          class="w-24 xs:w-width-11 phoneSm:w-width-12 tabletXs:w-36 xl:w-44"
          src="../assets/works/talkease.svg"
          alt="TalkEase"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/talkease"
          class="overlay z-20 bg-gradient-to-t from-blackOpacity50 to-blackOpacity10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
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
                   TalkEase
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   An app design for real-time multilingual communication using AI
                  translation.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

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

      <!-- TripVoyager -->

      <div
        class="relative bg-tripvoyagerPrimary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-6 xl:row-span-8"
      >

        <img
          class="ml-4 w-width-11 xs:w-28 phoneSm:w-32 tabletXs:w-width-14 xl:w-width-17"
          src="../assets/works/tripvoyager.svg"
          alt="TripVoyager"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/tripvoyager"
          class="overlay z-20 bg-gradient-to-t from-blackOpacity50 to-blackOpacity10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
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
                   TripVoyager
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   An app design for planning vacations and trips.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

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

      <!-- FindFont -->

      <div
        class="relative bg-gradient-to-tr from-brandOrange to-brandOrangeLight rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-6 xl:row-span-8"
      >

        <img
          class="ml-4 w-width-11 xs:w-28 phoneSm:w-32 tabletXs:w-width-14 xl:w-width-17"
          src="../assets/works/findfont.svg"
          alt="FindFont"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/findfont"
          class="overlay z-20 bg-gradient-to-t from-blackOpacity50 to-blackOpacity10 rounded-md absolute w-full h-full xl:opacity-0 xl:transition-all xl:duration-200 hover:opacity-100"
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
                   FindFont
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   An app design for finding typeface names on images.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

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

      <!-- Ear1 -->

      <div
        class="relative bg-ear1Primary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
      >

        <img
          class="w-24 xs:w-width-11 phoneSm:w-width-12 tabletXs:w-36 xl:w-44"
          src="../assets/works/ear1.svg"
          alt="Ear1"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/ear1"
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
                   Ear1
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   A website design concept for Ear1.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

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

      <!-- GetFood -->

      <div
        class="relative bg-getfoodPrimary rounded-md grid justify-center items-center row-span-6 xs:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
      >

        <img
          class="w-24 xs:w-width-11 phoneSm:w-width-12 tabletXs:w-36 xl:w-44"
          src="../assets/works/getfood.svg"
          alt="GetFood"
        />

        <!-- Overlay -->

        <nuxt-link
          to="/works/getfood"
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
                   GetFood
                </h1>

                <p
                  class="text-grayLight mt-2 phoneSm:text-lg tabletXs:mt-5 tabletXs:text-xl lg:text-xl lg:mt-4 xl:mt-5"
                >
                   An app design for ordering meals.
                </p>

              </div>

              <!-- Technologies -->

              <div class="flex flex-wrap gap-4 tabletXs:gap-6">

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
</style>

