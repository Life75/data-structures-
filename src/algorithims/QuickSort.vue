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
import IsortProps from "../Contracts/Interfaces/IsortProps"
import SortProps from "../Contracts/Classes/SortProps"
import { PropType } from "vue";
import IMetadata from "../Contracts/Interfaces/IMetadata";
import ISortRequest from "../Contracts/Interfaces/ISortRequest";

export default defineComponent({
  name: "Quick Sort",
  components: { Node, VerticalNode, VerticalNodeAdapter },
  props: {
    amountOfValues: { type: Number, default: 0 },
    animationSpeed: { type: Number, default: 200 },
    startSorting: { type: Boolean, default: false },
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

        if (animating.value) cancelAnimation(emitIsSorting);
      }
    );

    watch(
      () => props.sortProps.animationSpeed,
      (animationSpeed, prevSelc) => {
        if (animating.value) {
          cancelAnimation(emitIsSorting);
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
      () => props.startSorting, () => {
        startSortingClick()
      }
    )
    function startSortingClick(): void {
      clearIterations()
      sortObj.value.startSort()
      sortAnimation(props.animationSpeed, emitIsSorting)
    }

    function initSort() {
      const { sortAlgoRef } = SortAlgorithimShell(
        new QuickSort(props.sortProps.amountOfValues)
      );
      sortObj.value = sortAlgoRef.value;

      if (animating.value) cancelAnimation(emitIsSorting);
    }

    function emitIsSorting(): void {
      emit("isSorting", animating.value)
    }

    onMounted(() => {
      const controller: IsortProps = {
        startSorting: startSortingClick,
        cancelAnimation: cancelAnimation,
        isAnimating: animating
      }

      const metaData: IMetadata = {
        timeComplexity: `O(nlog(n))`,
        spaceComplexity: `O(nlog(n))`,
        description: "This is the description for quicksort",
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
  methods: {
    startSortingClick(): void {
      this.clearIterations();
      this.sortObj.startSort();
      this.sortAnimation(this.animationSpeed);
    },
  },
});

</script>
<style></style>../Contracts/Interfaces/SortProps