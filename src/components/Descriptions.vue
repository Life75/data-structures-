<template>
    <div id="descriptions">
        <article class="p-6  rounded-lg border  shadow-md bg-neutral-800  border-black">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                    
                  <span class="text-sm">14 days ago</span>
                  <InfoFilled :size="20" class="w-7"/>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">What is bubble sort?</a></h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which means the list is sorted.</p>
              <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                      <span class="font-medium dark:text-white">
                          Jese Leos
                      </span>
                  </div>
                  <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article>
    </div>
</template>

<script setup lang="ts">


</script>


<style>
</style>