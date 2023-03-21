import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
// 常用组件可全局注册，不常用可局部注册
import { Button, showToast } from 'vant';

import './assets/main.css'

const app = createApp(App)

app.use(router)
  .use(Button)

app.mount('#app')
