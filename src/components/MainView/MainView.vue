<template>
<div id="MainVie">
 <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 p-top">
        <MainViewTrainDetail @trainId="getTrainId" @trainIdAlarm="getTrainAlarmId" @intTrainWarnigId="getTrainWarningId"></MainViewTrainDetail>
         <div class="right">
             <div class="row LH-RH-chart">
                <div class="col-md-6 p-r">
                   <LHChart ></LHChart>
               </div>
                 <div class="col-md-6 p-l">
                    <RHChart></RHChart>
                 </div>
                </div>
                <div class="row">
                <div class="col-md-6 p-r">
                   <MainViewAlarm v-bind:alarmIdKey="AlarmData"></MainViewAlarm>
               </div>
                 <div class="col-md-6 p-l">
                    <MainViewWarning v-bind:trainWarningIdKey="WarningData"></MainViewWarning>
                 </div>
                </div>
         </div>  
            <div class="right">
               <CoachView v-bind:trainIdKey="TemperatureData" ></CoachView>
            </div>    
        </div>   
      </div>     
 </div>
 <Loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></Loading>
 </div>

</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import MainViewTrainDetail from '../MainView/MainViewTrainDetail/MainViewTrainDetail';
import MainViewAlarm from '../MainView/MainViewAlarm/MainViewAlarm';
import MainViewWarning from '../MainView/MainViewWarning/MainViewWarning';
import CoachView from '../MainView/CoachView/CoachView';
import LHChart from '../MainView/LH_Chart/LH_Chart';
import RHChart from '../MainView/RH_Chart/RH_Chart';
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name:'MainView',

      data:function(){
        return{
            isLoading: false,
            fullPage:true,
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
        MainViewTrainDetail,
        MainViewAlarm,
        MainViewWarning,
        CoachView,
        RHChart,
        LHChart,
         Loading,
    }
}
</script>

<style>
.leftside{
    background: gray;
}

nav.navbar.navbar-expand-sm.bg-dark.navbar-dark{
    padding: 0px;
}
a.navbar-brand{
    padding: 0px;
}
nav.navbar.navbar-expand-sm.navbar-dark{
    background-color: #00043e;
}
.navbar{
    padding: 0px !important;
}


.left-box{
    width: 100%;
    float: left;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    min-height: auto;
    margin-bottom: 10px;
}
.left-box .mar-bot{
margin-bottom: 10px;
}

.right{
    width: 85%;
    float: right;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    margin-left: 0.15625%;
    min-height: auto;
    margin-bottom: 10px;

}
.p-top{
    padding-top: 15px;
}
.title-left{
    background-color: #f5f5f5;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 5px 10px 5px 10px;
    border-radius: 4px 4px 0px 0px;
    border-bottom: 1px solid #ebebeb;
}
.title-left-bot{
    background-color: #f5f5f5;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid #ebebeb;
    border-top: 1px solid #ebebeb;
}
.container-left{
    padding: 10px;
}
.container-left-data{
    padding: 10px;
}


.data-right-ti-top{
    font-size: 10px;
    color: #000000;
    padding-right: 10px;
    font-weight: 500;
   
}

.data-right-title-top{
    font-size: 10px;
    color: #000000;
    padding-right: 10px;
    font-weight: 500;
    
}










.container-left ul{
    list-style: none;
    padding: 0px;
    line-height: 15px;
    margin-bottom: 0px;
}

.container-left ul li{
    display: inline-flex;
    margin-bottom: 5px;    
}


.container-right-top{
    display: inline-flex;
    float: left;
    position: relative;
    padding-right: 10px;
}


.mar-bot{
    margin-bottom:10px;
}
.table-container{
    width: 100%;
    padding: 10px;
    float: left;
    position: relative;
    font-size: 13px;
    color: #666666;
}
.title-font{
    font-size: 10px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 4px;
}
.table tr th{
    font-size: 13px;
    
    font-weight: 400;
}
.table td, .table th{
    padding: 2px 2px 2px 10px !important;
}
.table td{
    font-size: 13px;
    color: #666666;
}
.table .thead-light th{
    background-color: #f0a055 !important;
    color: #ffffff !important;
}

.table .thead-drk th{
    background-color: #ed2160;
    color: #ffffff;
}
.table{
    margin-bottom: 0px !important;
}
.p-r{
    padding-right: 0px !important;
   
}
.LH-RH-chart{
 bottom: 130px !important;
}
.p-l{
    padding-left: 0px !important;
}
.coach-view-left{
    width: 34%;
    float: left;
    position: relative;
    padding: 10px;
    color: #666666;
}
.coach-view-right{
    width: 66%; 
    float: right;
    position: relative;
    padding: 10px;
    font-size: 13px;
    color: #666666;
}
.train-one{
    width: 49%;
    float: left;
    position: relative;
    /* margin-right: 2%; */
}
.train-two{
    width: 49%;
    float: left;
    position: relative;
    margin-left: 2%;
    margin-top: 4px;
}
.heading{
    font-size: 12px;
    font-weight: 500;
    color: #000000;
}
</style>