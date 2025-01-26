<template>
    <!--New Nav-->
    <div class="navbar sticky top-0 z-50 bg-base-100  border-b-2 border-base-200">
        <div class="navbar-start ">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost " @click="showDrawer = !showDrawer">
                    <!--Pulls a drawer on press-->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>

            </div>
            <!--add an icon to the end -->
            <a class="text-2xl  lg:flex hidden ml-0 md:pl-3 hover:cursor-pointer " href="/">
                <p class="text-green-400">Index</p>
                <p>Zero</p>
            </a>
            <!--  <input type="text" placeholder="Search..." class="input input-bordered w-full max-w-xs ml-5 hidden lg:flex" />-->
        </div>
        <div class="navbar-center  md:hidden" @click="() => router.router.push('/')">
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

            <a href="https://github.com/Life75" class="btn btn-ghost font-normal hidden lg:flex" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                </a>
                <a @click="onShareClick($event)" class="btn btn-ghost font-normal hidden lg:flex cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                </a>
            <!--<v-icon class="lg:hidden"><!--Todo implemenet at a later date 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>

            </v-icon>-->

        </div>

    </div>
    <v-layout class="flex-none" 
     
    >
        <v-navigation-drawer 
            v-model="showDrawer" 
            location="left" 
            class="bg-base-100" 
            temporary
            width="300"
        >
            <!-- Elegant header section -->
            <div class="p-6 border-b border-base-200">
                <div class="flex items-center space-x-3">
                    <div class="bg-base-200 p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#39e75f"
                            class="bi bi-0-square" viewBox="0 0 16 16">
                            <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                        </svg>
                    </div>
                    <div class="flex text-2xl font-medium cursor-pointer" @click="() => router.router.push('/')">
                        <p class="text-green-400">Index</p>
                        <p class="text-white">Zero</p>
                    </div>
                </div>
            </div>

            <!-- Navigation links with smooth transitions -->
            <v-list class="text-white py-4">
                <v-list-item 
                    v-for="(route, i) in router.routes" 
                    :key="i" 
                    :value="route"
                    :ripple="false"
                    class="mx-2 my-1 rounded-xl transition-all duration-200 hover:bg-base-200"
                >
                    <RouteNode :route="route" class="p-2"></RouteNode>
                </v-list-item>
            </v-list>

            <!-- Footer section -->
            <div class="absolute bottom-0 w-full p-6 border-t border-base-200">
                <div class="flex items-center justify-between text-sm text-gray-400">
                    <span>Version {{ version }}</span>
                    <span>Made with ❤️</span>
                </div>
            </div>
        </v-navigation-drawer>
    </v-layout>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { VNavigationDrawer } from 'vuetify/lib/components/index.mjs';
import router from '../router/index'
import RouteNode from './RouteNode.vue'
import { version } from '../../package.json'
const showDrawer = ref(false)
const search = ref("")

async function onShareClick(event: Event) {
    event.preventDefault();
    
    const shareData = ref({
        title: "IndexZero",
        text: "Learn more on IndexZero!",
        url: window.location.href
    })

    try {
        await navigator.share(shareData.value)
    } catch (error) {
        // Handle unsupported share functionality silently
    }
}
</script>

<style></style>

<style scoped>
:deep(.v-layout) {
  height: auto !important;
  min-height: 0 !important;
}

:deep(.v-navigation-drawer__content) {
  height: 100vh;
}
</style>
