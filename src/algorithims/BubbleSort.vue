<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex-col items-center justify-center ">
    <!--Need to be able to show before and after-->
    <div v-if="amountOfValues == 0">No Values</div>
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
    <span v-if="!autostart" class="p-2">
      <el-button 
        v-show="!animating"
        class="text-green-300 bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F] p-4"
        type="primary"
        color="#1D1E1F"
        v-if="amountOfValues"
        @click="startSorting()"
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
import BubbleSort from "../algorithims-ts/BubbleSort";
import { SortAlgorithimShell } from "../composables/SortAlgorithimShell";
import VerticalNodeAdapter from "../components/VerticalNodeAdapter.vue";

export default defineComponent({
  name: "Bubble Sort",
  components: { Node, VerticalNode, VerticalNodeAdapter },
  props: {
    amountOfValues: { type: Number, default: 0 },
    animationSpeed: { type: Number, default: 200 },
    autostart: { type: Boolean, default: false},
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
      initSort();
      if(props.autostart) {
        startSorting()
      }
    });

    function startSorting(): void {
      clearIterations();
      sortObj.value.startSort();

      if (props.animationSpeed == 0) sortAnimation(200);
      else sortAnimation(props.animationSpeed);
    }

    return {
      currentIteration, //currentIteration is an iterationObject
      sortAnimation,
      animating,
      cancelAnimation,
      sortObj,
      timer,
      clearIterations,
      startSorting
    };
  },
});
</script>

<style></style>
