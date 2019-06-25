import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './style/global.scss';
import theme from './style/theme';
import App from './App.vue';
import {router} from './router';
import store from './store';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueSocketIO from 'vue-socket.io';
import {BASE_API_URL} from "./utils/constant";
import VueScrollTo from 'vue-scrollto';
import vuexI18n from 'vuex-i18n';
import {translationsFr} from "./translations/fr_FR";
import {translationsEn} from "./translations/en_GB";

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('fr', translationsFr);
Vue.i18n.add('en', translationsEn);

Vue.i18n.set('fr');

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: false,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

Vue.use(new VueSocketIO({
    debug: true,
    connection: BASE_API_URL,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}));

Vue.config.productionTip = false;
Vue.use(Vuetify, { theme });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
