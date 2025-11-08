import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/main.css'

import docs from './assets/posts/example_post.yaml'

console.log(docs.title)
console.log(docs.body)

const app = createApp(App)

app.use(router)

app.mount('#app')
