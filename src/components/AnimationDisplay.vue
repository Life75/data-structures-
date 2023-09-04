<template>
    <component :is="BubbleSort" v-bind="{autostart: props.autostart, amountOfValues: 14, hideStart: true, start: props.start}" />
</template>

<script setup lang="ts">
import BubbleSort from '../algorithims/BubbleSort.vue';
//this is typically meant for displaying animations for algo/ds

//take in a component and display said component 
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