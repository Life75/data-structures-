<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex text-white bg-[#1e1e1e] drop-shadow-md shadow-lg backdrop-blur-lg rounded-lg ">
  
  <div class="  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
  
        </p>


      <div class="font-bold text-xl mb-2 text-green-500">{{ title }}</div>
      <p class=" text-base">{{ description }}</p>

    </div>
    <slot name="footer"></slot>
  </div>
</div>
</template>

<script setup lang="ts">
import AnimationDisplay from './AnimationDisplay.vue';
const props = defineProps({
    title: {type: String},
    description: {type: String},
    type: {type: String}
})
</script>


<style>
.blur {
width:100%;
height:100%;
background-size:cover;
-webkit-filter: blur(4px);
-moz-filter: blur(4px);
-ms-filter: blur(4px);
-o-filter: blur(4px);
filter: blur(4px);
}
</style>