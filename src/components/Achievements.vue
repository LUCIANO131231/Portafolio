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
    certificate: Certificate1,
    titulo: "Diseño Web con HTML5 + CSS",
    descripcion: "Competencias avanzadas en desarrollo web con HTML5 y CSS.",
  },
  {
    certificate: Certificate2,
    titulo: "IA Generativa",
    descripcion: "Dominio de conceptos clave en inteligencia artificial generativa.",
  },
  {
    certificate: Certificate3,
    titulo: "Scrum Foundation",
    descripcion: "Certificación en fundamentos de Scrum y prácticas ágiles efectivas.",
  },
  {
    certificate: Certificate4,
    titulo: "Introduction to Data Science",
    descripcion: "Habilidades en análisis de datos, machine learning y fundamentos de ciencia de datos.",
  },
  {
    certificate: Certificate5,
    titulo: "Cybersecurity Awareness",
    descripcion: "Certificación en prácticas profesionales de concienciación y seguridad cibernética.",
  },
  {
    certificate: Certificate6,
    titulo: "Business Model Canvas Essentials",
    descripcion: "Certificación en conocimientos fundamentales sobre el modelo de negocios y proyectos empresariales.",
  },
]
</script>

<template>
  <div class="bg-[#0b1620] min-h-screen flex justify-center items-center">
    <ColorHeader />
    <span style="font-size: 28rem;" class="absolute opacity-10 bottom-96 left-20 transform -translate-x-80 sm:bottom-96 sm:left-44 md:bottom-96 md:left-44 md:-translate-x-96">
      <FontAwesomeIcon :icon="['fas', 'circle']" />
    </span>
    <div class="grid grid-cols-2 gap-12 custom-scroll overflow-y-auto">
      <AchievementsItem
        v-for="certif in certificates"
        :certificate="certif.certificate"
        :titulo="certif.titulo"
        :descripcion="certif.descripcion"
      />
    </div>    
  </div>
</template>