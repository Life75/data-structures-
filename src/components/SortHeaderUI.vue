<template>
  <div>
    <div>Amount to be sorted</div>
    <el-slider v-model="amountOfValues" @change="emitSliderValue()"></el-slider>
    <div>Speed</div>
    <el-slider v-model="animationSpeed" @change="emitAnimationSpeed()"></el-slider>
    <div>
    Time taken: 
    </div>
    {{props.timer?.getTime()}} ms
    
    <slot>
      <template> </template>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import Timer from "../Contracts/Classes/Timer";
const emit = defineEmits<{
  (e: "emitSliderValue", amountOfValues: number): void;
  (e: "emitAnimationSpeed", speedSliderValue: number): void;
}>();

const props = defineProps({
  timer: {type: Timer}
})

const amountOfValues = ref(0);
const animationSpeed = ref(0);

function emitSliderValue() {
  emit("emitSliderValue", amountOfValues.value);
}

function emitAnimationSpeed() {
  emit("emitAnimationSpeed", animationSpeed.value);
}

</script>
