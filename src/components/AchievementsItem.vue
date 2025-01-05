<script lang="ts" setup>
import {ref} from 'vue';

const props = defineProps({
  institute: {
    type: String,
    required: true
  },
  certificate: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
});

</script>

<template>
  <!-- Card -->
  <div class="group mx-4 my-5 w-[235px] h-[500px] sm:w-[270px] sm:h-[500px] lg:w-[300px] lg:h-[500px] relative p-0 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden">
    <!-- imagenes-->
    <div class="absolute inset-0 flex items-center opacity-10 justify-center transition-opacity duration-300">
      <img
        class="object-contain  w-[195px] h-[500px] sm:w-[190px] sm:h-[500px] lg:w-[280px] lg:h-[500px] translate-y-[-115px] rounded-lg"
        :src="certificate"
        alt="Certificate"
      />
    </div>
    
    <div class="text-center font-press font-medium px-2 w-full relative mt-[95px]">

      <!-- institute -->
      <div class="text-left px-3 mb-4 text-xs sm:text-xs lg:text-xs group-hover:text-white text-white">
        <span class="inline-block px-2 py-1 bg-gray-500 rounded-lg tracking-wide uppercase overflow-hidden">{{institute}}</span>
      </div>

      <!-- titulo -->
      <div class="text-left px-5 mb-6 text-xl sm:text-2xl lg:text-3xl group-hover:text-gray-700 text-black">
        <span class="block uppercase overflow-hidden">{{titulo}}</span>
      </div>
      
      <!-- descripcion -->
      <div class="px-6 text-left text-sm sm:text-sm lg:text-sm group-hover:text-gray-700 text-black">
        <p class="overflow-hidden">{{descripcion}}</p>
      </div>

      <!-- boton -->
      <a
        :href="certificate"
        target="_blank"
        rel="noopener noreferrer"
        class="block mx-auto mt-6 text-white w-24 sm:w-24 lg:w-24 py-2 bg-gray-600 hover:bg-gray-500 text-sm sm:text-md lg:text-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        Ver
      </a>

    </div>
  </div>
</template>

<style scoped>
@keyframes glitch {
  0% {
    transform: translate(2px, 2px);
  }

  25% {
    transform: translate(-2px, -2px);
  }

  50% {
    transform: translate(-2px, 2px);
  }

  75% {
    transform: translate(-2px, -2px);
  }

  100% {
    transform: translate(2px, 2px);
  }
}

.glitch {
  animation: glitch 0.9s infinite;
}
</style>