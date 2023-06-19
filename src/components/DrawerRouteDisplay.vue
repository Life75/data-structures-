<template>
  
      <ul v-for="route in router.routes" class="space-y-2 font-medium">
         <li>
         <el-divider></el-divider>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="ml-3">{{ route.name }}</span>
            </a>
         </li>
         
      </ul>
      
</template>

<script setup lang="ts">
import router from '../router';
//add animation next like this https://tetsugakure.market/
console.log(router.routes)
</script>
