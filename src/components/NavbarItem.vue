<template>
  <li class="flex flex-col items-center">
    <router-link
      :to="to"
      class="transition-all flex items-center justify-center px-4 py-2 bg-transparent text-lg font-sans hover:translate-y-[-5px] active:translate-y-[-4px]"
      :class="{
        ' translate-y-[-6px]': $route.path === to, // Estilos del botón activo
        'border-transparent': $route.path !== to // Sin línea para los botones inactivos
      }"
    >
      <span class="hidden sm:block">{{ label }}</span>
      <svg
        v-if="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6 sm:hidden"
      >
        <path :d="icon" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </router-link>
  </li>
</template>

<script setup>
import { useRoute } from "vue-router";

defineProps({
  to: { type: String, required: true }, // Ruta a la que redirige el botón
  label: { type: String, required: true }, // Texto del botón
  icon: { type: String, required: true }, // SVG path para el ícono
});

// Detectar la ruta actual
const route = useRoute();
</script>
