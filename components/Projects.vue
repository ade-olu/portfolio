<template>
  <!-- Projects -->
  <div
    class="mt-14 pt-10 pb-14 bg-light relative w-full h-auto phone:mt-16 tab:mt-24 tab:pt-10 tab:pb-14 large:pt-14 large:pb-24 xlarge:mt-0"
    id="projects"
  >
    <div class="flex items-center justify-center">
      <div class="text-center overflow-hidden">
        <!-- Heading -->
        <h1
          class="quote font-head font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-pht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-xlfsize xlarge:leading-xlglht 2xlarge:text-2xlfsize"
        >
          <span class="relative z-10">Projects</span>
          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
          >
            <img
              class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-60"
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
      <!-- Portfolio -->
      <div
        class="relative bg-black rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
      >
        <img
          class="w-xt small:w-20 phone:w-24 tab:w-28 xlarge:w-36"
          src="../assets/works/portfolio.svg"
          alt="Portfolio"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/portfolio"
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
                  Portfolio
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                  My portfolio website.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
                >
                  Vue.js
                </span>
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 mx-4 phone:ml-0 phone:text-sm phone:mr-4 tab:mr-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2"
                >
                  Nuxt.js
                </span>
                <span
                  class="tw-css font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 mt-4 phone:text-sm tab:mt-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2 large:ml-0 large:mt-6 xlarge:ml-6 xlarge:mt-0 desktop:mr-6"
                >
                  Tailwind CSS
                </span>
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto mt-4 ml-4 px-4 py-1.5 phone:text-sm tab:mt-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2 large:mt-6 xlarge:ml-0 surface:mt-0 surface:ml-6"
                >
                  Figma
                </span>
              </div>
            </div>
            <hover class="absolute w-full h-full"></hover>
          </div>
        </nuxt-link>
      </div>

      <!-- Travu -->
      <div
        class="relative bg-travu rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-6 xlarge:row-span-8"
      >
        <img
          class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44"
          src="../assets/works/travu.svg"
          alt="Travu"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/travu"
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
                  Travu
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                  A travel planning and booking website.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
                >
                  Vue.js
                </span>
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 mx-4 phone:ml-0 phone:text-sm phone:mr-4 tab:mr-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2"
                >
                  Nuxt.js
                </span>
                <span
                  class="tw-css font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 mt-4 phone:text-sm tab:mt-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2 large:ml-0 large:mt-6 xlarge:ml-6 xlarge:mt-0 desktop:mr-6"
                >
                  Tailwind CSS
                </span>
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto mt-4 ml-4 px-4 py-1.5 phone:text-sm tab:mt-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2 large:mt-6 xlarge:ml-0 surface:mt-0 surface:ml-6"
                >
                  Figma
                </span>
              </div>
            </div>
            <hover class="absolute w-full h-full"></hover>
          </div>
        </nuxt-link>
      </div>

      <!-- VenZone -->
      <div
        class="relative bg-venzone rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-6 xlarge:row-span-8"
      >
        <img
          class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44 z-10"
          src="../assets/works/venzone.svg"
          alt="VenZone"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/venzone"
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
                  VenZone (WIP)
                </h1>
                <p
                  class="text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:mt-5"
                >
                  A personalized food ordering website.
                </p>
              </div>
              <!-- Technologies -->
              <div class="flex flex-wrap">
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 phone:text-sm tab:text-base tab:px-6 tab:py-2"
                >
                  Vue.js
                </span>
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 mx-4 phone:ml-0 phone:text-sm phone:mr-4 tab:mr-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2"
                >
                  Nuxt.js
                </span>
                <span
                  class="tw-css font-bold bg-grey2 text-xs text-white rounded-full w-auto px-4 py-1.5 mt-4 phone:text-sm tab:mt-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2 large:ml-0 large:mt-6 xlarge:ml-6 xlarge:mt-0 desktop:mr-6"
                >
                  Tailwind CSS
                </span>
                <span
                  class="font-bold bg-grey2 text-xs text-white rounded-full w-auto mt-4 ml-4 px-4 py-1.5 phone:text-sm tab:mt-0 tab:ml-6 tab:text-base tab:px-6 tab:py-2 large:mt-6 xlarge:ml-0 surface:mt-0 surface:ml-6"
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

@media screen and (min-width: 1500px) {
  .tw-css {
    margin-right: 0px !important;
  }
}
</style>
