<template>
<div class="container-fluid">
<div class="row">
    
    <div class="col-2"><TrainTransaction @trainId="getTrainId" @trainIdAlarm="getTrainAlarmId" @intTrainWarnigId="getTrainWarningId"></TrainTransaction></div>
    <div class="col-8">
        <div class="temprature"  > <Temperature v-bind:trainIdKey="TemperatureData" ></Temperature></div>
        <div class="alarm-warning">
            <div class="row">
                <div class="col-6"><Alarms v-bind:alarmIdKey="AlarmData" ></Alarms></div>
                <div class="col-6"><Warnings v-bind:trainWarningIdKey="WarningData" ></Warnings></div>
            </div>
        </div>
    </div> 
    <div class="col-2">
         <TrainDetail></TrainDetail>
    </div>
</div>
<loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
</loading>
</div>
   





</template>

<script>
import Alarms from './Alarms/Alarms';
import Warnings from './Warnings/Warnings';
import Temperature from './Temperature/Temperature';
import TrainTransaction from './TrainTransaction/TrainTransaction';
import TrainDetail from './TrainDetail/TrainDetail'
import {mapActions,mapGetters} from 'vuex';
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'SimpleView',
    components:{
        Alarms,
        Warnings,
        Temperature,
        TrainTransaction,
        TrainDetail,
        Loading
    },
    data:function(){
        return{
            isLoading: false,
            trainIdResult:0,
            alarmIdResult:0,
            warningResult:0,
            TemperatureData:[],
            AlarmData:[],
            WarningData:[],
        }
    }
    ,
    computed:{...mapGetters(['allTrain_Temperature','getAllTrainTransaction','allTrain_alarm','allTrain_warnign','TotalNoOfWarning'])}
    ,
    methods:{
        ...mapActions(['Train_temperaturelog','TrainTransactionSet','TrainAlarmData','TrainWarningData']),
        getTrainId:async function(trainId)
        {     this.isLoading = true;
               this.trainIdResult=trainId;
               console.log("Train id from Main view",trainId);
               await this.Train_temperaturelog(trainId);
               this.TemperatureData=this.allTrain_Temperature;
               console.log("Train id from temp",this.TemperatureData);
               this.isLoading = false;
            },
          getTrainAlarmId:async function(trainIdAlarm){
                  this.alarmIdResult=trainIdAlarm;
                  console.log("Train id from Main view",trainIdAlarm);
                  await this.TrainAlarmData(trainIdAlarm);
                
                  this.AlarmData=this.allTrain_alarm;
            
          },
              getTrainWarningId:async function(intTrainWarnigId){
                  this.warningResult=intTrainWarnigId;
                  console.log("Train id from Main view",intTrainWarnigId);
                  await this.TrainWarningData(intTrainWarnigId);
                  this.WarningData=this.allTrain_warnign;
                  
          }
        }
    ,
    created(){
    
    },
}
</script>

<style  scoped>

.alarm-warning{
      float: right;
     background-color: #fff;
     border-radius: 4px;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
     height: auto;
     margin-left: 0.15625%;
     min-height: 200px;
     margin-bottom: 10px;
     width: 100%;
     position: relative;
     top: 30px;
 
}

</style>