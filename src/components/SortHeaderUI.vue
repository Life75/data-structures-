<template>
  <div class=" shadow-sm space-y-3 text-white z-10">
    <span class="">{{ props.header }}</span>
    <div>
      Amount to be sorted
      <el-slider  v-model="amountOfValues" @change="emitSliderValue()"></el-slider>
    </div>
    <div>
      Animation Speed
      <el-slider v-model="animationSpeed" @change="emitAnimationSpeed()"></el-slider>
    </div>
    <div>Time taken: <span :class="timerStyling(props.timer?.getTime())">{{ props.timer?.getTime() }}</span> ms</div>

    <slot>
      <template> </template>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Timer from "../Contracts/Classes/Timer";
const emit = defineEmits<{
  (e: "emitSliderValue", amountOfValues: number): void;
  (e: "emitAnimationSpeed", speedSliderValue: number): void;
}>();

const props = defineProps({
  timer: { type: Timer },
  header: { type: String },
});

const amountOfValues = ref(0);
const animationSpeed = ref(0);


function timerStyling(timer: number | undefined) {
  if(timer) {
    if(timer >= 10) {
      return "text-rose-600"
    }
    
    if(timer >= 5) {
      return "text-yellow-400"
    }
    else {
      return "text-green-400"
    }
  }
}

function emitSliderValue() {
  emit("emitSliderValue", amountOfValues.value);
}

function emitAnimationSpeed() {
  emit("emitAnimationSpeed", 200 - animationSpeed.value);
}
</script>
