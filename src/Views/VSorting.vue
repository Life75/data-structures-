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
        <RouterView class="flex" @request="setSortRequest" :amountOfValues="amountOfValues" :animationSpeed="animeSpeed" @timer="setTimer"  >
        </RouterView>   
        <div>Description of algorithm </div>
    </div>

</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import Timer from '../Contracts/Classes/Timer';
import SortHeaderUI from '../components/SortHeaderUI.vue';
import ISortRequest from '../Contracts/Interfaces/ISortRequest';

const animeSpeed = ref(0); 
const amountOfValues = ref(0);
let trackTime = ref();
let sortRequest: Ref<ISortRequest | undefined> = ref()

function setSortRequest(request: ISortRequest) {
    sortRequest.value = request
}

function setAnimationSpeed(animationSpeed: number) {
   animeSpeed.value = animationSpeed;
}

function setAmountOfValues(amount: number) {    
    amountOfValues.value = amount;
}

function setTimer(timer: Timer): void {
    trackTime.value = timer;
}
</script>