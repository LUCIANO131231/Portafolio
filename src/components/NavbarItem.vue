<script setup>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  to: { 
    type: String, 
    required: true 
  },
  icon: { 
    type: String, 
    required: true 
  },
  scale: { 
    type: Number, 
    default: 1
  },
  label: { 
    type: String, 
    required: true 
  },
});

</script>

<template>
  <li class="flex flex-col items-center relative group">
    <router-link
      :to="to"
      class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-2xl border-2 border-black bg-blanco-niebla text-black hover:text-black transform transition-all duration-1000 ease-in-out"
      :style="{ transform: `scale(${scale})` }">
      <FontAwesomeIcon :icon="icon" class="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
    </router-link>

    <span 
      v-if="label"
      class="absolute bottom-[42px] sm:bottom-[52px] lg:bottom-14 px-2 py-1 text-[8px] sm:text-xs lg:text-sm text-center font-bungee text-white bg-black w-20 sm:w-32 lg:w-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {{ label }}
    </span>
  </li>
</template>