<template>
    <!--Take in a list shell for Queue, workout the template and then refactor it later on like before -->
    <div ref="Queue">

    </div>
</template>

<script lang='ts'>import { PropType, defineComponent, onMounted, watch } from 'vue';
import { Header } from '../../Contracts/Classes/Headers';
import Queue from '../../data-structures-ts/Queue';
import LinkedListAttributes from '../../Contracts/Interfaces/LinkedListAttributes'


export default defineComponent({
    name: 'Queue',
    emits: ['ui-header-request'],
    props: { linkedListAttributes: {type: Object as PropType<LinkedListAttributes>}, default: (): LinkedListAttributes => {
        const linkedList: LinkedListAttributes = {popIterator: 0, pushIterator: 0}
        return linkedList
    }},
    setup(props, {emit}) {
        let queue = new Queue(Header.LinkedList)

        onMounted(() => {
            emit('ui-header-request', queue.getHeader())
        })

        watch(() => props.linkedListAttributes! , (old: LinkedListAttributes, updated: LinkedListAttributes) => {
            //test this
        })

        return {
            
        }
    }
})
</script>