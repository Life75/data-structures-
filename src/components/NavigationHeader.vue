<template>
    <el-menu 
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">Algorithms and Data Structures <router-link to="/"></router-link></el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="1">
        <template #title>Sorting Algorithms</template>
        <el-menu-item index="1-1">
        <router-link to="/Sorting/BubbleSort/">Bubble Sort</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">Merge Sort</el-menu-item>
        <el-menu-item index="1-3">
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
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>