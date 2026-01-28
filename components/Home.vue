<template>
  <section class="bg-white-soft relative w-full h-auto" id="home">
    <div class="flex items-center justify-center xl:h-screen">
      <div class="text-center px-4 py-8 xl:mt-8">
        <div class="flex flex-col gap-5 phone-sm:gap-6 2xl:gap-8">
          <!-- Heading -->
          <h1
            class="font-heading font-bold text-3xl text-black-primary mt-4 leading-10 phone-sm:text-heading-1 phone-sm:leading-tight tablet-xs:text-heading-2 tablet-xs:leading-normal tablet-xs:mt-6 lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-extra-loose"
          >
            Hey, I'm
            <br />
            Oluwatobiloba
            <br />
            <span class="text-brand-orange">
              <span class="relative z-10">Adegbaju</span>
              <AccentLine class="-mt-4 phone-sm:-mt-5 lg:-mt-5" />
            </span>
          </h1>

          <!-- Description -->
          <p class="text-gray-dark phone-sm:text-lg desktop:text-xl">
            I'm a Web Developer and
            <br />
            UI/UX Designer based in Maryland, USA
            <br />
            who loves building intuitive digital
            <br />
            experiences for people.
          </p>
        </div>

        <!-- CTA Button -->
        <button
          @click="$emit('scrollToContact')"
          class="focus:outline-none bg-black-primary font-bold text-white-soft px-14 py-5 rounded-full mt-8 phone-sm:mt-10 phone-sm:px-20 tablet-xs:text-lg tablet-xs:mt-12 2xl:py-7 desktop:text-xl 2xl:px-20 transition-all duration-300 hover:bg-opacity-90 active:scale-95"
          style="cursor: none"
        >
          Get In Touch
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import AccentLine from "./AccentLine.vue";

defineEmits(["scrollToContact"]);
</script>
