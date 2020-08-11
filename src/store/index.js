import Vuex from 'vuex';
import Vue from 'vue';
import VueGoogleCharts from 'vue-google-charts'
import temperatureModule from './Modules/temperature';
import trainTransactionModule from './Modules/trainTransaction';
import alarmModule from './Modules/alarm';
import warningModule from './Modules/warning';
import LoginModule from './Modules/login';
import CameraModule from './Modules/camera';
import ProxyModule from './Modules/proxy';
import PyrometerModule from './Modules/pyrometer';
Vue.use(Vuex);
Vue.use(VueGoogleCharts);

export default new Vuex.Store({
    modules:{
        temperatureModule,
        trainTransactionModule,
        alarmModule, 
        warningModule,
        LoginModule,
        CameraModule,
        ProxyModule,
        PyrometerModule
    }
})