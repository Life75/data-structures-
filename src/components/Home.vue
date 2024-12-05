<template>
  <div class="  text-white w-full flex-row  h-full ">
    <div class="flex flex-col gap-28 w-full items-center px-7 ">
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
        <div class="">
          <span class="w-full flex flex-col md:flex-row pt-9 gap-5">
            <div id="card-item">
              <div class="card bg-base-300 rounded-md text-neutral-content w-96">
                <div class="card-body items-center text-center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
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
              <div class="card bg-base-300 rounded-md  text-neutral-content w-96">
                <div class="card-body items-center text-center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      class="size-20 fill-green-400  stroke-base-100">
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
      <div class="">
        <h2 class="text-5xl text-center">Future Features</h2>
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
          <div class="card bg-base-100 image-full w-80 h-96 shadow-xl rounded-lg">
            <figure>
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">More Data Structures!!</h2>
              <div>
                <p class="pb-3">Currently looking into adding/testing animations for: </p>
                <ul class="">
                  <li>- Hashtables</li>
                  <li>- Arrays</li>
                  <li>- Doubly linked lists</li>
                </ul>
              </div>
            
            </div>
          </div>
          
        </div>
        <div>

        </div>
      </div>

      <footer class="footer bg-neutral-900 rounded-md shadow-md  text-neutral-content  p-4 mb-auto h-full">
        <aside class="grid-flow-col items-center">
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
            clip-rule="evenodd" class="fill-current">
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
            </path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
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
