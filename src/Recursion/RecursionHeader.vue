<template>
    <div id="recursion-header" class="text-center flex flex-col justify-between max-h-full ">
        <!--Maybe introducing a tool icon would be nice -->
        <span class="w-full   text-xl text-neutral-200 border-1 border-black  font-semibold">
            <p class="mt-4">Recursion Settings</p>
        </span>
        <div class="divider"></div>

        <div class="mx-5 mb-auto">
            <p class=" font-semibold">N</p>
           
        </div>
        <div class="bottom-0 mx-5 mb-4">
            <button class="btn btn-wide bg-base-300" @click="startEvent()">Start</button>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';



const n = ref(0)

const emit = defineEmits<{
    (e: "start"): void
    (e: "n", n: number): void
}>()

function startEvent() {
    emit("start")
}

function handleChange() {

}

function emitN() {
    emit("n", n.value)
}
</script>

<style>

</style>