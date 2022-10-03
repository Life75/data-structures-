<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex items-center justify-center">
    <!--Need to be able to show before and after-->
    <li v-show="!animating" class="flex" v-for="node in bubbleSort.getCurrentValues()">
      <VerticalNode :value="node"></VerticalNode>
    </li>

    <li v-show="animating" class="flex" v-for="node in currentIteration">
      <VerticalNode :value="node"></VerticalNode>
    </li>

    <el-button @click="startSortingClick()">Start Sorting</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import BubbleSort from "../algorithims-ts/BubbleSort";
import { ref } from "vue";

export default defineComponent({
  name: "BubbleSort",
  components: { Node, VerticalNode },
  props: { amountOfValues: { type: Number, default: 23 } },
  setup(props) {
    var bubbleSort = ref(new BubbleSort(props.amountOfValues));
    var currentIteration = ref();
    var frame = ref(0);
    var id = ref();
    var animating = ref(false);
    var animationSpeed = ref(1)

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
      console.log("start animating");
      animating.value = true;

      id.value = setInterval(() => {
        currentIteration.value = bubbleSort.value
          .getIterations()
          [frame.value].getIteration();
        frame.value++;
      }, 50);

    });


    function sortAnimation(): void {
      animating.value = true;
      var someValue = setInterval(() => {
        if (frame.value == bubbleSort.value.getIterations().length) {
          clearInterval(someValue); //finished
        } else {

        try {
          currentIteration.value = bubbleSort.value
            .getIterations()
            [frame.value].getIteration();
            frame.value++;
        }
        catch(e: unknown) {
          //user has switched the inputs during the animation, now clear the interval 
          clearInterval(someValue)
        }
    
        }
      }, animationSpeed.value);
    }

    return {
      bubbleSort,
      currentIteration,
      sortAnimation,
      animating,
      timer: frame,
    };
  },
  methods: {
    startSortingClick() {
      this.timer = 0;
      this.bubbleSort.startSort();
      this.sortAnimation();
    },
  },
});
</script>

<style></style>
