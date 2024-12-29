<script setup>

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
      class="flex items-center justify-center w-12 h-12 rounded-full bg-[#C7C8CC] hover:bg-[#B4B4B8] text-red-700 transform transition-all duration-1000 ease-in-out"
      :style="{ transform: `scale(${scale})` }">

      <svg
        v-if="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"><path :d="icon" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </router-link>

    <span 
      v-if="label"
      class="absolute bottom-16 px-2 py-1 text-sm text-center font-bungee text-dorado-arena bg-slate-50 w-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {{ label }}
    </span>
  </li>
</template>