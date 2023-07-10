<template>

  <ul v-for="route in router.routes" class="space-y-2 font-medium">
    <Transition name="slide-right" > 
    <li v-if="moutned">
      <div         class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
> 
     
      <div v-if="route.children == undefined" @click="routeChange(route)">{{ route.name }} </div>
     <el-dropdown v-else>
    <span class="text-white">
      {{ route.name }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="childRoute in route.children" class="" @click="routeChange(childRoute)">{{ childRoute.component.name }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
     
    </div>
      <el-divider></el-divider>

    </li>
  </Transition>
  </ul>
 
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import router from "../router";
//add animation next like this https://tetsugakure.market/
var moutned = ref(false)

const emit = defineEmits<{
  (e: `routeChange`): void 
}>();
//need a trigger watcher 
onMounted(()=> {
  moutned.value = true
})

function routeChange(childRoute: any) {
  router.router.push(childRoute.meta.fullPath)
  emit('routeChange')
}

function sortingRoutChange(route: string) {
    router.router.push({path: `/Sorting/${route}`});
  }

  function dataStructureRouteChange(route: string) {
    router.router.push({path: `/DataStructures/${route}`});
  }

</script>

<style>
.slide-right-enter-active {
  transition: all 1s ease-out;
}

.slide-right-leave-active {
  transition: all 0.8s cubic-bezier(0, 0, 0, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateY(100px);
  opacity: 0;
}


.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
