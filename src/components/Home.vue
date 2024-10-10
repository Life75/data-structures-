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
      <div class="flex flex-col">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-eye"
                    viewBox="0 0 16 16">
                    <path
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
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
          <div>z</div>
          <div>s</div>
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
