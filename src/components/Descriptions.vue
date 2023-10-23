<template>
    <div id="descriptions">

        <article class="p-6  rounded-lg border  shadow-lg bg-neutral-800  border-black">
            <img class="-rotate-90" width="80" height="80" src="https://img.icons8.com/officel/80/generic-sorting.png" alt="generic-sorting"/>
              <div class="flex justify-between items-center mb-5 text-gray-500">

                  <span class="text-sm"></span>
               
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.title }}</h2>
              <p class="my-5 font-light text-gray-500 dark:text-gray-300">{{ props.contents }}</p>
              <div class="flex justify-between items-center">
               
                  <button @click="props.readMoreAction" class="flex  rounded-md p-3 px-4 buttonAnimation text-green-300 shadow-lg bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F];">
                      <span>Go to demo</span>   
                      <svg class="ml-2 mt-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
          </article>
    </div>
</template>

<script setup lang="ts">



const props = defineProps({
    contents: {
        type: String 
    },
    title: {
        type: String
    },
    readMoreAction: {
        type: () => {}
    }
})

</script>


<style>
.buttonAnimation:hover {
  animation-name: up-movement;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  box-shadow: 0 0 50px 15px #48abe0;

  @apply text-green-300 shadow-lg bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F];
}

@keyframes up-movement {
  from {
  }
  to {
    transform: translateY(-6px);
  }
}

</style>