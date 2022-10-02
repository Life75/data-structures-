<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex items-center justify-center">

    <!--Need to be able to show before and after-->
    <li v-show="!animating" class="flex" v-for="node in bubbleSort.getCurrentValues()">
      <VerticalNode :value="node"></VerticalNode>
    </li>

    <li class="flex" v-for="node in currentIteration">
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
import { vAutoAnimate } from "@formkit/auto-animate";

export default defineComponent({
  name: "BubbleSort",
  components: { Node, VerticalNode },
  props: { amountOfValues: { type: Number, default: 23 } },
  setup(props) {
    var bubbleSort = ref(new BubbleSort(props.amountOfValues));
    var currentIteration = ref();
    var timer = ref(0);
    var id = ref();
    var animating = ref(false);

    //watching a prop
    watch(
      () => props.amountOfValues,
      (amountOfValues, prevSelc) => {
        bubbleSort.value.initArray(amountOfValues);
      }
    );

    watch(bubbleSort.value.getCurrentValues(), (newValue) => {
      //calculations finished start animating
      console.log("start animating");
      animating.value = true;

      id.value = setInterval(() => {
        currentIteration.value = bubbleSort.value
          .getIterations()
          [timer.value].getIteration();
        timer.value++;
      }, 50);

      //clearInterval(id)
      //            timer.value++// setInterval(()=> {timer.value++}, 5000)
    });

    watch(timer, (newValue) => {
      if (timer.value == bubbleSort.value.getIterations().length) {
        window.clearInterval(id.value);
             // animating.value = false

        console.log("finished");
        //once finished reset so it can do future values as well  
      }
    });

    function sortAnimation(): void {
      //  console.log(bubbleSort.value.getIterations())
      //console.log(bubbleSort.value.getIterations())
      animating.value = true;
      console.log('animating')  
      var someValue = setInterval(() => {

        if(timer.value == bubbleSort.value.getIterations().length) {
            clearInterval(someValue)

            console.log("hello im done")
            console.log(id.value)
        }
        currentIteration.value = bubbleSort.value
          .getIterations()
          [timer.value].getIteration();
        timer.value++;
      }, 50);
    }
    
    return {
      bubbleSort,
      currentIteration,
      sortAnimation,
      animating,
    };
    //bubbleSort.value.startSort()
    //make random array
    //sort random array
    //update the values reactively
  },
  methods: {
    startSortingClick() {
      this.bubbleSort.startSort();
      this.sortAnimation();
      //  console.log(this.currentIteration)
    },
  },
});
</script>

<style></style>
