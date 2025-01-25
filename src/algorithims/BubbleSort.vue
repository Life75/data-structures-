<template>
  <div class="flex-col items-center justify-center">
    <div v-if="sortProps.amountOfValues == 0" 
         class="flex flex-col items-center justify-center w-full space-y-4 p-8  backdrop-blur-sm rounded-xl border border-neutral-700/50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
      </svg>
      <p class="text-lg font-medium text-neutral-400">Ready to Sort</p>
      <p class="text-sm text-neutral-500">Generate values to watch the sorting algorithm in action</p>
    </div>
    <div class="flex items-center justify-center p-5">
      <li v-show="!animating" class="flex" v-for="node in sortObj.getCurrentValues()">
        <div class="">
          <el-popover :content="node.toString()" effect="dark" :width="150" transition="null">
            <template #reference>
              <VerticalNode :value="node"></VerticalNode>
            </template>
          </el-popover>
        </div>
      </li>
      <VerticalNodeAdapter v-if="animating" :iteration="currentIteration" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import BubbleSort from "../algorithims-ts/BubbleSort";
import { SortAlgorithimShell } from "../composables/SortAlgorithimShell";
import VerticalNodeAdapter from "../components/VerticalNodeAdapter.vue";
import ISortController from "../Contracts/Interfaces/ISortController";
import ISortRequest from "../Contracts/Interfaces/ISortRequest"
import IMetadata from "../Contracts/Interfaces/IMetadata"
import { PropType } from "vue";
import SortProps from "../Contracts/Classes/SortProps";

export default defineComponent({
  name: "Bubble Sort",
  components: { Node, VerticalNode, VerticalNodeAdapter },
  props: {
    amountOfValues: { type: Number, default: 0 },
    animationSpeed: { type: Number, default: 200 },
    autostart: { type: Boolean, default: false},
    start: { type: Boolean, default: false},
    sortProps: {type: Object as PropType<SortProps>, default: new SortProps()}
  },
  emits: ["timer" , "request"],
  setup(props, { emit }) {
    var {
      sortAlgoRef,
      sortAnimation,
      cancelAnimation,
      animating,
      currentIteration,
      timer,
      clearIterations,
    } = SortAlgorithimShell(new BubbleSort(props.sortProps.amountOfValues));
    var sortObj = sortAlgoRef;

    onMounted(() => {
      const controller: ISortController = {
          startSorting: startSorting,
          cancelAnimation: cancelAnimation, 
          isAnimating: animating
        }
          const metaData: IMetadata = {
            timeComplexity: `O(n²)`,
            spaceComplexity: `O(1)`,
            description: "Bubble Sort is like bubbles rising to the surface! It works by repeatedly stepping through a list, comparing adjacent elements and swapping them if they're in the wrong order. The algorithim gets its name because smaller elements 'bubble' to the top with each iteration, similar to air bubbles rising in water. While simple to understand and implement, Bubble Sort has an average time complexity of O(n²), making it less efficient for large datasets. However, it's excellent for teaching purposes and works well with small lists or nearly sorted data.",
            header: "Bubble Sort"
        }
        const request: ISortRequest = {
        controller: controller, 
        metadata: metaData, 
      }
      emit("request", request)
    });

    //watching a prop
    watch(
      () => props.sortProps.amountOfValues,
      (amountOfValues, prevSelc) => {
        const { sortAlgoRef } = SortAlgorithimShell(new BubbleSort(props.sortProps.amountOfValues));
        sortObj.value = sortAlgoRef.value;
        if (animating.value) cancelAnimation();
      }
    );

    watch(
      () => props.start, (before, after) => {
        initSort()
        startSorting()
      }
    )

    function initSort() {
      const { sortAlgoRef } = SortAlgorithimShell(new BubbleSort(props.sortProps.amountOfValues));
      sortObj.value = sortAlgoRef.value;

      if (animating.value) cancelAnimation();
    }

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

    onMounted(() => {
      initSort();
      if(props.autostart) {
        startSorting()
      }
    });

    function startSorting(): void {
      clearIterations();
      sortObj.value.startSort();
      if (props.sortProps.animationSpeed == 0) sortAnimation(200);
      else sortAnimation(props.sortProps.animationSpeed);
    }

    return {
      currentIteration, //currentIteration is an iterationObject
      sortAnimation,
      animating,
      cancelAnimation,
      sortObj,
      timer,
      clearIterations,
      startSorting, 
    };
  },
});</script>

<style>

</style>
