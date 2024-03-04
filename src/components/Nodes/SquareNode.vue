<template>
    <div class=" w-28  bg-green-400">
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