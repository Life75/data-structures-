<template>
    <div class=" mt-10 flex h-full gap-x-7">
        <!--Grid style: -->
        <!--Place header within a drawer component for adjusting controls-->
        <RecursionHeader class=" lg:w-1/3 hidden md:flex  bg-neutral-800 shadow-xl rounded-r-lg  row-span-12 ml-4">
        </RecursionHeader>
        <div class="w-full">
            <p class="mb-2 text-2xl font-bold">Fibonacci Recursion</p>
            <v-sheet :min-height="300" :min-width="250" border="md" rounded :elevation="10" color="#141518"
                class="w-full  mr-4">
                <RouterView class=" col-span-2 m-5"></RouterView>
            </v-sheet>
        </div>
        <!--Bottom view will be used for displaying an explaination of how the code works -->
    </div>
</template>


<script setup lang="ts">
import RecursionHeader from "../Recursion/RecursionHeader.vue"
</script>