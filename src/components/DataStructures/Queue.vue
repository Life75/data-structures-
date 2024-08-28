<template>
  <div class="flex gap-4 mx-4 pt-4 w-full h-full  flex-row flex-wrap">
    <RecursiveNode v-if="queue.counter != 0" :arrow-direction="Direction.right" :node="queue.head"/>
    <div class="flex items-center w-full mr-5 " v-else>
      <p class="text-center mx-auto" >No nodes pushed :(</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import RandomNumberGenerator from "../../Contracts/Classes/RandomNumberGenerator";
import IMetadata from "../../Contracts/Interfaces/IMetadata";
import ILinkedListRequest from "../../Contracts/Interfaces/ILinkedListRequest"
import LinkedListHeaderUI from "../LinkedListHeaderUI.vue";
import Queue from "../../data-structures-ts/Queue"
import RecursiveNode from "../Nodes/RecursiveNode.vue"
import { Direction } from "../../Contracts/Classes/Direction"
const emits = defineEmits<{
  (e: "request", request: ILinkedListRequest): void
}>()

const queue = ref(new Queue())
let arr = ref([])
onMounted(() => {
  const metadata: IMetadata = {
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    description: "This is description for the queue operation",
    header: "Queue"
  }

  const request: ILinkedListRequest = {
    metadata: metadata,
    component: LinkedListHeaderUI,
    push: pushAction,
    pop: popAction,
    peek: queue.value.peek,
    seek: seek,
    counter: queue.value.counter
  }

  emits("request", request)
})

function pushAction(num?: number): void {
  if (num != undefined) {
    queue.value.push(num)
  } else {
    queue.value.push(new RandomNumberGenerator().getRandomNumber())
  }
}

async function seek(num: number, animationSpeed?: number): Promise<void> {
    await queue.value.seek(num, animationSpeed)
}

function popAction(): number | undefined  {
  return queue.value.pop()
}

</script>
