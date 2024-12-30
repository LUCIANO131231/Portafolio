<script lang="ts" setup>
import LoaderAnimation from '@/components/animation/LoaderAnimation.vue';
import SpiderAnimation from '@/components/animation/SpiderAnimation.vue';
import LaptopAnimation from '@/components/animation/LaptopAnimation.vue';
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-[#0b1620] z-50">
    <!-- Aquí puedes poner tu animación o ícono -->
    <div class="text-white text-4xl font-bold ">
      <LoaderAnimation />    
    </div>

    <SpiderAnimation />

    <LaptopAnimation />

  </div>
</template>

<script setup>
</script>

<style scoped>


</style>