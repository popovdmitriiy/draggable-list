import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

router.beforeEach(async (to, from, next) => {
  const cols = store.getters.dashboardCols;

  if (!cols || !cols.length) {
    await store.dispatch('dashboardInit');
  }

  return next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
