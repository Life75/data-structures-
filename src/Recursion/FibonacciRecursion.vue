<template>
    <div class="p-1 flex flex-col  h-full">
        <TreeMaping class=" " :tree="displayValues" />
        <div class="h-6"></div>
        <span v-show="showOutput" class=" mt-auto flex-shrink bottom-0 ">
            <p class=" pr-1 font-semibold">Result:  {{ displayOutput }} </p>
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
let showOutput = ref(false)
const props = defineProps<{
    n?: number,
    startAnimation: boolean
}>()

let isAnimating = ref(props.startAnimation)

const emit = defineEmits<{
    (e: "headerName", headerName: String): void
}>()

watch(() => props.startAnimation, () => {
    isAnimating.value = true 
    if (isAnimating.value)
        startAnimating()
}, {deep: true})


function startAnimating() {
    if (props.n !== undefined) {
        const recursionService = new FibannociRecursion(props.n)
        recursionService.start()
        displayValues.value = recursionService.getCurrentState()
        displayOutput.value = recursionService.getRecursiveOutput()
        showOutput.value = true
        //when animation is finished 
        isAnimating.value = false 
    }
}


onBeforeMount(() => {
    //need to get the header name to parent 
    emit("headerName", "Fibannoci Recursion")
})


</script>

<style></style>