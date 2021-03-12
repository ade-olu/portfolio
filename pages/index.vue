<template>
  <div class="relative container font-body bg-white">
    <!-- Navbar -->
    <nav class="bg-white z-20">
  <div class="xlarge:absolute z-20 w-full h-ht flex items-center py-5 px-5 tab:h-32 tab:px-10 tab:justify-between large:px-logo large:h-36 xlarge:px-20">
      <!-- Logo -->
      <a href="/">
    <img class="w-wt phone:w-sz tab:w-sz2 large:w-sz2" src="../assets/logo.svg" alt="Logo">
    </a>

    <!-- Nav Menu -->
        <div class="nav-menu hidden large:block" id="nMenu">
            <ul class="large:flex large:flex-row large:items-center large:text-xl text-black" id="nLinks">
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Projects</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Designs</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Resume</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Contact</your-hover-class></span></a></li>
            </ul>
        </div> 
  </div>
    </nav>

    <!-- Home -->
     <div class="bg-white relative w-full z-10 h-auto">
      <div class="flex items-center justify-center xlarge:h-screen">
        <div class="text-center xlarge:mt-8">
        <!-- Heading -->
      <h1 class="font-body font-bold text-3xl text-black mt-4 leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht tab:mt-6 large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
        Hey, I'm <br> Oluwatobiloba <br> <span class="text-orange">
          <span class="relative z-20">Adegbaju</span> 
        <span class="relative flex justify-center -m-2 z-0 phone:-m-4 large:-m-5">
          <img class="w-wh phone:w-mwh tab:w-52 large:w-56 xlarge:w-64" src="../assets/accent-line.svg"></span>
          </span></h1>

      <!-- Text -->
      <p class="text-grey mt-6 phone:mt-10 phone:text-lg tab:text-xl tab:mt-10">I’m a Frontend Developer and <br>
      Product Designer  who loves building <br> significant experiences for people.</p>

      <!-- Btn -->
      <button class="focus:outline-none bg-black font-bold text-white h-bsz px-14 py-2.5 rounded-full mt-8 phone:mt-10 phone:text-lg phone:h-16 phone:px-20 tab:text-xl tab:h-bht tab:px-20 tab:mt-12 xlarge:h-bht2 xlarge:px-20" style="cursor:none;">
        Get In Touch</button>
        </div>

      </div>
     </div>

     <!-- Projects -->
     <div class="mt-14 py-12 bg-light relative w-full z-10 h-auto phone:mt-16 tab:mt-24 tab:py-16 xlarge:mt-0 xlarge:py-16">
      <div class="flex items-center justify-center">
        <div class="text-center">
        <!-- Heading -->
      <h1 class="font-body font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
      <span class="relative z-20">Projects</span> 
        <span class="relative flex justify-center -m-2 z-0 phone:-m-4 large:-m-5">
          <img class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-56" src="../assets/accent-line.svg">
          </span></h1>
        </div>
      </div>
     </div>

  </div>
</template>

<script>
import { gsap } from "gsap";

    export default {
    
    }
</script>
