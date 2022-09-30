import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import './index.css'

createApp(App)
.use(ElementPlus)
.use(autoAnimatePlugin)
.use(router)
.mount('#app')
