<template>
  <li class="flex flex-col items-center relative group">
    <router-link
      :to="to"
      class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 transform transition-all duration-300 ease-out hover:bg-gray-200 shadow-md"
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
      class="absolute bottom-14 px-2 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    >
      {{ label }}
    </span>
  </li>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  icon: { type: String, required: true },
  scale: { type: Number, default: 1 },
  label: { type: String, required: true },
});
</script>
