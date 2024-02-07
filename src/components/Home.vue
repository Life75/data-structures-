<template>
  <div class="text-xl  font-serif text-white  w-full flex-row justify-between">
    <div class=" md:text-left md:flex   mt-20  mx-40">
      <h1 class=" text-9xl  md:text-4xl ">
        <p>
          <Transition name="slide-fade">
            <p class=" text-7xl" v-show="headerMotion">Visualize</p>
          </Transition>
          <Transition name="slide-fade-delay1">
            <p v-show="headerMotion" class="text-7xl text-green-400">Algorithims</p>
          </Transition>
          <Transition name="slide-fade-delay2">
            <p v-show="headerMotion" class="text-7xl ">in Action</p>
          </Transition>
        </p>
        <p class="pt-40 text-2xl">
          This project was designed to help showcase the beauty in data structures and
          help soldify a firm grasp into how these respected algorithms works
        </p>
      </h1>
      <div class="md:w-1/2 md:ml-5">
        <AnimationDisplay />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AnimationDisplay from "./AnimationDisplay.vue";
import router from "../router";
var headerMotion = ref(false);
var sortMouseOverEvent = ref(false);
onMounted(() => {
  headerMotion.value = true;
});

function onMouseHover(event: boolean) {

  sortMouseOverEvent.value = true;
}



function isMobile(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
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
