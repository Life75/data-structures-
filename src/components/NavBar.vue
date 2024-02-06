<template>
    <!--New Nav-->
    <div class="navbar bg-base-200 backdrop-blur ">
        <div class="navbar-start ">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                     <!--Pulls a drawer on press-->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <!--add an icon to the end -->
            <a class="text-2xl hidden lg:flex ">
                <p class="text-green-400">Index</p>
                <p>Zero</p>
            </a>
        </div>
        <div class="navbar-center md:hidden">
            <a class="text-2xl flex ">
                <p class="text-green-400">Index</p>
                <p>Zero</p>
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>Algorithims</summary>
                        <ul class="p-2 ">
                            <li><a>Bubble Sort</a></li>
                            <li><a>Merge Sort</a></li>
                            <li><a>Quick Sort</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Data Structures</summary>
                        <ul class="p-2 ">
                            <li><a>Arrays</a></li>
                            <li><a>Recursion</a></li>
                            <li><a>Linked Lists</a></li>
                            <li><a>Trees</a></li>
                            <li><a>Hashtables</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div class="navbar-end"><!--TODO index the items and link them to the actual results on push  -->
           <!-- <div class="w-1/3 hidden lg:flex  h-12">
                <v-autocomplete
                    rounded
                    density="comfortable"
                    label="Search.."
                    variant="solo"
                    theme="dark"
                ></v-autocomplete>
            </div>-->
            <div class="">
                <v-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <!--Pulls a drawer on press-->
                </v-icon>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import isMobile from '../composables/MobileCheck';

const search = ref("")

</script>

<style></style>