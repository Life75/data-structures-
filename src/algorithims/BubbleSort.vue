<template>
    <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
    <div class="flex items-center justify-center ">
    <li class="flex" v-for="node in bubbleSort.getCurrentValues()">
        <VerticalNode :value="node" ></VerticalNode>   
    </li>
    <el-button @click="startSortingClick()">Start Sorting</el-button>
    
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
        var bub2 = new BubbleSort(props.amountOfValues)
        

        //watching a prop 
        watch(() => props.amountOfValues, (selected, prevSelc) => {
            bubbleSort.value.initArray(selected);
            
        })

        watch(bubbleSort.value.getIterations(), (newValue) => {
            //console.log('currentIteration') //make composable sorting shell for reuse 
            currentIteration.value = newValue
        })

        function sortAnimation() {
          //  console.log(bubbleSort.value.getIterations())
            bub2.initArray(23);
            bub2.startSort();
            console.log(bub2.getIterations())
        }

        

        return {
            bubbleSort,
            currentIteration,
            sortAnimation
        }
        //bubbleSort.value.startSort()
        //make random array 
        //sort random array 
        //update the values reactively 
    },
    methods: {
        startSortingClick() {
            this.bubbleSort.startSort();
            this.sortAnimation();
            console.log(this.currentIteration)
        }
    }
})
</script>

<style>
    
</style>