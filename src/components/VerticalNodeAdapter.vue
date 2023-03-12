<template>
    <li class="flex" v-for="(node,index) in iteration?.getIteration()">
    <div class="">
        <VerticalNode :value="node" :highlight="highlighter(index)" :direction="getDirection(index)" >
        </VerticalNode>
    </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Direction } from '../Contracts/Classes/Direction';
import Iteration from '../Contracts/Classes/Iteration';
import MovedIndex from '../Contracts/Classes/MovedIndex';
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
            let highlight = false

            this.iteration?.getLastIndexesMoved().forEach((_: MovedIndex) => {
                if(_.getMovedIndex() == index) {
                    highlight = true;     
                } 
            })
            return highlight 
        },

        getDirection(index: number): Direction {
            let direction = Direction.left;

            this.iteration?.getLastIndexesMoved().forEach((_: MovedIndex) => {
                if(_.getMovedIndex() == index) {
                    direction = _.getDirection()     
                } 
            })

            return direction;
        }
    }
    
})

</script>

<style>

</style>