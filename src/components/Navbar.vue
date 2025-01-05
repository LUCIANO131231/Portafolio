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
  <nav class="fixed z-10 bottom-6 sm:bottom-5 lg:bottom-5 left-1/2 sm:left-1/2 lg:left-1/2 transform -translate-x-1/2 bg-slate-200 rounded-full shadow-xl max-w-3xl w-[90%] sm:w-[60%] lg:w-[70%] py-1 px-4 flex items-center justify-center">
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