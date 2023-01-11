<template>
    <el-menu 
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
    >
      <el-menu-item index="0">Algorithms and Data Structures  
 <router-link to="/"></router-link>{{props.title  }}</el-menu-item>
      <div class="flex-grow" /> 
      <el-sub-menu index="1">
        <template #title>Sorting Algorithms</template>
        <el-menu-item index="1-1" @click="changeRoute('BubbleSort')">  
        <router-link to="/Sorting/BubbleSort/">Bubble Sort</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">Merge Sort</el-menu-item>
        <el-menu-item index="1-3" @click="changeRoute('QuickSort')">
          <router-link to="/Sorting/QuickSort/">Quick Sort </router-link></el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>Data Structures</template>
        <el-menu-item index="2-1">Linked List</el-menu-item>
        <el-menu-item index="2-2">Binary Trees</el-menu-item>
        <el-menu-item index="2-3">Doublely Linked List</el-menu-item>
      </el-sub-menu>
    </el-menu>
    
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import router from '../router';

  const props = defineProps({
    title: {type: String, default: ''}
  })
  
  const activeIndex = ref('1')

  function changeRoute(route: string) {
    router.push({path: `/Sorting/${route}`});
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>