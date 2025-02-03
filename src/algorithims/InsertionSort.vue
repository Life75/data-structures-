<template>
    <div class="flex-col items-center justify-center">
        <!--Need to be able to show before and after-->
        <div v-if="sortProps.amountOfValues == 0"
            class="flex flex-col items-center justify-center w-full space-y-4 p-8  backdrop-blur-sm rounded-xl border border-neutral-700/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-400/70" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <p class="text-lg font-medium text-neutral-400">Ready to Sort</p>
            <p class="text-sm text-neutral-500">Generate values to watch the sorting algorithm in action</p>
        </div>
        <div class="flex items-center justify-center p-5">
        </div>

        <div class="flex items-center justify-center p-5">

            <li v-show="!animating" class="flex " v-for="node in sortObj.getCurrentValues()">
                <div class="">
                    <VerticalNode :value="node"></VerticalNode>
                </div>
            </li>

            <VerticalNodeAdapter v-if="animating" :iteration="currentIteration" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, watch, ref } from 'vue';
import InsertionSort from '../algorithims-ts/InsertionSort';
import { SortAlgorithimShell } from '../composables/SortAlgorithimShell';
import SortProps from '../Contracts/Classes/SortProps';
import QuickSort from '../algorithims-ts/QuickSort';
import IMetadata from '../Contracts/Interfaces/IMetadata';
import ISortController from '../Contracts/Interfaces/ISortController';
import ISortRequest from '../Contracts/Interfaces/ISortRequest';
import VerticalNodeAdapter from '../components/VerticalNodeAdapter.vue';
import VerticalNode from '../components/VerticalNode.vue';


let props = defineProps({
    sortProps: { type: Object as PropType<SortProps>, default: new SortProps() }
})

const emit = defineEmits(["timer", "request"])

var {
    sortAlgoRef,
    sortAnimation,
    cancelAnimation,
    animating,
    currentIteration,
    timer,
    clearIterations
} = SortAlgorithimShell(new InsertionSort(props.sortProps.amountOfValues));
var sortObj = ref(sortAlgoRef);
function startSortingClick(): void {
    clearIterations()
    sortObj.value.startSort()
    sortAnimation(props.sortProps.animationSpeed)
}

watch(
    () => props.sortProps.amountOfValues,
    (amountOfValues, prevSelc) => {
        const { sortAlgoRef } = SortAlgorithimShell(
            new InsertionSort(props.sortProps.amountOfValues)
        );
        sortObj.value = sortAlgoRef.value;

        if (animating.value) cancelAnimation();
    }
);

watch(
    () => props.sortProps.animationSpeed,
    (animationSpeed, prevSelc) => {
        if (animating.value) {
            cancelAnimation();
            sortAnimation(props.sortProps.animationSpeed);
        }
    }
);

watch(
    () => timer.value,
    (currentTimer, oldTimer) => {
        //emit this event
        emit("timer", timer.value);
    }
);

watch(
    () => props.sortProps.autostart, () => {
        startSortingClick()
    }
)

function initSort() {
    const { sortAlgoRef } = SortAlgorithimShell(
        new QuickSort(props.sortProps.amountOfValues)
    );
    sortObj.value = sortAlgoRef.value;

    if (animating.value) cancelAnimation();
}



onMounted(() => {
    const controller: ISortController = {
        startSorting: startSortingClick,
        cancelAnimation: cancelAnimation,
        isAnimating: animating
    }

    const metaData: IMetadata = {
        timeComplexity: `O(n²)`,
        spaceComplexity: `O(1)`,
        description: "Insertion Sort works by building a sorted array one element at a time. It takes each element from the unsorted portion and inserts it into its correct position in the sorted portion. For each element, it compares and shifts larger elements to the right until finding the correct position. While simple and efficient for small or nearly sorted arrays, it performs particularly well with continuous incoming data streams. The algorithm is stable, meaning it preserves the relative order of equal elements.",
        header: "Insertion Sort"
    }
    const request: ISortRequest = {
        controller: controller,
        metadata: metaData
    }

    emit("request", request)
});

</script>


<style></style>