<template>
  <div ref="linked-list-header">
    <div
      class=" flex flex-col md:flex-row gap-5 mt-5 mx-5 justify-center align-middle md:items-stretch items-center \ ">
      <div @click=""
        :class="`uppercase text-4xl bentoStyling flex flex-col justify-center items-center align-middle hover:text-green-400 w-full`">
        <div class="w-full">

          <div class="flex flex-1 flex-grow w-full  ">
            <div class=" text-center w-full  ">
                <p>Push</p>
            </div>
              
            <div class="w-full text-center">
                <p>Pop</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-1 flex-grow w-full   ">
            <div class=" text-center w-full  ">
                <p>Peek</p>
            </div>
              
            <div class="w-full text-center ">
                <p>Seek</p>
            </div>
          </div>
        </div>
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