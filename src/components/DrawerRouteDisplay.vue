<template>

  <ul v-for="route in router.routes" class="space-y-2 font-medium">
    <Transition name="slide-right" > 
    <li v-if="moutned">

      <a
        href="#"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span class="ml-3">{{ route.name }}</span>
      </a>
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
//need a trigger watcher 
onMounted(()=> {
  moutned.value = true
})


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

</style>
