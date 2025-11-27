import Vue from 'vue';
import App from './App.vue'; 
import Router from 'vue-router'; 
import routerConfig from './router'; 
import 'semantic-ui-css/semantic.min.css'; 

Vue.config.productionTip = false; 
Vue.use(Router); 
const router = new Router(routerConfig); 
new Vue({ 
  router, 
  render: h => h(App) 
}).$mount('#app');