<template>

  <div>

    <!-- For Screens Lower Than 769px -->

    <!-- Nav Menu -->

    <transition name="fade" v-on:enter="enter">

      <div
        class="nav-menu-2 fixed w-full h-screen bg-backgroundLight z-30 flex flex-col items-center justify-center lg:hidden"
        v-if="isActive"
        id="nMenu"
      >

        <ul
          class="nav-links phone-sm:text-lg flex flex-col items-center justify-center text-blackPrimary"
          id="nLinks"
        >

          <li class="my-6">

            <nuxt-link to="/#projects">

              <span class="n-active"><hover>Projects</hover></span>

            </nuxt-link>

          </li>

          <li class="my-6">

            <span @click="visible" class="active"><hover>Designs</hover></span>

          </li>

          <li class="my-6">

            <a href="https://tinyurl.com/mr396s3c" target="_blank">

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

    <nav class="bg-whiteSoft z-20" id="nav">

      <div
        class="z-20 w-full h-height-9 flex items-center py-5 px-5 justify-between tablet-xs:h-32 tablet-xs:px-10 lg:px-logo-padding lg:h-36 xl:px-20"
      >

        <!-- Logo -->

        <a href="/" class="z-40">

          <img
            class="w-width-6 phone-sm:w-width-7 tablet-xs:w-16 lg:w-16"
            src="../assets/logo.svg"
            alt="Logo"
          />

        </a>

        <!-- For Screens Higher Than 768px -->

        <!-- Nav Menu -->

        <div class="nav-menu hidden lg:block" id="nMenu">

          <ul
            class="nav-links lg:flex lg:flex-row lg:items-center lg:text-xl text-blackPrimary"
            id="nLinks"
          >

            <li class="lg:mx-6">

              <nuxt-link to="/#projects">

                <span class="n-active"><hover>Projects</hover></span>

              </nuxt-link>

            </li>

            <li class="lg:mx-6">

              <span @click="visible" class="active">

                <hover>Designs</hover>

              </span>

            </li>

            <li class="lg:mx-6">

              <a href="https://tinyurl.com/mr396s3c" target="_blank">

                <span class="n-active"><hover>Resume</hover></span>

              </a>

            </li>

            <li class="lg:mx-6">

              <nuxt-link to="/#contact">

                <span class="n-active"><hover>Contact</hover></span>

              </nuxt-link>

            </li>

          </ul>

        </div>

        <!-- For Screens Lower Than 769px -->

        <!-- Hamburger Menu -->

        <div class="flex item-center relative w-10 z-40 mr-0.5 lg:hidden">

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
        class="bg-blackOpacity50 fixed inset-0 z-30 flex justify-center items-center px-6 tablet-xs:px-0"
        v-if="isVisible"
      >

        <div
          class="modal flex flex-col w-full rounded-md bg-backgroundLight p-8 max-w-max-width-2 tablet-xs:max-w-max-width-1 lg:max-w-max-width-3 lg:p-10 xl:max-w-max-width-4"
        >

          <div class="flex justify-between items-start">

            <ul
              class="nav-links lg:flex lg:flex-col phone-sm:text-lg lg:text-xl text-blackPrimary"
              id="nLinks"
            >

              <li class="mb-8 lg:mb-5">

                <nuxt-link to="/#designs" @click="notVisible">

                  <span class="n-active"><hover>Designs</hover></span>

                </nuxt-link>

              </li>

              <li class="my-8 lg:my-5">

                <nuxt-link to="/designs/ui">

                  <span class="n-active"><hover>UI</hover></span>

                </nuxt-link>

              </li>

              <li class="my-8 lg:my-5">

                <nuxt-link to="/designs/illustrations">

                  <span class="n-active"><hover>Illustrations</hover></span>

                </nuxt-link>

              </li>

              <li class="mt-8 lg:mt-5">

                <nuxt-link to="/designs/3d">

                  <span class="n-active"><hover>3D</hover></span>

                </nuxt-link>

              </li>

            </ul>

            <!-- Close -->

            <button class="focus:outline-none" @click="visible">

              <img
                src="../assets/close.svg"
                class="h-6 phone-sm:h-7 lg:h-height-5"
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

