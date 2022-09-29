<template>
    <div class="flex justify-center">
        <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component TODO-->
        <SortHeaderUI @emitSliderValue="setAmountOfValues"></SortHeaderUI>
        <RouterView :amountOfValues="amountOfValues">
        </RouterView>   
    </div>
    <!--Make a component for the header for Sorting that way to deal with this problem -->

</template>


<script setup lang="ts">
import { ref } from 'vue';
import SortHeaderUI from '../components/SortHeaderUI.vue';

const amountOfValues = ref(23)


function setAmountOfValues(amount: number) {
    console.log('hello')
    
    amountOfValues.value = amount;
    console.log(amountOfValues.value)
}

</script>