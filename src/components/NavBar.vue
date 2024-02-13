<template>
    <!--New Nav-->
    <div class="navbar  border-1 shadow-lg  backdrop-blur  ">
        <div class="navbar-start ">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost " @click="showDrawer = !showDrawer">
                    <!--Pulls a drawer on press-->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>

            </div>
            <!--add an icon to the end -->
            <a class="text-2xl hidden lg:flex ">
                <p class="text-green-400">Index</p>
                <p>Zero</p>
            </a>
            <input type="text" placeholder="Search..." class="input input-bordered w-full max-w-xs ml-5 hidden lg:flex" />
        </div>
        <div class="navbar-center  md:hidden">
            <a class="text-2xl flex ">
                <p class="text-green-400">Index</p>
                <p>Zero</p>
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">

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

            <a href="#" class="btn btn-ghost font-normal hidden lg:flex">Data Structures</a>
            <a href="#" class="btn btn-ghost font-normal hidden lg:flex">Algorithims</a>

            <v-icon class="lg:hidden"><!--Todo implemenet at a later date -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>

            </v-icon>

        </div>

    </div>
    <v-layout>
        <v-navigation-drawer v-model="showDrawer" location="left" class="bg-base-100" temporary>
            <v-list class="text-white" >
                <v-list-subheader class="text-white">Index Zero</v-list-subheader>
                <v-list-item v-for="(route, i) in router.routes" :key="i" :value="route">

                    <p v-if="route.name == 'Sorting' || route.name == 'Data Structures'">
                    <div class="collapse bg-base-200">
                        <input type="checkbox" class="peer" />
                        <div
                            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            Click me to show/hide content
                        </div>
                        <div
                            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>hello</p>
                        </div>
                    </div>

                    </p>
                    <p v-else>{{ route.name }}</p>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
    </v-layout>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { VNavigationDrawer } from 'vuetify/lib/components/index.mjs';
import router from '../router/index'
//import isMobile from '../composables/MobileCheck';
const showDrawer = ref(false)
const search = ref("")

</script>

<style></style>