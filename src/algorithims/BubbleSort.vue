<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex items-center justify-center">
    <!--Need to be able to show before and after-->
  <span class="">
    <el-button v-show="!animating" @click="startSortingClick()" :disabled="animating"
      >Start Sorting</el-button
    >
    <el-button
      v-show="animating"
      @click="cancelAnimation()"
      >Cancel Animation</el-button
    >
  </span>
    <div class="flex items-center justify-center p-5">
      <li v-show="!animating" class="flex" v-for="node in sortObj.getCurrentValues()">
        <VerticalNode :value="node"></VerticalNode>
      </li>

      <li v-show="animating" class="flex" v-for="node in currentIteration">
        <VerticalNode :value="node"></VerticalNode>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, defineEmits, Ref } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import BubbleSort from "../algorithims-ts/BubbleSort";
import { ref } from "vue";
import {SortAlgorithimShell} from '../composables/SortAlgorithimComposable';
import Timer from "../algorithims-ts/Timer";
import Iteration from "../algorithims-ts/Iteration";

export default defineComponent({
  name: "BubbleSort",
  components: { Node, VerticalNode },
  props: {
    amountOfValues: { type: Number, default: 0 },
    animationSpeed: { type: Number, default: 200 },
  },
  emits: ["timer"],
  setup(props, {emit}) {
    var currentIterationRef = ref<Iteration>;
    var timerRef = ref<Timer>; 
    var {sortAlgoRef, sortAnimation, cancelAnimation, animating, currentIteration, timer} = SortAlgorithimShell(new BubbleSort(props.amountOfValues) , props.amountOfValues);
    var sortObj = sortAlgoRef;


    
    //watching a prop
    watch(
      () => props.amountOfValues,
      (amountOfValues, prevSelc) => {
   
       const {sortAlgoRef, currentIteration, timer} = SortAlgorithimShell(new BubbleSort(props.amountOfValues), props.amountOfValues);
        sortObj.value = sortAlgoRef.value;
        currentIterationRef = currentIteration.value;
        timerRef = timer.value;
       if(animating.value) cancelAnimation()

      }
    );

    watch(
      () => props.animationSpeed,
      (animationSpeed, prevSelc) => {
      
        if(animating.value) {
          cancelAnimation()
          sortAnimation(props.animationSpeed)
        }

      }
    );

    watch(
      () => timer.value, (currentTimer, oldTimer) => {
        //emit this event 
        emit('timer', timer);
      }
    )

    return {
      currentIteration,
      sortAnimation,
      animating,
      cancelAnimation,
      sortObj,
      timer
    };
  },
  methods: {
    startSortingClick(): void {
      this.sortObj.startSort();
      this.sortAnimation(this.animationSpeed);
    },
  },
});
</script>

<style></style>
