<template>
  <div class="flex py-2">
    <div class="w-12 h-12 bg-green-600 rounded-full "></div>
   <span class=" absolute w-12 my-3 z-10 justify-center items-center text-center text-xl">{{ props.value }}</span>
  </div>
  
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Direction } from "../Contracts/Classes/Direction";
import Arrow from "./Arrow.vue";
import { ElIcon } from "element-plus";

const props = defineProps({
  direction: Number as PropType<Direction>,
  value: Number,
  highlight: {type: Boolean, default: false}
});
//directional arrows will be needed 
//animation will need to be added 
</script>
