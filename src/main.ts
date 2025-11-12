import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/main.css'

import loadPost from './composables/yaml'

const docs = await loadPost('example_post')

console.log(docs)

const app = createApp(App)

app.use(router)

app.mount('#app')
