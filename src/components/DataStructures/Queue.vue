<template>
  <!--Take in a list shell for Queue, workout the template and then refactor it later on like before -->
  <div class="flex gap-4 mx-4 pt-4 w-full h-full  flex-row flex-wrap">
    <RecursiveNode v-if="queue.peekAll().length != 0" :arrow-direction="Direction.right" :node="queue.head"/>
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
import Arrow from "../Arrow.vue"
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
    peekAll: queue.value.peekAll
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

async function seek(num: number): Promise<void> {
    await queue.value.seek(num)
}

function popAction(): number | undefined  {
  return queue.value.pop()
}

</script>
