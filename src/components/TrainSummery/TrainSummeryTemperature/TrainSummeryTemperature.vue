<template>
<div class="right-tep-box">
                <div class="row">
                <div class="col-md-12">
                    <div class="table-container">
                            <h6 class="title-font-alarm">Temperature Detail</h6>
                            <div class="scroll-mainview-train-temp">
                            <table class="table table-bordered">
                                    <thead class="thead-summary">
                                      <tr>
                                        <th>Axel No</th>
                                        <th>Coach No</th>
                                        <th>Position</th>
                                        <th>Axle Temp. MP</th>
                                        <th>Axle Temp. AP</th>
                                        <th>Wheel Temp. MP</th>
                                        <th>Wheel Temp. AP</th>
                                        <th>Disk Brake Tem. MP</th>
                                        <th>Disk Brake Tem. AP</th>
                                        <th>Axle Speed</th>
                                        <th>Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      
                        <tr v-for="(temperature,temp) in trainIdKey" :key="temp">
                            <td>{{temperature.IntAxleNo}}</td>
                            <td>{{temperature.NvcharCoachNo}}</td>
                            <td>{{temperature.IntCoachPosition}}</td>
                            <td v-if="temperature.is_Alarm && temperature.is_LH" style="background-color:red"> {{temperature.DecTs1}}</td>
                            <td v-else-if="temperature.is_Warning && temperature.is_LH" style="background-color:yellow"> {{temperature.DecTs1}}</td>
                            <td v-else> {{temperature.DecTs1}}</td>
                            <td v-if="temperature.is_Alarm && temperature.is_RH" style="background-color:red">{{temperature.DecTs2}}</td>
                            <td v-else-if="temperature.is_Warning && temperature.is_RH" style="background-color:yellow">{{temperature.DecTs2}}</td>
                            <td v-else>{{temperature.DecTs2}}</td>
                            <td>{{temperature.DecTs3}}</td>
                            <td>{{temperature.DecTs4}}</td>
                            <td>{{temperature.DecTs5}}</td>
                            <td>{{temperature.DecTs6}}</td>
                            <td>{{temperature.DecAxel_Speed}}</td>
                            <td>{{temperature.NvcharDescription}}</td>
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

<style>
.right-tep-box {
    width: 85%;
    float: right;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    margin-left: 0.15625%;
    min-height: 340px;
    margin-bottom: 10px;
    }
.table-container{
    width: 100%;
    padding: 10px;
    float: left;
    position: relative;
    font-size: 13px;
    color: #666666;
}
.title-font-alarm{
    font-size: 10px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 4px;
    float: left;
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
.table .thead-summary th{
    background-color: #dcdcdc !important;
    color: #000000 !important;
}
.table .thead-drk th{
    background-color: #ed2160;
    color: #ffffff;
}
.table{
    margin-bottom: 0px !important;
}

  /* Custom Scrollbar using CSS */
.scroll-mainview-train-temp{
 height: 300px; 
 width:100%; 
 overflow-x: hidden; 
 overflow-x: auto; 
 text-align:justify; 
 float: left;
}

/* scrollbar width */
.scroll-mainview-train-temp::-webkit-scrollbar {
  width: 8px;
}

/* scrollbar track */
.scroll-mainview-train-temp::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.scroll-mainview-train-temp::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  
}



</style>