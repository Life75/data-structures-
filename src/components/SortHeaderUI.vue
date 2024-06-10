<template>
  <div class=" flex flex-row gap-5 mt-5 mx-5">
    <div @click="sortRequestController?.controller?.startSorting()" v-if="!sortRequestController?.controller?.isAnimating"
      class="bentoStyling flex justify-center items-center align-middle hover:text-green-400">

      <p class="uppercase text-4xl">Start</p>
    </div>
    <div @click="sortRequestController.controller.cancelAnimation()" v-else="sortRequestController?.controller?.isAnimating"
      class="bentoStyling flex justify-center items-center align-middle hover:text-red-400">
      <p class="uppercase text-4xl">Cancel</p>
    </div>
    <div class=" bentoStyling">
      <!--<span class="text-2xl font-semibold ">{{ props.header }}</span>-->
      <div class="flex flex-col mx-5 mt-5 ">
        <p class="    text-lg uppercase   ">Settings </p>
        <div class="text-md flex flex-col gap-2">
          <span class="flex gap-2">
            <p>Amount of nodes: </p>
            {{ Math.trunc(Number(amountOfValues[1])) ? Math.trunc(Number(amountOfValues[1])) : "0" }}
          </span>
          <v-range-slider v-model="amountOfValues" @end="emitSliderValue()"></v-range-slider>
        </div>
        <div class="text-md">
          Animation Speed
          <v-range-slider v-model="animationSpeed" @end="emitAnimationSpeed()"></v-range-slider>
        </div>

      </div>
      <div v-if="false" class="mx-5 mt-7 flex justify-center items-center">
        <button v-show="!props.sortRequestController?.controller?.isAnimating" class="btn md:btn-wide  bg-base-100"
          @click="props.sortRequestController?.controller?.startSorting()">Start</button>
        <button v-show="props.sortRequestController?.controller?.isAnimating" class="btn md:btn-wide bg-base-300"
          @click="props.sortRequestController?.controller?.cancelAnimation()">Cancel</button>
      </div>
      <slot>
        <template> </template>
      </slot>
    </div>
    <div class="bentoStyling">
      <div class="mx-5 mt-5">
        <p class="text-lg uppercase">Time</p><span
          :class="` text-4xl ${timerStyling(props.timer?.getTime().valueOf())}`">
          {{ props.timer?.getTime() != undefined ? `${props.timer?.getTime()} ms` : undefined }}
        </span>
      </div>
    </div>


    <div class="bentoStyling">
      <div class="mx-5 mt-5 gap-2 flex flex-col">
        <p class="text-lg uppercase">Complexity</p>

        <span class="flex flex-row align-middle items-center text-4xl gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-clock"
            viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
          </svg>
          <p class="uppercase">{{ props.sortRequestController?.metadata.timeComplexity }}</p>
        </span>


        <span class="flex flex-row align-middle items-center text-4xl gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-memory"
            viewBox="0 0 16 16">
            <path
              d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z" />
          </svg>
          <p class="uppercase">{{ props.sortRequestController?.metadata.spaceComplexity  }}</p>
        </span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
//replace with vuetify navigation drawers  https://vuetifyjs.com/en/components/navigation-drawers/#caveats
import { ref, PropType } from "vue";
import Timer from "../Contracts/Classes/Timer";
import ISortController from '../Contracts/Interfaces/ISortController';
import ISortRequest from "../Contracts/Interfaces/ISortRequest";

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
  sortRequestController: { type: Object as PropType<ISortRequest>}
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

.bentoStyling {
  @apply bg-base-200 rounded-md w-1/4 cursor-default shadow-sm z-10 transition ease-in-out delay-150 text-gray-400 hover:shadow-lg hover:text-gray-200 duration-300 
}
</style>
