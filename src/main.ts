import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// ElementPlus 和 其 css文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 粒子特效
import Particles from 'particles.vue3'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Particles)

app.mount('#app')