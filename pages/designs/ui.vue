<template>
  <div
    class="relative container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <designs-nav></designs-nav>

    <!-- UI -->
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
              ><span><hover class="n-active">Works</hover></span></nuxt-link
            >
          </li>
          <li class="mx-3 small:mx-5 phone:mx-6">
            <nuxt-link to="/designs/ui"
              ><span class="active"><hover>UI</hover></span></nuxt-link
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
        <!-- Travu -->
        <div
          class="relative bg-travu2 overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute px-6 tab:px-10">
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
          class="relative bg-black overflow-hidden rounded-md grid justify-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <div class="absolute p-6 pb-0 tab:p-10">
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
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
          style="background: #EBF1FF;"
        >
          <div class="py-6 mx-auto tab:py-10">
            <img
              class="w-auto h-mbh small:h-72 phone:h-mbh2 tab:h-mbh3 large:h-mbh4 xlarge:h-mbh5 rounded-md"
              src="../../assets/designs/ui/wallet-app.svg"
              alt="Wallet App"
            />
          </div>
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- VenZone -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
          style="background: #F2EBE6;"
        >
          <div class="absolute p-6 pb-0 z-10 tab:p-10">
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
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
          style="background: #F2EBE6;"
        >
          <div class="py-6 z-10 mx-auto flex tab:py-10">
            <img
              class="w-auto mr-6 h-48 small:h-mb phone:h-mb2 mobile:h-mb3 tab:mr-10 tab:h-mbh3 large:h-mb3 xlarge:h-mbh5 rounded-md"
              src="../../assets/designs/ui/venzone-app1.svg"
              alt="VenZone App"
            />
            <img
              class="w-auto h-48 mt-12 small:h-mb phone:h-mb2 mobile:h-mb3 tab:h-mbh3 tab:mt-0 large:h-mb3 large:mt-20 xlarge:mt-0 xlarge:h-mbh5 rounded-md"
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
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
          style="background: #00BF69;"
        >
          <div class="absolute p-6 pb-0 tab:p-10">
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
          class="relative overflow-hidden rounded-md grid justify-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
          style="background: #00BF69;"
        >
          <div class="py-6 mx-auto flex tab:py-10">
            <img
              class="w-auto mr-6 h-48 small:h-mb phone:h-mb2 mobile:h-mb3 tab:mr-10 tab:h-mbh3 large:h-mb3 xlarge:h-mbh5 rounded-md"
              src="../../assets/designs/ui/ear1-app1.svg"
              alt="Ear1 App"
            />
            <img
              class="w-auto h-48 mt-12 small:h-mb phone:h-mb2 mobile:h-mb3 tab:h-mbh3 tab:mt-0 large:h-mb3 large:mt-20 xlarge:mt-0 xlarge:h-mbh5 rounded-md"
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
