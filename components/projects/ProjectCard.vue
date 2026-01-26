<template>
  <div
    :class="[
      'relative rounded-md grid justify-center items-center',
      project.bgColor,
      project.rowSpan,
    ]"
    :style="project.customStyle"
  >
    <img
      :class="['z-10', project.imgSize]"
      :src="project.img"
      :alt="project.name"
    />

    <!-- Overlay -->
    <NuxtLink
      :to="project.route"
      data-cursor-hover
      class="project-overlay z-10 rounded-md absolute inset-0"
    >
      <div class="overlay-inner w-full h-full">
        <div
          class="absolute flex flex-col justify-end rounded-md inset-0 p-6 tablet-xs:p-10"
        >
          <!-- Project Info -->
          <div class="mb-5 tablet-xs:mb-9 lg:mb-7 xl:mb-9">
            <h2
              class="font-heading text-white-soft text-2xl phone-sm:text-display tablet-xs:text-4xl lg:text-4xl xl:text-heading-3"
            >
              {{ project.name }}
            </h2>
            <p
              class="text-gray-light mt-2 tablet-xs:mt-5 tablet-xs:text-lg lg:mt-4 xl:mt-5 desktop:text-xl"
            >
              {{ project.description }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-4 tablet-xs:gap-6">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="inline-flex items-center justify-center font-bold bg-gray text-white-soft rounded-full text-xs px-4 py-1.5 phone-sm:text-sm tablet-xs:px-6 tablet-xs:py-2 whitespace-nowrap desktop:text-base"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.project-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
}

@media screen and (max-width: 1279px) {
  .project-overlay {
    opacity: 1 !important;
  }
}

@media screen and (min-width: 1280px) {
  .project-overlay {
    opacity: 0;
    will-change: opacity;
    transition: opacity 200ms;
  }

  .project-overlay:hover {
    opacity: 1;
  }

  .overlay-inner > * {
    transform: translateY(1.25rem);
    transition: transform 200ms;
  }

  .project-overlay:hover .overlay-inner > * {
    transform: translateY(0);
  }
}
</style>
