<template>
  <!--Take in a list shell for Linked Lists, workout the template and then refactor it later on like before -->
  <div class="flex gap-4 mx-4 pt-4 w-full h-full  flex-row flex-wrap">
    <RecursiveNode v-if="stack.head"  :arrow-direction="Direction.right" :node="stack.head" />
    <div class="flex items-center w-full mr-5 " v-else>
      <p class="text-center mx-auto">No nodes pushed :(</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, watch } from "vue";
import Stack from "../../data-structures-ts/Stack";
import { Direction } from "../../Contracts/Classes/Direction";
import RandomNumberGenerator from "../../Contracts/Classes/RandomNumberGenerator";
import ILinkedListRequest from "../../Contracts/Interfaces/ILinkedListRequest"
import LinkedListHeaderUI from "../LinkedListHeaderUI.vue";
import IMetadata from "../../Contracts/Interfaces/IMetadata";
import RecursiveNode from "../Nodes/RecursiveNode.vue"
const emits = defineEmits<{
  (e: "request", request: ILinkedListRequest): void
}>()

const stack = ref(new Stack())
let arr = ref([])

onMounted(() => {
  const metadata: IMetadata = {
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    description: "This is description for the stack operation",
    header: "Stack"
  }

  const request: ILinkedListRequest = {
    metadata: metadata,
    component: LinkedListHeaderUI,
    push: pushAction,
    pop: popAction,
    peek: stack.value.peek,
    seek: seek,
    counter: stack.value.counter
  }
  emits("request", request)
})





function pushAction(num?: number): void {
 
  if (num != undefined) {
    stack.value.push(num)
  } else {
     stack.value.push(new RandomNumberGenerator().getRandomNumber())
  }
 
}

async function seek(num: number): Promise<void> {
  await stack.value.seek(num)
}

function popAction(): number | undefined {
  return stack.value.pop()
}

</script>