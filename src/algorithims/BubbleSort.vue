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
      <li v-show="!animating" class="flex" v-for="node in bubbleSort.getCurrentValues()">
        <VerticalNode :value="node"></VerticalNode>
      </li>

      <li v-show="animating" class="flex" v-for="node in currentIteration">
        <VerticalNode :value="node"></VerticalNode>
      </li>

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
    var animating = ref(false);
    const {x, y} = useMouse();

    const {sortRef} = useSortAlgorithim(new BubbleSort(props.amountOfValues));
    

    //watching a prop
    watch(
      () => props.amountOfValues,
      (amountOfValues, prevSelc) => {
        bubbleSort.value.initArray(amountOfValues);
        animating.value = false;
      }
    );

    watch(bubbleSort.value.getCurrentValues(), (newValue) => {
      //calculations finished start animating
      animating.value = true;
    });

    function cancelAnimation() {
      console.log("canceling");
      clearInterval(id.value);
      frame.value = 0;
      currentIteration.value = bubbleSort.value.getIterations()[0].getIteration();
      animating.value = false;
    }

    function sortAnimation(): void {
      animating.value = true;
      var animationID = setInterval(() => {
        if (frame.value == bubbleSort.value.getIterations().length) {
          frame.value = 0;
          clearInterval(animationID); //finished
          animating.value = false;
        } else {
          id.value = animationID;
          try {
            currentIteration.value = bubbleSort.value
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

    return {
      bubbleSort,
      currentIteration,
      sortAnimation,
      animating,
      cancelAnimation,
      x,
      y
    };
  },
  methods: {
    startSortingClick() {
      this.bubbleSort.startSort();
      this.sortAnimation();
    },
  },
});
</script>

<style></style>
