<template>
  
    <div :id="props.node.id" v-if="props.node?.isVisible" class="flex items-center">
      <div class="flex  py-2 pr-3">
        <div
          :class="`w-12 h-12 bg-green-600 rounded-full ${$props.node?.isLit ? `bg-neutral-50` : ``} ${props.node?.classname}`">
        </div>
        <span :class="`absolute w-12 my-3 z-10 justify-center items-center text-center text-xl font-sans  `">{{
          props.node?.payload }}</span>
      </div>
      <Arrow :direction="$props.arrowDirection" class="ml-2" />
    </div>

  <RecursiveNode v-if="$props.node?.nextNode" :node="$props.node.nextNode" :arrow-direction="props.arrowDirection">
  </RecursiveNode>
</template>


<script setup lang="ts">
import Node from "../../Contracts/Classes/Node"
import { onMounted, PropType } from "vue"
import Arrow from "../Arrow.vue"
import { Direction } from "../../Contracts/Classes/Direction"
//@ts-ignore
import anime from 'animejs'
const props = defineProps({
  node: { type: Object as PropType<Node> },
  arrowDirection: { type: Object as PropType<Direction> }
})

onMounted( async () => {
  console.log(props.node)

})




function sleep(millisec: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => { resolve() }, millisec);
    })
  }



</script>

<style>
 .slide-left-enter-active {
    transition: all 0.3s ease-in-out;
  }

.slide-left-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}
</style>