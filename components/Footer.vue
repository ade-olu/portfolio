<template>
  <footer
    class="bg-black-primary relative flex flex-col justify-center items-center w-full py-8 px-5 tablet-xs:px-10 tablet-xs:py-10 lg:flex-row-reverse lg:justify-between lg:h-36 lg:px-logo-padding xl:px-0"
    id="footer"
    data-cursor-hover
  >
    <!-- Social Links -->
    <div class="flex flex-row xl:px-20">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        class="mx-4 phone-sm:mx-small tablet-xs:mx-5 lg:mx-6 z-20 transition-opacity duration-300 hover:opacity-70"
      >
        <img :src="link.icon" :alt="link.name" :class="link.imgClass" />
      </a>
    </div>

    <!-- Copyright -->
    <p
      class="text-white-soft mt-6 tablet-xs:mt-8 tablet-xs:text-lg lg:mt-0 xl:ml-20 desktop:text-xl"
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
// Fix the imgClass heights for linkedin, github, dribbble to match the copyright text height
const socialLinks = [
  {
    name: "Mail",
    href: "mailto:adegbajuoezekiel@gmail.com",
    icon: mailIcon,
    imgClass: "w-width-3 phone-sm:w-width-4 tablet-xs:w-width-5",
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tobiloba-adegbaju",
    icon: linkedinIcon,
    imgClass: "h-6 phone-sm:h-height-2 tablet-xs:h-height-4",
    external: true,
  },
  {
    name: "Github",
    href: "https://www.github.com/ade-olu",
    icon: githubIcon,
    imgClass: "h-6 phone-sm:h-height-2 tablet-xs:h-height-4",
    external: true,
  },
  {
    name: "Dribbble",
    href: "https://www.dribbble.com/ade-olu/",
    icon: dribbbleIcon,
    imgClass: "h-6 phone-sm:h-height-2 tablet-xs:h-height-4",
    external: true,
  },
];
</script>
