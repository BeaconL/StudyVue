
import App from './App.vue';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.prototype.x = 99;

new Vue({
    render: h => h(App)
}).$mount('#app');
