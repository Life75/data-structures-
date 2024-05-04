<template>
    <div class=" w-14 h-14 shadow-md flex justify-center align-middle   bg-green-500">
        <p class="mb-auto mt-auto font-semibold text-black">{{ value }}</p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    value?: number,
}>()

</script>

<style>
</style>