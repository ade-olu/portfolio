<template>
  <ul class="mt-8 flex flex-col gap-8">
    <li v-for="item in items" :key="item.title" class="flex gap-8">
      <p
        class="text-gray-dark font-semibold text-sm tablet-xs:text-base mt-0.5"
      >
        {{ item.numList }}
      </p>
      <div class="flex flex-col gap-4">
        <h3
          class="text-black-primary font-bold text-base tablet-xs:text-lg desktop:text-xl"
        >
          {{ item.listTitle }}
        </h3>
        <p class="text-gray-dark text-sm tablet-xs:text-base">
          {{ item.listDescription }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>
