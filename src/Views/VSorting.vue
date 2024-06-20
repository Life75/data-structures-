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
            <span @click="drawerIsOpen = !drawerIsOpen"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                    fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                    <path
                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                    <path
                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                </svg></span>
        </span>
        <RouterView class="flex h-[500px] my-10" @request="setSortRequest" :sortProps="sortPropsRef"
            :animationSpeed="animeSpeed" @timer="setTimer">
        </RouterView>
        <div class="mx-5 bg-base-300 h-[200px] rounded-md shadow-md p-5 flex flex-col gap-3">
            <p class=" text-2xl uppercase">{{ sortRequest?.metadata.header }}</p>
            <p> {{ sortRequest?.metadata.description }}</p>
            {{ sortPropsRef }}
        </div>
        <v-layout>
            <v-navigation-drawer v-model="drawerIsOpen" location="bottom" class="bg-base-100 py-5" width="500" temporary >
                <SortHeaderUI class="" :sort-request-controller="sortRequest" @emit-slider-value="setAmountOfValues($event)"
                @emit-animation-speed-slider="setAnimationSpeed" :timer="trackTime"
                @emit-animation-speed="setAnimationSpeed" :is-mobile="true">
            </SortHeaderUI>            </v-navigation-drawer>
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