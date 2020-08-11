import TemperatureAPI from '../../API/temperatureAPI';
import AlarmAPI from '../../API/alarmAPI';
import WarningAPI from '../../API/warningAPI';
import {setTemperatureLog} from './Helper/temperature';
const state={
    train_temperature:[],
    train_warning:[],
    train_alarm:[],
    minTemp:0,
    maxTemp:0,
    minApTemp:0,
    maxApTemp:0,
    minTempOfAxelLHRH:0,
    maxTempOfAxelLHRH:0,
    minTempOfWheelLHRH:0,
    maxTempOfWheelLHRH:0,
    minTempOfBrakeLHRH:0,
    maxTempOfBrakeLHRH:0,
    mainViewCoach1:[],
    mainViewCoach2:{},
    temperatureLogForLHChart:[],
    temperatureLogForRHChart:[],
    coachPosition1:1,
    coachPosition2:2,
  }
  const getters={
    allTrain_Temperature:state=>state.train_temperature,
    allTrain_Warning:state=>state.train_warning,
    allTrain_Alarm:state=>state.train_alarm,
    TotalNoOfAlarm:state=>state.train_alarm.length,
    TotalNoOfWarning:state=>state.train_warning.length,
    getMinTemp:state=>state.minTemp,
    getMaxTemp:state=>state.maxTemp,
    getMinApTemp:state=>state.minApTemp,
    getMaxApTemp:state=>state.maxApTemp,
    getCoachMainViewData:state=>state.mainViewCoach1,
    getminTempOfAxelLHRH:state=>state.minTempOfAxelLHRH,
    getmaxTempOfAxelLHRH:state=>state.maxTempOfAxelLHRH,
    getminTempOfWheel:state=>state.minTempOfWheelLHRH,
    getmaxTempOfWheel:state=>state.maxTempOfWheelLHRH,
    getminTempOfBrake:state=>state.minTempOfBrakeLHRH,
    getmaxTempOfBrake:state=>state.maxTempOfBrakeLHRH,
    getTemperatureLogForLHChart:state=>state.temperatureLogForLHChart,
    getTemperatureLogForRHChart:state=>state.temperatureLogForRHChart,
    getCoachPosition1:state=>state.coachPosition1,
    getCoachPosition2:state=>state.coachPosition2,
  }
  const actions={
    async Train_temperaturelog({commit},trainId){
        const response=await TemperatureAPI.GetTemperatur(trainId);
        const alarmResponse=await AlarmAPI.GetAllAlarm(trainId);
        const warningResponse=await WarningAPI.GetAllWarning(trainId);
        let dataToBePassed=[];
        dataToBePassed.push(response.data);
        dataToBePassed.push(alarmResponse.data);
        dataToBePassed.push(warningResponse.data);
        commit('setmstTrain_Temperaturelog',dataToBePassed);
      },
    async getTemperatureLogForCoach({commit,state},coachPosition){
       let mainViewCoachData=[];
       console.log("Checking coach data",state.train_temperature);
       for(let i=0;i<state.train_temperature.length;i++)
       {
         let flagCheck=0;
         if(state.train_temperature[i].IntCoachPosition==coachPosition)
         {flagCheck=1}
         else
         {
           flagCheck=0;
         }
         if(flagCheck==1)
         {
          mainViewCoachData.push(state.train_temperature[i]);
         }
       }
       commit('setCoachPosition',mainViewCoachData);
    },
    async setStateCoachPositionWithPosition({commit},data){
     commit('setStateCoachPosition',data);
    } ,
    async setStateCoachPositionWithPositionForChart({commit},data){
      commit('setStateCoachPositionForChart',data);
     } ,     
  }
  const mutations={
    setmstTrain_Temperaturelog:(state,data)=>{
      setTemperatureLog(state,data);
      },
      setCoachPosition:function(state,data){
       state.mainViewCoach1=data;
      },
      setStateCoachPosition:function(state,data){
        if(state.coachPosition1<2 && data<0)
        {
          console.log("empty")
        }
        else if(data==0)
        {
          state.coachPosition1=1;
          state.coachPosition2=2;
        }
        else{
          state.coachPosition1=state.coachPosition1+data;
          state.coachPosition2=state.coachPosition2+data;
        }
      },
      setStateCoachPositionForChart:function(state,data){
        if(data%2==0)
        {
          state.coachPosition2=parseInt(data);
          state.coachPosition1=parseInt(data)-1;
        }
        else
        {
          state.coachPosition1=parseInt(data);
          state.coachPosition2=parseInt(data)+1; 
        }
      }
     
  }
  export default{
      state,
      getters,
      actions,
      mutations
  }