<template>
    <div class="flex justify-center">
        <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component TODO-->
        <SortHeaderUI @emit-slider-value="setAmountOfValues" @emit-animation-speed-slider="setAnimationSpeed" :timer="trackTime" @emit-animation-speed="setAnimationSpeed" :header="header"></SortHeaderUI>
        <RouterView  :amountOfValues="amountOfValues" :reset="reset" :animationSpeed="animeSpeed" @timer="setTimer" @header="setHeaderTitle">
        </RouterView>   
    </div>
    <!--Make a component for the header for Sorting that way to deal with this problem -->

</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import Timer from '../Contracts/Classes/Timer';
import SortHeaderUI from '../components/SortHeaderUI.vue';

const animeSpeed = ref(0); 
const amountOfValues = ref(0);
const reset = ref(false);
let header = ref(" ");
let trackTime = ref();

const emit = defineEmits(['header'])

function setHeaderTitle(headerTitle: string) {
    header.value = headerTitle
    //emit("header", header.value)
} 

function setAnimationSpeed(animationSpeed: number) {
   animeSpeed.value = animationSpeed;
}

function setAmountOfValues(amount: number) {    
    amountOfValues.value = amount;
    reset.value = true; //reset array 
}

function setTimer(timer: Timer): void {
    trackTime.value = timer;
}
</script>