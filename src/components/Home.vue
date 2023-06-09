<template>
  <div class="text-xl mt-4 font-serif text-white pt-20 w-full flex-row justify-between">
    <div class="text-left flex space-x-72 ">
      <h1 class="text-2xl w-1/2 gap-7 pr-1">Visualize Algorithims in Action</h1> 
      
      <div class="w-1/2 ml-5"><AnimationDisplay/></div> 
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimationDisplay from './AnimationDisplay.vue';
import Card from './Card.vue';
</script>
//fit this color schema https://realtimecolors.com/?colors=e5eaf3-141414-bef264-f9f5fa-22d3ee 300 green/cyan
<style></style>
