<template>
  <footer
    class="bg-black-primary relative flex flex-col justify-center items-center w-full p-8 tablet-xs:px-16 tablet-xs:py-14 lg:flex-row-reverse lg:justify-between"
    id="footer"
    data-cursor-hover
  >
    <!-- Social Links -->
    <div class="flex flex-row gap-6 lg:gap-8 desktop:gap-10">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        class="z-20 transition-opacity duration-300 hover:opacity-70"
      >
        <img
          :src="link.icon"
          :alt="link.name"
          class="w-6 h-6 tablet-xs:w-7 tablet-xs:h-7"
        />
      </a>
    </div>

    <!-- Copyright -->
    <p
      class="text-white-soft mt-6 tablet-xs:mt-8 tablet-xs:text-lg lg:mt-0 desktop:text-xl"
    >
      © {{ currentYear }} Oluwatobiloba Adegbaju
    </p>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import mailIcon from "~/assets/media/mail.svg";
import linkedinIcon from "~/assets/media/linkedin.svg";
import githubIcon from "~/assets/media/github.svg";
import dribbbleIcon from "~/assets/media/dribbble.svg";

const currentYear = computed(() => new Date().getFullYear());

// Social Links Data
const socialLinks = [
  {
    name: "Mail",
    href: "mailto:adegbajuoezekiel@gmail.com",
    icon: mailIcon,
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tobiloba-adegbaju",
    icon: linkedinIcon,
    external: true,
  },
  {
    name: "Github",
    href: "https://www.github.com/ade-olu",
    icon: githubIcon,
    external: true,
  },
  {
    name: "Dribbble",
    href: "https://www.dribbble.com/ade-olu/",
    icon: dribbbleIcon,
    external: true,
  },
];
</script>
