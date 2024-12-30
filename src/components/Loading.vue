<script lang="ts" setup>
import LoaderAnimation from '@/components/animation/LoaderAnimation.vue';
import SpiderAnimation from '@/components/animation/SpiderAnimation.vue';
import LaptopAnimation from '@/components/animation/LaptopAnimation.vue';
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-[#4B5945] z-50">
    
    <div class="text-white text-4xl font-bold mt-40">
      <LoaderAnimation />    
    </div>

      <SpiderAnimation />

    <!-- <div class="absolute bottom-56 right-64">
      <LaptopAnimation />
    </div> -->

  </div>
</template>