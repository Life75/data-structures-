<template>
    <li class="flex" v-for="(node,index) in iteration?.getIteration()">
    <div class="border-x-2">
        <VerticalNode :value="node" :highlight="highlighter(index)"></VerticalNode>
    </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Iteration from '../Contracts/Classes/Iteration';
import VerticalNode from './VerticalNode.vue';

export default defineComponent({
    name: "Vertical Node Adapter",
    components: { VerticalNode },
    props: {
        iteration: { type: Iteration, default: undefined }
    },
    setup(props) {
 
    },
    methods: {
        highlighter(index: number) {
            return this.iteration?.getLastIndexesMoved() == index
        }
    }
    
})

</script>

<style>

</style>