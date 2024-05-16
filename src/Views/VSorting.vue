<template>
    <div class="flex flex-col">
        <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component -->
        <SortHeaderUI class="mx-2 my-2 md:w-1/3"  @emit-slider-value="setAmountOfValues" @emit-animation-speed-slider="setAnimationSpeed" :timer="trackTime" @emit-animation-speed="setAnimationSpeed" @emit-start="wasPressed" :header="header">
        </SortHeaderUI>
        <RouterView class="flex" :startSorting="startAnimation" :amountOfValues="amountOfValues" :reset="reset" :animationSpeed="animeSpeed" @timer="setTimer" @header="setHeaderTitle" @is-sorting="setIsSorting">
        </RouterView>   
    </div>
    <!--Make a component for the header for Sorting that way to deal with this problem -->

</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import Timer from '../Contracts/Classes/Timer';
import SortHeaderUI from '../components/SortHeaderUI.vue';


const animeSpeed = ref(0);
const animating = ref(false);
const isSorting = ref(false); 
const amountOfValues = ref(0);
const reset = ref(false);
let header = ref(" ");
let trackTime = ref();

const startAnimation = ref(false)


function wasPressed() {
  startAnimation.value = !startAnimation.value
}

function setIsSorting(isSorting: boolean) {
    //TODO solving issue with is sorting 
    console.log("is sorting" + isSorting)
}

function cancelAnimation(){
    animating.value = false
}

const emit = defineEmits(['header'])

function setHeaderTitle(headerTitle: string) {
    header.value = headerTitle
    //emit("header", header.value)
} 


function startSortingClick() {
    isSorting.value = true 
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