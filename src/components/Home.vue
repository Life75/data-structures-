<template>
  <div class="text-xl mt-4 font-serif text-white pt-20 w-full flex-row justify-between">
    <div class="text-left  md:flex gap-x-72 ">
      <h1 class="text-3xl md:w-1/3 md:text-4xl ">  <p> <Transition name="slide-fade"> <p v-show="headerMotion">Visualize </p> </Transition > <Transition name="slide-fade-delay1"><p v-show="headerMotion" class="text-green-400">Algorithims</p> </Transition> <Transition name="slide-fade-delay2"> <p v-show="headerMotion">in Action</p></Transition></p>
      <p class="pt-40 text-2xl">This project was designed to help showcase the beauty in data structures and help soldify a firm grasp into how these respected algorithms work</p>
      
      </h1> 
      <div class="md:w-1/2 md:ml-5"><AnimationDisplay/></div> 
    </div>
    <div class="pt-20 pb-10 w-2/3 ">

    </div>
      <BentoLayout v-if="!isMobile()" :bento="arr">
        <template #0>
          <HorizontalCard title="Quick Sort" 
              description="Quick sort is a highly efficient sorting algorithm that follows the divide-and-conquer approach. It selects a pivot element and recursively sorts the elements around it. On average, it has a time complexity of O(n log n), making it one of the fastest sorting algorithms. However, in the worst case, it can have a time complexity of O(n^2). Optimization techniques minimize the chances of worst-case scenarios."
              type="Sorting algorithim"
          >
          <template #footer>
            <button class=" text-green-500 font-semibold  border border-gray-400 rounded shadow buttonAnimation">Explore</button>
          </template>
              </HorizontalCard>
        
        </template>
        <template #1>
          <HorizontalCard title="Bubble Sort" 
              description="Bubble sort is a simple sorting algorithm that repeatedly steps through a list of elements and compares adjacent elements, swapping them if they are in the wrong order. It continues this process until the entire list is sorted. In each iteration, the largest (or smallest) element *bubbles* to its correct position, hence the name *bubble sort.* While bubble sort is straightforward to understand and implement, it is not efficient for large datasets as its time complexity is O(n^2), where n is the number of elements to be sorted. "
              type="Sorting algorithim"
          >
          <template #footer>
            <button class=" text-green-500 font-semibold  border border-gray-400 rounded shadow buttonAnimation">Explore</button>
          </template>
              </HorizontalCard>
        
        </template>

        <template #2>
          <HorizontalCard title="Merge Sort" 
              description="Merge sort is a highly efficient sorting algorithm that utilizes the divide-and-conquer strategy. It divides the list into smaller sublists, recursively sorts them, and then merges them to obtain a sorted list. With an average time complexity of O(n log n), merge sort is a reliable choice for sorting large datasets. It avoids worst-case scenarios and guarantees consistent performance. "
              type="Sorting algorithim"
          >
          <template #footer>
            <button class=" text-green-500 font-semibold  border border-gray-400 rounded shadow buttonAnimation">Explore</button>
          </template>
              </HorizontalCard>
        
        </template>

        <template #3>
          <HorizontalCard title="Linked Lists" 
              description="Linked lists are a data structure used to store and organize data. Unlike arrays, linked lists do not require contiguous memory. Instead, they consist of nodes that contain data and a reference to the next node. This chain-like structure allows for dynamic memory allocation and efficient insertion and deletion operations. However, accessing elements in a linked list is slower compared to arrays, as it requires traversing the list from the beginning. Linked lists are commonly used when the size of the data is unknown or when frequent insertions and deletions are expected. "
              type="Sorting algorithim"
          >
          <template #footer>
            <span class="flex space-x-10">
              <button class=" text-green-500 font-semibold  border border-gray-400 rounded shadow buttonAnimation p-2 px-2">Explore Queue </button>
              <button class=" text-green-500 font-semibold  border border-gray-400 rounded shadow buttonAnimation p-2">Explore Stack </button>
                
            </span>
          </template>
              </HorizontalCard>
        
        </template>
        
      </BentoLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AnimationDisplay from './AnimationDisplay.vue';
import BentoLayout from './BentoLayout.vue';
import HorizontalCard from './HorizontalCard.vue';
//    <Card class="w-28 h-2/5"><AnimationDisplay/> </Card>

var headerMotion = ref(false)
const arr = [24, 32, 36, 32]
onMounted(() => {
  headerMotion.value = true
})

function isMobile(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

}

//const bubbleSortDescription = ref("")

</script>
//fit this color schema https://realtimecolors.com/?colors=e5eaf3-141414-bef264-f9f5fa-22d3ee 300 green/cyan
<style>


.buttonAnimation:hover {
  animation-name: up-movement;
  animation-duration: .6s;  
  animation-fill-mode: forwards;  
  box-shadow: 0 0 50px 15px #48abe0;

  @apply text-green-300 shadow-lg bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F]; 
}

@keyframes up-movement {
  from { }
  to { 
    transform: translateY(-4px);
  }
}








.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}




.slide-fade-delay1-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-delay1-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-delay1-enter-from,
.slide-fade-delay1-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}





.slide-fade-delay2-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-delay2-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-delay2-enter-from,
.slide-fade-delay2-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
