<script setup lang="ts">
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const header = ref("");
//    <NavigationHeader :title="header" class="shadow-md" style=""></NavigationHeader>
// settings for closeness:  margin-right:5%; margin-left: 5%;  flex-direction:column; gap: 4em; height: 100vh; margin: 0 15%;
//    <Footer class=" align-middle" id="footer"/>

function setHeaderTitle(headerTitle: string) {
  header.value = headerTitle;
}
</script>

<template>
    <!--<NavigationHeader :title="header" class="shadow-md" style=""></NavigationHeader>-->
    <NavBar class="px-3"></NavBar>
     <RouterView @header="setHeaderTitle"></RouterView> 
    <!--<Footer class=" align-middle" id="footer"/>-->

</template>

<style >




</style>
