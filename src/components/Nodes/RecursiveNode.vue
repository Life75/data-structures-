<template>
  
    <div class="flex items-center gap-2">
      <div class="flex  py-2">
        <div :class="`w-12 h-12 bg-green-600 rounded-full ${$props.node?.isLit ? `bg-neutral-50` : ``} ${props.node?.classname}`"></div>
        <span
          :class="`absolute w-12 my-3 z-10 justify-center items-center text-center text-xl font-sans  `">{{
          props.node?.payload }}</span>
      </div>
          <Arrow :direction="$props.arrowDirection" />
    </div>

      <RecursiveNode v-if="$props.node?.nextNode" :node="$props.node.nextNode" :arrow-direction="props.arrowDirection">
      </RecursiveNode>
   
</template>


<script setup lang="ts">
import Node from "../../Contracts/Classes/Node"
import { PropType } from "vue"
import Arrow from "../Arrow.vue"
import { Direction } from "../../Contracts/Classes/Direction"
const props = defineProps({
  node: { type: Object as PropType<Node> },
  arrowDirection: { type: Object as PropType<Direction> }
})

</script>

<style></style>