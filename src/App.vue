<script setup lang="ts">
import { ref } from "vue";
import NavigationHeader from "./components/NavigationHeader.vue";
import Footer from "./components/Footer.vue"
import Descriptions from "./components/Descriptions.vue";
import NavBarDaisyUI from "./components/NavBarDaisyUI.vue";
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
  <div id="page-container" class="flex-col font-serif">
    <NavBarDaisyUI></NavBarDaisyUI>
    <span class="">
      <div id="content-wrap"></div>
      <RouterView @header="setHeaderTitle"></RouterView>
    </span>

  </div>
</template>

<style >




</style>
