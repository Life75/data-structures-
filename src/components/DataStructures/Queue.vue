<template>
  <div class="flex md:gap-3 gap-3  pt-4 w-full h-1/2  flex-row flex-wrap">
    <RecursiveNode v-if="queue.head" :arrow-direction="Direction.right" :node="queue.head" />
    <div v-else class="flex flex-col items-center justify-center w-full space-y-4 p-8 bg-base-200/30 backdrop-blur-sm rounded-xl border border-neutral-700/50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <p class="text-lg font-medium text-neutral-400">Queue is Empty</p>
        <p class="text-sm text-neutral-500">Add nodes to visualize the queue structure</p>
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
//import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { Direction } from "../../Contracts/Classes/Direction"
import anime from "animejs";
const emits = defineEmits<{
  (e: "request", request: ILinkedListRequest): void
  (e: "main-styles", styles: string): void
}>()

const queue = ref(new Queue())
onMounted(() => {
  const metadata: IMetadata = {
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    description: "A Queue is a linear data structure that follows First In First Out (FIFO) principle. Like a line of people, the first element added to the queue will be the first one to be removed. Elements are added at the back (enqueue) and removed from the front (dequeue). Common real-world examples include print job scheduling, task management, and breadth-first search algorithms.",
    header: "Queue"
  }

  const request: ILinkedListRequest = {
    metadata: metadata,
    component: LinkedListHeaderUI,
    push: pushAction, 
    pop: popAction,
    peek: queue.value.peek,
    seek: seek,
  }
  emits('main-styles', 'h-[600px] px-2 overflow-y-auto')
  emits("request", request)
})

function pushAction(num?: number): string {
  let id = ""
  if (num != undefined) {
    id = queue.value.push(num)
  } else {
    id = queue.value.push(new RandomNumberGenerator().getRandomNumber())
  }

  //active an animation on the node when its pushed in this can be done here 
  return id

}

async function seek(num: number, animationSpeed?: number): Promise<void> {
  await queue.value.seek(num, animationSpeed)
}

function popAction(): number | undefined {
  return queue.value.pop()
}

</script>
