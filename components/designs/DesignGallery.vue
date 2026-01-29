<template>
  <div
    class="grid grid-cols-1 auto-rows-min-lg px-8 gap-8 mt-8 tablet-xs:auto-rows-min-xl tablet-xs:px-16 tablet-xs:gap-16 tablet-xs:mt-16 lg:grid-cols-2 lg:auto-rows-min-2xl xl:auto-rows-min-2xl"
  >
    <DesignGalleryItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import DesignGalleryItem from "./DesignGalleryItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
