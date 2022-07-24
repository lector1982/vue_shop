import { createApp } from 'vue'
import App from './App.vue'
import store from '@/vuex/store'
import '@/assets/tailwind/index.css'

createApp(App).use(store).mount('#app')
