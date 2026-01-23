<template>

  <div
    class="relative h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >

    <!-- Nav -->

    <designs-nav></designs-nav>

    <!-- 3D -->

    <div
      class="bg-white-soft relative w-full h-auto pb-16 phone-sm:pb-20 tablet-xs:pb-24"
      :class="{ change: zIndex }"
    >

      <!-- Heading -->

      <div class="text-center">

        <h1
          class="font-heading font-bold text-3xl text-black leading-10 mt-4 phone-sm:text-heading-1 phone-sm:leading-tight xl:mt-2 tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-"
        >

          <span class="relative z-10">Designs</span>

          <span
            class="relative flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
          >

            <img
              class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-56"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />

          </span>

        </h1>

      </div>

      <!-- Navigation -->

      <div class="flex justify-center mt-large phone-sm:mt-14 tablet-xs:mt-16">

        <ul
          class="nav-links flex flex-row items-center phone-sm:text-lg lg:text-xl text-black"
          id="nLinks"
        >

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">

            <nuxt-link to="/designs/works" data-cursor-hover>

              <span class="n-active">Works</span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">

            <nuxt-link to="/designs/ui" data-cursor-hover>

              <span class="n-active">UI</span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">

            <nuxt-link to="/designs/illustrations" data-cursor-hover>

              <span class="n-active">Illustrations</span>

            </nuxt-link>

          </li>

          <li class="mx-3 sm:mx-5 phone-sm:mx-6">

            <nuxt-link to="/designs/3d" data-cursor-hover>

              <span class="active">3D</span>

            </nuxt-link>

          </li>

        </ul>

      </div>

      <div
        class="grid grid-col-1 px-8 gap-14 mt-14 tablet-xs:px-14 tablet-xs:gap-14 lg:mt-20 lg:px-24 lg:grid-cols-2 lg:gap-24"
      >

        <!-- Living Room -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
        >

          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/living-room.png"
            alt="Living Room"
            data-cursor-hover
          />

        </div>

        <!-- Room -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
        >

          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/room.png"
            alt="Room"
            data-cursor-hover
          />

        </div>

        <!-- Kitchen -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
        >

          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/kitchen.png"
            alt="Kitchen"
            data-cursor-hover
          />

        </div>

        <!-- House -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
        >

          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/house.png"
            alt="House"
            data-cursor-hover
          />

        </div>

        <!-- Living Room 2 -->

        <div
          class="relative overflow-hidden rounded-md grid justify-center items-center row-span-6 sm:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6"
        >

          <img
            class="w-full h-full rounded-md object-cover"
            src="../../assets/designs/3d/living-room-2.png"
            alt="Living Room 2"
            data-cursor-hover
          />

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

  data() {
    return {
      active: false,
      zIndex: false,
    };
  },

  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>

