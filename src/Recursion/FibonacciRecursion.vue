<template>
    <div class="p-1">
      
     
        <div class="flex ">
          
            
            
        </div>
    </div>
</template>

<script setup lang="ts">
import SquareNode from '../components/Nodes/SquareNode.vue';
import FibannociRecursion from './FibRecursion';
import { AnimateEngine } from '../Contracts/Classes/AnimateEngine';
import { onMounted } from 'vue';
//values are returning, next thing to do is add the nodes and animation engine 
defineProps<{
    n?: number,
    startAnimation: boolean 
}>()

var {animate, cancelAnimation, animating, currentIteration} = AnimateEngine(new FibannociRecursion(2))
onMounted(() => {
    animate(2000)
    console.log(currentIteration.value)
})

</script>

<style>
</style>