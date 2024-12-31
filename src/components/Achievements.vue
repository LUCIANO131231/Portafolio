<script setup lang="ts">
import Certificate1 from "@/assets/images/certificado-001.jpg";
import Certificate2 from "@/assets/images/certificado-002.jpg";
import Certificate3 from "@/assets/images/certificado-003.jpg";
import Certificate4 from "@/assets/images/certificado-004.jpg";
import AchievementsItem from "./AchievementsItem.vue";

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
  // {
  //   certificate: Certificate,
  //   titulo: "Diseño Web con HTML5 + CSS",
  //   descripcion: "Certificado obtenida por completar el curso, un programa de formación digital con una duración de 30 horas.",
  // },
  // {
  //   certificate: Certificate,
  //   titulo: "Diseño Web con HTML5 + CSS",
  //   descripcion: "Certificado obtenida por completar el curso, un programa de formación digital con una duración de 30 horas.",
  // },
]
</script>

<template>
  <div class="bg-[#4B5945] min-h-screen flex justify-center items-center">
    <div class="grid grid-cols-2 gap-16">
      <AchievementsItem
        v-for="certif in certificates"
        :certificate="certif.certificate"
        :titulo="certif.titulo"
        :descripcion="certif.descripcion"
      />
    </div>    
  </div>
</template>