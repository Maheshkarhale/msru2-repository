<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 p-top">
            <div class="col-4"></div>
        <AlarmPageTrainDetail @trainId="getTrainId" @trainIdAlarm="getTrainAlarmId" @intTrainWarnigId="getTrainWarningId"></AlarmPageTrainDetail>
         <div class="right1">
             <div class="row">
                <div class="col-md-6 p-r">
                   <LHChart></LHChart>
               </div>
                 <div class="col-md-6 p-l">
                    <RHChart></RHChart>
                 </div>
       </div>
  <div class="col-md-12">
                        <div class="print-contai">
                            <span class="btn-mar"><button type="button" class="btn-print">Print</button></span>
                            <span class="btn-mar"><button type="button" class="btn-download">Download as xls</button></span>
                            <span class="btn-mar"><button type="button" class="btn-download">Download as csv</button></span>
                            <span class="btn-mar"><button type="button" class="btn-download">Download as pdf</button></span>
                        </div>
                    </div>
         </div>  
         
            <div class="alarm-warning-box">
            <div class="row">
                <div class="col"><AlarmPageAlarm v-bind:alarmIdKey="AlarmData" ></AlarmPageAlarm></div>
                <div class="col"><AlarmPageWarning v-bind:trainWarningIdKey="WarningData" ></AlarmPageWarning></div>
            </div>
        </div>
        </div>   
      </div>   
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>  
 </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import AlarmPageTrainDetail from '../AlarmPage/AlarmPageTrainDetail/AlarmPageTrainDetail';
import AlarmPageAlarm from '../AlarmPage/AlarmPageAlarm/AlarmPageAlarm';
import AlarmPageWarning from '../AlarmPage/AlarmPageWarning/AlarmPageWarning';
import LHChart from '../MainView/LH_Chart/LH_Chart';
import RHChart from '../MainView/RH_Chart/RH_Chart';
import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';
export default {
    name:'MainView',

      data:function(){
        return{
            isLoading: false,
            AlarmData:[],
            WarningData:[],
            TemperatureData:[],
        }
    },
     computed:{...mapGetters(['allTrain_Temperature','getAllTrainTransaction','allTrain_alarm','allTrain_warnign','TotalNoOfWarning','TotalNoOfAlarm',])}
    ,
    methods:{
        ...mapActions(['Train_temperaturelog','TrainTransactionSet','TrainAlarmData','TrainWarningData']),
   
   getTrainId:async function(trainId)
        {
               this.isLoading=true,
               this.trainIdResult=trainId;
               console.log("Train id from Main view",trainId);
               await this.Train_temperaturelog(trainId);
               this.TemperatureData=this.allTrain_Temperature;
               console.log("Train id from temp",this.TemperatureData);
               this.isLoading=false
            },
          getTrainAlarmId:async function(trainIdAlarm){
                  this.alarmIdResult=trainIdAlarm;
                  console.log("Train id from Main view",trainIdAlarm);
                  await this.TrainAlarmData(trainIdAlarm);
                  this.AlarmData=this.allTrain_alarm;
                  console.log("MainView Alarm Data",this.AlarmData);
            
          },
              getTrainWarningId:async function(intTrainWarnigId){
                  this.warningResult=intTrainWarnigId;
                  console.log("Train id from Main view",intTrainWarnigId);
                  await this.TrainWarningData(intTrainWarnigId);
                  this.WarningData=this.allTrain_warnign;
                  
          }
        }
    ,
    components:{
        AlarmPageTrainDetail,
        AlarmPageAlarm,
        AlarmPageWarning,
        RHChart,
        Loading,
        LHChart
    }
}
</script>
<style>
.AlarmPagealarm-AlarmPagewarning{
     float: right;
     background-color: #fff;
     border-radius: 4px;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
     height: auto;
     margin-left: 0.15625%;
     min-height: 250px;
     margin-bottom: 10px;
     width: 100%;
     min-height: 250px;
     position: relative;
     top: 70px;
}

.alarm-warning-box{
        width: 85%;
    float: right;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    margin-left: 0.15625%;
    height: auto;
    min-height: 395px;
    margin-bottom: 10px;

}

.right1{
    width: 85%;
    float: right;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    margin-left: 0.15625%;
    height: auto;
    min-height: 250px;
    margin-bottom: 10px;

}
.print-contai{
    position: relative;
    margin: 0 auto;
    padding: 10px;
    
}

.btn-print{
    color: #fff;
    background-color: #ed2160;
    border: 0px;
    font-size: 12px;
    border-radius: 5px;
    padding: 2px 6px 2px 6px;
    text-transform: uppercase;
}
.btn-download{
    color: #fff;
    background-color: #000080;
    border: 0px;
    font-size: 12px;
    border-radius: 5px;
    padding: 2px 6px 2px 6px;
    text-transform: uppercase;
}
.btn-mar{
    margin: 5px;
}


</style>