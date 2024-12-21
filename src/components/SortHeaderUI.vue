<template>
  <div class="flex flex-col md:flex-row gap-3 mt-3 mx-3 justify-center align-middle md:items-stretch items-center">
    
    <div class="flex flex-row gap-3 justify-center align-middle items-stretch w-full">
      <div @click="amountOfValues > 0 ? sortRequestController?.controller?.startSorting() : undefined" 
     v-if="!sortRequestController?.controller?.isAnimating"
     class="bentoStyling flex justify-center items-center align-middle hover:text-green-400 w-full gap-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
  </svg>
  <p class="uppercase text-2xl md:text-4xl">Start</p>
</div>

<div @click="sortRequestController.controller.cancelAnimation()" 
     v-else="sortRequestController?.controller?.isAnimating"
     class="bentoStyling flex justify-center items-center align-middle hover:text-red-400 gap-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
  <p class="uppercase text-2xl md:text-4xl">Cancel</p>
</div>
      <div class="bentoStyling">
        <div class="flex flex-col md:mx-4 mx-2 mt-3">
          <div class="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
            </svg>
            <p class="text-base uppercase">Settings</p>
          </div>
          <div class="text-sm flex flex-col gap-1">
            <span class="flex gap-2">
              <p>Amount of nodes:</p>
              {{ Math.trunc(Number(amountOfValues)) ? Math.trunc(Number(amountOfValues)) : "0" }}
            </span>
            
            <v-slider v-model="amountOfValues" @end="emitSliderValue()" :max="props.isMobile ? 15 : 100"></v-slider>
          </div>
          <div class="text-sm">
            Animation Speed
            <v-slider v-model="animationSpeed" @end="emitAnimationSpeed()"></v-slider>
          </div>
        </div>
        <slot>
          <template> </template>
        </slot>
      </div>
    </div>

    <div class="flex flex-row gap-3 justify-center align-middle items-stretch w-full">
      <div class="bentoStyling">
        <div class="mx-3 mt-3">
          <div class="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            <p class="text-base uppercase">Time</p>
          </div>
          <span class="text-2xl md:text-4xl" :class="timerStyling(props.timer?.getTime().valueOf())">
            {{ props.timer?.getTime() != undefined ? `${props.timer?.getTime()} ms` : undefined }}
          </span>
        </div>
      </div>

      <div class="bentoStyling">
        <div class="mx-3 mt-3 gap-1 flex flex-col">
          <div class="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
            </svg>
            <p class="text-base uppercase">Complexity</p>
          </div>
          <span class="flex flex-row align-middle items-center text-2xl md:text-4xl gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock"
              viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <p class="uppercase">{{ props.sortRequestController?.metadata.timeComplexity }}</p>
          </span>

          <span class="flex flex-row align-middle items-center text-2xl md:text-4xl gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-memory"
              viewBox="0 0 16 16">
              <path
                d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z" />
            </svg>
            <p class="uppercase">{{ props.sortRequestController?.metadata.spaceComplexity  }}</p>
          </span>
        </div>
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
  sortRequestController: { type: Object as PropType<ISortRequest>}, 
  isMobile: {type: Boolean, default: false}
});

const amountOfValues = ref(0);
const animationSpeed = ref(0);




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
  console.log(amountOfValues.value);
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

.bentoStyling {
  @apply bg-base-200 rounded-md  cursor-default shadow-sm z-10 transition ease-in-out delay-150 text-gray-400 hover:shadow-lg hover:text-gray-200 duration-300 w-full md:h-auto h-[200px]
}
</style>
