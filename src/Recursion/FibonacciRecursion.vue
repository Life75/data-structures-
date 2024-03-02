<template>
    <div>
        Fib Recur
        {{ startAnimation }}
        {{ n }}
    </div>
</template>

<script setup lang="ts">
import FibannociRecursion from './FibRecursion';

//values are returning, next thing to do is add the nodes and animation engine 
defineProps<{
    n?: number,
    startAnimation: boolean 
}>()

</script>

<style>
</style>