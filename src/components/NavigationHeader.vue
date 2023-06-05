<template>
    <el-menu 
      :default-active="activeIndex"
      class="border-[#141414]"
      mode="horizontal"
      :ellipsis="false"
      background-color="#141414"
      text-color="#E5EAF3"
      active-text-color="#85ce61"
      style="background-color: transparent"
    >
      <el-menu-item index="0"> <span class="text-white" @click="homeRoute()">Algorithms and Data Structures</span>
 <router-link to="/"></router-link></el-menu-item>
        
      <span class=""></span>
      <div class="flex-grow" />
      <div>{{props.title}}</div> 
      <el-sub-menu   index="1">
        <template #title> Sorting Algorithms </template>
        <el-menu-item  index="1-1" @click="sortingRoutChange('BubbleSort')">  
        <router-link to="/Sorting/BubbleSort/">Bubble Sort</router-link>
        </el-menu-item>
        <el-menu-item index="1-2" @click="sortingRoutChange('MergeSort')">Merge Sort</el-menu-item>
        <el-menu-item index="1-3" @click="sortingRoutChange('QuickSort')">
          <router-link to="/Sorting/QuickSort/">Quick Sort </router-link></el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>Data Structures</template>
        <el-sub-menu index="2-4">
          <template #title>Linked Lists</template>
          <el-menu-item index="2-4-1" @click="dataStructureRouteChange('Queue')">Queues</el-menu-item>
          <el-menu-item index="2-4-2" @click="dataStructureRouteChange('Stack')">Stack</el-menu-item>
        </el-sub-menu>
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

  function sortingRoutChange(route: string) {
    router.push({path: `/Sorting/${route}`});
  }

  function dataStructureRouteChange(route: string) {
    router.push({path: `/DataStructures/${route}`});
  }

  function homeRoute() {
    router.push({path: '/'})
  }

  function getTitle(): string {
    if(props.title != ''){
      return props.title
    }
    return "Sorting Algorithms"
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>