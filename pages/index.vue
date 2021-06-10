<template>
  <div
    class="relative container font-body bg-white"
    :class="{ stop: active }"
    id="container"
  >
    <!-- For Screens Lower Than 769px -->
    <!-- Nav Menu -->
    <transition name="fade" v-on:enter="enter">
      <div
        class="nav-menu-2 fixed w-full h-screen bg-light z-30 flex flex-col items-center justify-center large:hidden"
        v-if="isActive"
        id="nMenu"
      >
        <ul
          class="nav-links phone:text-lg flex flex-col items-center justify-center text-black"
          id="nLinks"
        >
          <li class="my-6">
            <a href="#projects" @click="close"
              ><span><hover>Projects</hover></span></a
            >
          </li>
          <li class="my-6">
            <a href="#" @click="visible"
              ><span><hover>Designs</hover></span></a
            >
          </li>
          <li class="my-6">
            <a href="#"
              ><span><hover>Resume</hover></span></a
            >
          </li>
          <li class="my-6">
            <a href="#contact" @click="close"
              ><span><hover>Contact</hover></span></a
            >
          </li>
        </ul>
      </div>
    </transition>

    <!-- Navbar -->
    <nav class="bg-white z-20" id="nav">
      <div
        class="xlarge:absolute z-20 w-full h-ht flex items-center py-5 px-5 justify-between tab:h-32 tab:px-10 large:px-logo large:h-36 xlarge:px-20"
      >
        <!-- Logo -->
        <a href="/" class="z-40">
          <img
            class="w-wt phone:w-sz tab:w-sz2 large:w-sz2"
            src="../assets/logo.svg"
            alt="Logo"
          />
        </a>

        <!-- For Screens Higher Than 768px -->
        <!-- Nav Menu -->
        <div class="nav-menu hidden large:block" id="nMenu">
          <ul
            class="nav-links large:flex large:flex-row large:items-center large:text-xl text-black"
            id="nLinks"
          >
            <li class="large:mx-6">
              <a href="#" v-scroll-to="{ el: '#projects', duration: 1000 }"
                ><span><hover>Projects</hover></span></a
              >
            </li>
            <li class="large:mx-6">
              <a href="#" @click="visible"
                ><span><hover>Designs</hover></span></a
              >
            </li>
            <li class="large:mx-6">
              <a href="#"
                ><span><hover>Resume</hover></span></a
              >
            </li>
            <li class="large:mx-6">
              <a href="#" v-scroll-to="{ el: '#contact', duration: 1000 }"
                ><span><hover>Contact</hover></span></a
              >
            </li>
          </ul>
        </div>

        <!-- For Screens Lower Than 769px -->
        <!-- Hamburger Menu -->
        <div class="flex item-center relative w-10 z-40 mr-0.5 large:hidden">
          <div
            class="hamburger-menu"
            @click="menu"
            :class="{ animate: isActive }"
          ></div>
        </div>
      </div>
    </nav>

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
            class="font-body font-bold text-3xl text-black mt-4 leading-10 phone:text-fsize phone:leading-pht tab:text-tfsize tab:leading-lht tab:mt-6 large:text-lfsize large:leading-lglht xlarge:text-xlfsize xlarge:leading-xlglht 2xlarge:text-2xlfsize"
          >
            Hey, I'm <br />
            Oluwatobiloba <br />
            <span class="text-orange">
              <span class="relative z-10">Adegbaju</span>
              <span
                class="relative flex justify-center items-center -mt-2 z-0 phone:-mt-4 large:-mt-5"
              >
                <img
                  class="w-wh phone:w-mwh tab:w-52 large:w-56 xlarge:w-wh2"
                  src="../assets/accent-line.svg"
                  alt="Accent Line"
              /></span>
            </span>
          </h1>

          <!-- Text -->
          <p
            class="text-grey mt-4 phone:mt-6 phone:text-lg tab:text-xl tab:mt-8"
          >
            I’m a Frontend Developer and <br />
            Product Designer who loves building <br />
            significant experiences for people.
          </p>

          <!-- Btn -->
          <button
            v-scroll-to="{ el: '#contact', duration: 1000 }"
            class="focus:outline-none bg-black font-bold text-white h-bsz px-14 py-2.5 rounded-full mt-8 phone:mt-10 phone:text-lg phone:h-16 phone:px-20 tab:text-xl tab:h-bht tab:px-20 tab:mt-12 xlarge:h-bht2 xlarge:px-20"
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
      class="mt-2 pt-10 pb-14 bg-light relative w-full h-auto phone:mt-4 tab:mt-10 tab:pt-10 tab:pb-14 large:mt-6 large:pt-14 large:pb-20 xlarge:mt-14"
      id="contact"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="text-center">
          <!-- Heading -->
          <h1
            class="font-body font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-pht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-xlfsize xlarge:leading-xlglht 2xlarge:text-2xlfsize"
          >
            <span class="relative z-20">Contact</span>
            <span
              class="relative flex justify-center items-center -mt-2 z-0 phone:-mt-4 large:-mt-5"
            >
              <img
                class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-56"
                src="../assets/accent-line.svg"
                alt="Accent Line"
              />
            </span>
          </h1>
        </div>

        <!-- Form -->
        <form
          class="flex flex-col items-center justify-center px-8 mt-10 w-full tab:px-40 large:mt-11 large:px-pw3 xlarge:px-pw 2xlarge:px-pw2"
        >
          <!-- Name -->
          <input
            class="focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full phone:text-lg tab:text-xl"
            type="text"
            name="Name"
            id="name"
            placeholder="Enter your name"
          />
          <!-- Email -->
          <input
            class="focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full mt-12 phone:text-lg tab:text-xl large:mt-16"
            type="text"
            name="Email"
            id="email"
            placeholder="Enter your email"
          />
          <!-- Message -->
          <input
            class="focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full mt-12 phone:text-lg tab:text-xl large:mt-16"
            type="text"
            name="Message"
            id="message"
            placeholder="Enter your message"
          />
          <!-- Btn -->
          <button
            class="focus:outline-none bg-black font-bold text-white h-bsz px-14 py-2.5 rounded-full mt-16 w-cs phone:text-lg phone:h-16 phone:px-20 phone:w-cs2 tab:text-xl tab:h-bht tab:w-cs3 tab:px-20 large:mt-24 xlarge:h-bht2 xlarge:px-20"
            style="cursor: none"
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
            class="w-media phone:w-media2 tab:w-media3"
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

    <!-- Design Modal -->
    <transition name="fade" v-on:enter="enter">
      <div class="absolute" v-if="isVisible">
        <div
          class="bg-bl fixed inset-0 z-30 flex justify-center items-center px-6 tab:px-0"
        >
          <div
            class="modal flex flex-col w-full rounded-md bg-light p-8 max-w-mx tab:max-w-mx2 large:max-w-mx3 large:p-10 xlarge:max-w-mx4"
          >
            <div class="flex justify-between items-start">
              <ul
                class="nav-links large:flex large:flex-col phone:text-lg large:text-xl text-black"
                id="nLinks"
              >
                <li class="mb-8 large:mb-5">
                  <a href="#designs" @click="notVisible"
                    ><span><hover>Designs</hover></span></a
                  >
                </li>
                <li class="my-8 large:my-5">
                  <a href="#"
                    ><span><hover>UI</hover></span></a
                  >
                </li>
                <li class="my-8 large:my-5">
                  <a href="#"
                    ><span><hover>Illustrations</hover></span></a
                  >
                </li>
                <li class="mt-8 large:mt-5">
                  <a href="#"
                    ><span><hover>3D</hover></span></a
                  >
                </li>
              </ul>
              <!-- Close -->
              <button class="focus:outline-none" @click="visible">
                <img
                  src="../assets/close.svg"
                  class="h-6 phone:h-7 large:h-media3"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
import Projects from "../components/Projects";
import Designs from "../components/Designs";

export default {
  components: {
    Projects,
    Designs,
  },

  data() {
    return {
      isActive: false,
      active: false,
      isVisible: false,
      zIndex: false,
    };
  },

  methods: {
    menu() {
      this.isActive = !this.isActive;
      this.active = !this.active;
    },

    visible() {
      this.isVisible = !this.isVisible;
      this.zIndex = !this.zIndex;
    },

    notVisible() {
      this.isActive = !this.isActive;
      this.isVisible = !this.isVisible;
      this.zIndex = !this.zIndex;
    },

    enter(el, done) {
      var that = this;
    },

    close() {
      this.isActive = !this.isActive;
      this.active = !this.active;
    },
  },

  // GSAP
  mounted() {},
};
</script>

<style scoped>
@import "../styles/nav.css";
</style>
