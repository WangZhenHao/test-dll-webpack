import { createApp } from "vue";
import axios from 'axios'
import elemet from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'     //Our .vue startup file

//Will mount the vue app inside a HTML element which id equals to "app" (div into templetes/index.html file)
var app = createApp(App)
app.use(elemet);

app.mount('#app');
window.axios = axios;

