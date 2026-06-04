<template>
  <div class="flex flex-col gap-4">
    <p class="uppercase font-bold text-gray-dark text-sm desktop:text-base">
      {{ label }}
    </p>
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
