<template>
<div class="grid auto-rows-[300px] grid-cols-3 gap-4 backdrop-blur-sm">
    <div v-for="(element, index) in bento"
    :key="index"
    :class="`{row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 first-letter ${index === 3 || index === 6 ? `col-span-2` : ``} }`"
    >
    <slot :name="index">
        
    </slot>
    </div>
</div>
</template>

<script setup lang="ts">
import HorizontalCard from './HorizontalCard.vue';
const props = defineProps({
    bento: {type: Array}
})

//HorizontalCard

</script>

<style></style>