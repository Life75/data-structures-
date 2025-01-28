<template>
    <div class="flex-col items-center justify-center ">
     
    </div>
</template>

<script setup lang="ts">
//import { ref, onMounted, defineProps, PropType } from 'vue';
//import SortProps from '../Contracts/Classes/SortProps';
//import ISortController from '../Contracts/Interfaces/ISortController';
//import { SortAlgorithimShell } from '../composables/SortAlgorithimShell';
//import HeapSort from '../algorithims-ts/HeapSort';
//
//const props = defineProps({
//    amountOfValues: { type: Number, default: 0 },
//    animationSpeed: { type: Number, default: 200 },
//    autostart: { type: Boolean, default: false },
//    start: { type: Boolean, default: false },
//    sortProps: { type: Object as PropType<SortProps>, default: new SortProps() }
//})
//
//let {
//      sortAlgoRef,
//      sortAnimation,
//      cancelAnimation,
//      animating,
//      currentIteration,
//      timer,
//      clearIterations,
//    } = SortAlgorithimShell(new HeapSort(props.sortProps.amountOfValues));
//    var sortObj = sortAlgoRef;
//
//onMounted(() => {
//    const controller: ISortController = {
//          startSorting: onStartClick,
//          cancelAnimation: cancelAnimation, 
//          isAnimating: animating
//        }
//          const metaData: IMetadata = {
//            timeComplexity: `O(n²)`,
//            spaceComplexity: `O(1)`,
//            description: "Bubble Sort is like bubbles rising to the surface! It works by repeatedly stepping through a list, comparing adjacent elements and swapping them if they're in the wrong order. The algorithim gets its name because smaller elements 'bubble' to the top with each iteration, similar to air bubbles rising in water. While simple to understand and implement, Bubble Sort has an average time complexity of O(n²), making it less efficient for large datasets. However, it's excellent for teaching purposes and works well with small lists or nearly sorted data.",
//            header: "Heap Sort"
//        }
//        const request: ISortRequest = {
//        controller: controller, 
//        metadata: metaData, 
//      }
//      emit("request", request)
//})
//
//function onStartClick() {
//    clearIterations()
//    sortObj.value.startSort()
//    sortAnimation(props.sortProps.animationSpeed)
//}
//
</script>