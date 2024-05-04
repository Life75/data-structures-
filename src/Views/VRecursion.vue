<template>
    <div class=" mt-10 flex h-full gap-x-7">
        <!--Grid style: -->
        <!--Place header within a drawer component for adjusting controls-->
        <RecursionHeader @n="setN" @start="wasPressed"
            class=" lg:w-1/3 hidden md:flex   bg-neutral-800 shadow-md rounded-r-lg  row-span-12 ml-4">
        </RecursionHeader>
        <div class="w-full shadow-md">
            <span class="flex flex-row justify-center items-center  align-middle">
                <p class="text-2xl font-bold mr-auto ml-auto  text-neutral-200  ">{{ currentHeaderName }}</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                    class="bi bi-gear-fill lg:hidden flex" viewBox="0 0 16 16">
                    <path
                        d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>

            </span>
            <v-sheet :min-height="300" :min-width="250" max-height="500" border="md" rounded :elevation="10"
                color="#141518" class="w-full mr-4 ">
                <RouterView class=" h-full w-full col-span-2 m-5" :n="Number(n)" :startAnimation="startAnimation" @header-name="getHeaderName"></RouterView>
            </v-sheet>
        </div>
        <!--Bottom view will be used for displaying an explaination of how the code works -->
    </div>
</template>


<script setup lang="ts">
import RecursionHeader from "../Recursion/RecursionHeader.vue"
import { ref } from "vue";

const n = ref(0)
const startAnimation = ref(false)
let currentHeaderName = ref("")
function setN(value: number) {
    n.value = value
}

function getHeaderName(header: String) {
    currentHeaderName.value = String(header) 
}
//I'll probably need to return the ref value to be modified in the child component possibly 
function wasPressed() {
    startAnimation.value = !startAnimation.value
}


</script>