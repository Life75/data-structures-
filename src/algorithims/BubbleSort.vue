<template>
    <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
    <div class="flex items-center justify-center ">
    <li class="flex" v-for="node in bubbleSort.getCurrentValues()">
        <VerticalNode :value="node" ></VerticalNode>   
    </li>
    <el-button @click="bubbleSort.startSort()">Start Sorting</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import Node from '../components/Node.vue';
import VerticalNode from '../components/VerticalNode.vue';
import BubbleSort from '../algorithims-ts/BubbleSort';
import { ref } from 'vue';

export default defineComponent({
    name: 'BubbleSort',
    components: { Node, VerticalNode },
    props: { amountOfValues: {type: Number, default: 23}},
    setup(props) {
        var bubbleSort = ref(new BubbleSort(props.amountOfValues));
        var currentIteration = ref();

        //watching a prop 
        watch(() => props.amountOfValues, (selected, prevSelc) => {
            bubbleSort.value.initArray(selected);
            
        })

        watch(bubbleSort.value.getIterations(), (newValue) => {
            console.log('currentIteration')
            currentIteration.value = newValue
        })
        return {
            bubbleSort,
            currentIteration
        }
        //bubbleSort.value.startSort()
        //make random array 
        //sort random array 
        //update the values reactively 
    }
})
</script>

<style>
    
</style>