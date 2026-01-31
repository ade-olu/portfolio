<template>
  <span
    class="relative flex justify-center items-center z-0"
    :class="className"
    data-cursor-hover
  >
    <img :class="imgClass" src="../assets/accent-line.svg" alt="Accent Line" />
  </span>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
  imgClass: {
    type: String,
    default: "w-40 phone-sm:w-44 tablet-xs:w-52 lg:w-56 2xl:w-72",
  },
});
</script>
