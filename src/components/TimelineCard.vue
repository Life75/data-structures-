<template>
    <div id="timeline-card" class="">
        <el-card class="text-neutral-100 border-black bg-neutral-900 shadow-md border-1">
                    <h4 class="text-2xl font-semibold">{{ header }}</h4>
                    <p class="text-lg py-4">
                        {{ shortenLog(log) }}...
                    </p>
                <el-button @click="" class="flex rounded-md p-3 px-4 buttonAnimation text-green-300 shadow-lg bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F]; hover:text-green-300">Details</el-button>
        </el-card>
    </div>
</template>


<script setup lang="ts">
    const props = defineProps<{
        header: string, 
        log: string,
        date: string
    }>()


    function shortenLog(log: string): string {
        
        var shortened: string = ""
        const wordLimit = 60
        const strArr = log.split(" ")

        if(wordLimit > strArr.length) return log
        
        for(var i = 0; i < wordLimit; i++) {
            shortened +=  " " + strArr[i]
        }
        return shortened
    }
</script>

<style></style>