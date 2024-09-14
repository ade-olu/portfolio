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
      <div class="flex items-center justify-center xlarge:h-screen">
        <div class="text-center xlarge:mt-8">
          <!-- Heading -->
          <h1
            class="font-head font-bold text-3xl text-black mt-4 leading-10 phone:text-fsize phone:leading-pht tab:text-tfsize tab:leading-lht tab:mt-6 large:text-lfsize large:leading-lglht 2xlarge:text-2xlfsize 2xlarge:leading-xlglht"
          >
            Hey, I'm
            <br />
            Oluwatobiloba
            <br />
            <span class="text-orange">
              <span class="relative z-10">Adegbaju</span>
              <span
                class="relative flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
              >
                <img
                  class="w-wh phone:w-mwh tab:w-52 large:w-56 2xlarge:w-wh2"
                  src="../assets/accent-line.svg"
                  alt="Accent Line"
                />
              </span>
            </span>
          </h1>

          <!-- Text -->
          <p
            class="text-grey mt-5 phone:mt-6 phone:text-lg tab:text-xl tab:mt-8"
          >
            I’m a Frontend Developer and
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
            class="focus:outline-none bg-black font-bold text-white h-16 px-14 py-2.5 rounded-full mt-8 phone:mt-10 phone:text-lg phone:h-16 phone:px-20 tab:text-xl tab:h-bht tab:px-20 tab:mt-12 2xlarge:h-20 2xlarge:px-20"
            style="cursor: none;"
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
      class="mt-2 pt-10 pb-14 bg-light relative w-full h-auto phone:mt-4 tab:mt-10 tab:pt-10 tab:pb-14 large:mt-6 large:pt-14 large:pb-20 xlarge:mt-14"
      id="contact"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="text-center">
          <!-- Heading -->
          <h1
            class="font-head font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-pht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht 2xlarge:text-2xlfsize 2xlarge:leading-xlglht"
          >
            <span class="relative z-20">Contact</span>
            <span
              class="relative flex justify-center items-center -mt-4 z-0 phone:-mt-5 large:-mt-5"
            >
              <img
                class="w-32 phone:w-36 tab:w-44 large:w-48 2xlarge:w-56"
                src="../assets/accent-line.svg"
                alt="Accent Line"
              />
            </span>
          </h1>
        </div>

        <!-- Form -->
        <form
          class="flex flex-col items-center justify-center px-8 mt-11 w-full tab:px-40 large:mt-11 large:px-pw3 xlarge:px-pw 2xlarge:px-pw2"
          action="https://formspree.io/f/mrgroypw"
          method="POST"
        >
          <!-- Name -->
          <div class="input-div relative w-full">
            <input
              class="input-effect focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full phone:text-lg tab:text-xl"
              type="text"
              name="Name"
              id="name"
              placeholder="Enter your name"
            />
            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-one border-orange transition-all"
            ></span>
          </div>

          <!-- Email -->
          <div class="input-div relative w-full mt-12 large:mt-16">
            <input
              class="input-effect focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full phone:text-lg tab:text-xl"
              type="email"
              name="Email"
              id="email"
              placeholder="Enter your email"
            />
            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-one border-orange transition-all"
            ></span>
          </div>

          <!-- Message -->
          <div class="input-div relative w-full mt-12 large:mt-16">
            <input
              class="input-effect focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full phone:text-lg tab:text-xl"
              type="text"
              name="Message"
              id="message"
              placeholder="Enter your message"
            />
            <span
              class="focus-border absolute bottom-0 left-1/2 w-0 border-b-one border-orange transition-all"
            ></span>
          </div>

          <!-- Btn -->
          <button
            class="focus:outline-none bg-black font-bold text-white h-16 px-14 py-2.5 rounded-full mt-16 w-cs phone:text-lg phone:h-16 phone:px-20 phone:w-cs2 tab:text-xl tab:h-bht tab:w-cs3 tab:px-20 large:mt-24 2xlarge:h-20 2xlarge:px-20"
            style="cursor: none;"
          >
            Send
          </button>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="bg-black relative flex flex-col justify-center items-center w-full py-8 px-5 tab:px-10 tab:py-10 large:flex-row-reverse large:justify-between large:h-36 large:px-logo xlarge:px-0"
      id="footer"
    >
      <div class="flex flex-row xlarge:px-20">
        <!-- Mail -->
        <a
          href="mailto:adegbajuoezekiel@gmail.com"
          class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20"
        >
          <img
            src="../assets/media/mail.svg"
            class="w-media phone:w-media2 tab:w-media3"
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
          class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20"
        >
          <img
            src="../assets/media/linkedin.svg"
            class="h-6 phone:h-med tab:h-med2"
            alt="LinkedIn"
          />
        </a>

        <!-- Github -->
        <a
          href="https://www.github.com/ade-olu"
          target="_blank"
          class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20"
        >
          <img
            src="../assets/media/github.svg"
            class="h-6 phone:h-med tab:h-med2"
            alt="Github"
          />
        </a>

        <!-- Dribbble -->
        <a
          href="https://www.dribbble.com/ade-olu/"
          target="_blank"
          class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20"
        >
          <img
            src="../assets/media/dribbble.svg"
            class="h-6 phone:h-med tab:h-med2"
            alt="Dribbble"
          />
        </a>
      </div>

      <!-- Copyright -->
      <p
        class="text-white mt-6 phone:text-lg tab:mt-8 tab:text-xl large:mt-0 xlarge:ml-20"
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
