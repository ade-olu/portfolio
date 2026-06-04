<template>
  <div class="grid grid-cols-1 gap-8 mt-8 tablet-xs:grid-cols-2">
    <div
      v-for="item in items"
      :key="item.title"
      class="bg-light-orange rounded-sm border border-black-primary border-opacity-10 p-6"
      data-cursor-hover
    >
      <div
        v-if="item.img"
        class="bg-black-primary rounded-md mb-4 flex items-center justify-center w-12 h-12 tablet-xs:w-14 tablet-xs:h-14"
      >
        <img :src="item.img" class="w-6 h-auto tablet-xs:w-7" />
      </div>
      <h3 class="font-semibold text-black-primary text-base">
        {{ item.title }}
      </h3>
      <p class="mt-4 text-sm text-gray-dark">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>
