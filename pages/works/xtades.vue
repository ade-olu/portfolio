<template>
  <div
    class="relative container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- For Screens Lower Than 769px -->
    <!-- Nav Menu -->
    <transition name="fade" v-on:enter="enter">
      <div
        class="nav-menu-2 fixed w-full h-screen bg-light z-30 flex flex-col items-center justify-center large:hidden"
        v-if="isActive"
        id="nMenu"
      >
        <ul
          class="nav-links phone:text-lg flex flex-col items-center justify-center text-black"
          id="nLinks"
        >
          <li class="my-6">
            <nuxt-link to="/#projects"
              ><span><hover>Projects</hover></span></nuxt-link
            >
          </li>
          <li class="my-6">
            <a href="#" @click="visible"
              ><span><hover>Designs</hover></span></a
            >
          </li>
          <li class="my-6">
            <a href="#"
              ><span><hover>Resume</hover></span></a
            >
          </li>
          <li class="my-6">
            <nuxt-link to="/#contact"
              ><span><hover>Contact</hover></span></nuxt-link
            >
          </li>
        </ul>
      </div>
    </transition>

    <!-- Navbar -->
    <nav class="bg-white z-20" id="nav">
      <div
        class="z-20 w-full h-ht flex items-center py-5 px-5 justify-between tab:h-32 tab:px-10 large:px-logo large:h-36 xlarge:px-20"
      >
        <!-- Logo -->
        <a href="/" class="z-40">
          <img
            class="w-wt phone:w-sz tab:w-sz2 large:w-sz2"
            src="../../assets/logo.svg"
            alt="Logo"
          />
        </a>

        <!-- For Screens Higher Than 768px -->
        <!-- Nav Menu -->
        <div class="nav-menu hidden large:block" id="nMenu">
          <ul
            class="nav-links large:flex large:flex-row large:items-center large:text-xl text-black"
            id="nLinks"
          >
            <li class="large:mx-6">
              <nuxt-link to="/#projects"
                ><span><hover>Projects</hover></span></nuxt-link
              >
            </li>
            <li class="large:mx-6">
              <a href="#" @click="visible"
                ><span><hover>Designs</hover></span></a
              >
            </li>
            <li class="large:mx-6">
              <a href="#"
                ><span><hover>Resume</hover></span></a
              >
            </li>
            <li class="large:mx-6">
              <nuxt-link to="/#contact"
                ><span><hover>Contact</hover></span></nuxt-link
              >
            </li>
          </ul>
        </div>

        <!-- For Screens Lower Than 769px -->
        <!-- Hamburger Menu -->
        <div class="flex item-center relative w-10 z-40 mr-0.5 large:hidden">
          <div
            class="hamburger-menu"
            @click="menu"
            :class="{ animate: isActive }"
          ></div>
        </div>
      </div>
    </nav>

    <!-- Xtades -->
    <div
      class="bg-white relative w-full h-auto pb-16 phone:pb-20 tab:pb-24"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <div class="text-center">
        <h1
          class="font-body font-bold text-3xl text-black leading-10 mt-4 phone:text-fsize phone:leading-pht tab:mt-6 tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-xlfsize xlarge:leading-xlglht 2xlarge:text-2xlfsize"
        >
          <span class="relative z-10">Xtades</span>
          <span
            class="relative w-full flex justify-center items-center -mt-2 z-0 phone:-mt-4 large:-mt-5"
          >
            <img
              class="w-28 phone:w-32 tab:w-40 large:w-44 xlarge:w-52"
              src="../../assets/accent-line.svg"
              alt="Accent Line"
            />
          </span>
        </h1>
      </div>

      <div class="xlarge:flex xlarge:justify-between xlarge:items-start">
        <div
          class="mt-12 px-8 phone:mt-14 tab:mt-16 tab:px-14 large:px-20 xlarge:px-spc"
        >
          <!-- About -->
          <div>
            <h2
              class="font-body font-bold text-xl text-black phone:text-2xl tab:text-fsz"
            >
              About
            </h2>
            <p
              class="text-grey mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4 xlarge:max-w-mw 2xlarge:max-w-mw2"
            >
              Xtades is a portfolio project that showcases my projects and
              designs.
            </p>
          </div>

          <!-- Technologies (For Screens Lower Than 1280px) -->
          <div class="mt-12 tab:mt-14 xlarge:hidden">
            <h2
              class="font-body font-bold text-xl text-black mb-5 phone:text-2xl tab:mb-8 large:mb-7 tab:text-fsz"
            >
              Technologies
            </h2>
            <div class="flex flex-wrap">
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl tab:py-2 large:px-8 large:py-2"
                >Vue.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl large:ml-10 large:text-xl tab:py-2 large:px-8 large:py-2"
                >Nuxt.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 mt-6 mr-4 small:mr-6 small:mt-7 phone:text-lg tab:mt-0 tab:ml-10 tab:mr-10 tab:text-xl tab:py-2 large:px-8 large:py-2"
                >Tailwind CSS</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 mt-6 small:mt-7 phone:text-lg tab:mt-0 tab:text-xl tab:py-2 large:px-8"
                >Figma</span
              >
            </div>
          </div>

          <!-- Link -->
          <div class="mt-16 tab:mt-20 xlarge:mt-36">
            <h2
              class="font-body font-bold text-xl text-black phone:text-2xl tab:text-fsz"
            >
              Link
            </h2>
            <a href="https://xtades.xyz" target="_blank"
              ><p
                class="text-grey mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4"
              >
                <hover>https://xtades.xyz</hover>
              </p></a
            >
          </div>
        </div>

        <!-- Technologies (For Screens Higher Than 1279px) -->
        <div class="hidden xlarge:block xlarge:pr-spc2 xlarge:mt-16">
          <div>
            <h2
              class="font-body font-bold text-xl text-black mb-5 phone:text-2xl tab:mb-8 large:mb-7 tab:text-fsz"
            >
              Technologies
            </h2>
            <div class="flex mb-6 small:mb-7 tab:mb-9 large:mb-9">
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 text-xl"
                >Vue.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 ml-10 text-xl"
                >Nuxt.js</span
              >
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 ml-10 text-xl"
                >Tailwind CSS</span
              >
            </div>
            <div class="flex">
              <span
                class="font-bold bg-grey text-white rounded-full w-auto px-8 py-2 text-xl"
                >Figma</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Design Modal -->
    <transition name="fade" v-on:enter="enter">
      <div class="absolute" v-if="isVisible">
        <div
          class="bg-bl fixed inset-0 z-30 flex justify-center items-center px-6 tab:px-0"
        >
          <div
            class="modal flex flex-col w-full rounded-md bg-light p-8 max-w-mx tab:max-w-mx2 large:max-w-mx3 large:p-10 xlarge:max-w-mx4"
          >
            <div class="flex justify-between items-start">
              <ul
                class="nav-links large:flex large:flex-col phone:text-lg large:text-xl text-black"
                id="nLinks"
              >
                <li class="mb-8 large:mb-5">
                  <nuxt-link to="/#designs" @click="notVisible"
                    ><span><hover>Designs</hover></span></nuxt-link
                  >
                </li>
                <li class="my-8 large:my-5">
                  <a href="#"
                    ><span><hover>UI</hover></span></a
                  >
                </li>
                <li class="my-8 large:my-5">
                  <a href="#"
                    ><span><hover>Illustrations</hover></span></a
                  >
                </li>
                <li class="mt-8 large:mt-5">
                  <a href="#"
                    ><span><hover>3D</hover></span></a
                  >
                </li>
              </ul>
              <!-- Close -->
              <button class="focus:outline-none" @click="visible">
                <img
                  src="../../assets/close.svg"
                  class="h-6 phone:h-7 large:h-media3"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      isActive: false,
      active: false,
      isVisible: false,
      zIndex: false,
    };
  },

  methods: {
    menu() {
      this.isActive = !this.isActive;
      this.active = !this.active;
    },

    visible() {
      this.isVisible = !this.isVisible;
      this.zIndex = !this.zIndex;
    },

    notVisible() {
      this.isActive = !this.isActive;
      this.isVisible = !this.isVisible;
      this.active = false;
      this.zIndex = !this.zIndex;
    },

    enter(el, done) {
      var that = this;
    },

    close() {
      this.isActive = !this.isActive;
      this.active = !this.active;
    },
  },

  // GSAP
  mounted() {},
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>
