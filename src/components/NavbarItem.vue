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
      class="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#000000] bg-blanco-niebla text-[#000000] hover:text-black transform transition-all duration-1000 ease-in-out"
      :style="{ transform: `scale(${scale})` }">
      <FontAwesomeIcon :icon="icon" class="w-7 h-7" />
    </router-link>

    <span 
      v-if="label"
      class="absolute bottom-16 px-2 py-1 text-sm text-center font-bungee text-dorado-arena bg-slate-50 w-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {{ label }}
    </span>
  </li>
</template>