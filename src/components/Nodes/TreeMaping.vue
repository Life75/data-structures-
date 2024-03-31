<template>
    <div id="treemap">
        {{ treemap.length }}
        <div v-for="level in treemap" >
            <div class="w-full h-20 ">
                <div class="flex justify-center " >
                    <div class=" h-20" v-for="node in level" >
                        <SquareNode v-if="node !== undefined" class=" mx-2" :value="node"/> 
                        <SquareNode v-else class=" mx-2"  :value="node"/>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SquareNode from "./SquareNode.vue"
import { onBeforeMount } from "vue";
const TREE_LEVELS = 3
const arr = [1, 2, 3, 4, 5, 6, 7]


const props = defineProps({
    tree: {type: Array<number>, default: []} 
})



function generateTreeMap(arr: number[]): number[][] {
    let container = []
    for(var i=0; i < TREE_LEVELS; i++) {
        const length = Math.pow(2, i)
    
        let slider = 0
        const level = []
        while(slider < length) {
            
            const element = arr.shift()
            if(element) {
                level.push(element)
            } else {
                break
                level.push(undefined)
            }
            slider++
        }
        container.push(level)
    }

    return container
}

const treemap = ref(generateTreeMap(props.tree))
console.log(treemap.value)

onBeforeMount(() => {
    
})

</script>