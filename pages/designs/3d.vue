<template>
  <div
    class="relative container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <designs-nav></designs-nav>

    <!-- 3D -->
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
              ><span class="active"><hover>3D</hover></span></nuxt-link
            >
          </li>
        </ul>
      </div>

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tab:px-14 tab:gap-14 large:mt-20 large:px-24 large:grid-cols-2 large:gap-24"
      >
        <!-- Living Room -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/living-room.png"
            alt="Living Room"
          />
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Room -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/room.png"
            alt="Room"
          />
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Kitchen -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/kitchen.png"
            alt="Kitchen"
          />
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- House -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/house.png"
            alt="House"
          />
          <hover class="absolute w-full h-full"></hover>
        </div>

        <!-- Living Room 2 -->
        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 small:row-span-7 phone:row-span-8 tab:row-span-10 large:row-span-5 xlarge:row-span-6"
        >
          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/living-room-2.png"
            alt="Living Room 2"
          />
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
      title: "Designs - 3D",
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>
