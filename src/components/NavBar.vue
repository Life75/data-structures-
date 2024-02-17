<template>
    <!--New Nav-->
    <div class="navbar bg-base-100">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost rounded-md" @click="drawer = true">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1 align-middle">
    <a class="btn btn-ghost text-xl rounded-md">IndexZero</a>
    <p class="mt-1 text-lg hover:underline">1.0</p>
  </div>
  <div class="md:flex hidden">
    <input type="text" placeholder="Search.." class="input input-bordered w-full max-w-xs " >
  </div>
</div>
<v-layout>
    <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
        theme="dark"
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Data Structures" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="Algorithims" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</v-layout>
</template>


<script setup lang="ts">
import { ref } from 'vue';

//https://vuetifyjs.com/en/components/lists/#sub-group
const drawer = ref(false)
//import isMobile from '../composables/MobileCheck';
/*

    <v-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <!--Pulls a drawer on press-->
                </v-icon>

*/

const search = ref("")

</script>

<style></style>