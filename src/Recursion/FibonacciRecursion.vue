<template>
    <div >
      
        <SquareNode  :value="20"/>
        <SquareNode  :value="20"/>
        <SquareNode  :value="20"/>

        <SquareNode  :value="20"/>
        {{ currentIteration }}
        <div v-if="n == 0">N is 0</div>
        <div class="flex items-center justify-center">
            
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
    animate(20)
    console.log(currentIteration)

})

</script>

<style>
</style>