<template>
    <div>
      
        <SquareNode  :value="20"/>
        <SquareNode  :value="20"/>
        <SquareNode  :value="20"/>

        <SquareNode  :value="20"/>

        <div v-if="n == 0">N is 0</div>
        <div class="flex items-center justify-center">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import SquareNode from '../components/Nodes/SquareNode.vue';
import FibannociRecursion from './FibRecursion';

//values are returning, next thing to do is add the nodes and animation engine 
defineProps<{
    n?: number,
    startAnimation: boolean 
}>()



</script>

<style>
</style>