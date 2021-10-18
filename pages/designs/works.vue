<template>
  <div
    class="relative container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <designs-nav></designs-nav>

    <!-- Works -->
    <div
      class="bg-white relative w-full h-auto pb-16 phone:pb-20 tab:pb-24"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <div class="text-center">
        <h1
          class="font-head font-bold text-3xl text-black leading-10 mt-4 phone:text-fsize phone:leading-pht xlarge:mt-2 tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-xlfsize xlarge:leading-xlglht 2xlarge:text-2xlfsize"
        >
          <span class="relative z-10">Designs</span>
          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
          >
            <img
              class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-56"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />
          </span>
        </h1>
      </div>

      <!-- Navigation -->
      <div class="flex justify-center mt-t phone:mt-14 tab:mt-16">
        <ul
          class="nav-links flex flex-row items-center phone:text-lg large:text-xl text-black"
          id="nLinks"
        >
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/works"
              ><span><hover class="active">Works</hover></span></nuxt-link
            >
          </li>
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/ui"
              ><span class="n-active"><hover>UI</hover></span></nuxt-link
            >
          </li>
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/illustrations"
              ><span class="n-active"
                ><hover>Illustrations</hover></span
              ></nuxt-link
            >
          </li>
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/3d"
              ><span class="n-active"><hover>3D</hover></span></nuxt-link
            >
          </li>
        </ul>
      </div>

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tab:px-14 tab:gap-14 large:mt-20 large:px-24 large:grid-cols-2 large:gap-24"
      >
        <!-- FindFont -->
        <div
          class="relative bg-gradient-to-tr from-orange to-orange2 rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <img
            class="ml-4 w-xt3 small:w-28 phone:w-32 tab:w-ff3 xlarge:w-ff4"
            src="../../assets/works/findfont.svg"
            alt="FindFont"
          />
          <!-- Overlay -->
          <nuxt-link
            to="/works/findfont"
            class="overlay z-20 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
          >
            <div class="overlay-inner w-full h-full">
              <div
                class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 small:p-6 tab:p-10 large:p-8 xlarge:p-10"
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
                    >Figma</span
                  >
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
            src="../../assets/works/ear1.svg"
            alt="Ear1"
          />
          <!-- Overlay -->
          <nuxt-link
            to="/works/ear1"
            class="overlay z-10 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100"
          >
            <div class="overlay-inner w-full h-full">
              <div
                class="absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full p-6 small:p-6 tab:p-10 large:p-8 xlarge:p-10"
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
                    >Figma</span
                  >
                </div>
              </div>
              <hover class="absolute w-full h-full"></hover>
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

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";

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
