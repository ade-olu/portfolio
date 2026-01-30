<template>
  <h1
    :class="[
      'text-center font-heading font-bold text-black-primary text-heading-1 leading-10 phone-sm:text-4xl phone-sm:leading-tight tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-3 lg:leading-loose 2xl:text-heading-4 2xl:leading-extra-loose',
      headingClass,
    ]"
  >
    <span class="relative z-10">
      <slot />
    </span>

    <AccentLine
      :class="['-mt-4 phone-sm:-mt-5 lg:-mt-5', accentWrapperClass]"
      :img-class="accentImgClass"
    />
  </h1>
</template>

<script setup>
import AccentLine from "./AccentLine.vue";

defineProps({
  // Tailwind classes for the h1
  headingClass: {
    type: String,
    default: "",
  },

  // Tailwind classes for AccentLine wrapper
  accentWrapperClass: {
    type: String,
    default: "",
  },

  // Tailwind classes for the accent image
  accentImgClass: {
    type: String,
    default: "w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-60",
  },
});
</script>
