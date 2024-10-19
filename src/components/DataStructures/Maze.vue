<template>
    <div id="maze" class="w-full">
        <span class="flex flex-row ">
            <div class=" w-full    mx-[1px]  " v-for="row in grid.rows" >
                <div @mouseover="console.log(`x: ${col} , y: ${row}`)" class="w-full h-10 bg-red-200 my-[1px] " v-for="col in grid.column">
                    
                </div>
            </div>
        </span>
    </div>
</template>

<script setup lang="ts">
import { column } from 'element-plus/es/components/table-v2/src/common';
import { onBeforeMount } from 'vue';
import { ref } from 'vue';

const emits = defineEmits<{
    (e: 'main-styles', styles: string): void 
}>()

const ROWS_COLUMNS = 10
let rows = ref(ROWS_COLUMNS)
let columns = ref(ROWS_COLUMNS)

let grid = ref({
    rows: 30, 
    column: 11
})

onBeforeMount(() => {
   // emits('main-styles', "")
})


</script>

<style>
</style>