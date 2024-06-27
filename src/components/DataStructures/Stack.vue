<template>
    <!--Take in a list shell for Linked Lists, workout the template and then refactor it later on like before -->
    <div ref="Stack">
   <!-- <div class="flex flex-row flex-wrap py-12 items-center justify-center">
      <li class="flex flex-row" v-for="node in queue.peekAll()">
        <span v-show="queue.peekAll().length == 0">No Values currently </span>
        <CircularNode class="pr-2" :value="node"/>
        <span class="flex pr-2">
          <Arrow class="mt-6" :direction="direction" />
        </span>
      </li>
    </div> -->
    {{ stack }}
  </div>
</template>

<script setup lang='ts'>
import { PropType, defineComponent, onMounted, ref, watch } from "vue";
import { Header } from "../../Contracts/Classes/Headers";
import Stack from "../../data-structures-ts/Stack";
import LinkedListAttributes from "../../Contracts/Interfaces/LinkedListAttributes";
import CircularNode from "../CircularNode.vue";
import Arrow from "../Arrow.vue";
import { Direction } from "../../Contracts/Classes/Direction";
import RandomNumberGenerator from "../../Contracts/Classes/RandomNumberGenerator";


let stack = ref(new Stack(Header.LinkedList))
stack.value.push(1)
stack.value.push(2)
/*
export default defineComponent({
  name: "Stack",
  emits: ["ui-header-request"],
  props: {
    linkedListAttributes: { type: Object as PropType<LinkedListAttributes> },
    default: (): LinkedListAttributes => {
      const linkedList: LinkedListAttributes = { popIterator: 0, pushIterator: 0 };
      return linkedList;
    },
  },
  setup(props, { emit }) {
    let queue = ref(new Stack(Header.LinkedList));
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
});
*/

</script>