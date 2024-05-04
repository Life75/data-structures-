<template>
    <div id="number-input" class="flex">
        <button class="btn btn-square btn-outline" @click="input--">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
        </button>
        <input type="text" v-model="input" placeholder="" @change="emitValue" :class="`input input-bordered w-20 max-w-xs text-center`" />
        <span>
            <button class="btn btn-square btn-outline" @click="input++">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                </svg>
            </button>

        </span>
    </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits<{
    (e: "onChangeValue", value: number): void
}>()
const input = ref(0)

watch((input), () => {
    emitValue()
})



function emitValue() {
    emit("onChangeValue", input.value)
}
</script>

<style></style>