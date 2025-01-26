<template>
  <div class="flex md:gap-3 gap-3  pt-4 w-full h-1/2  flex-row flex-wrap">
    <RecursiveNode v-if="stack.head" :arrow-direction="Direction.right" :node="stack.head" />
    <div v-else class="flex flex-col items-center justify-center w-full space-y-4 p-8 border">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <p class="text-lg font-medium text-neutral-400">Stack is Empty</p>
        <p class="text-sm text-neutral-500">Add nodes to visualize the stack structure</p>
      </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import RandomNumberGenerator from "../../Contracts/Classes/RandomNumberGenerator";
import IMetadata from "../../Contracts/Interfaces/IMetadata";
import ILinkedListRequest from "../../Contracts/Interfaces/ILinkedListRequest"
import LinkedListHeaderUI from "../LinkedListHeaderUI.vue";
import RecursiveNode from "../Nodes/RecursiveNode.vue"
import { Direction } from "../../Contracts/Classes/Direction"
import Stack from "../../data-structures-ts/Stack";
const emits = defineEmits<{
  (e: "request", request: ILinkedListRequest): void
  (e: "main-styles", styles: string): void
}>()

const stack = ref(new Stack())
onMounted(() => {
  const metadata: IMetadata = {
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    description: "A stack is a linear data structure that follows Last In First Out (LIFO) principle. Like a stack of plates, the last element added to the stack will be the first one to be removed. Elements are added to the top (push) and removed from the top (pop). Common real-world examples include undo/redo operations, browser history, function call stack in programming languages, and depth-first search algorithms.",
    header: "Stack"
  }
  const request: ILinkedListRequest = {
    metadata: metadata,
    component: LinkedListHeaderUI,
    push: pushAction, 
    pop: popAction,
    peek: stack.value.peek,
    seek: seek,
  }
  emits('main-styles', 'h-[600px] px-2 overflow-y-auto')
  emits("request", request)
})

function pushAction(num?: number): string {
  let id = ""
  if (num != undefined) {
    id = stack.value.push(num)
  } else {
    id = stack.value.push(new RandomNumberGenerator().getRandomNumber())
  }

  //active an animation on the node when its pushed in this can be done here 
  return id

}

async function seek(num: number, animationSpeed?: number): Promise<void> {
  await stack.value.seek(num, animationSpeed)
}

function popAction(): number | undefined {
  return stack.value.pop()
}

</script>
