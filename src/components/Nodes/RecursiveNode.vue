<template>
  <div>
    <div class="flex py-2">
      <div :class="`w-12 h-12 bg-green-600 rounded-full ${$props.node?.isLit ? `bg-neutral-50` : ``} `"></div>
    <span :class="` absolute w-12 my-3 z-10 justify-center items-center text-center text-xl font-sans ${$props.node?.isLit ? `text-neutral-500` : ``} `">{{ props.node?.payload }}</span>
    </div>
  </div>
<RecursiveNode v-if="$props.node?.nextNode" :node="$props.node.nextNode"/>
</template>


<script setup lang="ts">
import Node from "../../Contracts/Classes/Node"
import {PropType} from "vue"

const props = defineProps({
    node: {type: Object as PropType<Node>}
})

</script>

<style></style>