<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { ref, onMounted, onUnmounted } from "vue";
import confetti from "canvas-confetti";
import Loader from "@/components/Loading.vue";

const showLoader = ref(true);
onMounted(() => {
  // Oculta el preloader después de 4 segundos
  setTimeout(() => {
    showLoader.value = false;
  }, 9000);
});

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
  <Loader v-if="showLoader" />
  <Navbar />
  <RouterView />
</template>