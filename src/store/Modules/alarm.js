import Alarm from '../../API/alarmAPI';

const state={
    train_alarm:[],
   
}
const getters={
 allTrain_alarm:state=>state.train_alarm,
   }
const actions={
async TrainAlarmData({commit},trainIdAlarm){
const response=await Alarm.GetAllAlarm(trainIdAlarm);
console.log("alarm response",response.data)
commit('tblTrianAlarm',response.data)
},


}

const mutations={
    tblTrianAlarm:(state,TrainAlarmData)=>{
        state.train_alarm=TrainAlarmData;
    },

  
}
export default{
    state,
    getters,
    actions,
    mutations
}