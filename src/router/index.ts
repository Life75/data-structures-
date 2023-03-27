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
        children: [
            {
                path: 'BubbleSort',
                component: BubbleSort
            }
        ]
    },
    {
        path: '/Sorting',
        component: VSorting,
        children: [{
            path: 'BubbleSort',
            component: BubbleSort,
        },
        {
            path: 'QuickSort',
            component: QuickSort
        },
        {
            path: 'MergeSort',
            component: MergeSort
        }
    ]
    },
    {
        path: '/DataStructures',
        component: VDataStructures, 
        children: [{
            path: 'Queue',
            component: Queue
        },
        {
            path: 'Stack',
            component: Stack
        }
    ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router