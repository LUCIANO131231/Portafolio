<script setup lang="ts">
import Certificate from "@/assets/images/certificado-001.jpg";
import AchievementsItem from "./AchievementsItem.vue";
</script>

<template>
  <div class="bg-[#fff] min-h-screen flex justify-center items-center">
    <AchievementsItem 
      :certificate="Certificate"
      titulo="Diseño Web con HTML5 + CSS"
      descripcion="Certificado obtenida por completar el curso, un programa de formación digital con una duración de 30 horas."
    />
  </div>
</template>