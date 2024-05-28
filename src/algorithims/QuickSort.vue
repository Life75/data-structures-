<template>
  <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
  <div class="flex-col items-center justify-center">
    <!--Need to be able to show before and after-->
    <div v-if="amountOfValues == 0">No Values</div>

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
  import ISortController from "../Contracts/Interfaces/ISortController"
  
  export default defineComponent({
    name: "Quick Sort",
    components: { Node, VerticalNode, VerticalNodeAdapter },
    props: {
      amountOfValues: { type: Number, default: 0 },
      animationSpeed: { type: Number, default: 200 },
      startSorting: {type: Boolean, default: false}
    },
    emits: ["timer", "header", "isSorting", "controller"],
    setup(props, { emit }) {


      var {
        sortAlgoRef,
        sortAnimation,
        cancelAnimation,
        animating,
        currentIteration,
        timer,
        clearIterations
      } = SortAlgorithimShell(new QuickSort(props.amountOfValues));
      var sortObj = sortAlgoRef;
  
      //watching a prop
      watch(
        () => props.amountOfValues,
        (amountOfValues, prevSelc) => {
  
          const { sortAlgoRef } = SortAlgorithimShell(
            new QuickSort(props.amountOfValues)
          );
          sortObj.value = sortAlgoRef.value;
  
          if (animating.value) cancelAnimation(emitIsSorting);
        }
      );
  
      watch(
        () => props.animationSpeed,
        (animationSpeed, prevSelc) => {
          if (animating.value) {
            cancelAnimation(emitIsSorting);
            sortAnimation(props.animationSpeed);
          }
        }
      );
  
      watch(
      ()=>timer.value,
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
          emit("isSorting", true)
          clearIterations()
          sortObj.value.startSort()
          sortAnimation(props.animationSpeed, emitIsSorting)
        }

      function initSort() {
        const { sortAlgoRef } = SortAlgorithimShell(
            new QuickSort(props.amountOfValues)
          );
          sortObj.value = sortAlgoRef.value;
  
          if (animating.value) cancelAnimation(emitIsSorting);
      }

      function emitIsSorting(): void {
        emit("isSorting", animating.value)
      }

      onMounted(() => {
        emit("header", "Quick Sort");
        initSort()

        const controller: ISortController = {
          startSorting: startSortingClick,
          cancelAnimation: cancelAnimation, 
          isAnimating: animating
        }

        emit("controller", controller )
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
<style>

</style>