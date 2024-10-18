<template>
    <div id="maze" class="w-full">
        <span class="flex flex-row ">
            <div class=" w-full h-10   mx-[1px]  " v-for="row in grid.rows" >
                <div @click="console.log(`x: ${col} , y: ${row}`)" class="w-full h-[20%] bg-red-200 my-[1px] " v-for="col in grid.column">
                    
                </div>
            </div>
        </span>
    </div>
</template>

<script setup lang="ts">
import { column } from 'element-plus/es/components/table-v2/src/common';
import { ref } from 'vue';

const ROWS_COLUMNS = 10
let rows = ref(ROWS_COLUMNS)
let columns = ref(ROWS_COLUMNS)

let grid = ref({
    rows: 60, 
    column: 40
})


</script>

<style>
</style>