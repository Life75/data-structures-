<template>
    <div id="treemap">
        <div v-for="level in treemap ">
            <div class="w-full h-20 ">
                <div class="flex justify-center ">
                    <div class=" h-20" v-for="node in level">
                        <SquareNode v-if="node !== undefined" class=" mx-2" :value="node" />
                        <SquareNode v-else class=" mx-2" :value="node" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SquareNode from "./SquareNode.vue"
import { onMounted } from "vue";
import { watch } from "vue";
const TREE_LEVELS = 3
const arr = [1, 2, 3,]


const props = defineProps({
    tree: { type: Array<number>, default: []}
})
const treeRef = ref(props.tree)
const treemap = ref(generateTreeMap(props.tree))

function calculateAmountOfLevelsNeeded(entities: number[]): number {
    let n = 0
    while(entities.length != 0) {
        for(let j = 0; j < Math.pow(2,n); j++) {
            const value = entities.pop()
            if(!value) break
        }
        n++
    }
    return n
}

function generateTreeMap(arr: number[]): (number | undefined)[][] {
    let container = []   
    const treeLevels = calculateAmountOfLevelsNeeded([...arr])

    for (var i = 0; i < treeLevels; i++) {
        const length = Math.pow(2, i)
        let slider = 0
        const level = []
        while (slider < length) {
            const element = arr.shift()
            if (element !== undefined) {
                level.push(element)
            } else {
                console.log(element)
                level.push(undefined)
            }
            slider++
        }
        container.push(level)
    }
    return container
}

watch(() => props.tree, () => {
    treemap.value = generateTreeMap([...props.tree])
})
</script>