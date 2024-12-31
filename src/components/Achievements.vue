<script setup lang="ts">
import certificate from "@/assets/images/certificado-001.jpg";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <div class="bg-[#fff] min-h-screen flex justify-center items-center">
    <div class="card mx-10">
      
      <div class="flex mb-4 justify-center">
        <img class="w-full max-w-[600px] sm:w-[450px] h-auto object-contain rounded-md" :src="certificate" alt="Certificate">
      </div>
      
      <span class="block font-bungee text-negro-oxido text-lg text-center sm:text-xl uppercase mb-4 relative overflow-hidden glitch">Diseño Web con HTML5 + CSS</span>
      <p class="font-suwannaphum text-[#3C3D37] mb-4 max-w-[460px] sm:text-lg  text-justify">Certificación obtenida por completar el curso, un programa de formación digital con una duración de 30 horas.</p>
      <div class="decor text-black hover:text-white bg-white hover:bg-black uppercase">
        <FontAwesomeIcon :icon="['fas', 'trophy']" size="2x"/>
      </div>

    </div>
  </div>
</template>

<style scoped>

.card {
  width: auto;
  max-width: 100%;
  padding: 20px;
  background: #fff;
  border: 8px solid #000;
  box-shadow: 15px 15px 0 #000;
  position: relative; /* para la etiqueta */
  transition: transform 0.8s, box-shadow 0.8s;
}

.card:hover {
  transform: translate(-5px, -5px);
  box-shadow: 22px 22px 0 #000;
}

.decor {
  position: absolute;
  bottom: -10px;
  right: -10px;
  padding: 5px 10px;
  transform: rotate(-5deg);
  transition: transform 0.3s;
}

.card:hover .decor {
  transform: rotate(3deg) scale(1);
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