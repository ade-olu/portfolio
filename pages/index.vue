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
                <li class="large:mx-6"><a href="#" v-scroll-to="'#projects'"><span><your-hover-class>Projects</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Designs</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#"><span><your-hover-class>Resume</your-hover-class></span></a></li>
                <li class="large:mx-6"><a href="#" v-scroll-to="'#contact'"><span><your-hover-class>Contact</your-hover-class></span></a></li>
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
      <button class="focus:outline-none bg-black font-bold text-white h-bsz px-14 py-2.5 rounded-full mt-8 phone:mt-10 phone:text-lg phone:h-16 phone:px-20 tab:text-xl tab:h-bht tab:px-20 tab:mt-12 xlarge:h-bht2 xlarge:px-20" style="cursor:none;">
        Get In Touch</button>
        </div>

      </div>
     </div>

     <!-- Projects -->
     <div class="mt-14 pt-10 pb-14 bg-light relative w-full z-10 h-auto phone:mt-16 tab:mt-24 tab:pt-10 tab:pb-14 large:pt-14 large:pb-24 xlarge:mt-0" id="projects">
      <div class="flex items-center justify-center">
        <div class="text-center">
        <!-- Heading -->
      <h1 class="font-body font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
      <span class="relative z-20">Projects</span> 
        <span class="relative flex justify-center -m-2 z-0 phone:-m-4 large:-m-5">
          <img class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-56" src="../assets/accent-line.svg" alt="Accent Line">
          </span></h1>
        </div>
      </div>

      <div class="grid grid-col-1 px-8 gap-14 mt-12 phone:mt-16 tab:px-14 tab:gap-14 large:mt-20 large:px-24 large:grid-cols-2 large:gap-24">
        <!-- Xtades -->
        <div class="relative bg-white rounded-md grid justify-center items-center row-start-1 row-end-8 small:row-end-9 tab:row-end-11 large:row-end-6 xlarge:row-end-7">
          <img class="w-xt small:w-20 phone:w-24 tab:w-28 xlarge:w-36" src="../assets/projects/xtades.svg" alt="Xtades">
          <!-- Overlay -->
           <div class="overlay z-10 bg-bl rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
             <div class="overlay-inner absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-6 small:px-6 small:pb-7 tab:pb-10 tab:px-10 large:pb-10 large:px-10">
            <!-- Overlay Title & Subtitle -->
            <div class="z-20 mb-5 tab:mb-8 large:mb-7">
            <h1 class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl">Xtades</h1>
            <p class=" text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">My portfolio website.</p>
             </div>
            <!-- Technologies -->
            <div class="flex z-20 mb-6 small:mb-7 tab:mb-0 large:mb-9">
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2">Vue.js</span>
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl large:ml-10 large:text-xl large:px-8 large:py-2">Nuxt.js</span>
            <!-- For IPad -->
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 hidden tab:block tab:ml-10 tab:text-xl large:hidden large:text-xl phone:text-lg large:px-8 large:py-2.5">Tailwind CSS</span>
            </div>
            <!-- For Other Screens (Except For iPad) -->
            <div class="z-20">
            <button class="focus:outline-none font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 phone:text-lg tab:hidden tab:text-xl large:block large:text-xl large:px-8 large:py-2.5" style="cursor:none;">Tailwind CSS</button>
            </div>
            </div>
          </div>
           <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
        </div>

        <!-- Travu -->
        <div class="relative bg-travu rounded-md grid justify-center items-center row-start-8 row-end-15 small:row-start-9 small:row-end-17 tab:row-start-11 tab:row-end-21 large:row-start-1 large:row-end-8 xlarge:row-end-9">
          <img class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44" src="../assets/projects/travu.svg" alt="Travu">
           <!-- Overlay -->
           <div class="overlay z-10 bg-bl rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
             <div class="overlay-inner absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-6 small:px-6 small:pb-7 tab:pb-10 tab:px-10 large:pb-10 large:px-10">
            <!-- Overlay Title & Subtitle -->
            <div class="z-20 mb-5 tab:mb-8 large:mb-7">
            <h1 class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl">Travu (WIP)</h1>
            <p class=" text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">A travel and booking website.</p>
             </div>
            <!-- Technologies -->
            <div class="flex z-20 mb-6 small:mb-7 tab:mb-0 large:mb-9">
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2">Vue.js</span>
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl large:ml-10 large:text-xl large:px-8 large:py-2">Nuxt.js</span>
            <!-- For iPad -->
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 hidden tab:block tab:ml-10 tab:text-xl large:hidden large:text-xl phone:text-lg large:px-8 large:py-2.5">Tailwind CSS</span>
            </div>
            <!-- For Other Screens (Except For iPad) -->
            <div class="z-20">
            <button class="focus:outline-none font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 phone:text-lg tab:hidden tab:text-xl large:block large:text-xl large:px-8 large:py-2.5" style="cursor:none;">Tailwind CSS</button>
            </div>
            </div>
          </div>
         <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
        </div>
      </div>
      
     </div>

     <!-- Designs -->
     <div class="mt-2 pt-10 pb-14 bg-white relative w-full z-10 h-auto phone:mt-4 tab:mt-10 tab:pt-10 tab:pb-14 large:mt-8 large:pt-14 large:pb-24 xlarge:mt-14" id="designs">
      <div class="flex items-center justify-center">
        <div class="text-center">
        <!-- Heading -->
      <h1 class="font-body font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
      <span class="relative z-20">Designs</span> 
        <span class="relative flex justify-center -m-2 z-0 phone:-m-4 large:-m-5">
          <img class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-52" src="../assets/accent-line.svg" alt="Accent Line">
          </span></h1>
        </div>
      </div>

      <div class="grid grid-col-1 px-8 gap-14 mt-12 phone:mt-16 tab:px-14 tab:gap-14 large:mt-20 large:px-24 large:grid-cols-2 large:gap-24">
        <!-- FindFont -->
        <div class="relative bg-orange rounded-md grid justify-center items-center row-start-1 row-end-8 small:row-end-9 tab:row-end-11 large:row-end-6 xlarge:row-end-7">
          <img class="ml-4 w-xt3 small:w-28 phone:w-32 tab:w-ff3 xlarge:w-ff4" src="../assets/designs/findfont.svg" alt="FindFont">
          <!-- Overlay -->
           <div class="overlay z-10 bg-bl rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
             <div class="overlay-inner absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-8 small:px-6 small:pb-8 tab:pb-12 tab:px-10 large:pb-12 large:px-10">
            <!-- Overlay Title & Subtitle -->
            <div class="z-20 mb-7 tab:mb-10 large:mb-9">
            <h1 class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl">FindFont</h1>
            <p class=" text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">An app design for finding typeface names on images.</p>
             </div>
            <!-- Technologies -->
            <div class="z-20">
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2.5">Figma</span>
            </div>
            </div>
          </div>
           <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
        </div>

        <!-- Travu -->
        <div class="relative bg-travu rounded-md grid justify-center items-center row-start-8 row-end-15 small:row-start-9 small:row-end-17 tab:row-start-11 tab:row-end-21 large:row-start-1 large:row-end-8 xlarge:row-end-9">
          <img class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44" src="../assets/designs/travu.svg" alt="Travu">
          <!-- Overlay -->
           <div class="overlay z-10 bg-bl rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
             <div class="overlay-inner absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-8 small:px-6 small:pb-8 tab:pb-12 tab:px-10 large:pb-12 large:px-10">
            <!-- Overlay Title & Subtitle -->
            <div class="z-20 mb-7 tab:mb-10 large:mb-9">
            <h1 class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl">Travu (WIP)</h1>
            <p class=" text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">A design for a travel and booking website.</p>
             </div>
            <!-- Technologies -->
            <div class="z-20">
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2.5">Figma</span>
            </div>
            </div>
          </div>
           <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
        </div>

         <!-- VenZone -->
        <div class="relative bg-venzone rounded-md grid justify-center items-center row-start-15 row-end-22 small:row-start-17 small:row-end-25 tab:row-start-21 tab:row-end-31 large:col-start-1 large:col-end-2 large:row-start-6 large:row-end-13 xlarge:row-start-7 xlarge:row-end-15">
          <img class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44 z-10" src="../assets/designs/venzone.svg" alt="VenZone">
          <!-- Overlay -->
           <div class="overlay z-10 bg-bl rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
             <div class="overlay-inner absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-8 small:px-6 small:pb-8 tab:pb-12 tab:px-10 large:pb-12 large:px-10">
            <!-- Overlay Title & Subtitle -->
            <div class="z-20 mb-7 tab:mb-10 large:mb-9">
            <h1 class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl">VenZone</h1>
            <p class=" text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">A website design for selling food online.</p>
             </div>
            <!-- Technologies -->
            <div class="z-20">
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2.5">Figma</span>
            </div>
            </div>
          </div>
           <img class="absolute w-full h-full" src="../assets/noise.png" alt="noise">
        </div>

        <!-- Ear1 -->
        <div class="relative bg-ear1 rounded-md grid justify-center items-center row-start-22 row-end-29 small:row-start-25 small:row-end-33 tab:row-start-31 tab:row-end-41 large:col-start-2 large:col-end-3 large:row-start-8 large:row-end-13 xlarge:row-start-9 xlarge:row-end-15">
          <img class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44" src="../assets/designs/ear1.svg" alt="Ear1">
          <!-- Overlay -->
           <div class="overlay z-10 bg-bl rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
             <div class="overlay-inner absolute flex flex-col justify-end rounded-md top-0 left-0 w-full h-full px-5 pb-8 small:px-6 small:pb-8 tab:pb-12 tab:px-10 large:pb-12 large:px-10">
            <!-- Overlay Title & Subtitle -->
            <div class="z-20 mb-7 tab:mb-10 large:mb-9">
            <h1 class="font-bold text-white text-2xl phone:text-fsz tab:text-4xl large:text-4xl">Ear1</h1>
            <p class=" text-grey3 mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">A website design concept for Ear1.</p>
             </div>
            <!-- Technologies -->
            <div class="z-20">
            <span class="font-bold bg-grey2 text-white rounded-full w-auto px-6 py-2 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2.5">Figma</span>
            </div>
            </div>
          </div>
           <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
        </div>
      </div>
      
     </div>

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

    export default {
    
    }
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .overlay-inner > * {
  transform: translateY(1.25rem);
  transition: all 200ms;
}

.overlay-inner:hover > * {
  transform: translateY(0);
}
}
</style>
