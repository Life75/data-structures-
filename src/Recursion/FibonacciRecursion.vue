<template>
    <div class="p-1 flex flex-col  h-full">
        <TreeMaping :tree="displayValues" />
        <span class=" bottom-0">
            <p class="">Output</p>
        </span>
    </div>
</template>

<script setup lang="ts">
import SquareNode from '../components/Nodes/SquareNode.vue';
import FibannociRecursion from './FibRecursion';
import { AnimateEngine } from '../Contracts/Classes/AnimateEngine';
import { onMounted, ref } from 'vue';
import { watch } from 'vue';
import TreeMaping from "../components/Nodes/TreeMaping.vue"
import { onBeforeMount } from 'vue';
//values are returning, next thing to do is add the nodes and animation engine 
let displayValues = ref()
defineProps<{
    n?: number,
    startAnimation: boolean
}>()

//var { animate, cancelAnimation, animating, currentIteration } = AnimateEngine(new FibannociRecursion(2))




onBeforeMount(() => {
    //animate(300, false)
    //console.log(currentIteration.value)
    const recursionService = new FibannociRecursion(4)
    recursionService.start()
    displayValues.value = recursionService.getCurrentState()


})

</script>

<style></style>