<template>
  <div>
    <div>
      <!-- Mobile Nav Menu (Screens < lg: 1024px) -->
      <transition name="fade">
        <div
          class="fixed inset-0 z-30 flex flex-col items-center justify-center bg-background-light lg:hidden"
          v-if="isActive"
        >
          <ul
            class="nav-links flex flex-col items-center justify-center gap-12 text-lg text-black-primary tablet-xs:text-xl"
          >
            <li>
              <a
                :href="projectsLink"
                @click="handleNavClick($event, 'projects')"
                data-cursor-hover
              >
                <span class="n-active">Projects</span>
              </a>
            </li>

            <li>
              <span
                @click="visible"
                :class="designsActiveClass"
                data-cursor-hover
              >
                Designs
              </span>
            </li>

            <li>
              <a
                href="https://tinyurl.com/2457s3t2"
                target="_blank"
                data-cursor-hover
              >
                <span class="n-active">Resume</span>
              </a>
            </li>

            <li>
              <a
                :href="contactLink"
                @click="handleNavClick($event, 'contact')"
                data-cursor-hover
              >
                <span class="n-active">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </transition>

      <!-- Design Modal Overlay (Behind everything when open) -->
      <transition name="fade">
        <div
          v-if="isVisible"
          class="fixed inset-0 z-40 bg-black-opacity-50"
          @click="visible"
        ></div>
      </transition>

      <!-- Navbar -->
      <nav
        class="relative z-[35] transition-colors duration-300"
        :class="isActive ? 'bg-background-light' : 'bg-white-soft'"
        id="nav"
      >
        <div :class="navContainerClass" class="w-full">
          <div
            class="flex h-auto items-center justify-between p-8 tablet-xs:py-10 tablet-xs:px-16"
          >
            <!-- Logo -->
            <a href="/" class="relative flex-shrink-0" data-cursor-hover>
              <img
                class="h-12 w-auto tablet-xs:h-14 2xl:h-16"
                src="../../assets/logo.svg"
                alt="Logo"
              />
            </a>

            <!-- Desktop Nav Menu (Screens ≥ lg: 1024px) -->
            <div class="nav-menu hidden lg:block">
              <ul
                class="nav-links flex flex-row items-center gap-8 text-lg text-black-primary desktop:gap-10 desktop:text-xl"
              >
                <li>
                  <a
                    :href="projectsLink"
                    @click="handleNavClick($event, 'projects')"
                    data-cursor-hover
                  >
                    <span class="n-active">Projects</span>
                  </a>
                </li>

                <li>
                  <span
                    @click="visible"
                    :class="designsActiveClass"
                    data-cursor-hover
                  >
                    Designs
                  </span>
                </li>

                <li>
                  <a
                    href="https://tinyurl.com/2457s3t2"
                    target="_blank"
                    data-cursor-hover
                  >
                    <span class="n-active">Resume</span>
                  </a>
                </li>

                <li>
                  <a
                    :href="contactLink"
                    @click="handleNavClick($event, 'contact')"
                    data-cursor-hover
                  >
                    <span class="n-active">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Mobile Hamburger -->
            <div class="relative flex flex-shrink-0 items-center lg:hidden">
              <div
                class="hamburger-menu"
                @click="menu"
                :class="{ animate: isActive }"
                data-cursor-hover
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Design Modal Content -->
    <transition name="fade">
      <div
        class="fixed inset-0 z-40 flex items-center justify-center px-6 tablet-xs:px-8 pointer-events-none"
        v-if="isVisible"
      >
        <div
          class="modal pointer-events-auto flex w-full max-w-md flex-col rounded-lg bg-background-light p-8 lg:p-12"
        >
          <div class="flex items-start justify-between">
            <ul
              class="nav-links flex flex-col gap-8 text-lg text-black-primary tablet-xs:text-xl lg:gap-10 desktop:text-2xl"
            >
              <li>
                <NuxtLink to="/designs/ui" @click="visible" data-cursor-hover>
                  <span class="n-active">UI</span>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="/designs/illustrations"
                  @click="visible"
                  data-cursor-hover
                >
                  <span class="n-active">Illustrations</span>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/designs/3d" @click="visible" data-cursor-hover>
                  <span class="n-active">3D</span>
                </NuxtLink>
              </li>
            </ul>

            <!-- Close Modal -->
            <button
              class="transition-transform hover:scale-110 focus:outline-none"
              @click="visible"
              data-cursor-hover
              aria-label="Close modal"
            >
              <img
                src="../../assets/close.svg"
                class="h-6 w-6 tablet-xs:h-7 tablet-xs:w-7 lg:h-8 lg:w-8"
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
import { ref, computed, onBeforeUnmount } from "vue";

const props = defineProps({
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

const isMainPage = computed(() => {
  return props.variant === "main";
});

const isDesignsPage = computed(() => {
  return props.variant === "designs";
});

const isOtherPage = computed(() => {
  return props.variant === "other";
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
    return "xl:absolute xl:top-0 xl:left-0 xl:right-0";
  }

  return "relative";
});

const handleNavClick = (event, section) => {
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

  if (isActive.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const visible = () => {
  isVisible.value = !isVisible.value;
  zIndex.value = !zIndex.value;

  if (isVisible.value) {
    document.body.style.overflow = "hidden";
  } else {
    if (!isActive.value) {
      document.body.style.overflow = "";
    }
  }
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
  document.body.style.overflow = "";
};

const enter = (el, done) => {
  done();
};

const close = () => {
  isActive.value = false;
  active.value = false;
  document.body.style.overflow = "";
};

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
