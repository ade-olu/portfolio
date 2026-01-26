<template>
  <!-- Navigation -->
  <div class="flex justify-center mt-large phone-sm:mt-14 tablet-xs:mt-16">
    <ul
      class="nav-links flex flex-row items-center text-black gap-6 sm:gap-10 phone-sm:gap-12 tablet-xs:text-lg desktop:text-xl"
      id="nLinks"
    >
      <li>
        <NuxtLink to="/designs/ui" data-cursor-hover>
          <span :class="activeClass('ui')">UI</span>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/designs/illustrations" data-cursor-hover>
          <span :class="activeClass('illustrations')">Illustrations</span>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/designs/3d" data-cursor-hover>
          <span :class="activeClass('3d')">3D</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    required: true,
  },
});

// Function to determine active class based on current variant
const activeClass = (key) => {
  if (props.variant === key) {
    return "active";
  } else {
    return "n-active";
  }
};
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
