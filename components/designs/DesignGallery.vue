<template>
  <div
    class="grid grid-cols-1 px-8 gap-14 mt-14 tablet-xs:px-14 tablet-xs:gap-14 lg:mt-20 lg:px-24 lg:grid-cols-2 lg:gap-24"
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
