<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <!--TODO add git control and ElementPlus UI as well -->
  <div>
    <NavigationHeader class="shadow-md"></NavigationHeader>
    <span class=" p-6">
    <div class=""></div>
      <RouterView></RouterView>
    </span>
  </div>
</template>

<style scoped></style>
