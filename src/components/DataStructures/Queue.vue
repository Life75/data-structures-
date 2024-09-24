<template>
  <div class="flex gap-4 mx-4 pt-4 w-full h-full  flex-row flex-wrap">
    <RecursiveNode v-if="queue.counter != 0" :arrow-direction="Direction.right" :node="queue.head" />
    <div class="flex items-center w-full mr-5 " v-else>
      <p class="text-center mx-auto">No nodes pushed :(</p>
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
import anime from "animejs";
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
    push: pushAction, //running into a race condition for when to animate the ID value, it'll need to be when it gets mounted so most likely passing the value through the recursive nodes to watch which one should do its animating 
    pop: popAction,
    peek: queue.value.peek,
    seek: seek,
    counter: queue.value.counter
  }

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
