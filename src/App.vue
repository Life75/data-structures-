<script setup lang="ts">
import { ref } from "vue";
import NavigationHeader from "./components/NavigationHeader.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue"
import Descriptions from "./components/Descriptions.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const header = ref("");
function setHeaderTitle(headerTitle: string) {
  header.value = headerTitle;
}
</script>

<template>
  <div id="page-container" class="flex-col font-serif">
    <!--<NavigationHeader :title="header" class="shadow-md" style=""></NavigationHeader>-->
    <NavBar></NavBar>
    <span class="">
      <div id="content-wrap"></div>
      <RouterView @header="setHeaderTitle"></RouterView>
    </span>
    <!--<Footer class=" align-middle" id="footer"/>-->

  </div>
</template>

<style >


#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 40%;
  left: 80%;
  align-self:flex-end;
  height: 2.5rem;            /* Footer height */
}


</style>
