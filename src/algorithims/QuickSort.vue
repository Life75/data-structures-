<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex-col items-center justify-center">
    <!--Need to be able to show before and after-->
    <div v-if="sortProps.amountOfValues == 0">No Values</div>

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