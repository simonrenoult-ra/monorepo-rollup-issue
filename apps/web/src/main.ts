import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { sayHi } from '@monorepo/core'

createApp(App).mount('#app')
sayHi('web')
