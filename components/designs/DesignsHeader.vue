<template>
  <div class="text-center">
    <h1
      class="font-heading font-bold text-3xl text-black leading-10 mt-4 phone-sm:text-heading-1 phone-sm:leading-tight xl:mt-2 tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6"
    >
      <span class="relative z-10">{{ title }}</span>
      <AccentLine
        class="-mt-4 phone-sm:-mt-5 lg:-mt-5"
        img-class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-56"
      />
    </h1>
  </div>
</template>

<script setup>
import AccentLine from "../AccentLine.vue";

defineProps({
  title: {
    type: String,
    default: "Designs",
  },
});
</script>
