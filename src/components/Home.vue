<template>
  <div class="  text-white w-full  min-h-screen flex flex-col items-center overflow-x-hidden">
    <div class="flex-grow flex flex-col gap-28 w-full items-center px-7 ">
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
            <button class="btn bg-neutral-900 rounded-lg  hover:bg-neutral-800">Why use IndexZero? </button>
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
        <h1 class="text-4xl font-bold text-center flex flex-col md:flex-row gap-2">
          <p>Why use</p>
          <span class="flex justify-center items-center">
            <p>Index</p>
            <p class="text-green-400">Zero</p>?
          </span>
        </h1>
        <div class=" pb-20">
          <span class="w-full flex flex-col items-center md:flex-row pt-9 gap-5">
            <div id="card-item">

              <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg md:w-96 w-80">
                <div class="card-body items-center text-center">

                  <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"

                      class="size-20 fill-[#4ade80] stroke-base-200">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                  </div>

                  <h2 class="card-title md:text-xl text-xl relative mt-4">
                    <p class="">Seeing is believing</p>
                    <div class="absolute bg-green-500 h-2 mt-6 w-full bg-opacity-30"></div>
                  </h2>

                  <p class="text-neutral-300 mt-4">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  </p>


                </div>
              </div>
            </div>
            <div id="card-item">

              <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg md:w-96 w-80">
                <div class="card-body items-center text-center">

                  <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1"
                      stroke="currentColor" class="size-20">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                    </svg>

                  </div>

                  <h2 class="card-title text-xl relative mt-4">
                    <p class="text-white">Learning for you and me</p>
                    <div class="absolute bg-green-500 h-2 mt-6 w-full bg-opacity-30"></div>
                  </h2>

                  <p class="text-neutral-300 mt-4">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  </p>


                </div>
              </div>
            </div>
            <div id="card-item">

              <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg md:w-96 w-80">
                <div class="card-body items-center text-center">

                  <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"

                      class="size-20 fill-green-400 stroke-base-100">
                      <path fill-rule="evenodd"
                        d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
                        clip-rule="evenodd" />
                    </svg>

                  </div>

                  <h2 class="card-title md:text-2xl text-xl relative mt-4">
                    <p class="">Mobile Friendly!</p>

                    <div class="absolute bg-green-500 h-2 mt-6 w-full bg-opacity-30"></div>
                  </h2>

                  <p class="text-neutral-300 mt-4">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  </p>


                </div>
              </div>
            </div>

          </span>
        </div>
      </div>
      <div id="FAQ" class="w-full flex flex-col gap-10  ">
        <div class="flex flex-col items-center md:items-start w-full">
          <h2 class="text-4xl font-bold">FAQ</h2>
          <p>Answers for some questions you may have</p>
        </div>
        <div class="flex flex-col gap-4 items-end justify-end">
          <div class=" w-full md:w-1/2 collapse rounded-lg collapse-arrow bg-base-300">
            <input type="checkbox" />
            <div class="collapse-title text-xl text-neutral-200 font-medium">
              <span class="flex align-middle">
                <p class="mr-auto">How long have you spent working on this project</p>
              </span>

            </div>
            <div class="collapse-content flex flex-col">
              <p>This is a project I've been constantly iterating upon
                for the past 2 years. I've been working on it.
              </p>
              <p>
                Honestly, there was certain parts when jumping into this project I had no clue what I was doing and I'm
                still learning.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 collapse rounded-lg collapse-arrow  bg-base-300">
            <input type="checkbox" />
            <div class="collapse-title text-xl text-neutral-200 font-medium ">
              <span class="flex align-middle">
                <p class="mr-auto">What makes IndexZero different from other visualization tools?</p>
              </span>

            </div>
            <div class="collapse-content">
              <p>The app is capable of mobile responsiveness across the board.
                This is something I personally wanted to make a focal point. Along with real time data visualization
                comparison.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 collapse rounded-lg collapse-arrow  bg-base-300">
            <input type="checkbox" />
            <div class="collapse-title text-xl text-neutral-200 font-medium ">
              <span class="flex align-middle">
                <p class="mr-auto">Can I use this for learning/teaching?</p>
              </span>

            </div>
            <div class="collapse-content">
              <p>
                Absolutely! I wanted this project to be able to help people as well since most data structure and
                algorithims
                courses are taught in a very dry manner. I wanted to make it more interactive and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="Latest Updates" class="w-full flex flex-col gap-8">
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-4xl font-bold mb-2">Latest Updates</h2>
          <p class="text-neutral-300">See what's new with IndexZero</p>
        </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Update Card 1 -->
            <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span class="text-sm text-neutral-400">Dec 15, 2023</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Quick Sort Implementation</h3>
              <p class="text-neutral-300">Added new Quick Sort visualization with step-by-step animation and performance
                metrics.</p>
            </div>

            <!-- Update Card 2 -->
            <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <span class="text-sm text-neutral-400">Dec 10, 2023</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Mobile Optimization</h3>
              <p class="text-neutral-300">Enhanced mobile experience with responsive visualizations and touch controls.
              </p>
            </div>

            <!-- Update Card 3 -->
            <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-sm text-neutral-400">Dec 5, 2023</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Performance Boost</h3>
              <p class="text-neutral-300">Improved animation performance and added real-time speed controls.</p>
            </div>
          </div>
        </div>
      <!--     <div class="">
        <h2 class="text-5xl text-center">Upcoming Features</h2>
        <div class="flex flex-col md:flex-row gap-10 pt-9">
          <div class="card bg-base-100 image-full w-80 h-96 shadow-xl rounded-lg">
            <figure>
              <img src="https://pngimg.com/uploads/sonic_hedgehog/sonic_hedgehog_PNG26.png" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center text-center">Sorting Speed Comparision</h2>
              <p>Thought process behind this idea was when testing different sorting algorithims I typically found myself going back and forth testing them 
                to see which one was faster. I wanted to create a tool that would allow me to compare the speed of different sorting algorithms.
              </p>
              <p></p>
              
            </div>
          </div>
          <div class="card bg-base-100 image-full w-80 h-96 shadow-xl text-netural-50 rounded-lg">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">More Sorting!</h2>
              <div>
                <p class="pb-3">Currently looking into adding/testing animations for the following: </p>
                <ul class="">
                  <li>- Insertion Sort</li>
                  <li>- Heap Sort </li>
                  <li>- Selection Sort</li>
                </ul>
              </div>
            
            </div>
          </div>
          
        </div>
        <div>

        </div>
      </div>
-->



    </div>

    <footer class="footer bg-neutral-900 text-neutral-content rounded-lg p-4 bottom-0 md:w-full w-96  mt-28">
      <aside class="grid-flow-col items-center">
        <div>
          <h1 class="text-2xl text-center flex flex-col md:flex-row gap-2">
            <span class="flex ">
              <p>Index</p>
              <p class="text-green-400">Zero</p>
            </span>
          </h1>
          <p class="text-right">Copyright © {{ copyright }} - All right reserved</p>
        </div>

      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
            </path>
          </svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
            </path>
          </svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
            </path>
          </svg>
        </a>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AnimationDisplay from "./AnimationDisplay.vue";
var headerMotion = ref(false);
onMounted(() => {
  headerMotion.value = true;
});


let copyright = ref(new Date().getFullYear());



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

.card {
  transition: all 0.3s ease-in-out;
}
</style>
