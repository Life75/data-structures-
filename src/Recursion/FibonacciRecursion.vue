<template>
    <div class="p-1 flex flex-col  h-full">
        <div class="flex flex-row flex-wrap gap-4">
                <span v-for="n in displayValues">
                    <SquareNode :value="n"/>
                </span>
                
        </div>
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
//values are returning, next thing to do is add the nodes and animation engine 
let displayValues = ref([])
defineProps<{
    n?: number,
    startAnimation: boolean
}>()

var { animate, cancelAnimation, animating, currentIteration } = AnimateEngine(new FibannociRecursion(5))

onMounted(() => {
    animate(300)
    //console.log(currentIteration.value)
})


watch((currentIteration), () => {
    //turning object into an array for readability
    const snapshot = Object.values(currentIteration.value.snapshot)
    displayValues.value.push(snapshot.pop())
    //need to interpet the logic of the incoming iteration 
    console.log(snapshot)
    
})

</script>

<style></style>