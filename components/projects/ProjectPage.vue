<template>
  <div
    class="relative container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <Nav variant="other" />

    <!-- Project Content -->
    <div
      class="bg-white-soft relative w-full pb-16 phone-sm:pb-20 tablet-xs:pb-24"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <Heading :accent-img-class="accentImgClass">
        {{ title }}
      </Heading>

      <!-- Grid Layout: About & Technologies -->
      <div
        class="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 2xl:gap-16 mt-8 tablet-xs:mt-12 lg:mt-14 px-6 phone-sm:px-8 tablet-xs:px-14 lg:px-20 xl:px-24 2xl:px-32"
      >
        <!-- About Section -->
        <div class="xl:col-span-7 2xl:col-span-8">
          <h2
            class="font-heading font-bold text-xl text-black-primary phone-sm:text-2xl desktop:text-display"
          >
            About
          </h2>
          <p
            class="text-gray-dark mt-3 text-base tablet-xs:mt-5 tablet-xs:text-lg xl:max-w-lg desktop:text-xl"
          >
            {{ description }}
          </p>

          <!-- View Live Site Button -->
          <a
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-black-primary text-white-soft inline-flex items-center gap-2 px-6 py-3 mt-6 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 tablet-xs:mt-8 tablet-xs:px-8 tablet-xs:py-3.5 tablet-xs:text-lg desktop:text-xl"
          >
            <span>{{ buttonLink }}</span>
            <!-- Link SVG icon -->
            <svg
              class="w-4 h-4 tablet-xs:w-5 tablet-xs:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <!-- Technologies Section -->
        <div class="xl:col-span-5 2xl:col-span-4 mt-8 xl:mt-0">
          <h2
            class="font-heading font-bold text-xl text-black-primary mb-5 phone-sm:text-2xl tablet-xs:mb-6 desktop:text-display"
          >
            Technologies
          </h2>
          <div class="flex flex-wrap gap-4 tablet-xs:gap-6">
            <span
              v-for="tech in technologies"
              :key="tech"
              class="inline-flex items-center justify-center font-bold bg-gray-dark text-white-soft rounded-full text-xs px-4 py-1.5 phone-sm:text-sm tablet-xs:px-6 tablet-xs:py-2 desktop:text-base whitespace-nowrap transition-transform hover:scale-105"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "@/components/navigation/Nav.vue";

// Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  liveUrl: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    default: "View Live Site",
  },
  accentImgClass: {
    type: String,
    default: "w-32 phone-sm:w-36 tablet-xs:w-40 lg:w-44",
  },
});

// Reactive state
const active = ref(false);
const zIndex = ref(false);
</script>
