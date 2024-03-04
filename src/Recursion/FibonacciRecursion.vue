<template>
    <div>
        Fib Recur
        {{ startAnimation }}
        {{ n }}
        <div v-if="n == 0">N is 0</div>
        <div class="flex items-center justify-center">
            <li class="">

            </li>
        </div>
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