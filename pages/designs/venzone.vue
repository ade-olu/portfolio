<template>
  <div class="venzone relative font-body bg-white">
      <!-- Navbar -->
    <nav class="bg-white z-20" id="nav">
  <div class="xlarge:absolute z-20 w-full h-ht flex items-center py-5 px-5 tab:h-32 tab:px-10 tab:justify-between large:px-logo large:h-36 xlarge:px-20">
      <!-- Logo -->
      <a href="/">
    <img class="w-wt phone:w-sz tab:w-sz2 large:w-sz2" src="../../assets/logo.svg" alt="Logo">
      </a>

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
  </div>
</template>

<script>
export default {

}
</script>
