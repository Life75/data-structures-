<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex-col items-center justify-center">
    <!--Need to be able to show before and after-->
    <div v-if="sortProps.amountOfValues == 0">No Values</div>

    <div class="flex items-center justify-center p-5">
      <li v-show="!animating" class="flex" v-for="node in sortObj.getCurrentValues()">
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
import { SortAlgorithimShell } from "../composables/SortAlgorithimShell";
import VerticalNodeAdapter from "../components/VerticalNodeAdapter.vue";
import MergeSort from "../algorithims-ts/MergeSort";
import SortProps from "../Contracts/Classes/SortProps";
import { PropType } from "vue";
import ISortRequest from "../Contracts/Interfaces/ISortRequest";
import IMetadata from "../Contracts/Interfaces/IMetadata";
import ISortController from "../Contracts/Interfaces/ISortController";

export default defineComponent({
  name: "Merge Sort",
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
      clearIterations,
    } = SortAlgorithimShell(new MergeSort(props.sortProps.amountOfValues));
    var sortObj = sortAlgoRef;

    watch(
      () => props.sortProps.amountOfValues,
      (amountOfValues, prevSelc) => {
        const { sortAlgoRef } = SortAlgorithimShell(new MergeSort(props.sortProps.amountOfValues));
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

    function initSort() {
      const { sortAlgoRef } = SortAlgorithimShell(new MergeSort(props.sortProps.amountOfValues));
      sortObj.value = sortAlgoRef.value;

      if (animating.value) cancelAnimation();
    }

    function startSorting(): void {
      clearIterations()
      sortObj.value.startSort()

      if (props.sortProps.animationSpeed == 0) sortAnimation(200);
      else sortAnimation(props.sortProps.animationSpeed);
    }


    onMounted(() => {
      initSort();

      const controller: ISortController = {
        startSorting: startSorting,
        cancelAnimation: cancelAnimation,
        isAnimating: animating
      }

      const metaData: IMetadata = {
        timeComplexity: "O(nlog(n))",
        spaceComplexity: "O(n)",
        description: "This is the description for merge sort ",
        header: "Merge Sort "
      }

      const request: ISortRequest = {
        controller: controller,
        metadata: metaData,
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
      clearIterations,
    };
  },
  methods: {

  },
});
</script>
<style></style>
