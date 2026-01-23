<template>
  <div
    class="relative h-screen container font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <MainNav />

    <!-- Home -->
    <div
      class="bg-white-soft relative w-full h-auto"
      id="home"
      :class="{ change: zIndex }"
    >
      <div class="flex items-center justify-center xl:h-screen">
        <div class="text-center xl:mt-8">
          <!-- Heading -->
          <h1
            class="font-heading font-bold text-3xl text-black-primary mt-4 leading-10 phone-sm:text-heading-1 phone-sm:leading-tight tablet-xs:text-heading-2 tablet-xs:leading-normal tablet-xs:mt-6 lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-"
          >
            Hey, I'm
            <br />
            Oluwatobiloba
            <br />

            <span class="text-brand-orange">
              <span class="relative z-10">Adegbaju</span>

              <span
                class="relative flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
                data-cursor-hover
              >
                <img
                  class="w-48 phone-sm:w-width-16 tablet-xs:w-52 lg:w-56 2xl:w-64"
                  src="../assets/accent-line.svg"
                  alt="Accent Line"
                />
              </span>
            </span>
          </h1>

          <!-- Text -->
          <p
            class="text-gray-dark mt-5 phone-sm:mt-6 phone-sm:text-lg tablet-xs:text-xl tablet-xs:mt-8"
          >
            I'm a Web Developer and
            <br />
            UI/UX Designer based in Maryland,
            <br />
            USA who loves building significant
            <br />
            experiences for people.
          </p>

          <!-- Btn -->
          <button
            @click="scrollToContact"
            class="focus:outline-none bg-black-primary font-bold text-white-soft h-16 px-14 py-2.5 rounded-full mt-8 phone-sm:mt-10 phone-sm:text-lg phone-sm:h-16 phone-sm:px-20 tablet-xs:text-xl tablet-xs:h-height-7 tablet-xs:px-20 tablet-xs:mt-12 2xl:h-20 2xl:px-20"
            style="cursor: none"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <Projects />

    <!-- Designs -->
    <Designs />

    <!-- Contact -->
    <div
      class="mt-2 pt-10 pb-14 bg-background-light relative w-full h-auto phone-sm:mt-4 tablet-xs:mt-10 tablet-xs:pt-10 tablet-xs:pb-14 lg:mt-6 lg:pt-14 lg:pb-20 xl:mt-14"
      id="contact"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="text-center">
          <!-- Heading -->
          <h1
            class="font-heading font-bold text-3xl text-black-primary leading-10 phone-sm:text-heading-1 phone-sm:leading-tight tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-"
          >
            <span class="relative z-20">Contact</span>

            <span
              class="relative flex justify-center items-center -mt-4 z-0 phone-sm:-mt-5 lg:-mt-5"
              data-cursor-hover
            >
              <img
                class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-56"
                src="../assets/accent-line.svg"
                alt="Accent Line"
              />
            </span>
          </h1>
        </div>

        <!-- Form -->
        <form
          class="flex flex-col items-center justify-center px-8 mt-11 w-full tablet-xs:px-40 lg:mt-11 lg:px-padding-width-1 xl:px-padding-width-2 2xl:px-padding-width-3"
          action="https://formspree.io/f/mrgroypw"
          method="POST"
        >
          <!-- Name -->
          <div class="input-div relative w-full">
            <input
              class="input-effect focus:outline-none bg-transparent border-b-thin border-gray placeholder-gray text-black-primary py-2.5 w-full phone-sm:text-lg tablet-xs:text-xl"
              type="text"
              name="Name"
              id="name"
              placeholder="Enter your name"
            />

            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-thin border-brand-orange transition-all"
            ></span>
          </div>

          <!-- Email -->
          <div class="input-div relative w-full mt-12 lg:mt-16">
            <input
              class="input-effect focus:outline-none bg-transparent border-b-thin border-gray placeholder-gray text-black-primary py-2.5 w-full phone-sm:text-lg tablet-xs:text-xl"
              type="email"
              name="Email"
              id="email"
              placeholder="Enter your email"
            />

            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-thin border-brand-orange transition-all"
            ></span>
          </div>

          <!-- Message -->
          <div class="input-div relative w-full mt-12 lg:mt-16">
            <input
              class="input-effect focus:outline-none bg-transparent border-b-thin border-gray placeholder-gray text-black-primary py-2.5 w-full phone-sm:text-lg tablet-xs:text-xl"
              type="text"
              name="Message"
              id="message"
              placeholder="Enter your message"
            />

            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-thin border-brand-orange transition-all"
            ></span>
          </div>

          <!-- Btn -->
          <button
            class="focus:outline-none bg-black-primary font-bold text-white-soft h-16 px-14 py-2.5 rounded-full mt-16 w-width-18 phone-sm:text-lg phone-sm:h-16 phone-sm:px-20 phone-sm:w-width-19 tablet-xs:text-xl tablet-xs:h-height-7 tablet-xs:w-width-20 tablet-xs:px-20 lg:mt-24 2xl:h-20 2xl:px-20"
            style="cursor: none"
          >
            Send
          </button>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="bg-black-primary relative flex flex-col justify-center items-center w-full py-8 px-5 tablet-xs:px-10 tablet-xs:py-10 lg:flex-row-reverse lg:justify-between lg:h-36 lg:px-logo-padding xl:px-0"
      id="footer"
      data-cursor-hover
    >
      <div class="flex flex-row xl:px-20">
        <!-- Mail -->
        <a
          href="mailto:adegbajuoezekiel@gmail.com"
          class="mx-4 phone-sm:mx-small tablet-xs:mx-5 lg:mx-6 z-20"
        >
          <img
            src="../assets/media/mail.svg"
            class="w-width-3 phone-sm:w-width-4 tablet-xs:w-width-5"
            alt="Mail"
          />
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/tobiloba-adegbaju"
          target="_blank"
          class="mx-4 phone-sm:mx-small tablet-xs:mx-5 lg:mx-6 z-20"
        >
          <img
            src="../assets/media/linkedin.svg"
            class="h-6 phone-sm:h-height-2 tablet-xs:h-height-4"
            alt="LinkedIn"
          />
        </a>

        <!-- Github -->
        <a
          href="https://www.github.com/ade-olu"
          target="_blank"
          class="mx-4 phone-sm:mx-small tablet-xs:mx-5 lg:mx-6 z-20"
        >
          <img
            src="../assets/media/github.svg"
            class="h-6 phone-sm:h-height-2 tablet-xs:h-height-4"
            alt="Github"
          />
        </a>

        <!-- Dribbble -->
        <a
          href="https://www.dribbble.com/ade-olu/"
          target="_blank"
          class="mx-4 phone-sm:mx-small tablet-xs:mx-5 lg:mx-6 z-20"
        >
          <img
            src="../assets/media/dribbble.svg"
            class="h-6 phone-sm:h-height-2 tablet-xs:h-height-4"
            alt="Dribbble"
          />
        </a>
      </div>

      <!-- Copyright -->
      <p
        class="text-white-soft mt-6 phone-sm:text-lg tablet-xs:mt-8 tablet-xs:text-xl lg:mt-0 xl:ml-20"
      >
        © {{ currentYear }} Oluwatobiloba Adegbaju
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Components are auto-imported in Nuxt 3
// No need to explicitly import MainNav, Projects, Designs

// Reactive state
const active = ref(false);
const zIndex = ref(false);

// Computed property for current year
const currentYear = computed(() => new Date().getFullYear());

// Scroll to contact section
const scrollToContact = () => {
  const contactElement = document.getElementById("contact");
  if (contactElement) {
    contactElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// If you want to use a scroll library, install and use it like this:
// npm install vue-scrollto
// Then use:
// const { scrollTo } = useScrollTo()
// const scrollToContact = () => {
//   scrollTo('#contact', { duration: 1000, offset: 0 })
// }
</script>

<style scoped>
@import "../styles/nav.css";

html {
  overflow: hidden;
}

.focus-border {
  transition-duration: 400ms;
}

.input-effect:focus ~ .focus-border {
  width: 100%;
  transition: 400ms ease;
  left: 0;
}
</style>
