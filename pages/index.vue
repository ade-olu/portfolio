<template>

  <div
    class="relative h-screen container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >

    <!-- Nav -->

    <main-nav></main-nav>

    <!-- Home -->

    <div
      class="bg-white relative w-full h-auto"
      id="home"
      :class="{ change: zIndex }"
    >

      <div class="flex items-center justify-center xl:h-screen">

        <div class="text-center xl:mt-8">

          <!-- Heading -->

          <h1
            class="font-heading font-bold text-3xl text-blackPrimary mt-4 leading-10 phoneSm:text-heading-1 phoneSm:leading-tight tabletXs:text-heading-2 tabletXs:leading-normal tabletXs:mt-6 lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-extraLoose"
          >
             Hey, I'm
            <br />
             Oluwatobiloba
            <br />

            <span class="text-brandOrange">

              <span class="relative z-10">Adegbaju</span>

              <span
                class="relative flex justify-center items-center -mt-4 z-0 phoneSm:-mt-5 lg:-mt-5"
              >

                <img
                  class="w-48 phoneSm:w-width-16 tabletXs:w-52 lg:w-56 2xl:w-64"
                  src="../assets/accent-line.svg"
                  alt="Accent Line"
                />

              </span>

            </span>

          </h1>

          <!-- Text -->

          <p
            class="text-grayDark mt-5 phoneSm:mt-6 phoneSm:text-lg tabletXs:text-xl tabletXs:mt-8"
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
            v-scroll-to="{ el: '#contact', duration: 1000 }"
            class="focus:outline-none bg-blackPrimary font-bold text-white h-16 px-14 py-2.5 rounded-full mt-8 phoneSm:mt-10 phoneSm:text-lg phoneSm:h-16 phoneSm:px-20 tabletXs:text-xl tabletXs:h-height-7 tabletXs:px-20 tabletXs:mt-12 2xl:h-20 2xl:px-20"
            style="cursor: none"
          >
             Get In Touch
          </button>

        </div>

      </div>

    </div>

    <!-- Projects -->

    <projects></projects>

    <!-- Designs -->

    <designs></designs>

    <!-- Contact -->

    <div
      class="mt-2 pt-10 pb-14 bg-backgroundLight relative w-full h-auto phoneSm:mt-4 tabletXs:mt-10 tabletXs:pt-10 tabletXs:pb-14 lg:mt-6 lg:pt-14 lg:pb-20 xl:mt-14"
      id="contact"
    >

      <div class="flex flex-col items-center justify-center">

        <div class="text-center">

          <!-- Heading -->

          <h1
            class="font-heading font-bold text-3xl text-blackPrimary leading-10 phoneSm:text-heading-1 phoneSm:leading-tight tabletXs:text-heading-2 tabletXs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6 2xl:leading-extraLoose"
          >

            <span class="relative z-20">Contact</span>

            <span
              class="relative flex justify-center items-center -mt-4 z-0 phoneSm:-mt-5 lg:-mt-5"
            >

              <img
                class="w-32 phoneSm:w-36 tabletXs:w-44 lg:w-48 2xl:w-56"
                src="../assets/accent-line.svg"
                alt="Accent Line"
              />

            </span>

          </h1>

        </div>

        <!-- Form -->

        <form
          class="flex flex-col items-center justify-center px-8 mt-11 w-full tabletXs:px-40 lg:mt-11 lg:px-padding-width-1 xl:px-padding-width-2 2xl:px-padding-width-3"
          action="https://formspree.io/f/mrgroypw"
          method="POST"
        >

          <!-- Name -->

          <div class="input-div relative w-full">

            <input
              class="input-effect focus:outline-none bg-transparent border-b-thin border-gray placeholder-gray text-blackPrimary py-2.5 w-full phoneSm:text-lg tabletXs:text-xl"
              type="text"
              name="Name"
              id="name"
              placeholder="Enter your name"
            />

            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-thin border-brandOrange transition-all"
            ></span>

          </div>

          <!-- Email -->

          <div class="input-div relative w-full mt-12 lg:mt-16">

            <input
              class="input-effect focus:outline-none bg-transparent border-b-thin border-gray placeholder-gray text-blackPrimary py-2.5 w-full phoneSm:text-lg tabletXs:text-xl"
              type="email"
              name="Email"
              id="email"
              placeholder="Enter your email"
            />

            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-thin border-brandOrange transition-all"
            ></span>

          </div>

          <!-- Message -->

          <div class="input-div relative w-full mt-12 lg:mt-16">

            <input
              class="input-effect focus:outline-none bg-transparent border-b-thin border-gray placeholder-gray text-blackPrimary py-2.5 w-full phoneSm:text-lg tabletXs:text-xl"
              type="text"
              name="Message"
              id="message"
              placeholder="Enter your message"
            />

            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-thin border-brandOrange transition-all"
            ></span>

          </div>

          <!-- Btn -->

          <button
            class="focus:outline-none bg-blackPrimary font-bold text-white h-16 px-14 py-2.5 rounded-full mt-16 w-width-18 phoneSm:text-lg phoneSm:h-16 phoneSm:px-20 phoneSm:w-width-19 tabletXs:text-xl tabletXs:h-height-7 tabletXs:w-width-20 tabletXs:px-20 lg:mt-24 2xl:h-20 2xl:px-20"
            style="cursor: none"
          >
             Send
          </button>

        </form>

      </div>

    </div>

    <!-- Footer -->

    <div
      class="bg-blackPrimary relative flex flex-col justify-center items-center w-full py-8 px-5 tabletXs:px-10 tabletXs:py-10 lg:flex-row-reverse lg:justify-between lg:h-36 lg:px-logo-padding xl:px-0"
      id="footer"
    >

      <div class="flex flex-row xl:px-20">

        <!-- Mail -->

        <a
          href="mailto:adegbajuoezekiel@gmail.com"
          class="mx-4 phoneSm:mx-small tabletXs:mx-5 lg:mx-6 z-20"
        >

          <img
            src="../assets/media/mail.svg"
            class="w-width-3 phoneSm:w-width-4 tabletXs:w-width-5"
            alt="Mail"
          />

        </a>

        <!-- Twitter -->

        <a
          href="https://www.twitter.com/tobiadegbaju/"
          target="_blank"
          class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20"
        >

          <img
            src="../assets/media/twitter.svg"
            class="h-6 phone:h-med tab:h-med2"
            alt="Twitter"
          />

        </a>

        <!-- LinkedIn -->

        <a
          href="https://www.linkedin.com/in/tobiloba-adegbaju"
          target="_blank"
          class="mx-4 phoneSm:mx-small tabletXs:mx-5 lg:mx-6 z-20"
        >

          <img
            src="../assets/media/linkedin.svg"
            class="h-6 phoneSm:h-height-2 tabletXs:h-height-4"
            alt="LinkedIn"
          />

        </a>

        <!-- Github -->

        <a
          href="https://www.github.com/ade-olu"
          target="_blank"
          class="mx-4 phoneSm:mx-small tabletXs:mx-5 lg:mx-6 z-20"
        >

          <img
            src="../assets/media/github.svg"
            class="h-6 phoneSm:h-height-2 tabletXs:h-height-4"
            alt="Github"
          />

        </a>

        <!-- Dribbble -->

        <a
          href="https://www.dribbble.com/ade-olu/"
          target="_blank"
          class="mx-4 phoneSm:mx-small tabletXs:mx-5 lg:mx-6 z-20"
        >

          <img
            src="../assets/media/dribbble.svg"
            class="h-6 phoneSm:h-height-2 tabletXs:h-height-4"
            alt="Dribbble"
          />

        </a>

      </div>

      <!-- Copyright -->

      <p
        class="text-white mt-6 phoneSm:text-lg tabletXs:mt-8 tabletXs:text-xl lg:mt-0 xl:ml-20"
      >
         © {{ new Date().getFullYear() }} Oluwatobiloba Adegbaju
      </p>

      <hover class="absolute w-full h-full"></hover>

    </div>

  </div>

</template>

<script>
import { gsap } from "gsap";
import Projects from "../components/Projects";
import Designs from "../components/Designs";
import MainNav from "../components/MainNav";

export default {
  components: {
    MainNav,
    Projects,
    Designs,
  },

  mounted() {},
};
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

