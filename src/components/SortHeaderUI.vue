<template>
  <div>
    <div>Amount to be sorted</div>
    <el-slider v-model="amountOfValues" @change="emitSliderValue()"></el-slider>
    <div>Speed</div>
    <el-slider v-model="animationSpeed" @change="emitAnimationSpeed()"></el-slider>
 
    <slot>
      <template> </template>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits<{
  (e: "emitSliderValue", amountOfValues: number): void;
  (e: "emitAnimationSpeed", speedSliderValue: number): void;
}>();

const amountOfValues = ref(0);
const animationSpeed = ref(0);

function emitSliderValue() {
  emit("emitSliderValue", amountOfValues.value);
}

function emitAnimationSpeed() {
  emit("emitAnimationSpeed", animationSpeed.value);
}

</script>
