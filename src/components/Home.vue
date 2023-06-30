<template>
  <div class="text-xl mt-4 font-serif text-white pt-20 w-full flex-row justify-between">
    <div class="text-left  md:flex gap-x-72 ">
      <h1 class="text-3xl md:w-1/3 md:text-4xl "> <p>Visualize <p class="text-green-400">Algorithims</p> in Action</p>
      <p class="pt-40 text-2xl">This project was designed to help showcase the beauty in data structures and help soldify a firm grasp into how these respected algorithms work</p>
      
      </h1> 
      <div class="md:w-1/2 md:ml-5"><AnimationDisplay/></div> 
    </div>
    <div class="pt-20">
      <HorizontalCard title="Bubble Sort" 
      description="Bubble sort is a simple sorting algorithm that repeatedly steps through a list of elements and compares adjacent elements, swapping them if they are in the wrong order. It continues this process until the entire list is sorted. In each iteration, the largest (or smallest) element *bubbles* to its correct position, hence the name *bubble sort.* While bubble sort is straightforward to understand and implement, it is not efficient for large datasets as its time complexity is O(n^2), where n is the number of elements to be sorted."
      type="Sorting algorithim"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimationDisplay from './AnimationDisplay.vue';
import Card from './Card.vue';
import HorizontalCard from './HorizontalCard.vue';
//    <Card class="w-28 h-2/5"><AnimationDisplay/> </Card>


//const bubbleSortDescription = ref("")

</script>
//fit this color schema https://realtimecolors.com/?colors=e5eaf3-141414-bef264-f9f5fa-22d3ee 300 green/cyan
<style></style>
