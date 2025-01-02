<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
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
  <div class="card mx-10">
    <!-- imagenes -->
    <div class="flex mb-4 justify-center">
      <div class="overflow-hidden rounded-md">
        <img
          class="w-full max-w-[600px] sm:w-[280px] border border-[#D6CFB4] h-auto object-contain rounded-md transition-transform duration-300 hover:scale-110"
          :src="certificate"
          alt="Certificate"
        />
      </div>
    </div>
    <hr><br>
    <!-- titulo -->
    <span class="block font-suwannaphum text-[#131010] text-sm text-center sm:text-lg uppercase mb-4 relative overflow-hidden glitch">{{titulo}}</span>
    <!-- descripcion -->
    <p class="font-suwannaphum text-[#1A1A19] mb-4 max-w-[460px] sm:text-base  text-justify">{{descripcion}}</p>
    <!-- icono animacion -->
    <div class="decor text-black hover:text-black bg-[#D6CFB4] hover:bg-white uppercase">
      <FontAwesomeIcon :icon="['fas', 'trophy']" size="2x"/>
    </div>

  </div>
</template>

<style scoped>

.card {
  width: 340px;
  max-width: 100%;
  padding: 20px;
  background: #fff;
  box-shadow: 20px 20px 0 #D6CFB4;
  position: relative; /* para la etiqueta */
  transition: transform 0.8s, box-shadow 0.8s;
}

.card:hover {
  transform: translate(-5px, -5px);
  box-shadow: 12px 12px 0 #D6CFB4;
}

.decor {
  position: absolute;
  bottom: -10px;
  right: -10px;
  padding: 5px 10px;
  transform: rotate(-1deg);
  transition: transform 0.3s;
}

.card:hover .decor {
  transform: rotate(1deg) scale(1);
}

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