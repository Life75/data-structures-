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
const base = '/data-structures-/'
 
const routes = [
    
    {
        path: base,
        name: 'Home',
        component: Home,
        meta: {
            fullPath: `${base}`,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>`
        }
    },

    {
        path: `${base}Sorting`,
        name: 'Sorting',
        component: VSorting,
        children: [{
            path: 'BubbleSort',
            component: BubbleSort,
            name: "Bubble Sort",
            
            meta: {
                fullPath: `${base}Sorting/BubbleSort`
            }
        },
        {
            path: `QuickSort`,
            component: QuickSort,
            name: "Quick Sort",
            meta: {
                fullPath: `${base}Sorting/QuickSort`
            }
        },
        {
            path: `MergeSort`,
            component: MergeSort,
            name: "Merge Sort",
            meta: {
                fullPath: `${base}Sorting/MergeSort`
            }
        }
    ]
    },
    {
        path: `${base}DataStructures`,
        name: 'Data Structures',
        component: VDataStructures, 
        children: [{
            path: 'Queue',
            component: Queue,
            name: "Queue",
            meta: {
                fullPath: `${base}DataStructures/Queue`
            }
        },
        {
            path: `Stack`,
            name: "Stack",
            component: Stack,
            meta: {
                fullPath: `${base}DataStructures/Stack`
            }
        }
    ]
    },
    {
        path: `${base}Recursion`, 
        name: `Recursion`,
        component : VRecursion, 
        children: [{
            path: `Fibonacci`,
            component: FibonacciRecursion, 
            name: `Fibonacci Recursion`,
            meta: {
                fullPath: `${base}Recursion/Fibonacci`
            }
        }]
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


export default {router, routes, base}
