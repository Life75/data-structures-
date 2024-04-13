<template>
    <div class="p-1 flex flex-col  h-full">
        <TreeMaping :tree="displayValues" />
        <span class=" bottom-0">
            <p class="">Output: {{ displayOutput }} </p>
            <p></p>
        </span>
    </div>
</template>

<script setup lang="ts">
import FibannociRecursion from './FibRecursion';
import { ref } from 'vue';
import { watch } from 'vue';
import TreeMaping from "../components/Nodes/TreeMaping.vue"
import { onBeforeMount } from 'vue';
let displayValues = ref()
let displayOutput = ref(0)
const props = defineProps<{
    n?: number,
    startAnimation: boolean
}>()

watch( () => props.startAnimation, () => {
    //console.log(props.startAnimation)
    if(props.startAnimation)
        startAnimating()
})


function startAnimating() {
    const recursionService = new FibannociRecursion(2)
    recursionService.start()
    displayValues.value = recursionService.getCurrentState()
    displayOutput.value = recursionService.getRecursiveOutput()
    
}


</script>

<style></style>