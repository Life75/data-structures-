<template>
  <el-icon>
    <ArrowLeft v-show="Direction.left === direction" />
    <ArrowRight v-show="Direction.right === direction" />
    <ArrowUp v-show="Direction.up === direction" />
    <ArrowDown v-show="Direction.down === direction" />
  </el-icon>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Direction } from "../Contracts/Classes/Direction";

const props = defineProps({
  direction: Number as PropType<Direction>,
});
</script>

<style></style>
