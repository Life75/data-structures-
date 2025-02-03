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
            <button @click="scrollDiv" class="btn bg-neutral-900 rounded-lg hover:bg-neutral-800">Why use IndexZero? </button>
            <button @click="$router.push('/algorithm/sorting/bubble')"
              class="btn buttonAnimation bg-green-400 rounded-lg shadow-md text-neutral-800 hover:bg-green-400">
              Get Started
            </button>
          </div>
        </div>
        <div class=" w-48 "></div>
        <div class="md:w-[200px]  md:ml-5  h-[500px] ">
          <AnimationDisplay />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h1 id="why-use-indexZero" class="text-4xl font-semibold text-center flex flex-col md:flex-row gap-2">
          <p>Why use</p>
          <span class="flex justify-center items-center">
            <p>Index</p>
            <p class="text-green-400">Zero</p>?
          </span>
        </h1>
        <div class="">
          <span class="w-full flex flex-col items-center md:flex-row pt-9 gap-5 ">
            <div id="card-item">

              <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg md:w-96 w-80
                h-auto min-h-[350px] md:min-h-[275px] 
                ">
                <div class="card-body items-center text-center">

                  <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-20 stroke-green-400 fill-none">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>

                  <h2 class="card-title md:text-xl text-lg relative mt-4 z-10">
                    <p class="text-white">Seeing is believing</p>
                    <div class="absolute bg-green-400 h-2 mt-6 w-full bg-opacity-60 -z-10"></div>
                  </h2>

                  <p class="text-neutral-300 mt-4">
                    Watch algorithms spring to life through dynamic visualizations. Complex data structures become
                    crystal clear as you witness every step unfold.
                  </p>


                </div>
              </div>
            </div>
            <div id="card-item">

              <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg md:w-96 w-80
                h-auto min-h-[350px] md:min-h-[275px]
                ">
                <div class="card-body items-center text-center">
                  <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-20 stroke-green-400 fill-none">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>

                  <h2 class="card-title text-xl relative mt-4 text-nowrap z-10">
                    <p class="text-white">Learning for you and me</p>
                    <div class="absolute bg-green-400 h-2 mt-6 w-full bg-opacity-60 -z-10"></div>
                  </h2>

                  <p class="text-neutral-300 mt-4">
                    Perfect for both students and educators. Clear, interactive demonstrations make learning data
                    structures engaging and help concepts stick for the long term.
                  </p>


                </div>
              </div>
            </div>
            <div id="card-item">

              <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg md:w-96 w-80
                h-auto min-h-[350px] md:min-h-[275px]
                ">
                <div class="card-body items-center text-center">
                  <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-20 stroke-green-400 fill-none">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 10.5h3m-3 4.5h3m3-4.5h3m-3 4.5h3" />
                    </svg>
                  </div>

                  <h2 class="card-title md:text-2xl text-xl relative mt-4 z-10">
                    <p class="text-white">Mobile Friendly!</p>

                    <div class="absolute bg-green-400 h-2 mt-6 w-full bg-opacity-60 -z-10"></div>
                  </h2>

                  <p class="text-neutral-300 mt-4">
                    Take your learning anywhere. Our responsive design ensures smooth visualization on any device, from
                    desktop to mobile, without compromising functionality.
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
            <div class="collapse-title md:text-lg text-neutral-200 font-medium">
              <span class="flex align-middle justify-center">
                <p class="mr-auto">How long have you spent working on this project</p>
              </span>

            </div>
            <div class="collapse-content flex flex-col text-sm">
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
            <div class="collapse-title md:text-lg text-neutral-200 font-medium ">
              <span class="flex align-middle">
                <p class="mr-auto">What makes IndexZero different from other visualization tools?</p>
              </span>

            </div>
            <div class="collapse-content text-sm">
              <p>The app is capable of mobile responsiveness across the board.
                This is something I personally wanted to make a focal point. Along with real time data visualization
                comparison.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 collapse rounded-lg collapse-arrow  bg-base-300">
            <input type="checkbox" />
            <div class="collapse-title md:text-lg text-neutral-200 font-medium ">
              <span class="flex align-middle">
                <p class="mr-auto">Can I use this for learning/teaching?</p>
              </span>

            </div>
            <div class="collapse-content text-sm">
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
          <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="text-sm text-neutral-400">Jan 8, 2024</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Insertion Sort Implementation</h3>
            <p class="text-neutral-300">Added new Insertion Sort visualization with step-by-step animation and real-time performance tracking.</p>
          </div>

          <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="text-sm text-neutral-400">Dec 15, 2023</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Quick Sort Implementation</h3>
            <p class="text-neutral-300">Added new Quick Sort visualization with step-by-step animation and performance metrics.</p>
          </div>

          <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-green-400 bg-opacity-20 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <span class="text-sm text-neutral-400">Dec 10, 2023</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Mobile Optimization</h3>
            <p class="text-neutral-300">Enhanced mobile experience with responsive visualizations and touch controls.</p>
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
          <p class="text-right text-xs">Copyright © {{ copyright }} - All right reserved</p>
        </div>

      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/Life75" target="_blank">
          <svg height="24" width="24" viewBox="0 0 16 16" class="fill-current">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
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


function scrollDiv() {
      window.scroll(0, findPosition(document.getElementById("why-use-indexZero")));
}


function findPosition(obj: any): any {
  let currenttop = 0;
            if (obj.offsetParent) {
                do {
                    currenttop += obj.offsetTop;
                } while ((obj = obj.offsetParent));
                return [currenttop];
            }
}



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

html {
  scroll-behavior: smooth;
}
</style>
