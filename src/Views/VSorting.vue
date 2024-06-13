<template>
    <div :class="`flex flex-col `">
        <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component -->
        <span class="hidden lg:flex">
            <SortHeaderUI class="w-full":sort-request-controller="sortRequest"  @emit-slider-value="setAmountOfValues" @emit-animation-speed-slider="setAnimationSpeed" :timer="trackTime" @emit-animation-speed="setAnimationSpeed">
            </SortHeaderUI>
        </span>
        <span class="md:hidden">
            <p>Controller settings </p>
        </span>
        <RouterView class="flex h-[500px] my-10" @request="setSortRequest" :sortProps="sortPropsRef" :animationSpeed="animeSpeed" @timer="setTimer">
        </RouterView>   
        <div class="mx-5 bg-base-300 h-[200px] rounded-md shadow-md p-5 flex flex-col gap-3">
            <p class=" text-2xl uppercase">{{ sortRequest?.metadata.header }}</p>
            <p> {{ sortRequest?.metadata.description }}</p>
            {{ sortPropsRef }}
        </div>
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