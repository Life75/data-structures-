<template>
  <div ref="linked-list-header"
    class="flex flex-col md:flex-row gap-5 mt-5 mx-4  justify-center align-middle md:items-stretch items-center">
    <div class="flex flex-col items-stretch w-full gap-2 uppercase">
      <span class="flex w-full h-full ">
        <div class=" flex justify-center  items-center grow text-center  bentoStyling " @click="onClickPop()">Pop</div>
        <div class="flex justify-center items-center grow text-center mx-2  bentoStyling" @click="onClickPush()">Push</div>
      </span>
      <span class="flex w-full h-full">
        <div class=" flex justify-center  items-center grow text-center  bentoStyling" @click="onClickPeek()">Peek</div>
        <div class="flex justify-center  items-center grow text-center mx-2 bentoStyling" @click="onClickSeek()">Seek</div>
      </span>
    </div>

    <div class="bentoStyling">
      <div class="mx-5 mt-5 gap-2 flex flex-col mb-5 ">
        <p class="text-lg uppercase">Controls</p>
        <div class="flex flex-col gap-2 align-middle ">
          <p class="w-full">Next value to push</p>
          <input type="text" placeholder="" v-model="currentPushValue" class="input  w-full max-w-xs" />

        </div>
        <div class="flex flex-col gap-2 align-middle">
          <p class="w-full">Value to seek</p>
          <input type="text" placeholder="" v-model="currentSeekValue" class="input  w-full max-w-xs" />

        </div>
      </div>
    </div>

    <div class="bentoStyling">
      <div class="mx-5 mt-5 gap-2 flex flex-col">
        <p class="text-lg uppercase">Settings</p>
        <p>Animation Speed </p>
        <v-range-slider></v-range-slider>

        
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
          <p class="uppercase">{{ props.request?.metadata.timeComplexity }}</p>
        </span>


        <span class="flex flex-row align-middle items-center text-4xl gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-memory"
            viewBox="0 0 16 16">
            <path
              d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z" />
          </svg>
          <p class="uppercase">{{ props.request?.metadata.spaceComplexity }}</p>
        </span>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { ref, PropType } from "vue";
import ILinkedListRequest from "../Contracts/Interfaces/ILinkedListRequest"

const props = defineProps({
  request: { type: Object as PropType<ILinkedListRequest> }
});

let currentPushValue = ref()
let currentSeekValue = ref()


function onClickPush() {
  if(currentPushValue.value != undefined || Number(currentPushValue.value) ) {
    console.log(props.request?.controller.push())
  }
}

function onClickPop() {

}

function onClickSeek() {

}

function onClickPeek() {

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
  @apply bg-base-200 rounded-md cursor-default shadow-sm z-10 transition ease-in-out delay-150 text-gray-400 hover:shadow-lg hover:text-gray-200 duration-300 w-full md:h-auto h-[200px]
}
</style>