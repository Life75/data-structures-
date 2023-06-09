<template>
    <component :is="BubbleSort" v-bind="{autostart: true, amountOfValues: 14}" />
</template>

<script setup lang="ts">
import BubbleSort from '../algorithims/BubbleSort.vue';
//this is typically meant for displaying animations for algo/ds

//take in a component and display said component 


</script>