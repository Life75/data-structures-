<template>
    <!--Weird bug, when making nested routes in vue you'll need to make the sure that the folder hiearchy needs to not be nested in order for hot reloading -->
    <div class="flex items-center justify-center ">
        <VerticalNode></VerticalNode>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Node from '../components/Node.vue';
import VerticalNode from '../components/VerticalNode.vue';

export default defineComponent({
    name: 'BubbleSort',
    components: { Node, VerticalNode },
    setup() {
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