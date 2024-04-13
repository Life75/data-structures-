import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import './index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'


const vuetify = createVuetify({
  components: {
    ...components, 
    ...labsComponents
  },
  directives,

})


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.use(vuetify)
.use(ElementPlus)
.use(autoAnimatePlugin)
.use(router.router)
.mount('#app')
