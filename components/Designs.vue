<template>
  <!-- Designs -->
  <div
    class="mt-2 pt-10 pb-14 bg-white relative w-full h-auto phone:mt-4 tab:mt-10 tab:pt-10 tab:pb-14 large:mt-8 large:pt-14 large:pb-24 xlarge:mt-14"
    id="designs"
  >
    <div class="flex items-center justify-center">
      <div class="text-center overflow-hidden">
        <!-- Heading -->
        <h1
          class="quote font-head font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-pht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-xlfsize xlarge:leading-xlglht 2xlarge:text-2xlfsize"
        >
          <span class="relative z-10">Designs</span>
          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
          >
            <img
              class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-56"
              src="../assets/accent-line.svg"
              alt="Accent Line"
            />
          </span>
        </h1>
      </div>
    </div>

    <div
      class="grid grid-col-1 px-8 gap-14 mt-11 phone:mt-12 tab:px-14 tab:gap-14 large:mt-16 large:px-24 large:grid-cols-2 large:gap-24"
    >
      <!-- Talkease -->
      <div
        class="relative bg-talkease rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
      >
        <img
          class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44"
          src="../assets/works/talkease.svg"
          alt="TalkEase"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/talkease"
          class="overlay z-20 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
        >
          <div class="overlay-inner w-full h-full">
            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 small:p-6 tab:p-10"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-5 tab:mb-9 large:mb-7 xlarge:mb-9">
                <h1
                  class="font-head text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  TalkEase
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                An app design for real-time multilingual communication using AI translation.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
                >
                  Figma
                </span>
              </div>
            </div>
            <hover class="absolute w-full h-full"></hover>
          </div>
        </nuxt-link>
      </div>

      <!-- TripVoyager -->
      <div
        class="relative bg-tripvoyager rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-6 xlarge:row-span-8"
      >
        <img
          class="ml-4 w-xt3 small:w-28 phone:w-32 tab:w-ff3 xlarge:w-ff4"
          src="../assets/works/tripvoyager.svg"
          alt="TripVoyager"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/tripvoyager"
          class="overlay z-20 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
        >
          <div class="overlay-inner w-full h-full">
            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 small:p-6 tab:p-10"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-5 tab:mb-9 large:mb-7 xlarge:mb-9">
                <h1
                  class="font-head text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  TripVoyager
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                An app design for planning vacations and trips.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
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
        class="relative bg-gradient-to-tr from-orange to-orange2 rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-6 xlarge:row-span-8"
      >
        <img
          class="ml-4 w-xt3 small:w-28 phone:w-32 tab:w-ff3 xlarge:w-ff4"
          src="../assets/works/findfont.svg"
          alt="FindFont"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/findfont"
          class="overlay z-20 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
        >
          <div class="overlay-inner w-full h-full">
            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 small:p-6 tab:p-10"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-5 tab:mb-9 large:mb-7 xlarge:mb-9">
                <h1
                  class="font-head text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  FindFont
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                  An app design for finding typeface names on images.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
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
        class="relative bg-ear1 rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
      >
        <img
          class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44"
          src="../assets/works/ear1.svg"
          alt="Ear1"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/ear1"
          class="overlay z-10 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
        >
          <div class="overlay-inner w-full h-full">
            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 small:p-6 tab:p-10"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-5 tab:mb-9 large:mb-7 xlarge:mb-9">
                <h1
                  class="font-head text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  Ear1
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                  A website design concept for Ear1.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
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
        class="relative bg-getfood rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
      >
        <img
          class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44"
          src="../assets/works/getfood.svg"
          alt="GetFood"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/getfood"
          class="overlay z-10 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
        >
          <div class="overlay-inner w-full h-full">
            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 small:p-6 tab:p-10"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-5 tab:mb-9 large:mb-7 xlarge:mb-9">
                <h1
                  class="font-head text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  GetFood
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                  An app design for ordering meals.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
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
export default {}
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
