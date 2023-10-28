<template>
<div>
<ul class="flex justify-between space-x-10 pt-8">
  <li class="">
    <el-icon :size="24" @click="drawer = true"><Menu /></el-icon>
  </li>
  <li class=" justify-center">
  </li>
  <li class="">
    
  </li>
</ul>
<el-drawer v-model="drawer" :with-header="true" size="70%" direction="ltr" custom-class="bg-neutral-950">

    <ul v-for="(item, index) in routeList" style="list-style-type:none;" class="">

      <Transition name="none"  >
      <!--TODO add this in later -->
      <span>
      <hr class="border-t-2 border-solid ">
              <div v-if="item.dropdown" class="p-3 flex">
                <div class="mr-auto">{{ item.header }}</div>
                <div class="border-l-2 justify-end  border-solid "></div>
                <div class="ml-2"> <el-icon><ArrowDown /></el-icon> </div>
              </div>
      </span>
      </Transition>
    </ul>
    <!--Here we work and place the animation for the routes to follow through as well-->
  </el-drawer>
</div>
</template>

<script setup lang="ts">
import { ref, watch, Ref } from 'vue';
import router from '../router';

//give this a try perhaps for the html for an accordian style https://element-plus.org/en-US/component/collapse.html
interface mobileRoute  {
  header: String,
  show?: Boolean 
  dropdown?: Boolean
  //routeAction: () => {}
}

var drawer = ref(false)
var routeList: Ref<Array<mobileRoute>> = ref([{
  header: "Data Structures",
  dropdown: true
  },
  {
    header: "Algorithims",
    dropdown: true
  }
])


var testList = ref(["a", "b", "c"])

watch(drawer, (before, after) => {
  if(drawer.value) {
    for (let i = 0; i < routeList.value.length; ++i) {
      
      timer(routeList.value[i], i * 1000)
    }
    function timer (item: mobileRoute, delay: number) {
      setTimeout(() => {
        item.show = true
        console.log('going thru')
      }, delay)
    }
    //else statement loop and make all the items show false
  }
})



function sortingRoutChange(route: string) {
  router.router.push({ path: `${router.base}Sorting/${route}` });
}

function dataStructureRouteChange(route: string) {
  router.router.push({ path: `${router.base}DataStructures/${route}` });
}

function homeRoute() {
  router.router.push({ path: `${router.base}` });
  console.log(`${router.base}` )
}


//example: https://stackoverflow.com/questions/50271541/how-can-i-animate-list-items-to-be-apeared-one-by-one-with-javascript
//need to setup where they slide into place

</script>

<style>



.slide-up-enter-active {
  
  transition: all .2s ease-out;
}

.slide-up-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>