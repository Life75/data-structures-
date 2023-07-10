import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import VSorting from '/src/Views/VSorting.vue'
import BubbleSort from '/src/algorithims/BubbleSort.vue'
import QuickSort from '/src/algorithims/QuickSort.vue'
import MergeSort from '/src/algorithims/MergeSort.vue'
import VDataStructures from '/src/Views/VDataStructures.vue'
import Queue from '/src/components/DataStructures/Queue.vue'
import Stack from '/src/components//DataStructures/Stack.vue'
 
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            fullPath: `/`
        }
    },
    {
        path: '/Sorting',
        name: 'Sorting',
        component: VSorting,
        children: [{
            path: 'BubbleSort',
            component: BubbleSort,
            meta: {
                fullPath: `/Sorting/BubbleSort`
            }
        },
        {
            path: 'QuickSort',
            component: QuickSort,
            meta: {
                fullPath: `/Sorting/QuickSort`
            }
        },
        {
            path: 'MergeSort',
            component: MergeSort,
            meta: {
                fullPath: `/Sorting/MergeSort`
            }
        }
    ]
    },
    {
        path: '/DataStructures',
        name: 'Data Structures',
        component: VDataStructures, 
        children: [{
            path: 'Queue',
            component: Queue,
            meta: {
                fullPath: `/DataStructures/Queue`
            }
        },
        {
            path: 'Stack',
            component: Stack,
            meta: {
                fullPath: `/DataStructures/Stack`
            }
        }
    ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default {router, routes}
