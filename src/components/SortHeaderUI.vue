<template>
  <div class=" bg-base-200 rounded-md p-10 shadow-md z-10">
    <span class="text-2xl ">{{ props.header }}</span>
    <div class="text-lg">
      Amount to be sorted
      <el-slider  v-model="amountOfValues" @change="emitSliderValue()"></el-slider>
      <input type="range" min="0" max="100" value="40" class="range range-secondary" />    
    </div>
    <div class="text-lg">
      Animation Speed
      <el-slider v-model="animationSpeed" @change="emitAnimationSpeed()"></el-slider>
    </div>
    <div>Time taken: <span :class="timerStyling(props.timer?.getTime())">
     {{ $props.timer?.getTime() != undefined ?  `${props.timer?.getTime()} ms` : undefined  }} 
    </span> </div>

    <slot>
      <template> </template>
    </slot>
  </div>
</template>

<script lang="ts" setup>
//replace with vuetify navigation drawers  https://vuetifyjs.com/en/components/navigation-drawers/#caveats
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

<style>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}
</style>
