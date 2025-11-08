import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/main.css'

import { loadAll } from 'js-yaml'
import docsRaw from '@/resources/posts/example_post.yaml?raw'

const docs = loadAll(docsRaw)

console.log(docs)

const app = createApp(App)

app.use(router)

app.mount('#app')
