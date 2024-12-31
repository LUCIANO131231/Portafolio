<script lang="ts" setup>
import "@/assets/styles/RedesAnimation.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <div class="card">
    <img class="image" src="https://uiverse.io/astronaut.png" />
    <div class="heading">Connect With Me</div>
    <div class="icons">
      <!-- GitHub -->
      <a
        href="https://github.com/LUCIANO131231"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black hover:text-blanco-niebla">
        <FontAwesomeIcon :icon="['fab', 'github']" size="2x" />
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/renzo-luciano/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black hover:text-blanco-niebla">
        <FontAwesomeIcon :icon="['fab', 'linkedin']" size="2x" />
      </a>

      <!-- Facebook -->
      <a
        href="https://www.facebook.com/renzo.luciano.773/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black hover:text-blanco-niebla">
        <FontAwesomeIcon :icon="['fab', 'facebook']" size="2x" />
      </a>

      <!-- Instagram -->
      <a
        href="https://www.instagram.com/luciano22q/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black hover:text-blanco-niebla">
        <FontAwesomeIcon :icon="['fab', 'instagram']" size="2x" />
      </a>
    </div>
  </div>
</template>