<template>
  <!--Take in a list shell for Queue, workout the template and then refactor it later on like before -->
  <div ref="queue">
   <!-- <div class="flex flex-row flex-wrap py-12 items-center justify-center">
      <li class="flex flex-row" v-for="node in queue.peekAll()">
        <span v-show="queue.peekAll().length == 0">No Values currently </span>
        <CircularNode class="pr-2" :value="node"/>
        <span class="flex pr-2">
          <Arrow class="mt-6" :direction="direction" />
        </span>
      </li>
    </div>-->

    
  </div>
</template>

<script setup lang="ts">

import { PropType, defineComponent, onMounted, ref, watch } from "vue";
import { Header } from "../../Contracts/Classes/Headers";
import LinkedListAttributes from "../../Contracts/Interfaces/LinkedListAttributes";
import CircularNode from "../CircularNode.vue";
import Arrow from "../Arrow.vue";
import { Direction } from "../../Contracts/Classes/Direction";
import RandomNumberGenerator from "../../Contracts/Classes/RandomNumberGenerator";
import IMetadata from "../../Contracts/Interfaces/IMetadata";
import ILinkedListRequest from "../../Contracts/Interfaces/ILinkedListRequest"
import ILinkedListController from "../../Contracts/Interfaces/ILinkedListController"
import LinkedListHeaderUI from "../LinkedListHeaderUI.vue";
import Queue from "../../data-structures-ts/Queue"

const emits = defineEmits<{
  (e: "request", request: ILinkedListRequest): void 
}>()



const queue = new Queue()

onMounted(() => {
  const controller = new ILinkedListController(pushAction) 
  

  const metadata: IMetadata = {
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)", 
    description: "This is description for the queue operation", 
    header: "Queue" 
  }

  const request: ILinkedListRequest = {
    controller: controller,
    metadata: metadata,
    component: LinkedListHeaderUI
  }

  emits("request", request)
})



function pushAction(num?: number): void {
  if(num != undefined) {
    queue.push(num)
  } else {
    queue.push(new RandomNumberGenerator().getRandomNumber())
  }
  console.log(queue)
}

function popAction(): number | void {
  return queue.pop()
}

function peekAction(): number | void {
  return queue.peek()
}

function seekAction(): number | void {

}

//console.log(queue.value.pop())
//console.log(queue.value.pop())
/*
export default defineComponent({
  name: "Queue",
  emits: ["ui-header-request"],
  props: {
    linkedListAttributes: { type: Object as PropType<LinkedListAttributes> },
    default: (): LinkedListAttributes => {
      const linkedList: LinkedListAttributes = { popIterator: 0, pushIterator: 0, latestAction: undefined };
      return linkedList;
    },
  },
  setup(props, { emit }) {
    let queue = ref(new Queue(Header.LinkedList));
    let direction = Direction.right;
    onMounted(() => {
      emit("ui-header-request", queue.value.getHeader());
    });
    watch(
      () => props.linkedListAttributes!,
      (old: LinkedListAttributes, updated: LinkedListAttributes) => {
        if (props.linkedListAttributes?.latestAction == "pop") {
          queue.value.pop()
        }
        if (props.linkedListAttributes?.latestAction == "push") {
          const generator = new RandomNumberGenerator()
          queue.value.push(generator.getRandomNumber());
        }
      },
      { deep: true }
    );
    return {
      queue,
      direction,
    };
  },
  components: { CircularNode, Arrow },
}); */
</script>
