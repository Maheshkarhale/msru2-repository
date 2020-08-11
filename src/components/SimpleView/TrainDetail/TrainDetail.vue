<template>
   <div>
   <div id="TrainDetail">
       <div class="title-left" style="height: 30px;margin-top:12px">
                    <div class="user-title" v-for="(user,i) in GetUser" :key="i">
                     <span style="font-size: 12px; font-weight:500">Name :- {{user.NvcharFullName}}</span>
                   <!--  <p style="font-size: 12px; font-weight:600"  v-for="(trasaction,i) in getSelectedTrainTRansaction" :key="i">{{trasaction.DtDateTime}}</p>-->
                    </div>
                   </div>
   </div>
   <div id="TrainDetail">
   <div class="p-top">
      <div class="left-box1" style="width: 100%;">
            <div class="scroll-one">
                
                  <div class="title-left" style="height: 50px;">
                    <div class="head-title">
                    <span >ARRIVAL DATE & TIME</span>
                     <p   v-for="(trasaction,i) in getSelectedTrainTRansaction" :key="i">{{trasaction.DtDateTime}}</p>
                    </div>
                   </div>

        <div class="container-left-mainview">
                <ul v-for="(trasaction,i) in getSelectedTrainTRansaction" :key="`${i}-${trasaction.nvcharDirection}`">
                   <li>
                        <span class="data-right-title-sec">Direction</span>
                        <span class="data-right-discription-sec">
                       {{trasaction.nvcharDirection}}
                        </span>
                    </li>
                    <li>
                        <span class="data-right-title-sec">Avg. Speed</span>
                        <span class="data-right-discription-sec">
                         {{trasaction.DecAvg_Speed.toFixed(1)}}
                        </span>
                    </li>
                    <li>
                        <span class="data-right-title-sec">Total No. of Engines</span>
                        <span class="data-right-discription-sec">
                         {{trasaction.IntNo_Loco}}
                        </span>
                    </li>
                    <li>
                        <span class="data-right-title-sec">Total No. of Axles</span>
                        <span class="data-right-discription-sec">
                            {{trasaction.IntTotalNoOfAxles}} 
                        </span>
                    </li>
                       <li>
                        <span class="data-right-title-sec">Total No. of Alarms</span>
                        <span class="data-right-discription-sec">
                            {{TotalNoOfAlarm}}
                        </span>
                    </li>
                       <li>
                        <span class="data-right-title-sec">Total No. of Warning</span>
                        <span class="data-right-discription-sec">
                            {{TotalNoOfWarning}}
                        </span>
                    </li>
                       <li>
                        <span class="data-right-title-sec">Max Temperature MP</span>
                        <span class="data-right-discription-sec">
                           {{getMaxTemp}}
                        </span>
                    </li>
                       <li>
                        <span class="data-right-title-sec">Min Temperature MP</span>
                        <span class="data-right-discription-sec">
                            {{getMinTemp}}
                        </span>
                    </li>
                       <li>
                        <span class="data-right-title-sec">Max Temperature AP</span>
                        <span class="data-right-discription-sec">
                           {{getMaxApTemp}}
                        </span>
                    </li>
                       <li>
                        <span class="data-right-title-sec">Min Temperature MP</span>
                        <span class="data-right-discription-sec">
                          {{getMinApTemp}}
                        </span>
                    </li>
                  </ul>
            </div>

         <!-- <div class="train-data">
            <tr v-for="(trasaction,i) in getSelectedTrainTRansaction" :key="`${i}-${trasaction.nvcharDirection}`">
                <th  class="tbl-td" scope="row">Direction</th>
                <td class="tbl-td">{{trasaction.nvcharDirection}}</td>
            </tr>
            <tr v-for="(trasaction,i) in getSelectedTrainTRansaction" :key="i">
                <th class="tbl-td"  scope="row">Avg. Speed</th>
                <td class="tbl-td">{{trasaction.DecAvg_Speed}}</td>
            </tr>
            <tr v-for="(trasaction,i) in getSelectedTrainTRansaction" :key="`${i}-${trasaction.IntNo_Loco}`">
                <th class="tbl-td" scope="row">Total No. of Engines</th>
                <td class="tbl-td">{{trasaction.IntNo_Loco}}</td>
            </tr>
            <tr v-for="(trasaction,i) in getSelectedTrainTRansaction" :key="`${i}-${trasaction.IntTotalNoOfAxles}`">
                <th  class="tbl-td" scope="row">Total No. of Axles</th>
                <td class="tbl-td">{{trasaction.IntTotalNoOfAxles}}</td>
            </tr>
            <tr>
                <th  class="tbl-td" scope="row">Total No. of Alarms</th>
                <td class="tbl-td">{{TotalNoOfAlarm}}</td>
            </tr>
            <tr>
                <th class="tbl-td"  scope="row">Total No. of Warning</th>
                <td class="tbl-td">{{TotalNoOfWarning}}</td>
            </tr>
            <tr>
                <th class="tbl-td"  scope="row">Max Temperature MP</th>
                <td class="tbl-td">{{getMaxTemp}}</td>
            </tr>
            <tr>
                <th class="tbl-td"  scope="row">Min Temperature MP</th>
                <td class="tbl-td">{{getMinTemp}}</td>
            </tr>
            <tr>
                <th  class="tbl-td" scope="row">Max Temperature AP</th>
                <td class="tbl-td">{{getMaxApTemp}}</td>
            </tr>
            <tr>
                <th  class="tbl-td"  scope="row">Min Temperature AP</th>
                <td class="tbl-td">{{getMinApTemp}}</td>
            </tr>
         </div> -->
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
    name:'TrainDetail',

    computed:{
        ...mapGetters(['getSelectedTrainTRansaction','TotalNoOfAlarm','TotalNoOfWarning','getMaxTemp'
                      ,'getMinTemp','getMinApTemp','getMaxApTemp','GetUser'])
    },
    methods:{
        ...mapActions(['TrainTransactionSet']),
  
   
    
    },
   
    created(){
        this.TrainTransactionSet();
    },

}
</script>
<style>
 .left-box1{

     background-color: #fff;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
     border-radius: 4px;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
     height: 100vh;
     
     margin-bottom: 10px;
     width: 100%;
}
  td, th {  
            border-bottom: 1px solid #e4edef;
            text-align:left !important;
         
 }
 .tbl-td{
font-size: 12px;
width: 100%;
font-weight: 500;
padding: 5px;
 }
 .head-title{
font-size: 12px; 
font-weight:500
 }
 .user-title{
    font-size: 12px; 
    font-weight:500 
 }
 .data-right-title-sec {
    font-size: 12px;
    color: #000000;
    padding-right: 10px;
    font-weight: 500;
    width: 130px;

}
.data-right-discription-sec {
    font-size: 12px;
    color: #000000;
    font-weight: 500;
    width: 70px;
}

    .container-left-mainview ul li {
   
    display: inline-flex;
    margin-bottom: 5px;
    text-align: left;
}
</style>