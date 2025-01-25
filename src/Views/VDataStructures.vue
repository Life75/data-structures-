<template>
    <div class=" flex flex-col pb-5 ">
        <component class="hidden lg:flex" :is="request?.component" :request="request" />
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
        </span> 
        <!--h-[400px] overflow-y-auto-->
        <router-view :class="mainStyles" @request="setRequest" @main-styles="setMainStyles" />
        <div class="backdrop-blur-md bg-base-300/30 rounded-lg p-6 border border-neutral-700/50 hover:border-green-400 transition-all shadow-lg">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{request?.metadata.header}}</h3>
          
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="complexity-box flex flex-col">
                <span class="text-sm text-neutral-400 whitespace-nowrap">Time Complexity</span>
                <span class="text-lg font-mono whitespace-nowrap" >{{request?.metadata.timeComplexity}}</span>
              </div>
              <div class="complexity-box flex flex-col">
                <span class="text-sm text-neutral-400 whitespace-nowrap">Space Complexity</span>
                <span class="text-lg font-mono whitespace-nowrap">{{request?.metadata.spaceComplexity}}</span>
              </div>
            </div>
            <p class="text-neutral-200 leading-relaxed">{{request?.metadata.description}}</p>
          </div>
        <v-layout>
            <v-navigation-drawer v-model="drawerIsOpen" location="bottom" class="bg-base-100 bg-opacity-65 backdrop-blur-sm py-5 rounded-t-3xl" width="500" temporary>
                <div class="flex flex-col gap-3">
                    <div class="w-12 h-1.5 bg-gray-400 rounded-full mx-auto mb-4 opacity-50"></div>

                    <component :is="request?.component" :request="request" />   
                </div>
            </v-navigation-drawer>
        </v-layout>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import ILinkedListRequest from "../Contracts/Interfaces/ILinkedListRequest"
import router from "../router";

let request: Ref<ILinkedListRequest> | Ref<undefined>  = ref()
let mainStyles: Ref<string> = ref("")
const drawerIsOpen = ref(false)
 
function setRequest(headerRequest: ILinkedListRequest) {
    request.value = headerRequest
}

function setMainStyles(styles: string) {
    mainStyles.value = styles 
}

function clearHeader() {
    request.value = undefined
}

router.router.beforeEach(() => {
    clearHeader()
})
</script>

<style>
.bentoStyling {
  @apply rounded-t-xl cursor-default shadow-sm z-10 transition ease-in-out delay-150 text-gray-400 hover:text-gray-200 duration-300;
}

.v-navigation-drawer {
  border-radius: 20px 20px 0 0 !important;
}
</style>
