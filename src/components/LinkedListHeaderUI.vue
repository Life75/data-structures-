<template>
  <div ref="linked-list-header"
    class="flex flex-col gap-5 mt-5 justify-center align-middle md:items-stretch items-center  ">
    <span class="flex flex-col md:flex-row w-full gap-2 uppercase  ">
      <div class="flex flex-row  w-full gap-2 align-middle">

        <div class="flex gap-2 uppercase w-full">
          <div class="bentoStyling flex flex-row  ">
            <span class="flex flex-col grow cursor-pointer">
              <button class="flex flex-row grow justify-center items-center text-center bentoStyling"
                @click="onClickPop()">Pop</button>
              <button class="flex justify-center grow items-center text-center  bentoStyling "
                @click="onClickPush()">Push</button>
            </span>
            <span class="flex flex-col grow cursor-pointer ">
              <button class=" flex justify-center grow  items-center text-center  bentoStyling "
                @click="onClickPeek()">Peek</button>
              <button class="flex justify-center grow  items-center text-center bentoStyling "
                @click="onClickSeek()">Seek</button>
            </span>
          </div>
        </div>

        <div class="bentoStyling grow w-full  uppercase">
          <div class="flex flex-col mx-3 my-3 gap-2 ">
            <p class="text-base uppercase ">Controls</p>
            <div class="flex flex-col align-middle ">
              <p class="text-xs md:text-sm">Next value to push: {{ currentPushValue }}</p>
              <div class="flex flex-row gap-2 align-middle">
                <v-slider v-model="currentPushValue" :step="1"></v-slider>
              </div>
            </div>
            <div class="flex flex-col gap-2 align-middle">
              <p class="text-xs md:text-sm">Value to seek</p>
              <input type="number" v-model="currentSeekValue" class="w-full p-2 bg-base-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row w-full gap-2 uppercase">
        <div class="bentoStyling grow">
          <div class="mx-3 mt-3 gap-2 flex flex-col">
            <p class="text-base uppercase">Settings</p>
            <p class="text-sm">Animation Speed </p>
            <v-slider v-model="animationSpeed"></v-slider>
          </div>
        </div>

        <div class="bentoStyling">
          <div class="mx-3 mt-3 gap-1 flex flex-col">
            <div class="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path
                  d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
              <p class="text-base uppercase">Complexity</p>
            </div>
            <span class="flex flex-row align-middle items-center text-2xl md:text-4xl gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock"
                viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              <p class="uppercase text-xl md:text-2xl">{{ props.request?.metadata.timeComplexity }}</p>
            </span>

            <span class="flex flex-row align-middle items-center text-2xl md:text-4xl gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-memory"
                viewBox="0 0 16 16">
                <path
                  d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z" />
              </svg>
              <p class="uppercase text-xl md:text-2xl">{{ props.request?.metadata.spaceComplexity }}</p>
            </span>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, Ref } from "vue";
import ILinkedListRequest from "../Contracts/Interfaces/ILinkedListRequest"

const props = defineProps({
  request: { type: Object as PropType<ILinkedListRequest> }
});

let currentPushValue = ref()
let currentSeekValue = ref()
let showValueTooBigErr = ref(false)
let showValueIsNotNumErr = ref(false)
let animationSpeed: Ref<number> = ref(0)

function onClickPush() {
  resetDisplayErrors()
  if (numberFormValidation(currentPushValue.value)) {
    String(props.request?.push(currentPushValue.value))
  }
}

function onClickPop() {
  props.request?.pop()
}

function onClickPeek() {
  props.request?.peek()
}

async function onClickSeek() {
  resetDisplayErrors()
  if (numberFormValidation(currentSeekValue.value)) {
    //@ts-ignore
    await props.request?.seek(currentSeekValue.value, 200 - animationSpeed.value)
  }
}

function numberFormValidation(num: number): boolean {
  if (num < 999 && num != undefined) {
    return true
  } else {
    if (!Number(num)) showValueIsNotNumErr.value = true
    else showValueTooBigErr.value = true
    return false
  }
}

function resetDisplayErrors(): void {
  showValueTooBigErr.value = false
  showValueIsNotNumErr.value = false
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
  @apply bg-base-200 rounded-md bg-opacity-30 cursor-default shadow-sm z-10 transition ease-in-out delay-150 text-gray-400 hover:shadow-lg hover:text-gray-200 duration-300 w-full md:h-auto h-[200px]
}
</style>