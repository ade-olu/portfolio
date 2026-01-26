<template>
  <div>
    <!-- Mobile Nav Menu (Screens < 769px) -->
    <transition name="fade" @enter="enter">
      <div
        class="nav-menu-2 fixed w-full h-screen bg-background-light z-30 flex flex-col items-center justify-center lg:hidden"
        v-if="isActive"
      >
        <ul
          class="nav-links tablet-xs:text-lg flex flex-col items-center justify-center text-black-primary"
        >
          <li class="my-6">
            <component
              :is="navLinkComponent"
              :to="projectsLink"
              :href="isMainPage ? '#projects' : undefined"
              @click="handleNavClick($event, 'projects')"
              data-cursor-hover
            >
              <span class="n-active">Projects</span>
            </component>
          </li>

          <li class="my-6">
            <span
              @click="visible"
              :class="designsActiveClass"
              data-cursor-hover
            >
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
            <component
              :is="navLinkComponent"
              :to="contactLink"
              :href="isMainPage ? '#contact' : undefined"
              @click="handleNavClick($event, 'contact')"
              data-cursor-hover
            >
              <span class="n-active">Contact</span>
            </component>
          </li>
        </ul>
      </div>
    </transition>

    <!-- Navbar -->
    <nav class="bg-white-soft z-20" id="nav">
      <div
        :class="navContainerClass"
        class="relative z-20 w-full h-height-9 flex items-center py-5 px-5 justify-between tablet-xs:h-32 tablet-xs:px-10 lg:px-logo-padding lg:h-36 xl:px-20"
      >
        <!-- Logo -->
        <a href="/" :class="logoClass" data-cursor-hover>
          <img
            class="w-width-6 phone-sm:w-width-7 tablet-xs:w-16 lg:w-16"
            src="../../assets/logo.svg"
            alt="Logo"
          />
        </a>

        <!-- Desktop Nav Menu (Screens ≥ 769px) -->
        <div class="nav-menu hidden lg:block">
          <ul
            class="nav-links lg:flex lg:flex-row lg:items-center lg:text-lg desktop:text-xl text-black-primary"
          >
            <li class="lg:mx-6">
              <component
                :is="navLinkComponent"
                :to="projectsLink"
                :href="isMainPage ? '#projects' : undefined"
                @click="handleNavClick($event, 'projects')"
                data-cursor-hover
              >
                <span class="n-active">Projects</span>
              </component>
            </li>

            <li class="lg:mx-6">
              <span
                @click="visible"
                :class="designsActiveClass"
                data-cursor-hover
              >
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
              <component
                :is="navLinkComponent"
                :to="contactLink"
                :href="isMainPage ? '#contact' : undefined"
                @click="handleNavClick($event, 'contact')"
                data-cursor-hover
              >
                <span class="n-active">Contact</span>
              </component>
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
              class="nav-links flex flex-col text-black-primary gap-8 tablet-xs:text-lg lg:gap-10 desktop:text-xl"
            >
              <li>
                <NuxtLink to="/designs/ui" data-cursor-hover>
                  <span class="n-active">UI</span>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/designs/illustrations" data-cursor-hover>
                  <span class="n-active">Illustrations</span>
                </NuxtLink>
              </li>

              <li>
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
                src="../../assets/close.svg"
                class="h-6 phone-sm:h-7 lg:h-height-5"
                alt="Close"
              />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  // 'main' for index.vue, 'designs' for design pages, 'other' for other pages
  variant: {
    type: String,
    default: "main",
    validator: (value) => ["main", "designs", "other"].includes(value),
  },
});

const isActive = ref(false);
const active = ref(false);
const isVisible = ref(false);
const zIndex = ref(false);

// Computed properties for different page types
const isMainPage = computed(() => {
  return props.variant === "main";
});

const isDesignsPage = computed(() => {
  return props.variant === "designs";
});

const isOtherPage = computed(() => {
  return props.variant === "other";
});

const navLinkComponent = computed(() => {
  if (isMainPage.value) {
    return "a";
  }
  return "NuxtLink";
});

const projectsLink = computed(() => {
  if (isMainPage.value) {
    return "#projects";
  }
  return "/#projects";
});

const contactLink = computed(() => {
  if (isMainPage.value) {
    return "#contact";
  }
  return "/#contact";
});

const designsActiveClass = computed(() => {
  if (isDesignsPage.value) {
    return "active";
  }
  return "n-active";
});

const navContainerClass = computed(() => {
  if (isMainPage.value) {
    return "xl:absolute";
  }

  if (isOtherPage.value) {
    return "relative";
  }

  return "";
});

const logoClass = computed(() => {
  if (isDesignsPage.value) {
    return "z-40";
  }
  return "";
});

// Navigation handlers
const handleNavClick = (event, section) => {
  // Prevent default anchor behavior on main page
  if (isMainPage.value) {
    event.preventDefault();
    scrollToSection(section);
  }

  close();
};

const scrollToSection = (sectionId) => {
  setTimeout(() => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
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
  if (isMainPage.value) {
    isActive.value = false;
  } else {
    isActive.value = !isActive.value;
  }

  isVisible.value = !isVisible.value;
  active.value = false;
  zIndex.value = !zIndex.value;
};

const enter = (el, done) => {
  // Transition enter hook
};

const close = () => {
  isActive.value = false;
  active.value = false;
};
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
