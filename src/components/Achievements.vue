<script setup lang="ts">
import Certificate1 from "@/assets/images/certificado-001.jpg";
import Certificate2 from "@/assets/images/certificado-002.jpg";
import Certificate3 from "@/assets/images/certificado-003.jpg";
import Certificate4 from "@/assets/images/certificado-004.jpg";
import Certificate5 from "@/assets/images/certificado-005.jpg";
import Certificate6 from "@/assets/images/certificado-006.jpg";
import AchievementsItem from "./AchievementsItem.vue";
import ColorHeader from "./animation/ColorHeader.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const certificates = [
  {
    institute: "Telefonica Movistar",
    certificate: Certificate1,
    titulo: "Diseño Web con HTML5 + CSS",
    descripcion: "Competencias avanzadas en desarrollo web con HTML5 y CSS.",
  },
  {
    institute: "Linkedin Learning",
    certificate: Certificate2,
    titulo: "IA Generativa",
    descripcion: "Dominio de conceptos clave en inteligencia artificial generativa.",
  },
  {
    institute: "Certiprof",
    certificate: Certificate3,
    titulo: "Scrum Foundation",
    descripcion: "Certificación en fundamentos de Scrum y prácticas ágiles efectivas.",
  },
  {
    institute: "Cisco Networking Academy",
    certificate: Certificate4,
    titulo: "Introduction to Data Science",
    descripcion: "Habilidades en análisis de datos, machine learning y ciencia de datos.",
  },
  {
    institute: "Certiprof",
    certificate: Certificate5,
    titulo: "Cybersecurity Awareness",
    descripcion: "Prácticas profesionales de concienciación y seguridad cibernética.",
  },
  {
    institute: "Certiprof",
    certificate: Certificate6,
    titulo: "Business Model Canvas Essentials",
    descripcion: "Conocimientos sobre el modelo de negocios y proyectos empresariales.",
  },
]
</script>

<template>
  <div class="bg-[#4B5945] min-h-screen flex justify-center items-center">
    <!-- <ColorHeader class="mx-24"/> mx-36-->

    <!-- circulo izquierda -->
    <!-- <span
      style="font-size: 20rem;"
      class="absolute opacity-10 -bottom-0 -left-[1900px]">
      <FontAwesomeIcon :icon="['fas', 'circle']" size="10x" />
    </span> -->
    <!-- circulo derecha -->
    <!-- <span
      style="font-size: 20rem;"
      class="absolute opacity-10 bottom-0 right-10">
      <FontAwesomeIcon :icon="['fas', 'star']" size="10x" />
    </span> -->


    <div class="grid grid-cols-1 sm:grid-cols-2 custom-scroll overflow-y-auto">
      <AchievementsItem
        v-for="certif in certificates"
        :institute="certif.institute"
        :certificate="certif.certificate"
        :titulo="certif.titulo"
        :descripcion="certif.descripcion"
      />
    </div>  
  </div>
</template>

<style>
/* Estilos del scrollbar */
.custom-scroll {
  overflow-y: auto;
  max-height: 77vh;
}

.custom-scroll::-webkit-scrollbar {
  width: 4px;
  background-color: #fff;
}

.custom-scroll::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  border-radius: 1px;
  background-color: #747264;
}
</style>