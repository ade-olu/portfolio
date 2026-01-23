<template>

  <div
    class="relative h-screen container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >

    <!-- Nav -->

    <designs-nav></designs-nav>

    <!-- UI -->

    <div
      class="bg-whiteSoft relative w-full h-auto pb-16 phoneSm:pb-20 tabletXs:pb-24"
      :class="{ change: zIndex }"
    >

      <!-- Heading -->

      <div class="text-center">

        <h1
          class="font-heading font-bold text-3xl text-black leading-10 mt-4 phoneSm:text-heading-1 phoneSm:leading-tight xl:mt-2 tabletXs:text-heading-2 tabletXs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-extraLoose"
        >

          <span class="relative z-10">Designs</span>

          <span
            class="relative flex justify-center items-center -mt-4 z-0 phoneSm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-32 phoneSm:w-36 tabletXs:w-44 lg:w-48 2xl:w-56"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />

          </span>

        </h1>

      </div>

      <!-- Navigation -->

      <div class="flex justify-center mt-large phoneSm:mt-14 tabletXs:mt-16">

        <ul
          class="nav-links flex flex-row items-center phoneSm:text-lg lg:text-xl text-black"
          id="nLinks"
        >

          <li class="mx-3 sm:mx-5 phoneSm:mx-6">

            <nuxt-link to="/designs/works">

              <span><hover class="n-active">Works</hover></span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phoneSm:mx-6">

            <nuxt-link to="/designs/ui">

              <span class="active"><hover>UI</hover></span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phoneSm:mx-6">

            <nuxt-link to="/designs/illustrations">

              <span class="n-active"><hover>Illustrations</hover></span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phoneSm:mx-6">

            <nuxt-link to="/designs/3d">

              <span class="n-active"><hover>3D</hover></span>

            </nuxt-link>

          </li>

        </ul>

      </div>

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tabletXs:px-14 tabletXs:gap-14 lg:mt-20 lg:px-24 lg:grid-cols-2 lg:gap-24"
      >

        <!-- Travu -->

        <div
          class="relative bg-travuSecondary overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
        >

          <div class="absolute px-6 tabletXs:px-10">

            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/travu.svg"
              alt="Travu"
            />

          </div>

          <hover class="absolute w-full h-full"></hover>

        </div>

        <!-- Portfolio -->

        <div
          class="relative bg-black overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
        >

          <div class="absolute p-6 pb-0 tabletXs:p-10">

            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/portfolio.svg"
              alt="Portfolio"
            />

          </div>

          <hover class="absolute w-full h-full"></hover>

        </div>

        <!-- Wallet App -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #ebf1ff"
        >

          <div class="py-6 mx-auto tabletXs:py-10">

            <img
              class="w-auto h-height-10 sm:h-72 phoneSm:h-height-16 tabletXs:h-height-18 lg:h-height-15 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/wallet-app.svg"
              alt="Wallet App"
            />

          </div>

          <hover class="absolute w-full h-full"></hover>

        </div>

        <!-- VenZone -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #f2ebe6"
        >

          <div class="absolute p-6 pb-0 z-10 tabletXs:p-10">

            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/venzone.svg"
              alt="VenZone"
            />

          </div>

          <img
            class="absolute w-full h-full"
            src="../../assets/noise.png"
            alt="Noise"
          />

          <hover class="absolute w-full h-full"></hover>

        </div>

        <!-- VenZone App -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #f2ebe6"
        >

          <div class="py-6 z-10 mx-auto flex tabletXs:py-10">

            <img
              class="w-auto mr-6 h-48 sm:h-height-11 phoneSm:h-height-13 phoneLg:h-height-14 tabletXs:mr-10 tabletXs:h-height-18 lg:h-height-14 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/venzone-app1.svg"
              alt="VenZone App"
            />

            <img
              class="w-auto h-48 mt-12 sm:h-height-11 phoneSm:h-height-13 phoneLg:h-height-14 tabletXs:h-height-18 tabletXs:mt-0 lg:h-height-14 lg:mt-20 xl:mt-0 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/venzone-app2.svg"
              alt="VenZone App"
            />

          </div>

          <img
            class="absolute w-full h-full"
            src="../../assets/noise.png"
            alt="Noise"
          />

          <hover class="absolute w-full h-full"></hover>

        </div>

        <!-- Ear1 -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #00bf69"
        >

          <div class="absolute p-6 pb-0 tabletXs:p-10">

            <img
              class="w-full rounded-md"
              src="../../assets/designs/ui/ear1.svg"
              alt="Ear1"
            />

          </div>

          <hover class="absolute w-full h-full"></hover>

        </div>

        <!-- Ear1 App -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 sm:row-span-7 phoneSm:row-span-8 tabletXs:row-span-10 lg:row-span-5 xl:row-span-6"
          style="background: #00bf69"
        >

          <div class="py-6 mx-auto flex tabletXs:py-10">

            <img
              class="w-auto mr-6 h-48 sm:h-height-11 phoneSm:h-height-13 phoneLg:h-height-14 tabletXs:mr-10 tabletXs:h-height-18 lg:h-height-14 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/ear1-app1.svg"
              alt="Ear1 App"
            />

            <img
              class="w-auto h-48 mt-12 sm:h-height-11 phoneSm:h-height-13 phoneLg:h-height-14 tabletXs:h-height-18 tabletXs:mt-0 lg:h-height-14 lg:mt-20 xl:mt-0 xl:h-height-17 rounded-md"
              src="../../assets/designs/ui/ear1-app2.svg"
              alt="Ear1 App"
            />

          </div>

          <hover class="absolute w-full h-full"></hover>

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
      title: "Designs - UI",
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>

