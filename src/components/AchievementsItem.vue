<script lang="ts" setup>

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
  <div class="group mx-8 my-3 relative w-[300px] h-[500px] p-0 bg-slate-50 hover:bg-[#9CA986] rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden">
    <!-- imagenes-->
    <!-- <div class="flex mb-3 justify-center">
      <div class="overflow-hidden rounded-md">
        <img
          class="w-full max-w-[600px] sm:w-[280px] border border-[#D6CFB4] h-auto object-contain rounded-md transition-transform duration-300 hover:scale-110"
          :src="certificate"
          alt="Certificate"
        />
      </div>
    </div> -->
    <div class="text-center font-suwannaphum font-medium px-2 w-full">
      <!-- institute -->
      <div class="text-left px-3 text-black group-hover:text-white relative">
        <span class="block text-xs lg:text-sm uppercase mb-3 overflow-hidden">{{institute}}</span>
      </div>
      <!-- titulo -->
      <div class="text-left px-5 mb-3 text-black group-hover:text-white relative">
        <span class="block text-sm lg:text-3xl uppercase overflow-hidden">{{titulo}}</span>
      </div>
      <!-- descripcion -->
      <div class="px-6 text-left mb-1">
        <p class="text-black group-hover:text-white max-w-[460px] lg:text-sm">{{descripcion}}</p>
      </div>
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