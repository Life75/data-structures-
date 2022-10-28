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
      <li v-show="!animating" class="flex" v-for="node in sorter.getCurrentValues()">
        <VerticalNode :value="node"></VerticalNode>
      </li>

      <li v-show="animating" class="flex" v-for="node in currentIteration">
        <VerticalNode :value="node"></VerticalNode>
      </li>
      {{timer}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, defineEmits } from "vue";
import Node from "../components/Node.vue";
import VerticalNode from "../components/VerticalNode.vue";
import BubbleSort from "../algorithims-ts/BubbleSort";
import { ref } from "vue";
import {useSortAlgorithim} from '../composables/BubbleSortComposable'
import Timer from "../algorithims-ts/Timer";

export default defineComponent({
  name: "BubbleSort",
  components: { Node, VerticalNode },
  props: {
    amountOfValues: { type: Number, default: 0 },
    animationSpeed: { type: Number, default: 200 },
  },
  emits: ["timer"],
  setup(props, {emit}) {
    var currentIteration = ref();
    var animationSpeedRef = ref(props.amountOfValues);
    var {sortRef, sortAnimation, cancelAnimation, animating, currentIteration, timer} = useSortAlgorithim(new BubbleSort(props.amountOfValues), animationSpeedRef.value , props.amountOfValues);
    var sorter = sortRef
    var timer = ref(timer); 


    
    //watching a prop
    watch(
      () => props.amountOfValues,
      (amountOfValues, prevSelc) => {
       // sortRef.value.initArray(amountOfValues);
       //TODO need to fix bug when changing the sorted amount value while animation value is true 
       
       console.log("change values")
       const {sortRef, currentIteration, timer} = useSortAlgorithim(new BubbleSort(props.amountOfValues), props.animationSpeed, props.amountOfValues);
        sorter.value = sortRef.value;
        currentIteration.value = currentIteration.value;
        timer.value = timer;
       if(animating.value) cancelAnimation()

        
        
        console.log(sorter.value)
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

    watch(sortRef.value.getCurrentValues(), (newValue) => {
      //calculations finished start animating
      animating.value = true;
    });

    return {
      currentIteration,
      sortAnimation,
      animating,
      cancelAnimation,
      sorter,
      timer
    };
  },
  methods: {
    startSortingClick(): void {
      this.sorter.startSort();
      this.sortAnimation(this.animationSpeed);
    },
  },
});
</script>

<style></style>
