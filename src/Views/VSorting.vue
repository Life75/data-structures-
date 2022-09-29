<template>
    <div class="flex justify-center">
        <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component TODO-->
        <SortHeaderUI @emitSliderValue="setAmountOfValues"></SortHeaderUI>
        <RouterView :amountOfValues="amountOfValues" :reset="reset">
        </RouterView>   
    </div>
    <!--Make a component for the header for Sorting that way to deal with this problem -->

</template>


<script setup lang="ts">
import { ref } from 'vue';
import SortHeaderUI from '../components/SortHeaderUI.vue';

const amountOfValues = ref(23);
const reset = ref(false);


function setAmountOfValues(amount: number) {    
    amountOfValues.value = amount;
    reset.value = true;
    //reset array 
}

</script>