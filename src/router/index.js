import Vue from "vue";
import Router from "vue-router";
import SimpleView from "../components/SimpleView/SimpleView";
import MainView from "../components/MainView/MainView";
import Login from "../components/Login/Login";
import AlarmPage from "../components/AlarmPage/AlarmPage";
import TrainSummery from "../components/TrainSummery/TrainSummery";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import Camera from "../components/ControlPanel/OperationAndControl/SystemConfiguration/Camera/Camera";
import Proxy from "../components/ControlPanel/OperationAndControl/SystemConfiguration/Proxy/Proxy";
import Pyrometer from '../components/ControlPanel/OperationAndControl/SystemConfiguration/Pyrometer/Pyrometer'
Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/msru",
      component: Login,
    },
    {
      path: "/msru/simpleview",
      component: SimpleView,
      name: "SimpleView",
      meta:{
        requiresAuth: true
     }
    },
    {
      path: "/msru/controlpanel",
      component: ControlPanel,
      meta:{
        requiresAuth: true
     },
      children: [
        {
          path: "/camera",
          component: Camera,
        },
        {
          path: "/proxy",
          component: Proxy,
        },
        {
          path:'/pyrometer',
          component: Pyrometer
        },
      ],
    },
    {
      path: "/msru/mainview",
      component: MainView,
      meta:{
        requiresAuth: true
     }
    },
    {
      path: "/msru/alarmpage",
      component: AlarmPage,
      meta:{
        requiresAuth: true
     }
    },
    {
      path: "/msru/trainsummery",
      component: TrainSummery,
      name: "TrainSummery",
      meta:{
        requiresAuth: true
     }
    },
    // {
    //   path:'/camera',component:camera,
    // },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("IntUserId") == null) {
      next({
        path: "/msru",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
