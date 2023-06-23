<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex-col items-center justify-center">
    <!--Need to be able to show before and after-->

    <div class="flex items-center justify-center p-5">
      <li v-show="!animating" class="flex" v-for="node in sortObj.getCurrentValues()">
        <div class="">
          <VerticalNode :value="node"></VerticalNode>
        </div>
      </li>
      <VerticalNodeAdapter v-if="animating" :iteration="currentIteration" />
    </div>
    <span class="p-2">
      <el-button
        v-show="!animating"
        class="text-green-300 bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F]"
        type="primary"
        color="#1D1E1F"
        v-if="amountOfValues"
        @click="startSortingClick()"
        :disabled="animating"
        >Start Sorting</el-button
      >
      <el-button
        class="p-2"
        v-show="animating"
        type="primary"
        color="green"
        @click="cancelAnimation()"
        >Cancel Animation</el-button
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import { SortAlgorithimShell } from "../composables/SortAlgorithimShell";
import VerticalNodeAdapter from "../components/VerticalNodeAdapter.vue";
import MergeSort from "../algorithims-ts/MergeSort";

export default defineComponent({
  name: "Merge Sort",
  components: { Node, VerticalNode, VerticalNodeAdapter },
  props: {
    amountOfValues: { type: Number, default: 0 },
    animationSpeed: { type: Number, default: 200 },
  },
  emits: ["timer", "header"],
  setup(props, { emit }) {
    var {
      sortAlgoRef,
      sortAnimation,
      cancelAnimation,
      animating,
      currentIteration,
      timer,
      clearIterations,
    } = SortAlgorithimShell(new MergeSort(props.amountOfValues));
    var sortObj = sortAlgoRef;

    watch(
      () => props.amountOfValues,
      (amountOfValues, prevSelc) => {
        const { sortAlgoRef } = SortAlgorithimShell(new MergeSort(props.amountOfValues));
        sortObj.value = sortAlgoRef.value;
        if (animating.value) cancelAnimation();
      }
    );

    watch(
      () => props.animationSpeed,
      (animationSpeed, prevSelc) => {
        if (animating.value) {
          cancelAnimation();
          sortAnimation(props.animationSpeed);
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
      const { sortAlgoRef } = SortAlgorithimShell(new MergeSort(props.amountOfValues));
      sortObj.value = sortAlgoRef.value;

      if (animating.value) cancelAnimation();
    }

    onMounted(() => {
      emit("header", "Merge Sort");
      initSort();
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
    startSortingClick(): void {
      this.clearIterations();
      this.sortObj.startSort();
      this.sortAnimation(this.animationSpeed);
    },
  },
});
</script>
<style></style>
