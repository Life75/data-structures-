import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import VSorting from '/src/Views/VSorting.vue'
import BubbleSort from '/src/algorithims/BubbleSort.vue'
import QuickSort from '/src/algorithims/QuickSort.vue'
import MergeSort from '/src/algorithims/MergeSort.vue'
import VDataStructures from '/src/Views/VDataStructures.vue'
import Queue from '/src/components/DataStructures/Queue.vue'
import Stack from '/src/components//DataStructures/Stack.vue'
const base = '/data-structures-/'
 
const routes = [
    {
        path: base,
        name: 'Home',
        component: Home,
        meta: {
            fullPath: `${base}`
        }
    },
    {
        path: `${base}Sorting`,
        name: 'Sorting',
        component: VSorting,
        children: [{
            path: 'BubbleSort',
            component: BubbleSort,
            meta: {
                fullPath: `${base}Sorting/BubbleSort`
            }
        },
        {
            path: `QuickSort`,
            component: QuickSort,
            meta: {
                fullPath: `${base}Sorting/QuickSort`
            }
        },
        {
            path: `MergeSort`,
            component: MergeSort,
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
            meta: {
                fullPath: `${base}DataStructures/Queue`
            }
        },
        {
            path: `Stack`,
            component: Stack,
            meta: {
                fullPath: `${base}DataStructures/Stack`
            }
        }
    ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default {router, routes, base}
