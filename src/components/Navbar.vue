<template>
  <nav class="fixed bottom-0 left-0 right-0 mx-auto bg-dorado-arena text-blanco-niebla rounded-t-lg shadow-2xl w-[90%] max-w-full py-1">
    <ul class="flex justify-around items-center">
      <!-- Botón Inicio -->
      <NavbarItem
        to="/"
        label="Inicio"
        icon="M3 10l9-9m0 0l9 9M4 10h16v11H4V10z"
      />
      <!-- Botón Sobre mí -->
      <NavbarItem
        to="/about"
        label="Sobre mí"
        icon="M5 3l14 14-7 7-7-7 7-7z"
      />
      <!-- Botón Proyectos -->
      <NavbarItem
        to="/projects"
        label="Proyectos"
        icon="M13 16h-1v-4h1m-1 4h1v-4h-1m-4 4h1v-4H8v4zm4 1h1v-5h1v5h-1zm4-4h-1v-4h1v4z"
      />
      <!-- Botón Currículum -->
      <NavbarItem
        to="/cv"
        label="Currículum"
        icon="M9 12h6m-6 4h6M5 4h14v16H5V4z"
      />
    </ul>
  </nav>
</template>

<script setup>
import NavbarItem from "./NavbarItem.vue";
</script>
