<template>
  <div class="xtades relative font-body bg-white">
      <!-- Navbar -->
    <nav class="bg-white z-20" id="nav">
  <div class="z-20 w-full h-ht flex items-center py-5 px-5 tab:h-32 tab:px-10 tab:justify-between large:px-logo large:h-36 xlarge:px-20">
      <!-- Logo -->
      <nuxt-link to="/">
    <img class="w-wt phone:w-sz tab:w-sz2 large:w-sz2" src="../../assets/logo.svg" alt="Logo">
      </nuxt-link>

    <!-- Nav Menu -->
        <div class="nav-menu hidden large:block" id="nMenu">
            <ul class="large:flex large:flex-row large:items-center large:text-xl text-black" id="nLinks">
                <li class="large:mx-6"><nuxt-link to="/#projects"><span><hover>Projects</hover></span></nuxt-link></li>
                <li class="large:mx-6"><a href="#"><span><hover>Designs</hover></span></a></li>
                <li class="large:mx-6"><a href="#"><span><hover>Resume</hover></span></a></li>
                <li class="large:mx-6"><nuxt-link to="/#contact"><span><hover>Contact</hover></span></nuxt-link></li>
            </ul>
        </div> 
  </div>
    </nav>

    <!-- Xtades -->
    <div class="bg-white relative w-full z-10 h-auto pb-16 phone:pb-20 tab:pb-24" id="xtades">
        <!-- Heading -->
        <div class="text-center">
      <h1 class="font-body font-bold text-3xl text-black mt-4 leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht tab:mt-6 large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
      <span class="relative z-20">Xtades</span> 
        <span class="relative w-full flex justify-center items-center -mt-2 z-0 phone:-mt-4 large:-mt-5">
          <img class="w-28 phone:w-32 tab:w-40 large:w-44 xlarge:w-48" src="../../assets/accent-line.svg" alt="Accent Line">
          </span>
          </h1></div> 
          
          <div class="xlarge:flex xlarge:justify-between xlarge:items-start">

          <div class="mt-12 px-8 phone:mt-14 tab:mt-16 tab:px-14 large:px-20">
            <!-- About -->
            <div>
              <h2 class="font-body font-bold text-xl text-black phone:text-2xl tab:text-fsz">About</h2>
              <p class=" text-grey mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">Xtades is a portfolio project that 
                showcases <br class="hidden xlarge:block 2xlarge:hidden"> my projects <br class="hidden 2xlarge:block"> and designs.</p>
            </div>

            <!-- Technologies (For Screens Lower Than 1280px) -->
            <div class="mt-12 tab:mt-14 xlarge:hidden">
              <h2 class="font-body font-bold text-xl text-black mb-5 phone:text-2xl tab:mb-8 large:mb-7 tab:text-fsz">Technologies</h2>
              <div class="flex mb-6 small:mb-7 tab:mb-0 large:mb-9 2xlarge:mb-0">
            <span class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2">Vue.js</span>
            <span class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl large:ml-10 large:text-xl large:px-8 large:py-2">Nuxt.js</span>
            <!-- For iPad -->
            <span class="font-bold bg-grey text-white rounded-full w-auto px-6 py-2 hidden tab:block tab:ml-10 tab:text-xl large:text-xl phone:text-lg large:px-8 large:py-2.5">Tailwind CSS</span>
            </div>
            <!-- For Other Screens (Except For iPad) -->
            <div>
            <button class="focus:outline-none font-bold bg-grey text-white rounded-full w-auto px-6 py-2 phone:text-lg tab:hidden tab:text-xl large:text-xl large:px-8 large:py-2.5" style="cursor:none;">Tailwind CSS</button>
            </div>
            </div>

            <!-- Link -->
            <div class="mt-16 tab:mt-20 xlarge:mt-14">
              <h2 class="font-body font-bold text-xl text-black phone:text-2xl tab:text-fsz">Link</h2>
              <a href="https://xtades.xyz" target="_blank"><p class=" text-grey mt-2 phone:text-lg tab:mt-5 tab:text-xl large:text-xl large:mt-4">
               <hover>https://xtades.xyz</hover></p></a>
            </div>
          </div>

          <!-- Technologies (For Screens Higher Than 1280px) -->
            <div class="hidden xlarge:mt-16 xlarge:pr-28 xlarge:block">
            <div>
              <h2 class="font-body font-bold text-xl text-black mb-5 phone:text-2xl tab:mb-8 large:mb-7 tab:text-fsz">Technologies</h2>
              <div class="flex mb-6 small:mb-7 tab:mb-0 large:mb-9 2xlarge:mb-0">
            <span class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 phone:text-lg tab:text-xl large:text-xl large:px-8 large:py-2">Vue.js</span>
            <span class="font-bold bg-grey text-white rounded-full w-auto px-6 py-1.5 ml-4 small:ml-6 tab:ml-10 phone:text-lg tab:text-xl large:ml-10 large:text-xl large:px-8 large:py-2">Nuxt.js</span>
            <span class="font-bold bg-grey text-white rounded-full w-auto px-6 py-2 hidden tab:block tab:ml-10 tab:text-xl large:text-xl phone:text-lg large:px-8 large:py-2.5">Tailwind CSS</span>
            </div>
            </div>
          </div>
          </div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>
