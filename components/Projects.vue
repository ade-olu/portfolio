<template>
  <!-- Projects -->
  <div
    class="mt-14 pt-10 pb-14 bg-light relative w-full h-auto phone:mt-16 tab:mt-24 tab:pt-10 tab:pb-14 large:pt-14 large:pb-24 xlarge:mt-0"
    id="projects"
  >
    <div class="flex items-center justify-center">
      <div class="text-center">
        <!-- Heading -->
        <h1
          class="font-body font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-pht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-xlfsize xlarge:leading-xlglht 2xlarge:text-2xlfsize"
        >
          <span class="relative z-10">Projects</span>
          <span
            class="relative flex justify-center items-center -mt-2 z-0 phone:-mt-4 large:-mt-5"
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
      class="grid grid-col-1 px-8 gap-14 mt-10 phone:mt-12 tab:px-14 tab:gap-14 large:mt-16 large:px-24 large:grid-cols-2 large:gap-24"
    >
      <!-- Xtades -->
      <div
        class="relative bg-black rounded-md grid justify-center items-center row-start-1 row-end-8 small:row-end-9 tab:row-end-11 large:row-end-6 xlarge:row-end-7"
      >
        <img
          class="w-xt small:w-20 phone:w-24 tab:w-28 xlarge:w-36"
          src="../assets/works/xtades.svg"
          alt="Xtades"
        />
        <!-- Overlay -->
        <nuxt-link
          to="/works/xtades"
          class="overlay z-20 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
        >
          <div class="overlay-inner w-full h-full">
            <div
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-6 small:px-6 small:pb-7 tab:pb-10 tab:px-10 large:pb-10 large:pl-10 large:pr-5"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-5 tab:mb-8 large:mb-7">
                <h1
                  class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  Xtades
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
                  class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl tab:py-2 large:px-8 large:py-2"
                  >Vue.js</span
                >
                <span
                  class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl tab:py-2 large:ml-10 large:text-xl large:px-8 large:py-2"
                  >Nuxt.js</span
                >
                <span
                  class="font-bold bg-grey2 text-white rounded-full w-auto mt-6 px-6 py-1.5 small:mt-7 phone:text-lg tab:mt-0 tab:ml-10 tab:text-xl tab:py-2 large:text-xl large:ml-0 large:mt-9 large:px-8 large:py-2 2xlarge:ml-10 2xlarge:mt-0 2xlarge:block"
                  >Tailwind CSS</span
                >
                <span
                  class="font-bold hidden bg-grey2 text-white rounded-full w-auto mt-6 px-6 py-1.5 ml-4 small:mt-7 small:ml-6 phone:block phone:text-lg tab:mt-9 tab:block tab:ml-0 tab:text-xl tab:py-2 large:hidden large:text-xl large:px-8 xlarge:block xlarge:ml-10 2xlarge:ml-0"
                  >Figma</span
                >
              </div>
            </div>
            <hover class="absolute w-full h-full"></hover>
          </div>
        </nuxt-link>
      </div>

      <!-- Travu -->
      <div
        class="relative bg-travu rounded-md grid justify-center items-center row-start-8 row-end-15 small:row-start-9 small:row-end-17 tab:row-start-11 tab:row-end-21 large:row-start-1 large:row-end-8 xlarge:row-end-9"
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
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-6 small:px-6 small:pb-7 tab:pb-10 tab:px-10 large:pb-10 large:pl-10 large:pr-5"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-5 tab:mb-8 large:mb-7">
                <h1
                  class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  Travu (WIP)
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
                  class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl tab:py-2 large:px-8 large:py-2"
                  >Vue.js</span
                >
                <span
                  class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl tab:py-2 large:ml-10 large:text-xl large:px-8 large:py-2"
                  >Nuxt.js</span
                >
                <span
                  class="font-bold bg-grey2 text-white rounded-full w-auto mt-6 px-6 py-1.5 small:mt-7 phone:text-lg tab:mt-0 tab:ml-10 tab:text-xl tab:py-2 large:text-xl large:ml-0 large:mt-9 large:px-8 large:py-2 2xlarge:ml-10 2xlarge:mt-0 2xlarge:block"
                  >Tailwind CSS</span
                >
                <span
                  class="font-bold hidden bg-grey2 text-white rounded-full w-auto mt-6 px-6 py-1.5 ml-4 small:mt-7 small:ml-6 phone:block phone:text-lg tab:mt-9 tab:block tab:ml-0 tab:text-xl tab:py-2 large:hidden large:text-xl large:px-8 xlarge:block xlarge:ml-10 2xlarge:ml-0"
                  >Figma</span
                >
              </div>
            </div>
            <hover class="absolute w-full h-full"></hover>
          </div>
        </nuxt-link>
      </div>

      <!-- VenZone -->
      <div
        class="relative bg-venzone rounded-md grid justify-center items-center row-start-15 row-end-22 small:row-start-17 small:row-end-25 tab:row-start-21 tab:row-end-31 large:col-start-1 large:col-end-2 large:row-start-6 large:row-end-13 xlarge:row-start-7 xlarge:row-end-15"
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
              class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-8 small:px-6 small:pb-8 tab:pb-12 tab:px-10 large:pb-12 large:pl-10 large:pr-5"
            >
              <!-- Overlay Title & Subtitle -->
              <div class="mb-7 tab:mb-10 large:mb-9">
                <h1
                  class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl xlarge:text-ofsize"
                >
                  VenZone
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
                  class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl tab:py-2 large:px-8 large:py-2"
                  >Vue.js</span
                >
                <span
                  class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl tab:py-2 large:ml-10 large:text-xl large:px-8 large:py-2"
                  >Nuxt.js</span
                >
                <span
                  class="font-bold bg-grey2 text-white rounded-full w-auto mt-6 px-6 py-1.5 small:mt-7 phone:text-lg tab:mt-0 tab:ml-10 tab:text-xl tab:py-2 large:text-xl large:ml-0 large:mt-9 large:px-8 large:py-2 2xlarge:ml-10 2xlarge:mt-0 2xlarge:block"
                  >Tailwind CSS</span
                >
                <span
                  class="font-bold hidden bg-grey2 text-white rounded-full w-auto mt-6 px-6 py-1.5 ml-4 small:mt-7 small:ml-6 phone:block phone:text-lg tab:mt-9 tab:block tab:ml-0 tab:text-xl tab:py-2 large:hidden large:text-xl large:px-8 xlarge:block xlarge:ml-10 2xlarge:ml-0"
                  >Figma</span
                >
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
export default {};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .overlay-inner > * {
    transform: translateY(1.25rem);
    transition: all 200ms;
  }

  .overlay-inner:hover > * {
    transform: translateY(0);
  }
}
</style>
