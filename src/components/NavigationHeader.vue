<template>
  <el-menu
    v-if="!isMobile()"
    :default-active="activeIndex"
    class="border-[#141414] font-serif"
    mode="horizontal"
    :ellipsis="false"
    background-color="#141414"
    text-color="#E5EAF3"
    active-text-color="#85ce61"
    style="background-color: transparent; "
  >
    <el-menu-item index="0">
      <span class="text-white md:text-xl text-lg pt-3.5" @click="homeRoute()">Algorithms and Data Structures</span>
      <router-link to="/"></router-link
    ></el-menu-item>

    <span class=""></span>
    <div class="flex-grow" />
    <div>{{ props.title }}</div>
    <div class="flex" v-if="!isMobile()">
      <el-sub-menu class="font-serif" index="1">
        <template #title> <p class="text-lg ">Sorting Algorithms </p></template>
        <el-menu-item class="font-serif" index="1-1" @click="sortingRoutChange('BubbleSort')">
          <router-link to="/Sorting/BubbleSort/">Bubble Sort</router-link>
        </el-menu-item>
        <el-menu-item class="font-serif" index="1-2" @click="sortingRoutChange('MergeSort')"
          >Merge Sort</el-menu-item
        >
        <el-menu-item class="font-serif" index="1-3" @click="sortingRoutChange('QuickSort')">
          <router-link to="/Sorting/QuickSort/">Quick Sort </router-link></el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title><p class="text-lg">Data Structures </p></template>
        <el-sub-menu class="font-serif" index="2-4">
          <template #title>Linked Lists</template>
          <el-menu-item index="2-4-1" @click="dataStructureRouteChange('Queue')"
            >Queues</el-menu-item
          >
          <el-menu-item index="2-4-2" @click="dataStructureRouteChange('Stack')"
            >Stack</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item index="2-2" disabled>Binary Trees</el-menu-item>
      </el-sub-menu>
    </div>
    <div v-else class="flex justify-center items-center">
      <el-icon @click="drawerVisibility = true" class="pt-4" :size="28"><Fold /></el-icon>
    </div>
  </el-menu>
  <NavigationheaderMobile v-else />
  <el-drawer
    custom-class="bg-[#0A0A0A] "
    class="bg-black"
    size="70%"
    v-model="drawerVisibility"
    direction="ltr"
  >
    <DrawerRouteDisplay @route-change="drawerVisibility = false" />
  </el-drawer>

  

</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "../router";
import DrawerRouteDisplay from "./DrawerRouteDisplay.vue";
import NavigationheaderMobile from './NavigationHeaderMobile.vue'
//check if mobile device
function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  )
    return true;
  else return false;
}

var drawerVisibility = ref(false);

const props = defineProps({
  title: { type: String, default: "" },
});

const activeIndex = ref("1");

function sortingRoutChange(route: string) {
  router.router.push({ path: `${router.base}Sorting/${route}` });
}

function dataStructureRouteChange(route: string) {
  router.router.push({ path: `${router.base}DataStructures/${route}` });
}

function homeRoute() {
  router.router.push({ path: `${router.base}` });
}

function getTitle(): string {
  if (props.title != "") {
    return props.title;
  }
  return "Sorting Algorithms";
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
