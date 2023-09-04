<template>
    <div id="wrapper" class="w-full lg:max-w-full lg:flex text-white backdrop-blur-lg rounded-lg ">
  
  <div class=" content  rounded-b lg:rounded-b-none lg:rounded-r p-1 flex justify-between ">
    <div class="mb-8">
      <p class="text-base text-gray-600 flex items-center">
  
        </p>


      <div class="font-bold text-xl mb-2 text-green-400 text-center">{{ title }}</div>
      <p class=" text-base font-serif ">{{ description }}</p>

    </div>
    <div class="background blur-md flex items-center justify-center ">
    <slot name="background"></slot>
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

#wrapper{
    position: relative;
   
}

.content{
    color: #FFFFFF;
    font-size: 26px;
    font-weight: bold;
    text-shadow: -1px -1px 1px #000, 1px 1px 1px #000;
    position: relative;
    z-index: 100;
}

.background{
    color: #999999;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
}
</style>