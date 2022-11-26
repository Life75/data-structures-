<template>
    <div class="border-l-8 border-green-500" :style="{'height': nodeHeight() + 'px'}">
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "VerticalNode",
    props: { value: Number },
    methods: {
        verticalNodeStyles(): string {
            return "border-l-5 border-green-500";
        },
        nodeHeight(): string {
            var height =0;
            if(this.value)
            height = this.value;
            //console.log(this.value)
            return height.toString();
        }
        
    }
})
</script>