<template>
  <div>
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
            <nuxt-link to="/#projects">
              <span class="n-active"><hover>Projects</hover></span>
            </nuxt-link>
          </li>
          <li class="my-6">
            <span @click="visible" class="n-active">
              <hover>Designs</hover>
            </span>
          </li>
          <li class="my-6">
            <a href="https://tinyurl.com/2x44tn6c" target="_blank">
              <span class="n-active"><hover>Resume</hover></span>
            </a>
          </li>
          <li class="my-6">
            <nuxt-link to="/#contact">
              <span class="n-active"><hover>Contact</hover></span>
            </nuxt-link>
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
            class="w-wt phone:w-sz tab:w-16 large:w-16"
            src="../assets/logo.svg"
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
              <nuxt-link to="/#projects">
                <span class="n-active"><hover>Projects</hover></span>
              </nuxt-link>
            </li>
            <li class="large:mx-6">
              <span @click="visible" class="n-active">
                <hover>Designs</hover>
              </span>
            </li>
            <li class="large:mx-6">
              <a href="https://tinyurl.com/2x44tn6c" target="_blank">
                <span class="n-active"><hover>Resume</hover></span>
              </a>
            </li>
            <li class="large:mx-6">
              <nuxt-link to="/#contact">
                <span class="n-active"><hover>Contact</hover></span>
              </nuxt-link>
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

    <!-- Design Modal -->
    <transition name="fade" v-on:enter="enter">
      <div
        class="bg-bl fixed inset-0 z-30 flex justify-center items-center px-6 tab:px-0"
        v-if="isVisible"
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
                <nuxt-link to="/#designs" @click="notVisible">
                  <span class="n-active"><hover>Designs</hover></span>
                </nuxt-link>
              </li>
              <li class="my-8 large:my-5">
                <nuxt-link to="/designs/ui">
                  <span class="n-active"><hover>UI</hover></span>
                </nuxt-link>
              </li>
              <li class="my-8 large:my-5">
                <nuxt-link to="/designs/illustrations">
                  <span class="n-active"><hover>Illustrations</hover></span>
                </nuxt-link>
              </li>
              <li class="mt-8 large:mt-5">
                <nuxt-link to="/designs/3d">
                  <span class="n-active"><hover>3D</hover></span>
                </nuxt-link>
              </li>
            </ul>
            <!-- Close -->
            <button class="focus:outline-none" @click="visible">
              <img
                src="../assets/close.svg"
                class="h-6 phone:h-7 large:h-media3"
              />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
@import "../styles/nav.css";
</style>

