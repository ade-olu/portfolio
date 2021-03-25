<template>
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
        <div class="relative bg-black rounded-md grid justify-center items-center row-start-1 row-end-8 small:row-end-9 tab:row-end-11 large:row-end-6 xlarge:row-end-7">
          <img class="w-xt small:w-20 phone:w-24 tab:w-28 xlarge:w-36" src="../assets/projects/xtades.svg" alt="Xtades">
          <!-- Overlay -->
           <nuxt-link to="/projects/xtades" class="overlay z-10 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
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
             </nuxt-link>
           <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
        </div>

        <!-- Travu -->
        <div class="relative bg-travu rounded-md grid justify-center items-center row-start-8 row-end-15 small:row-start-9 small:row-end-17 tab:row-start-11 tab:row-end-21 large:row-start-1 large:row-end-8 xlarge:row-end-9">
          <img class="w-24 small:w-xt3 phone:w-ff tab:w-36 xlarge:w-44" src="../assets/projects/travu.svg" alt="Travu">
           <!-- Overlay -->
           <nuxt-link to="/projects/travu" class="overlay z-10 bg-gradient-to-t from-bl to-bl2 rounded-md absolute w-full h-full xlarge:opacity-0 xlarge:transition-all xlarge:duration-200 hover:opacity-100">
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
           </nuxt-link>
         <img class="absolute w-full h-full" src="../assets/bg.png" alt="Bg">
        </div>
      </div>
      
     </div>
</template>

<script>
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
