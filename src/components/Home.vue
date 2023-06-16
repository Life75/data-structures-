<template>
  <div class="text-xl mt-4 font-serif text-white pt-20 w-full flex-row justify-between">
    <div class="text-left  md:flex gap-x-72 ">
      <h1 class="text-3xl md:w-1/3 md:text-4xl "> <p>Visualize <p class="text-green-400">Algorithims</p> in Action</p>
      <p class="pt-40 text-2xl">This project was designed to help showcase the beauty in data structures and help soldify a firm grasp into how these respected algorithms work</p>
      
      </h1> 
      <div class="md:w-1/2 md:ml-5"><AnimationDisplay/></div> 
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimationDisplay from './AnimationDisplay.vue';
import Card from './Card.vue';
//    <Card class="w-28 h-2/5"><AnimationDisplay/> </Card>

</script>
//fit this color schema https://realtimecolors.com/?colors=e5eaf3-141414-bef264-f9f5fa-22d3ee 300 green/cyan
<style></style>
