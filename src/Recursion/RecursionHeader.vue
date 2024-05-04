<template>
    <div id="recursion-header" class="text-center flex flex-col justify-between max-h-full ">
        <!--Maybe introducing a tool icon would be nice -->
        <span class="w-full   text-xl text-neutral-200 border-1 border-black  font-semibold">
            <p class="mt-4">Recursion Settings</p>
        </span>
        <div class="divider"></div>

        <div class="mx-5 mb-auto flex flex-col items-center align-middle gap-y-2">
            <p class=" font-semibold">N</p>
            <NumberInput @on-change-value="emitN"/>
        </div>
        <div class="bottom-0 mx-5 mb-4">
            <button class="btn btn-wide bg-base-300" @click="startEvent()">Start</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NumberInput from '../components/NumberInput.vue';



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

function emitN(incomingValue: number) {
    emit("n", incomingValue)
}
</script>

<style>

</style>