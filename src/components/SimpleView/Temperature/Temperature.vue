<template>
<div>
 <div class="second-col">
   <div class="right">
   
 <div class="tbl-axle">
 <div class="custom-scrollbar-css-tbl">
  <table class="table table-fixed">
     <thead class="thead-axle">
        <tr>
          <th>Axel No</th>
          <th>Coach Position</th>
          <th>MP side Axle Temp(°C)</th>
          <th>AP side Axle Temp(°C)</th>
        </tr>
      </thead>
     
      <tbody >
         
         <!-- v-for="temp in computeCoachPosition(trainIdKey)" :key="alarms" -->
        <tr v-for="(temperature,temp) in trainIdKey" :key="temp">
            <td v-if="temperature.isNewCoach" style="background-color:#ffe5c8" >{{temperature.IntAxleNo}}</td>
            <td v-else>{{temperature.IntAxleNo}}</td>
            <td v-if="temperature.isNewCoach" style="background-color:#ffe5c8">{{temperature.IntCoachPosition}}</td>
            <td v-else></td>
            <td v-if="temperature.is_Alarm && temperature.is_LH" style="background-color:#fbb4c5"> {{temperature.DecTs1}}</td>
            <td v-else-if="temperature.is_Warning && temperature.is_LH" style="background-color:#ffe5c8"> {{temperature.DecTs1}}</td>
            <td v-else-if="temperature.isNewCoach" style="background-color:#ffe5c8"> {{temperature.DecTs1}}</td>
            <td v-else> {{temperature.DecTs1}}</td>
            <td v-if="temperature.is_Alarm && temperature.is_RH" style="background-color:#fbb4c5">{{temperature.DecTs2}}</td>
            <td v-else-if="temperature.is_Warning && temperature.is_RH" style="background-color:#ffe5c8">{{temperature.DecTs2}}</td>
            <td v-else-if="temperature.isNewCoach" style="background-color:#ffe5c8">{{temperature.DecTs2}}</td>
            <td v-else>{{temperature.DecTs2}}</td>

        </tr>
         
        </tbody>
  
  </table>
</div>
  </div>
 </div>
 </div>
 </div>
 
    
</template>
<script> 

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name:'Temperature',
    props:['trainIdKey'],
    data:function(){
        return{
            temperature:this.trainIdKey,
            
        }
    },
    
    computed:{
      ...mapGetters(['allTrain_Temperature','getSelectedTrain','allTrain_alarm']),
    },
    methods:{...mapActions(['Train_temperaturelog']),
     },
    created:function(){
        
     this.temperature=this.allTrain_Temperature;
    },
    updated:function(){ 
     console.log("Updated",this.trainIdKey);
    }
    
}
</script>
<style  scoped>



/* Custom Scrollbar using CSS */
.custom-scrollbar-css-tbl {
 height: 400px; 
 width:100%; 
 overflow-x: hidden; 
 overflow-x: auto; 
 text-align:justify; 
 float: left;
}

/* scrollbar width */
.custom-scrollbar-css-tbl::-webkit-scrollbar {
  width: 8px;
}

/* scrollbar track */
.custom-scrollbar-css-tbl::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.custom-scrollbar-css-tbl::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;

}

.table th td{
    padding: 10px;
    border-radius: 2px;
      
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

 .right{
     width: 100%;
    float: right;
     background-color: #fff;
     border-radius: 4px;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
     height: 250px;
     margin-left: 0.15625%;
     height: auto;
     min-height:430px;
     margin-bottom: 10px;
     width: 100%;

 }
 
.second-col{
   position: relative;
   top: 15px;
}

.title{
    
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 5px 10px 5px 10px;
    border-radius: 4px 4px 0px 0px;
}

.thead-axle {
    background-color: #2b82e6;
    color:#ffffff;
}


.table .thead-light th{
    background-color: #f0a055;
    color: #ffffff ;
}

.table .thead-drk th{
    background-color: #ed2160;
    color: #ffffff;
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
 .data-left-title{
     font-size: 10px;
     color: #000000;
     padding-right: 10px;
     font-weight: 500;
     width: 115px;
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
 
 
 
 .data-left-status{
     font-size: 10px;
     color: #000000;
     padding-right: 10px;
     font-weight: 500;
     width: 70px;
 }
 
 .data-left-title-sec-bot{
     font-size: 10px;
     color: #000000;
     padding-right: 10px;
     font-weight: 500;
     width: 142px;
 }
 
 .data-left-discription{
     font-size: 14px;
     color: #666666;
 }
 .data-left-con{
     font-size: 14px;
     color: #666666;
     width: 100px;
 }
 .data-left-discription-sec{
     font-size: 13px;
     color: #666666;
 }
 
 .container-left ul{
     list-style: none;
     padding: 0px;
     line-height: 15px;
     margin-bottom: 0px;
 }
 .form-control-sourcetech{
     display: block;
     width: 100%;
     padding-left: 5px;
     padding-right: 5px;
     line-height: 17px;;
     font-size: 10px;

     color: #495057;
     background-color: #fff;
     background-clip: padding-box;
     border: 1px solid #ced4da;
     border-radius: .25rem;
     transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
 }
 .container-left ul li{
     display: inline-flex;
     margin-bottom: 5px;    
 }
 .container-left-top{
     display: inline-flex;
     float: left;
     position: relative;

 }
 
 .container-right-top{
     display: inline-flex;
     float: left;
     position: relative;
     padding-right: 10px;
 }
 
 
 
 
  .tbl-axle{
      padding: 10px;
      border-radius: 100px;
  }
 .p-r{
     padding-right: 0px !important;
 }
 .p-l{
     padding-left: 0px !important;
 }
</style>