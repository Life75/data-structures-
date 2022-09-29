<template>
  <div>
    <div>Amount to be sorted</div>
    <el-slider v-model="slider" @change="emitSliderValue()"></el-slider>
    <div>Speed</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const emit = defineEmits<{
  (e: 'emitSliderValue', slider: number): void
  (e: 'update', value: string): void
}>()

const slider = ref(0)


function emitSliderValue() {
  emit('emitSliderValue', slider.value)
  console.log('emiting')
}
</script>