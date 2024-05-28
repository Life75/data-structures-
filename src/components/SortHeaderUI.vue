<template>
  <div class=" bg-base-200 rounded-md p-10 shadow-md z-10">
    <span class="text-2xl font-semibold ">{{ props.header }}</span>
    <div class="flex flex-col pt-7">
      <div class="text-lg">
        Amount of values to be sorted:
        {{ Math.trunc(Number(amountOfValues[1])) ? Math.trunc(Number(amountOfValues[1])) : "0" }}
        <v-range-slider v-model="amountOfValues" @end="emitSliderValue()"></v-range-slider>
      </div>
      <div class="text-lg">
        Animation Speed
        <v-range-slider v-model="animationSpeed" @end="emitAnimationSpeed()"></v-range-slider>
      </div>
      <div>Time taken: <span :class="timerStyling(props.timer?.getTime().valueOf())">
          {{ $props.timer?.getTime() != undefined ? `${props.timer?.getTime()} ms` : undefined }}
        </span> </div>
    </div>
    <div class="mx-5 mt-7 flex justify-center items-center">
      <button v-show="!props.controller?.isAnimating" class="btn md:btn-wide  bg-base-100"
        @click="props.controller?.startSorting()">Start</button>
      <button v-show="props.controller?.isAnimating" class="btn md:btn-wide bg-base-300"
        @click="props.controller?.cancelAnimation()">Cancel</button>
    </div>
    <slot>
      <template> </template>
    </slot>
  </div>
</template>

<script lang="ts" setup>
//replace with vuetify navigation drawers  https://vuetifyjs.com/en/components/navigation-drawers/#caveats
import { ref, PropType } from "vue";
import Timer from "../Contracts/Classes/Timer";
import ISortController from '../Contracts/Interfaces/ISortController';

const emit = defineEmits<{
  (e: "emitSliderValue", amountOfValues: number): void;
  (e: "emitAnimationSpeed", speedSliderValue: number): void;
  (e: "emitStart"): void,
  (e: "emitCancel"): void
}>();

const props = defineProps({
  timer: { type: Timer },
  header: { type: String },
  isAnimating: { type: Boolean, default: false },
  controller: { type: Object as PropType<ISortController> },
});

const amountOfValues = ref([]);
const animationSpeed = ref([]);


function emitStart() {
  emit("emitStart")
}

function timerStyling(timer: number | undefined) {
  if (timer) {
    if (timer >= 10) {
      return "text-rose-600"
    }

    if (timer >= 5) {
      return "text-yellow-400"
    }
    else {
      return "text-green-400"
    }
  }
}

function emitSliderValue() {
  console.log("emitting")
  emit("emitSliderValue", amountOfValues.value[1]);
}

function emitAnimationSpeed() {
  emit("emitAnimationSpeed", 200 - animationSpeed.value[1]);
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
