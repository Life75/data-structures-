<template>
  <div class="  text-white w-full flex-row   ">
    <div class="flex flex-col gap-28 w-full items-center ">
      <div class="flex flex-col-reverse md:flex-row   mt-7 md:mt-20   ">
        <div class="flex flex-col gap-y-14 mx-4   ">
          <h1 class=" text-6xl lg:text-7xl  mt-6 md:mt-0">
            <p>
              <Transition name="slide-fade">
                <p class=" " v-show="headerMotion">Visualize</p>
              </Transition>
              <Transition name="slide-fade-delay1">
                <p v-show="headerMotion" class=" text-green-400">Algorithims</p>
              </Transition>
              <Transition name="slide-fade-delay2">
                <p v-show="headerMotion" class=" ">in Motion</p>
              </Transition>
            </p>
          </h1>
          <div>
            <div class=" ">
              <p class="text-base  md:w-full">Interested in learning how data structures work visually?</p>
            </div>

          </div>
          <div class="flex flex-col md:flex-row gap-6 items-stretch">
            <button class="btn   bg-neutral-900 rounded-lg  hover:bg-neutral-800">How does it work?</button>
            <button
              class="btn buttonAnimation bg-green-400 rounded-lg shadow-md text-neutral-800 hover:bg-green-400">Get
              Started</button>
          </div>
        </div>
        <div class=" w-48 "></div>
        <div class="md:w-[200px]  md:ml-5  h-[500px] ">
          <AnimationDisplay />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="text-5xl text-center flex flex-col md:flex-row gap-2">
          <p>Why use</p>
          <span class="flex justify-center items-center">
            <p>Index</p>
            <p class="text-green-400">Zero</p>?
          </span>
        </h1>
        <span class="w-full flex flex-col md:flex-row pt-9 gap-5">
          <div id="card-item">
            <div class="card bg-base-300 rounded-md text-neutral-content w-96">
              <div class="card-body items-center text-center">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5"
                     class="size-20 fill-[#4ade80]  stroke-base-200">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                </div>
                <h2 class="card-title text-2xl relative">
                  <p class="">Seeing is believing</p>
                  <div class="absolute bg-green-500 h-2 mt-6 w-full bg-opacity-30"></div>
                </h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
                <div class="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
          <div id="card-item">
            <div class="card bg-base-300 rounded-md text-neutral-content w-96">
              <div class="card-body items-center text-center">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1"
                    stroke="currentColor" class="size-20">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                  </svg>

                </div>
                <h2 class="card-title text-2xl relative">
                  <p class="">Learning for you and me</p>
                  <div class="absolute bg-green-500 h-2 mt-6 w-full bg-opacity-30"></div>
                </h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
                <div class="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
          <div id="card-item">
            <div class="card bg-base-300 rounded-md text-neutral-content w-96">
              <div class="card-body items-center text-center">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="size-20 fill-green-400  stroke-base-100">
                    <path fill-rule="evenodd"
                      d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd" />
                  </svg>

                </div>
                <h2 class="card-title text-2xl relative">
                  <p class="">It's simple</p>
                  <div class="absolute bg-green-500 h-2 mt-6 w-full bg-opacity-30 "></div>
                </h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
                <div class="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>

        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AnimationDisplay from "./AnimationDisplay.vue";
var headerMotion = ref(false);
onMounted(() => {
  headerMotion.value = true;
});





</script>
//fit this color schema
https://realtimecolors.com/?colors=e5eaf3-141414-bef264-f9f5fa-22d3ee 300 green/cyan
<style>
.buttonAnimation:hover {
  animation-name: up-movement;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  box-shadow: 0 0 50px 15px #48abe0;

  @apply text-green-300 shadow-lg bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F];
}

@keyframes up-movement {
  from {}

  to {
    transform: translateY(-4px);
  }
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-delay1-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-delay1-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-delay1-enter-from,
.slide-fade-delay1-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-fade-delay2-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-delay2-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-delay2-enter-from,
.slide-fade-delay2-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
