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
<el-drawer v-model="drawer" title="I am the title" :with-header="false" size="70%" direction="ltr" custom-class="bg-neutral-950">
    <li v-for="(item, index) in list">
        <span :class="item">{{ index }} {{ item }}</span>
    </li>
    <!--Here we work and place the animation for the routes to follow through as well-->
  </el-drawer>
</div>
</template>

<script setup lang="ts">
import { ref, watch, Ref } from 'vue';
interface classList {
  data: any
  className?: String 
}

var drawer = ref(false)
var list: Ref<Array<classList>> = ref([{
  data: 1,
  className: "n"
},
{
  data: 2,
  className: "n"
}, 
{
  data: 3, 
  className: "n"
}
])
var testList = ref(["a", "b", "c"])

watch(drawer, (before, after) => {
  if(drawer.value) {
    for (let i = 0; i < testList.value.length; ++i) {
      fadeIn(testList.value[i], i * 1000)
    }
    function fadeIn (item, delay) {
      setTimeout(() => {
        item = ('fadein')
      }, delay)
    }
  }
})



//example: https://stackoverflow.com/questions/50271541/how-can-i-animate-list-items-to-be-apeared-one-by-one-with-javascript
</script>

<style>
.fade-item {
    transition: .2s all ease-in-out;
    opacity: 0;
}

.fadein {
    animation: fadeIn 0.9s 1;
    animation-fill-mode: forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>