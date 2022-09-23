import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import VSorting from '/src/Views/VSorting.vue'
import BubbleSort from '/src/componentS/Algo/BubbleSort.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Sorting',
        name: "Sorting", 
        component: VSorting,
        children: [{
            path: 'BubbleSort',
            component: BubbleSort
        }]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router