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
      @click="cancelAnimation2()"
      >Cancel Animation</el-button
    >
  </span>
    <div class="flex items-center justify-center p-5">
      <li v-show="!animating" class="flex" v-for="node in sorter.getCurrentValues()">
        <VerticalNode :value="node"></VerticalNode>
      </li>

      <li v-show="animating" class="flex" v-for="node in currentIteration">
        <VerticalNode :value="node"></VerticalNode>
      </li>
      <div>{{sorter.getCurrentValues()}}</div>
    </div>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>

  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import BubbleSort from "../algorithims-ts/BubbleSort";
import { ref } from "vue";
import {useMouse, useSortAlgorithim} from '../composables/BubbleSortComposable'

export default defineComponent({
  name: "BubbleSort",
  components: { Node, VerticalNode },
  props: {
    amountOfValues: { type: Number, default: 0 },
    animationSpeed: { type: Number, default: 200 },
  },
  setup(props) {
    var bubbleSort = ref(new BubbleSort(props.amountOfValues));
    var currentIteration = ref();
    var frame = ref(0);
    var id = ref();
  
    //var animating = ref(false);
    const {x, y} = useMouse();

    var {sortRef, sortAnimation2, cancelAnimation2, animating} = useSortAlgorithim(new BubbleSort(props.amountOfValues), props.animationSpeed, props.amountOfValues);
    var sorter = sortRef

    //watching a prop
    watch(
      () => props.amountOfValues,
      (amountOfValues, prevSelc) => {
       // sortRef.value.initArray(amountOfValues);
       // animating.value = false;
        const {sortRef, sortAnimation2, cancelAnimation2, animating} = useSortAlgorithim(new BubbleSort(props.amountOfValues), props.animationSpeed, props.amountOfValues);
        sorter.value = sortRef.value;
        console.log(sorter.value)
      }
    );

    watch(sortRef.value.getCurrentValues(), (newValue) => {
      //calculations finished start animating
      animating.value = true;
    });
/*
    function cancelAnimation() {
      console.log("canceling");
      clearInterval(id.value);
      frame.value = 0;
      currentIteration.value = sortRef.value.getIterations()[0].getIteration();
      animating.value = false;
    }

    function sortAnimation(): void {
      animating.value = true;
      var animationID = setInterval(() => {
        if (frame.value == sortRef.value.getIterations().length) {
          frame.value = 0;
          clearInterval(animationID); //finished
          animating.value = false;
        } else {
          id.value = animationID;
          try {
            currentIteration.value = sortRef.value
              .getIterations()
              [frame.value].getIteration();
            frame.value++;
          } catch (e: unknown) {
            //user has switched the inputs during the animation, now clear the interval s
            clearInterval(animationID);
          }
        }
      }, props.animationSpeed);
    }
*/
    return {
      sortRef,
      currentIteration,
    //  sortAnimation,
      sortAnimation2,
      animating,
      cancelAnimation2,
    //  cancelAnimation,
      x,
      y,
      sorter
    };
  },
  methods: {
    startSortingClick() {
      this.sortRef.startSort();
      this.sortAnimation2();
    },
  },
});
</script>

<style></style>
