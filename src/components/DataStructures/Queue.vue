<template>
  <!--Take in a list shell for Queue, workout the template and then refactor it later on like before -->
  <div ref="Queue">
    <div class="flex flex-row flex-wrap py-12 items-center justify-center">
      <li class="flex flex-row" v-for="node in queue.peekAll()">
        <span v-show="queue.peekAll().length == 0">No Values currently </span>
        <CircularNode :value="node"/>
        <span class="flex w-7">
          <Minus class=""></Minus>
          <Arrow class="mt-6" :direction="direction" />
        </span>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, onMounted, ref, watch } from "vue";
import { Header } from "../../Contracts/Classes/Headers";
import Queue from "../../data-structures-ts/Queue";
import LinkedListAttributes from "../../Contracts/Interfaces/LinkedListAttributes";
import CircularNode from "../CircularNode.vue";
import Arrow from "../Arrow.vue";
import { Direction } from "../../Contracts/Classes/Direction";
import RandomNumberGenerator from "../../Contracts/Classes/RandomNumberGenerator";

export default defineComponent({
  name: "Queue",
  emits: ["ui-header-request"],
  props: {
    linkedListAttributes: { type: Object as PropType<LinkedListAttributes> },
    default: (): LinkedListAttributes => {
      const linkedList: LinkedListAttributes = { popIterator: 0, pushIterator: 0 };
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
          queue.value.pop();
        }
        if (props.linkedListAttributes?.latestAction == "push") {
          const generator = new RandomNumberGenerator()
          queue.value.push(generator.getRandomNumber());
          console.log(queue.value.peekAll());
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
</script>
