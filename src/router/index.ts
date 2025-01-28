import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import VSorting from '/src/Views/VSorting.vue'
import BubbleSort from '/src/algorithims/BubbleSort.vue'
import QuickSort from '/src/algorithims/QuickSort.vue'
import MergeSort from '/src/algorithims/MergeSort.vue'
import VDataStructures from '/src/Views/VDataStructures.vue'
import Queue from '/src/components/DataStructures/Queue.vue'
import Stack from '/src/components//DataStructures/Stack.vue'
import NotFound from '/src/components/NotFound.vue'
import Roadmap from '../components/Roadmap.vue'
import VRecursion from '../Views/VRecursion.vue'
import FibonacciRecursion from '../Recursion/FibonacciRecursion.vue'
import Maze from '../components/DataStructures/Maze.vue'
import HeapSort from '../algorithims/HeapSort.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { fullPath: '/' }
  },
  {
    path: '/algorithm',
    name: 'Algorithms',
    meta: { fullPath: '/algorithm' },
    children: [
      {
        path: 'sorting',
        name: 'Sorting',
        component: VSorting,
        meta: { 
          fullPath: '/algorithm/sorting',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-down" viewBox="0 0 16 16"><path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/><path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/></svg>'
        },
        children: [
          { 
            path: 'bubble', 
            name: 'Bubble Sort',
            component: BubbleSort,
            meta: { fullPath: '/algorithm/sorting/bubble' }
          },
          { 
            path: 'merge', 
            name: 'Merge Sort',
            component: MergeSort,
            meta: { fullPath: '/algorithm/sorting/merge' }
          },
          { 
            path: 'quick', 
            name: 'Quick Sort',
            component: QuickSort,
            meta: { fullPath: '/algorithm/sorting/quick' }
          }, 
         //{   
         //  path: 'heap',
         //  name: 'Heap Sort',
         //  component: HeapSort,
         //  meta: { fullPath: '/algorithm/sorting/heap' }
         //} 
        ]
      }
    ]
  },
  {
    path: '/data-structures',
    name: 'Data Structures',
    component: VDataStructures,
    meta: { 
      fullPath: '/data-structures',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/></svg>'
    },
    children: [
      { 
        path: 'queue', 
        name: 'Queue',
        component: Queue,
        meta: { fullPath: '/data-structures/queue' }
      },
      { 
        path: 'stack', 
        name: 'Stack',
        component: Stack,
        meta: { fullPath: '/data-structures/stack' }
      }
    ]
  }
]

//test this solution first https://stackoverflow.com/questions/48521177/404-when-reloading-a-vue-website-published-to-github-pages
//{
//    path: `${base}:catchAll(.*)`, component: NotFound//not catching all like: http://127.0.0.1:5173/Sorting/BubbleSor for example
//},
//

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, left: 0 }; 
    }
})


export default {router, routes}


