<template>
  <nav class="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl w-[70%] max-w-xl py-3 px-6 flex items-center justify-center">
    <ul
      class="flex justify-between items-center gap-4 w-full relative"
      @mousemove="handleMouseMove"
      @mouseleave="resetHover">
      
      <NavbarItem
        v-for="(item, index) in navItems"
        :key="index"
        v-bind="item"
        :scale="getScale(index)" />
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import NavbarItem from "./NavbarItem.vue";

const navItems = [
  { to: "/", icon: "M3 10l9-9m0 0l9 9M4 10h16v11H4V10z", label: "Home" },
  { to: "/about", icon: "M5 3l14 14-7 7-7-7 7-7z", label: "About" },
  { to: "/projects", icon: "M13 16h-1v-4h1m-1 4h1v-4h-1m-4 4h1v-4H8v4zm4 1h1v-5h1v5h-1zm4-4h-1v-4h1v4z", label: "Projects" },
  { to: "/cv", icon: "M9 12h6m-6 4h6M5 4h14v16H5V4z", label: "CV" },
  { to: "/contact", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.172V11a6 6 0 10-12 0v3.172a2.032 2.032 0 01-.595 1.423L4 17h5", label: "Contact" },
  { to: "/settings", icon: "M12 4v2m6.364 1.636l-1.414 1.414M20 12h-2m-1.636 6.364l-1.414-1.414M12 20v-2M7.636 17.364l-1.414-1.414M4 12H2m2.636-6.364L6.05 7.05", label: "Settings" },
];

const hoveredIndex = ref(-1);

const handleMouseMove = (event) => {
  const target = event.target.closest("li");
  if (!target) return;
  hoveredIndex.value = [...target.parentElement.children].indexOf(target);
};

const resetHover = () => (hoveredIndex.value = -1);

const getScale = (index) => hoveredIndex.value === -1 ? 1 : Math.max(1, 2 - Math.abs(index - hoveredIndex.value) * 0.5);
</script>
