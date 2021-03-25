<template>
  <div class="relative container font-body bg-white">
    <!-- Navbar -->
    <nav class="bg-white z-20" id="nav">
  <div class="xlarge:absolute z-20 w-full h-ht flex items-center py-5 px-5 tab:h-32 tab:px-10 tab:justify-between large:px-logo large:h-36 xlarge:px-20">
      <!-- Logo -->
      <a href="/">
    <img class="w-wt phone:w-sz tab:w-sz2 large:w-sz2" src="../assets/logo.svg" alt="Logo">
    </a>

    <!-- Nav Menu -->
        <div class="nav-menu hidden large:block" id="nMenu">
            <ul class="large:flex large:flex-row large:items-center large:text-xl text-black" id="nLinks">
                <li class="large:mx-6"><a href="#" v-scroll-to="{ el: '#projects', duration: 1000 }"><span><your-hover-class>Projects</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Designs</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Resume</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#" v-scroll-to="{ el: '#contact', duration: 1000 }"><span><your-hover-class>Contact</your-hover-class></span></a></li>
            </ul>
        </div> 
  </div>
    </nav>

    <!-- Home -->
     <div class="bg-white relative w-full z-10 h-auto" id="home">
      <div class="flex items-center justify-center xlarge:h-screen">
        <div class="text-center xlarge:mt-8">
        <!-- Heading -->
      <h1 class="font-body font-bold text-3xl text-black mt-4 leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht tab:mt-6 large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
        Hey, I'm <br> Oluwatobiloba <br> <span class="text-orange">
          <span class="relative z-20">Adegbaju</span> 
        <span class="relative flex justify-center -m-2 z-0 phone:-m-4 large:-m-5">
          <img class="w-wh phone:w-mwh tab:w-52 large:w-56 xlarge:w-64" src="../assets/accent-line.svg" alt="Accent Line"></span>
          </span></h1>

      <!-- Text -->
      <p class="text-grey mt-6 phone:mt-10 phone:text-lg tab:text-xl tab:mt-10">I’m a Frontend Developer and <br>
      Product Designer  who loves building <br> significant experiences for people.</p>

      <!-- Btn -->
      <button v-scroll-to="{ el: '#contact', duration: 1000 }" class="focus:outline-none bg-black font-bold text-white h-bsz px-14 py-2.5 rounded-full mt-8 phone:mt-10 phone:text-lg phone:h-16 phone:px-20 tab:text-xl tab:h-bht tab:px-20 tab:mt-12 xlarge:h-bht2 xlarge:px-20" style="cursor:none;">
        Get In Touch</button>
        </div>

      </div>
     </div>

     <!-- Projects -->
    <projects></projects>

     <!-- Designs -->
     <designs></designs>

     <!-- Contact -->
     <div class="mt-2 pt-10 pb-14 bg-light relative w-full z-10 h-auto phone:mt-4 tab:mt-10 tab:pt-10 tab:pb-14 large:mt-6 large:pt-14 large:pb-20 xlarge:mt-14" id="contact">
      <div class="flex flex-col items-center justify-center">
        <div class="text-center">
        <!-- Heading -->
      <h1 class="font-body font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
      <span class="relative z-20">Contact</span> 
        <span class="relative flex justify-center -m-2 z-0 phone:-m-4 large:-m-5">
          <img class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-52" src="../assets/accent-line.svg" alt="Accent Line">
          </span></h1>
        </div>

        <!-- Form -->
        <form class="flex flex-col items-center justify-center px-8 mt-12 w-full tab:px-40 large:mt-16 large:px-pw3 xlarge:px-pw 2xlarge:px-pw2">
        <!-- Name -->
        <input class="focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full phone:text-lg tab:text-xl" type="text" name="Name" id="name" placeholder="Enter your name">
        <!-- Email -->
        <input class="focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full mt-12 phone:text-lg tab:text-xl large:mt-16" type="text" name="Email" id="email" placeholder="Enter your email">
      <!-- Message -->
        <input class="focus:outline-none bg-transparent border-b-one border-grey2 placeholder-grey2 text-black py-2.5 w-full mt-12 phone:text-lg tab:text-xl large:mt-16" type="text" name="Message" id="message" placeholder="Enter your message">
        <!-- Btn -->
      <button class="focus:outline-none bg-black font-bold text-white h-bsz px-14 py-2.5 rounded-full mt-16 w-cs phone:text-lg phone:h-16 phone:px-20 phone:w-cs2 tab:text-xl tab:h-bht tab:w-cs3 tab:px-20 large:mt-24 xlarge:h-bht2 xlarge:px-20" style="cursor:none;">
        Send</button>
      </form>
      </div>

     </div>

     <!-- Footer -->
  <div class="bg-black z-20 relative flex flex-col justify-center items-center w-full py-8 px-5 tab:px-10 tab:py-10 large:flex-row-reverse large:justify-between large:h-36 large:px-logo xlarge:px-20" id="footer">
    <div class="flex flex-row">
    <!-- Mail -->
    <a href="mailto:adegbajuoezekiel@gmail.com" class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20">
    <img src="../assets/media/mail.svg" class="w-media phone:w-media2 tab:w-media3" alt="Mail">
    </a>

    <!-- Twitter -->
    <a href="https://www.twitter.com/tobiadegbaju/" target="_blank" class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20">
    <img src="../assets/media/twitter.svg" class="w-media phone:w-media2 tab:w-media3" alt="Twitter">
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/tobiloba-adegbaju" target="_blank" class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20">
    <img src="../assets/media/linkedin.svg" class="h-6 phone:h-med tab:h-med2" alt="LinkedIn">
    </a>

    <!-- Github -->
    <a href="https://www.github.com/ade-olu" target="_blank" class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20">
    <img src="../assets/media/github.svg" class="h-6 phone:h-med tab:h-med2" alt="Github">
    </a>

    <!-- Dribbble -->
    <a href="https://www.dribbble.com/ade-olu/" target="_blank" class="mx-4 phone:mx-mr tab:mx-5 large:mx-6 z-20">
    <img src="../assets/media/dribbble.svg" class="h-6 phone:h-med tab:h-med2" alt="Dribbble">
    </a>
  </div>

  <!-- Copyright -->
    <p class="text-white mt-6 phone:text-lg tab:mt-8 tab:text-xl large:mt-0">© {{ new Date().getFullYear() }} Oluwatobiloba Adegbaju</p>

     <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
  </div>

  </div>
</template>

<script>
import { gsap } from "gsap";
import Projects from '../components/Projects'
import Designs from '../components/Designs'

    export default {
    components: {
        Projects,
        Designs
     }
    }
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
