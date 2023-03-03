<script setup lang="ts">
import { ref } from "vue";
import NavigationHeader from "./components/NavigationHeader.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const header = ref("");
function setHeaderTitle(headerTitle: string) {
    header.value = headerTitle
} 

</script>

<template>
  <!--TODO add git control and ElementPlus UI as well -->
  <div>
    <NavigationHeader :title="header" class="shadow-md"></NavigationHeader>
    <span class="">
    <div class=""></div>
      <RouterView @header="setHeaderTitle"></RouterView>
    </span>
  </div>
</template>

<style scoped></style>
