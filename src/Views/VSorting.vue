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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-9">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                </svg>

            </span>
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
            <v-navigation-drawer v-model="drawerIsOpen" location="bottom" class="bg-base-100 py-5" width="500"
                temporary>
                <SortHeaderUI class="" :sort-request-controller="sortRequest"
                    @emit-slider-value="setAmountOfValues($event)" @emit-animation-speed-slider="setAnimationSpeed"
                    :timer="trackTime" @emit-animation-speed="setAnimationSpeed" :is-mobile="true">
                </SortHeaderUI>
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