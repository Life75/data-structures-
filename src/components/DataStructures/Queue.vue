<template>
    <!--Take in a list shell for Queue, workout the template and then refactor it later on like before -->
    <div ref="Queue">

    </div>
</template>

<script lang='ts'>import { defineComponent, onMounted } from 'vue';
import { Header } from '../../Contracts/Classes/Headers';
import Queue from '../../data-structures-ts/Queue';


export default defineComponent({
    name: 'Queue',
    emits: ['ui-header-request'],
    setup(props, {emit}) {
        let queue = new Queue(Header.LinkedList)

        onMounted(() => {
            emit('ui-header-request', queue.getHeader())
        })

        return {
            
        }
    }
})
</script>