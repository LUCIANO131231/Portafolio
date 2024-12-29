<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { onMounted, onUnmounted } from "vue";
import confetti from "canvas-confetti";

// Función para lanzar confeti desde un lado específico
const launchConfetti = (side: "left" | "right") => {
  confetti({
    particleCount: 80,
    angle: side === "left" ? 120 : 60, // Ángulo según el lado
    spread: 55, // Dispersión del confeti
    startVelocity: 45, // Velocidad inicial
    origin: {
      x: side === "left" ? 0.05 : 0.95, // Posición horizontal
      y: 0.5, // Posición vertical (centro)
    },
    colors: ["#401722", "#262223", "#D9C091", "#736B65", "#F2F2F2"], // Colores personalizados
  });
};

// Configuración del intervalo para el confeti
onMounted(() => {
  const interval = setInterval(() => {
    launchConfetti("left");
    setTimeout(() => launchConfetti("right"), 1000); // Lado derecho después de 1 segundo
  }, 2000);

  // Limpieza del intervalo al desmontar el componente
  onUnmounted(() => clearInterval(interval));
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped>
/* Puedes agregar estilos si lo deseas */
</style>
