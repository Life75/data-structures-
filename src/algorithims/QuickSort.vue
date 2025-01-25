<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
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


<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import QuickSort from "../algorithims-ts/QuickSort";
import { SortAlgorithimShell } from "../composables/SortAlgorithimShell";
import VerticalNodeAdapter from "../components/VerticalNodeAdapter.vue";
import SortProps from "../Contracts/Classes/SortProps"
import { PropType } from "vue";
import IMetadata from "../Contracts/Interfaces/IMetadata";
import ISortRequest from "../Contracts/Interfaces/ISortRequest";
import ISortController from "../Contracts/Interfaces/ISortController";

export default defineComponent({
  name: "Quick Sort",
  components: { Node, VerticalNode, VerticalNodeAdapter },
  props: {
    sortProps: { type: Object as PropType<SortProps>, default: new SortProps() }
  },
  emits: ["timer", "request"],
  setup(props, { emit }) {
    var {
      sortAlgoRef,
      sortAnimation,
      cancelAnimation,
      animating,
      currentIteration,
      timer,
      clearIterations
    } = SortAlgorithimShell(new QuickSort(props.sortProps.amountOfValues));
    var sortObj = sortAlgoRef;

    //watching a prop
    watch(
      () => props.sortProps.amountOfValues,
      (amountOfValues, prevSelc) => {

        const { sortAlgoRef } = SortAlgorithimShell(
          new QuickSort(props.sortProps.amountOfValues)
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
    function startSortingClick(): void {
      clearIterations()
      sortObj.value.startSort()
      sortAnimation(props.sortProps.animationSpeed)
    }

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
        timeComplexity: `O(n log n)`,
        spaceComplexity: `O(log n)`,
        description: "QuickSort is a highly efficient, comparison-based algorithm that uses a 'divide and conquer' approach. It works by selecting a 'pivot' element and partitioning the array around it - smaller elements go to the left, larger to the right. This process repeats recursively for each partition. While its worst-case time complexity is O(n²), QuickSort typically performs exceptionally well in practice with an average case of O(n log n), making it a popular choice in real-world applications and standard library implementations.",
        header: "Quick Sort"
      }

      const request: ISortRequest = {
        controller: controller,
        metadata: metaData
      }

      emit("request", request)
    });


    return {
      currentIteration, //currentIteration is an iterationObject 
      sortAnimation,
      animating,
      cancelAnimation,
      sortObj,
      timer,
      clearIterations
    };
  },
});

</script>
<style></style>