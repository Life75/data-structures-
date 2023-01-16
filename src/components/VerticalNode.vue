<template>
    <div :class="verticalNodeStyles()" :style="{'height': nodeHeight() + 'px'}">
    
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "VerticalNode",
    props: { value: Number, highlight: {type: Boolean, default: false} }, //Make this an object 
    methods: {
        verticalNodeStyles(): string {
            if(this.highlight)
            return "border-l-8 border-blue-500";

            return "border-l-8 border-green-500";
        },
        nodeHeight(): string {
            
            var height =0;
            if(this.value)
            height = this.value;
            return height.toString();
        }
        
    }
})
</script>