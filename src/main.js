import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { BiCartCheck, HiSolidSearch } from "oh-vue-icons/icons"

addIcons(BiCartCheck, HiSolidSearch)

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon)
app.mount('#app')
