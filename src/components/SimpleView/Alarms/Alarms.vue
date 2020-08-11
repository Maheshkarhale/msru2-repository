<template>
    <div class="p-r">
                <div class="table-container">
                        <h6 class="title-font-alarm">List of Alarms</h6>
                    <div class="custom-scrollbar-css-alarm-tbl">     
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
                                  <tr v-for="(alarms,alarmtemp) in allTrain_Alarm " :key="alarmtemp">
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
            </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
    name:'Alarms',
     computed:{
      ...mapGetters(['allTrain_Alarm'])
     
    },
}
</script>
<style  scoped>

 
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
 .table .thead-drk th{
    background-color: #ed2160;
    color: #ffffff;
}
 .table td, .table th{
    padding: 5px;
   
  }
  table {
    border-collapse: collapse;
    width: 100%;
    padding: 300px;
    top: 10px;
   
  }
          
  th, td {
      padding: 10px;
  }
  table, td, th {  
            border: 1px solid #e4edef;
            text-align: left;
 }

  thead,th{
     font-size: 12px;
   
     font-weight: 600;
  
  }
  tbody,td{
    font-size: 13px;
    background-color: #ffffff;
 
  
  } 
  .tbl-axle{
      padding: 10px;
      border-radius: 100px;
  }
 .p-r{
     padding-right: 0px !important;
 }
.custom-scrollbar-css-alarm-tbl {
 height: 130px; 
 width:100%; 
 overflow-x: hidden; 
 overflow-x: auto; 
 text-align:justify; 
 float: left;
}



/* scrollbar width */
.custom-scrollbar-css-alarm-tbl::-webkit-scrollbar {
  width: 8px;
}

/* scrollbar track */
.custom-scrollbar-css-alarm-tbl::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.custom-scrollbar-css-alarm-tbl::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  
}
 
</style>