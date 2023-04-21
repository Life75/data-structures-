<template>
  <div class="flex py-2">
    <div class="w-12 h-12 bg-emerald-500 rounded-full "></div>
   
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Direction } from "../Contracts/Classes/Direction";
import Arrow from "./Arrow.vue";
import { ElIcon } from "element-plus";

const props = defineProps({
  direction: Object as PropType<Direction>,
});
//directional arrows will be needed
</script>
