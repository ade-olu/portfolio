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
    <div class="bg-white relative w-full z-10 h-auto" id="xtades">
        <!-- Heading -->
        <div class="text-center">
      <h1 class="font-body font-bold text-3xl text-black leading-10 phone:text-fsize phone:leading-lht tab:text-tfsize tab:leading-lht tab:mt-4 large:text-lfsize large:leading-lglht xlarge:text-5xl xlarge:leading-xlglht 2xlarge:text-xlfsize">
      <span class="relative z-20">Xtades</span> 
        <span class="relative w-full flex justify-center items-center -mt-2 z-0 phone:-mt-4 large:-mt-5">
          <img class="w-32 phone:w-36 tab:w-44 large:w-48 xlarge:w-52" src="../../assets/accent-line.svg" alt="Accent Line">
          </span>
          </h1></div> 
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>