<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex text-white">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('src/assets/vecteezy_black-abstract-background-with-bubbles_2408410.jpg')" title="Woman holding a mug">
  </div>
  <div class="  bg-[#2d2d2f] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
  
        </p>
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class=" text-base">{{ description }}</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {type: String},
    description: {type: String},
    type: {type: String}
})
</script>