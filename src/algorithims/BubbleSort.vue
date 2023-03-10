<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex-col items-center justify-center">
    <!--Need to be able to show before and after-->

    <div class="flex items-center justify-center p-5">
      <li v-show="!animating" class="flex" v-for="node in sortObj.getCurrentValues()">
        <div class="border-x-2">
          <VerticalNode :value="node"></VerticalNode>
        </div>
      </li>
      <VerticalNodeAdapter v-if="animating" :iteration="currentIteration" />
    </div>
    <span class="p-2 ">Work on color palettee
      <el-button v-show="!animating" class="bg-emerald-500" type="primary" round  color=""  v-if="amountOfValues" @click="startSortingClick()" :disabled="animating"
        >Start Sorting</el-button
      >
      <el-button class="p-2" v-show="animating"  @click="cancelAnimation()"
        >Cancel Animation</el-button
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import BubbleSort from "../algorithims-ts/BubbleSort";
import { SortAlgorithimShell } from "../composables/SortAlgorithimShell";
import VerticalNodeAdapter from "../components/VerticalNodeAdapter.vue";
import QuickSort from "../algorithims-ts/QuickSort";

export default defineComponent({
  name: "BubbleSort",
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
    } = SortAlgorithimShell(new BubbleSort(props.amountOfValues));
    var sortObj = sortAlgoRef;

    onMounted(() => {
      emit("header", "Bubble Sort");
    });

    //watching a prop
    watch(
      () => props.amountOfValues,
      (amountOfValues, prevSelc) => {
        const { sortAlgoRef } = SortAlgorithimShell(new BubbleSort(props.amountOfValues));
        sortObj.value = sortAlgoRef.value;

        if (animating.value) cancelAnimation();
      }
    );

    function initSort() {
      const { sortAlgoRef } = SortAlgorithimShell(new BubbleSort(props.amountOfValues));
        sortObj.value = sortAlgoRef.value;

        if (animating.value) cancelAnimation();
    }

  

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

    onMounted(() => {
      initSort()
    })

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

      if (this.animationSpeed == 0) this.sortAnimation(200);
      else this.sortAnimation(this.animationSpeed);
    },
  },
});
</script>

<style></style>
