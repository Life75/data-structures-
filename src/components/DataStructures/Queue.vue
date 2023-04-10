<template>
    <!--Take in a list shell for Queue, workout the template and then refactor it later on like before -->
    <div ref="Queue">
    <span class="w-2/5"></span>
        <div class="flex flex-wrap py-12 items-center justify-center">
            <li class="flex " v-for="node in queue.peekAll()">
                
                <CircularNode/>
            </li>
        </div>
    </div>
</template>

<script lang='ts'>import { PropType, defineComponent, onMounted, ref, watch } from 'vue';
import { Header } from '../../Contracts/Classes/Headers';
import Queue from '../../data-structures-ts/Queue';
import LinkedListAttributes from '../../Contracts/Interfaces/LinkedListAttributes'
import CircularNode from '../CircularNode.vue';


export default defineComponent({
    name: "Queue",
    emits: ["ui-header-request"],
    props: { linkedListAttributes: { type: Object as PropType<LinkedListAttributes> }, default: (): LinkedListAttributes => {
            const linkedList: LinkedListAttributes = { popIterator: 0, pushIterator: 0 };
            return linkedList;
        } },
    setup(props, { emit }) {
        let queue = ref(new Queue(Header.LinkedList));
        onMounted(() => {
            emit("ui-header-request", queue.value.getHeader());
        });
        watch(() => props.linkedListAttributes!, (old: LinkedListAttributes, updated: LinkedListAttributes) => {
            if(props.linkedListAttributes?.latestAction == 'pop') {
                queue.value.pop()
            }
            if(props.linkedListAttributes?.latestAction == 'push') {
                queue.value.push(2)
                console.log(queue.value.peekAll())
            }
        }, { deep: true });
        return {
            queue
        };
    },
    components: { CircularNode }
})
</script>