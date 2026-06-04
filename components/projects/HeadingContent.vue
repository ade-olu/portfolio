<template>
  <div :class="[containerClass]">
    <h2
      class="font-heading font-bold text-xl text-black-primary phone-sm:text-2xl desktop:text-display"
    >
      {{ csHeading }}
    </h2>
    <p class="text-gray-dark my-4 text-base tablet-xs:text-lg desktop:text-xl">
      {{ paragraph1 }}
    </p>
    <p
      v-if="paragraph2"
      :class="[
        'text-gray-dark text-base tablet-xs:text-lg desktop:text-xl',
        paragraph2Class,
      ]"
    >
      {{ paragraph2 }}
    </p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  containerClass: {
    type: String,
    default: "",
  },
  csHeading: {
    type: String,
    required: true,
  },
  paragraph1: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    default: "",
  },
  paragraph2Class: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
