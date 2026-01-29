<template>
  <div
    :class="[
      'relative overflow-hidden rounded-md flex',
      item.bgColor,
      item.type === 'mobile-design' || item.type === 'mobile-dual'
        ? 'justify-center'
        : 'justify-center items-center',
    ]"
    :style="item.customStyle"
    data-cursor-hover
  >
    <!-- Single Image (Web Design) -->
    <div
      v-if="
        item.type === 'web-design' ||
        item.type === 'web-design-textured' ||
        item.type === 'mobile-design'
      "
      :class="item.containerClass"
      data-cursor-hover
    >
      <img
        :class="item.imageClass"
        :src="item.image"
        :alt="item.alt"
        data-cursor-hover
      />
    </div>

    <!-- Dual Images (Mobile Apps) -->
    <div
      v-else-if="item.type === 'mobile-dual'"
      :class="item.containerClass"
      data-cursor-hover
    >
      <img
        v-for="(img, index) in item.images"
        :key="index"
        :class="img.class"
        :src="img.src"
        :alt="item.alt"
        data-cursor-hover
      />
    </div>

    <!-- Simple Full Image (Illustrations/3D) -->
    <div
      v-else-if="item.type === 'full-image'"
      class="absolute w-full h-full"
      data-cursor-hover
    >
      <img
        :class="['w-full h-full rounded-md', item.imageClass || '']"
        :src="item.image"
        :alt="item.alt"
        data-cursor-hover
      />
    </div>

    <!-- Noise Texture Overlay -->
    <img
      v-if="item.hasNoise"
      class="absolute w-full h-full object-cover"
      src="../../assets/noise.png"
      alt="Noise"
      data-cursor-hover
    />
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
