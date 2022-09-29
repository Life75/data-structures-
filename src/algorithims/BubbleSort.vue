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
        const selected = ref(props.amountOfValues)
        var bubbleSort = ref(new BubbleSort(props.amountOfValues));
        var arrayLength = bubbleSort.value.getCurrentValues().length
        //bubbleSort.value.startSort()
        console.log(props.amountOfValues)
        watch(selected, (newX) => {
            console.log(newX)
            console.log("new data")
        } )

        return {
            bubbleSort,
            arrayLength,
        }
        //bubbleSort.value.startSort()
        //make random array 
        //sort random array 
        //update the values reactively 
    },
    methods: {
        
    }
})
</script>

<style>
    
</style>