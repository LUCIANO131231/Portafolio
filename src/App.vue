<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { onMounted, onUnmounted } from "vue";
import confetti from "canvas-confetti";

// Función para lanzar confeti desde un lado específico
const launchConfetti = (side: "left" | "right") => {
  confetti({
    particleCount: 90,
    angle: side === "left" ? 120 : 60,
    spread: 60,
    startVelocity: 45,
    origin: {
      x: side === "left" ? 0.05 : 0.95,
      y: 0.5,
    },
    colors: ["#401722", "#262223", "#D9C091", "#736B65", "#F2F2F2"],
  });
};

// Configuración del intervalo para el confeti
onMounted(() => {
  const interval = setInterval(() => {
    launchConfetti("left");
    setTimeout(() => launchConfetti("right"), 1000);
  }, 2000);

  // Limpieza del intervalo al desmontar
  onUnmounted(() => clearInterval(interval));
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>