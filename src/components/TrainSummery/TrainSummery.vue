<template>
    <div class="container-fluid">

  <div class="row">
        <div class="col-md-12 p-top">
            <div class="col-4"></div>
        <TrainSummeryTrainDetail @trainId="getTrainId" @trainIdAlarm="getTrainAlarmId" @intTrainWarnigId="getTrainWarningId"></TrainSummeryTrainDetail>
         <div class="alarms-warning-LH-RH">
             <div class="row">
                <div class="col-md-3 p-r">
                    <TrainSummeryAlarm v-bind:alarmIdKey="AlarmData"></TrainSummeryAlarm>
                  
               </div>
               <div class="col-md-3 p-r">
                    <TrainSummeryWarnings v-bind:alarmIdKey="WarningData"></TrainSummeryWarnings>
                  
               </div>
                 <div class="col-md-3">
                     <div class="LHChart-hight"><LHChart></LHChart></div>
                 </div>
                  <div class="col-md-3">
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
       
     
         <TrainSummeryTemperature v-bind:trainIdKey="TemperatureData"></TrainSummeryTemperature>
    
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
import TrainSummeryTrainDetail from '../TrainSummery/TrainSummeryTrainDetail/TrainSummeryTrainDetail';
import TrainSummeryAlarm from '../TrainSummery/TrainSummeryAlarm/TrainSummeryAlarm';
import TrainSummeryWarnings from '../TrainSummery/TrainSummeryWarning/TrainSummeryWarning';
import TrainSummeryTemperature from '../TrainSummery/TrainSummeryTemperature/TrainSummeryTemperature'
import LHChart from '../MainView/LH_Chart/LH_Chart';
import RHChart from '../MainView/RH_Chart/RH_Chart';
import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';
export default {
    name:'TrainSummery',

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
        TrainSummeryTrainDetail,
        TrainSummeryAlarm,
        TrainSummeryWarnings,
        TrainSummeryTemperature,
         RHChart,
         Loading,
         LHChart
    }

}
</script>

<style>
.alarms-warning-LH-RH{
    width: 85%;
    float: right;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    margin-left: 0.15625%;
    height: auto;
    min-height: 265px;
    margin-bottom: 10px;
}
</style>