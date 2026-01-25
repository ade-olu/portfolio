<template>
  <div>
    <!-- Mobile Nav Menu (Screens < 769px) -->
    <transition name="fade" @enter="enter">
      <div
        class="nav-menu-2 fixed w-full h-screen bg-background-light z-30 flex flex-col items-center justify-center lg:hidden"
        v-if="isActive"
      >
        <ul
          class="nav-links phone-sm:text-lg flex flex-col items-center justify-center text-black-primary"
        >
          <li class="my-6">
            <NuxtLink to="/#projects" @click="close" data-cursor-hover>
              <span class="n-active">Projects</span>
            </NuxtLink>
          </li>

          <li class="my-6">
            <span @click="visible" class="n-active" data-cursor-hover>
              Designs
            </span>
          </li>

          <li class="my-6">
            <a
              href="https://tinyurl.com/mr396s3c"
              target="_blank"
              data-cursor-hover
            >
              <span class="n-active">Resume</span>
            </a>
          </li>

          <li class="my-6">
            <NuxtLink to="/#contact" @click="close" data-cursor-hover>
              <span class="n-active">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>

    <!-- Navbar -->
    <nav class="bg-white-soft z-20" id="nav">
      <div
        class="z-20 w-full h-height-9 flex items-center py-5 px-5 justify-between tablet-xs:h-32 tablet-xs:px-10 lg:px-logo-padding lg:h-36 xl:px-20"
      >
        <!-- Logo -->
        <a href="/" data-cursor-hover>
          <img
            class="w-width-6 phone-sm:w-width-7 tablet-xs:w-16 lg:w-16"
            src="../assets/logo.svg"
            alt="Logo"
          />
        </a>

        <!-- Desktop Nav Menu (Screens ≥ 769px) -->
        <div class="nav-menu hidden lg:block">
          <ul
            class="nav-links lg:flex lg:flex-row lg:items-center lg:text-xl text-black-primary"
          >
            <li class="lg:mx-6">
              <NuxtLink
                to="/#projects"
                @click="scrollToProjects"
                data-cursor-hover
              >
                <span class="n-active">Projects</span>
              </NuxtLink>
            </li>

            <li class="lg:mx-6">
              <span @click="visible" class="n-active" data-cursor-hover>
                Designs
              </span>
            </li>

            <li class="lg:mx-6">
              <a
                href="https://tinyurl.com/mr396s3c"
                target="_blank"
                data-cursor-hover
              >
                <span class="n-active">Resume</span>
              </a>
            </li>

            <li class="lg:mx-6">
              <NuxtLink
                to="/#contact"
                @click="scrollToContact"
                data-cursor-hover
              >
                <span class="n-active">Contact</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Mobile Hamburger -->
        <div class="flex items-center relative w-10 z-40 mr-0.5 lg:hidden">
          <div
            class="hamburger-menu"
            @click="menu"
            :class="{ animate: isActive }"
            data-cursor-hover
          ></div>
        </div>
      </div>
    </nav>

    <!-- Design Modal -->
    <transition name="fade" @enter="enter">
      <div
        class="bg-black-opacity-50 fixed inset-0 z-30 flex justify-center items-center px-6 tablet-xs:px-0"
        v-if="isVisible"
      >
        <div
          class="modal flex flex-col w-full rounded-md bg-background-light p-8 max-w-max-width-2 tablet-xs:max-w-max-width-1 lg:max-w-max-width-3 lg:p-10 xl:max-w-max-width-4"
        >
          <div class="flex justify-between items-start">
            <ul
              class="nav-links lg:flex lg:flex-col phone-sm:text-lg lg:text-xl text-black-primary"
            >
              <li class="mb-8 lg:mb-5">
                <NuxtLink to="/#designs" @click="notVisible" data-cursor-hover>
                  <span class="n-active">Designs</span>
                </NuxtLink>
              </li>

              <li class="my-8 lg:my-5">
                <NuxtLink to="/designs/ui" data-cursor-hover>
                  <span class="n-active">UI</span>
                </NuxtLink>
              </li>

              <li class="my-8 lg:my-5">
                <NuxtLink to="/designs/illustrations" data-cursor-hover>
                  <span class="n-active">Illustrations</span>
                </NuxtLink>
              </li>

              <li class="mt-8 lg:my-5">
                <NuxtLink to="/designs/3d" data-cursor-hover>
                  <span class="n-active">3D</span>
                </NuxtLink>
              </li>
            </ul>

            <!-- Close Modal -->
            <button
              class="focus:outline-none"
              @click="visible"
              data-cursor-hover
            >
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

<script setup>
import { ref } from "vue";

const isActive = ref(false);
const active = ref(false);
const isVisible = ref(false);
const zIndex = ref(false);

// Smooth scroll functionality
const scrollToProjects = (event) => {
  event.preventDefault();
  const element = document.querySelector("#projects");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const scrollToContact = (event) => {
  event.preventDefault();
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const menu = () => {
  isActive.value = !isActive.value;
  active.value = !active.value;
};

const visible = () => {
  isVisible.value = !isVisible.value;
  zIndex.value = !zIndex.value;
};

const notVisible = () => {
  isActive.value = !isActive.value;
  isVisible.value = !isVisible.value;
  active.value = false;
  zIndex.value = !zIndex.value;
};

const enter = (el, done) => {
  // Transition enter hook
};

const close = () => {
  isActive.value = !isActive.value;
  active.value = !active.value;
};
</script>

<style scoped>
@import "../assets/styles/nav.css";
</style>
