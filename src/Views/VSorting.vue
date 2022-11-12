<template>
    <div class="flex justify-center">
        <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component TODO-->
        <SortHeaderUI @emit-slider-value="setAmountOfValues" @emit-animation-speed-slider="setAnimationSpeed" :timer="trackTime" @emit-animation-speed="setAnimationSpeed"></SortHeaderUI>
        <RouterView  :amountOfValues="amountOfValues" :reset="reset" :animationSpeed="animeSpeed" @timer="setTimer">
        </RouterView>   
    </div>
    <!--Make a component for the header for Sorting that way to deal with this problem -->

</template>

//TODO mention the ordering of the values h1 
<script setup lang="ts">
import { ref } from 'vue';
import Timer from '../algorithims-ts/Timer';
import SortHeaderUI from '../components/SortHeaderUI.vue';

const animeSpeed = ref(0); 
const amountOfValues = ref(0);
const reset = ref(false);
let trackTime = ref();

function setAnimationSpeed(animationSpeed: number) {
   animeSpeed.value = animationSpeed;
}

function setAmountOfValues(amount: number) {    
    amountOfValues.value = amount;
    reset.value = true; 

    //reset array 
}

function setTimer(timer: Timer): void {
    trackTime.value = timer;
}
</script>