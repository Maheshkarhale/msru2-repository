<template>
<div id="MainViewAlarm">
    <div class="table-container">
        <h6 class="title-font-alarm">List of Alarms</h6>
         <div class="custom-scrollbar-css-alarm"> 
        <table class="table table-bordered">
                <thead class="thead-drk">
                  <tr>
                    <th>Axel No</th>
                    <th>Coach No</th>
                    <th>Position</th>
                    <th>Side</th>
                    <th>Temp</th>
                  </tr>
                </thead>
                <tbody>
                 <tr v-for="(alarms,alarmtemp) in alarmIdKey " :key="alarmtemp">
                        <td>{{alarms.IntAxelNo}}</td>
                        <td>{{alarms.NvcharCoachNo}}</td>
                        <td>{{alarms.IntCoachPosition}}</td>
                        <td>{{alarms.NvcharSide}}</td>
                        <td>{{alarms.DecTemperature}}</td>
                </tr>
                  
                </tbody>
              </table>
         </div>
    </div>
      <div class="table-container">
                 <!--This div For graph  -->
     </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'MainViewAlarm',
    props:['alarmIdKey'],
     computed:{
      ...mapGetters(['allTrain_Alarm'])
     
    },
}
</script>

<style >
div.scroll { 
 height: 100px; 
 width:100%; 
 overflow-x: hidden; 
 overflow-x: auto; 
 text-align:justify; 
 float: left;
 }

 .custom-scrollbar-css-alarm{
 height: 130px; 
 width:100%; 
 overflow-x: hidden; 
 overflow-x: auto; 
 text-align:justify; 
 float: left;
}



/* scrollbar width */
.custom-scrollbar-css-alarm::-webkit-scrollbar {
  width: 8px;
}

/* scrollbar track */
.custom-scrollbar-css-alarm::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.custom-scrollbar-css-alarm::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  
}
</style>