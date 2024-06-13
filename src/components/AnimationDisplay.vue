<template>
    <component :is="BubbleSort" v-bind="{autostart: props.autostart, amountOfValues: 14, hideStart: true, start: props.start, sortProps: sortProps}" />
</template>

<script setup lang="ts">
import SortProps from '../Contracts/Classes/SortProps';
import BubbleSort from '../algorithims/BubbleSort.vue';
//this is typically meant for displaying animations for algo/ds

//take in a component and display said component 
let sortProps = new SortProps()
sortProps.amountOfValues = 9
const props = defineProps({
    autostart: {
        type: Boolean,
        default: true,

    },
    start: {
        type: Boolean, default: false
    }
})

</script>