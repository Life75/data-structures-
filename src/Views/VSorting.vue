<template>
    <div :class="`flex flex-col pb-5 `">
        <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component -->
        <span class="hidden lg:flex">
            <SortHeaderUI class="w-full" :sort-request-controller="sortRequest" @emit-slider-value="setAmountOfValues"
                @emit-animation-speed-slider="setAnimationSpeed" :timer="trackTime"
                @emit-animation-speed="setAnimationSpeed">
            </SortHeaderUI>
        </span>
        <span class="md:hidden mt-5 mx-5 ml-auto">
            <span @click="drawerIsOpen = !drawerIsOpen">
                <button id="mobile-drawer" 
                    class="btn rounded-full w-14 h-14 bg-neutral-800/70 backdrop-blur-lg border border-neutral-700/50 hover:bg-neutral-700/70 shadow-lg flex items-center justify-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-7 text-green-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                    </svg>
                </button>
            </span>
        </span>        <RouterView class="flex h-[500px] my-10" @request="setSortRequest" :sortProps="sortPropsRef"
            :animationSpeed="animeSpeed" @timer="setTimer">
          </RouterView>
          <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{sortRequest?.metadata.header}}</h3>
          
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="complexity-box flex flex-col">
                <span class="text-sm text-neutral-400 whitespace-nowrap">Time Complexity</span>
                <span class="text-lg font-mono whitespace-nowrap" >{{sortRequest?.metadata.timeComplexity}}</span>
              </div>
              <div class="complexity-box flex flex-col">
                <span class="text-sm text-neutral-400 whitespace-nowrap">Space Complexity</span>
                <span class="text-lg font-mono whitespace-nowrap">{{sortRequest?.metadata.spaceComplexity}}</span>
              </div>
            </div>
            <p class="text-neutral-200 leading-relaxed">{{sortRequest?.metadata.description}}</p>
          </div>
          <v-layout>
            <v-navigation-drawer 
                v-model="drawerIsOpen" 
                location="bottom" 
                class="bg-base-100 bg-opacity-65 backdrop-blur-sm py-5 rounded-t-3xl" 
                width="500"
                temporary
                :scrim="false"
                elevation="10"
            >
                <!-- Add a subtle drag indicator at the top -->
                <div class="w-12 h-1.5 bg-gray-400 rounded-full mx-auto mb-4 opacity-50"></div>
                
                <!-- Add smooth transition for content -->
                <div class="transition-all duration-300 ease-in-out">
                    <SortHeaderUI 
                        :sort-request-controller="sortRequest"
                        @emit-slider-value="setAmountOfValues($event)" 
                        @emit-animation-speed-slider="setAnimationSpeed"
                        :timer="trackTime" 
                        @emit-animation-speed="setAnimationSpeed" 
                        :is-mobile="true"
                    >
                    </SortHeaderUI>
                </div>
            </v-navigation-drawer>
        </v-layout>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import Timer from '../Contracts/Classes/Timer';
import SortHeaderUI from '../components/SortHeaderUI.vue';
import ISortRequest from '../Contracts/Interfaces/ISortRequest';
import SortProps from '../Contracts/Classes/SortProps';

const animeSpeed = ref(0);
const amountOfValues = ref(0);
const drawerIsOpen = ref(false)
const sortPropsRef: Ref<SortProps> = ref(new SortProps())
let trackTime = ref();
let sortRequest: Ref<ISortRequest | undefined> = ref()

function setSortRequest(request: ISortRequest) {
    sortRequest.value = request
}
//TODO: Fix the animation speed for when it is set to 0
function setSortProps(sortProps: SortProps) {
    sortPropsRef.value = sortProps
}

function setAnimationSpeed(animationSpeed: number) {
    sortPropsRef.value.animationSpeed = animationSpeed;
}

function setAmountOfValues(amount: number) {
    sortPropsRef.value.amountOfValues = amount;
}

function setTimer(timer: Timer): void {
    trackTime.value = timer;
}
</script>

<style>

</style>
