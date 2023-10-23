<template>
<div>
<ul class="flex justify-between space-x-10 pt-8">
  <li class="">
    <el-icon :size="24" @click="openDrawer()"><Menu /></el-icon>
  </li>
  <li class=" justify-center">
  </li>
  <li class="">
    
  </li>
</ul>
<el-drawer v-model="drawer" title="I am the title" :with-header="false" size="70%" direction="ltr" custom-class="bg-neutral-950">
    <span>Hi there!</span>
    <!--Here we work and place the animation for the routes to follow through as well-->
  </el-drawer>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
var drawer = ref(false)

function openDrawer() {
  console.log('open :D')
  drawer.value = true
}

</script>

<style></style>