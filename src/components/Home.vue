<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
  <div class="font-suwannaphum">

    <div class="bg-[#4B5945] h-[50vh] flex flex-col justify-end sm:px-16 md:px-28 pb-5 relative">
      <div class="text-center relative">
        <!-- Nombre y apellido -->
        <p class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl pb-1 font-bungee text-blanco-niebla tracking-widest uppercase">Luciano Estela</p>
        <p class="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blanco-niebla bg-[#F29F58] px-2 py-1 inline-block font-bungee tracking-tight mx-3 whitespace-nowrap">Renzo Paolo</p><div></div>
        <!-- Linea decorativa -->
        <div class="loader mt-10 mb-2"></div>
      </div>
      <!-- Informacion adicional -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blanco-niebla text-center font-bold -mb-24 tracking-wide mx-3">Desarrollador Frontend Developer</h1>
    </div>

    <div class="bg-[#0b1620] h-[50vh] flex flex-col items-center justify-center px-8 sm:px-16 md:px-28">
    <span style="font-size: 28rem;" class="absolute opacity-10 bottom-80 left-16 transform -translate-x-80 sm:bottom-80 sm:left-16 md:bottom-80 md:left-16 md:-translate-x-80">
      <FontAwesomeIcon :icon="['fas', 'circle']" />
    </span>
      <!-- Iconos -->
      <div class="absolute inset-0 opacity-10 flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
        <!--<div class="absolute top-80 -rotate-90 right-10 space-x-4">
          <span class="text-5xl text-dorado-arena">
            <FontAwesomeIcon :icon="['fab', 'html5']" />
          </span>
          <span class="text-5xl text-dorado-arena">
            <FontAwesomeIcon :icon="['fab', 'css3-alt']" />
          </span>
          <span class="text-5xl text-dorado-arena">
            <FontAwesomeIcon :icon="['fab', 'js-square']" />
          </span>
          <span class="text-5xl text-dorado-arena">
            <FontAwesomeIcon :icon="['fab', 'vuejs']" />
          </span>
        </div -->
      </div>

      <div class="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-9 w-full max-w-[1200px]">
       <!-- GitHub -->
        <a
          href="https://github.com/LUCIANO131231"
          target="_blank"
          rel="noopener noreferrer"
          class="animate-bounce text-black hover:text-blanco-niebla rounded-2xl bg-blanco-niebla hover:bg-black p-2 h-12">
          <FontAwesomeIcon :icon="['fab', 'github']" size="2x" />
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/renzo-luciano/"
          target="_blank"
          rel="noopener noreferrer"
          class="animate-bounce text-black hover:text-blanco-niebla rounded-2xl bg-blanco-niebla hover:bg-black p-2 h-12">
          <FontAwesomeIcon :icon="['fab', 'linkedin']" size="2x" />
        </a>

        <!-- Facebook -->
        <a
          href="https://www.facebook.com/renzo.luciano.773/"
          target="_blank"
          rel="noopener noreferrer"
          class="animate-bounce text-black hover:text-blanco-niebla rounded-2xl bg-blanco-niebla hover:bg-black p-2 h-12">
          <FontAwesomeIcon :icon="['fab', 'facebook']" size="2x" />
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/luciano22q/"
          target="_blank"
          rel="noopener noreferrer"
          class="animate-bounce text-black hover:text-blanco-niebla rounded-2xl bg-blanco-niebla hover:bg-black p-2 h-12">
          <FontAwesomeIcon :icon="['fab', 'instagram']" size="2x" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 0;
  height: 3px;
  display: inline-block;
  position: relative;
  background: #D9C091;
  box-sizing: border-box;
  animation: animFw 4s linear infinite;
}

.loader::after,
  .loader::before {
  content: '';
  width: 10px;
  height: 1px;
  background: #D9C091;
  position: absolute;
  top: 9px;
  right: -2px;
  opacity: 0;
  transform: rotate(-45deg) translateX(0px);
  box-sizing: border-box;
  animation: coli1 0.3s linear infinite;
}

.loader::before {
  top: -4px;
  transform: rotate(45deg);
  animation: coli2 0.3s linear infinite;
}

@keyframes animFw {
  0% {
    width: 0;
  }

  100% {
    width: 60%;
  }
}

@keyframes coli1 {
  0% {
    transform: rotate(-45deg) translateX(0px);
    opacity: 0.7;
  }

  100% {
    transform: rotate(-45deg) translateX(-45px);
    opacity: 0;
  }
}

@keyframes coli2 {
  0% {
    transform: rotate(45deg) translateX(0px);
    opacity: 1;
  }

  100% {
    transform: rotate(45deg) translateX(-45px);
    opacity: 0.7;
  }
}
  
</style>