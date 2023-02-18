import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import VSorting from '/src/Views/VSorting.vue'
import BubbleSort from '/src/algorithims/BubbleSort.vue'
import QuickSort from '/src/algorithims/QuickSort.vue'
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
        }
    ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router