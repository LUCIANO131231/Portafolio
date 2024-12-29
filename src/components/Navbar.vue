<script setup>
import { ref } from "vue";
import NavbarItem from "./NavbarItem.vue";

const navItems = [
  { to: "/", icon: ["fas", "house-user"], label: "Home" },
  { to: "/about-me", icon: ["fas", "user-circle"], label: "About Me" },
  { to: "/projects", icon: ["fas", "folder-open"], label: "Projects" },
  { to: "/skills", icon: ["fas", "laptop-code"], label: "Skills" },
  { to: "/achievements", icon: ["fas", "medal"], label: "Achievements" }
];

const hoveredIndex = ref(-1);

const handleMouseMove = (event) => {
  const target = event.target.closest("li");
  if (!target) return;
  hoveredIndex.value = [...target.parentElement.children].indexOf(target);
};

const resetHover = () => (hoveredIndex.value = -1);

const getScale = (index) => hoveredIndex.value === -1 ? 1 : Math.max(1, 1.4 - Math.abs(index - hoveredIndex.value) * 0.3);
</script>

<template>
  <nav class="fixed z-10 bottom-5 left-1/2 transform -translate-x-1/2 bg-blanco-niebla rounded-full shadow-xl w-[70%] max-w-xl py-1 px-6 flex items-center justify-center">
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