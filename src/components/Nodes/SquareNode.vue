<template>
    <div class=" w-28 h-20 shadow-lg  bg-green-500">
        <p>{{ value }}</p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    value?: number,
}>()

</script>

<style>
</style>