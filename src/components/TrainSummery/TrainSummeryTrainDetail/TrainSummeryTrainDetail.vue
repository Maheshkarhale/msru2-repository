<template>
   <div class="left">
        <div class="left-box-mainview">
          <div class="scroll-mainview-train-detail">
         <!-- first box  -->
           <div class="title-left">
                 Train Parameters
            </div>
            <div class="container-left-mainview">
                 <div class="container-left-top" style="width:100%">
                <select class="form-control-sourcetech" style="width:100%"  v-on:change="fetchDataByIdMainView($event)" id="sel1">
                       <option  v-for="(trasaction,i) in getAllTrainTransaction" :key="i" :value="trasaction.IntTrainId" >{{trasaction.NvcharDescription}}</option>
               </select>
            </div>
           <div class="mainview-mar">
                <div class="container-left-top">
                <span class="data-left-title">Train name</span>
                    <span class="data-left-discription">
                        <div class="form-group">
                            <input v-for="(trainTrans,i) in getSelectedTrainTRansaction" :key="i" type="text" class="form-control-sourcetech1" :value="trainTrans.NvcharTrainName" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter Train name">
                        </div>
                    </span>
                </div>
</div>
                <div class="container-left-top">
                    <span class="data-left-title">Train No.</span>
                        <span class="data-left-discription">
                            <div class="form-group">
                                <input type="email" class="form-control-sourcetech1"  id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter Train number">
                            </div>
                        </span>
                    </div>
                
                
                <ul v-for="(trainTrans,i) in getSelectedTrainTRansaction" :key="i">

                    <li>
                        <span class="data-left-title-sec">Train date</span>
                        <span class="data-left-discription-sec" >
                            {{trainTrans.DtDateTime.substring(2,10)}}
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Train time</span>
                        <span class="data-left-discription-sec">
                              {{trainTrans.DtDateTime.substring(11,19)}} 
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Avg Speed</span>
                        <span class="data-left-discription-sec">
                           {{trainTrans.DecAvg_Speed}}
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Direction</span>
                        <span class="data-left-discription-sec">
                                {{trainTrans.nvcharDirection}}
                        </span>
                    </li>

                </ul>


            </div>
        <!-- first box end -->

        <!-- second box -->
              <div class="title-left">
             Rollina stock Details 
           </div>
            <div class="container-left-mainview">
                <ul v-for="(trainTrans,i) in getSelectedTrainTRansaction" :key="i">
                    <li>
                        <span class="data-left-title-sec">ICF Coachhes</span>
                        <span class="data-left-discription-sec">
                                 {{trainTrans.IntNo_ICF}}
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">LHB Coaches</span>
                        <span class="data-left-discription-sec">
                               {{trainTrans.IntNo_LHB}}
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Loco</span>
                        <span class="data-left-discription-sec">
                           {{trainTrans.IntNo_Loco}}
                        </span>
                    </li>
                    
                    <li>
                        <span class="data-left-title-sec">Wagaons</span>
                        <span class="data-left-discription-sec">
                                   {{trainTrans.IntNo_Wagaons}}
                        </span>
                    </li>
                       <li>
                        <span class="data-left-title-sec">Other Stock</span>
                        <span class="data-left-discription-sec">
                            {{trainTrans.IntOther_Stack}}
                        </span>
                    </li>
                      <li>
                        <span class="data-left-title-sec">Total no Axles</span>
                        <span class="data-left-discription-sec">
                                {{trainTrans.IntTotalNoOfAxles}}
                        </span>
                    </li>
                  </ul>
            </div>
        <!-- second box end -->

         <!-- third box -->
        <div class="title-left">
                Axle Box Temperature Details 
           </div>
            <div class="container-left-mainview">
                <ul>
                        <li>
                        <span class="data-left-title-sec">Max. Temp</span>
                        <span class="data-left-discription-sec">
                         {{getmaxTempOfAxelLHRH}}
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Total Warning</span>
                        <span class="data-left-discription-sec">
                           {{TotalNoOfWarning}}
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Min Temp</span>
                        <span class="data-left-discription-sec">
                         {{getminTempOfAxelLHRH}}
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Total Alarms</span>
                        <span class="data-left-discription-sec">
                        {{TotalNoOfAlarm}}
                        </span>
                    </li>
                  </ul>
            </div>

            <!-- third end -->

            <!-- forth box -->

            <div class="title-left">
                Wheel Temperature Details 
            </div>
            <div class="container-left-mainview">
                <ul>
                   <li>
                        <span class="data-left-title-sec">Max. Temp</span>
                        <span class="data-left-discription-sec">
                        <!-- {{getmaxTempOfWheel}} -->NA
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Total Warning</span>
                        <span class="data-left-discription-sec">
                       <!-- {{TotalNoOfWarning}} -->NA
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Min Temp</span>
                        <span class="data-left-discription-sec">
                         <!-- {{getminTempOfWheel}} -->NA
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Total Alarms</span>
                        <span class="data-left-discription-sec">
                             <!-- {{TotalNoOfAlarm}}  -->NA
                        </span>
                    </li>
                  </ul>
            </div>

            <!-- fourth box end -->

             <!-- fifth box-->

             <div class="title-left">
                Brake Disc Temperature 
            </div>
            <div class="container-left-mainview">
                <ul>

                   <li>
                        <span class="data-left-title-sec">Max. Temp</span>
                        <span class="data-left-discription-sec">
                            <!-- {{getmaxTempOfBrake}} -->NA
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Total Warning</span>
                        <span class="data-left-discription-sec">
                           <!-- {{TotalNoOfWarning}} -->NA
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Min Temp</span>
                        <span class="data-left-discription-sec">
                            <!-- {{getminTempOfBrake}} -->NA
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec">Total Alarms</span>
                        <span class="data-left-discription-sec">
                         <!-- {{TotalNoOfAlarm}} -->NA
                        </span>
                    </li>
                  </ul>
                </div>
                <!-- sixth box   -->
                <div class="title-left">
                Hanging Part Detection
            </div>
            <div class="container-left-mainview">
                <ul>

                  <li>
                        <span class="data-left-title-sec-bot">Total No. of Hanging Part Detected</span>
                        <span class="data-left-discription-sec">
                          NA
                        </span>
                    </li>
                    <li>
                        <span class="data-left-title-sec-bot">Critical No. of Hanging Part Detected</span>
                        <span class="data-left-discription-sec">
                           NA
                        </span>
                    </li>
                  </ul>
                </div>
                <!-- sixth box end -->
                </div>        
            </div>

           </div>

</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
     data:function()
    {
        return{
            selectTrain:{},
        }
    },
    computed:{
        ...mapGetters(['getAllTrainTransaction','getSelectedTrainTRansaction','getSelectedTrain',
                      'getSelectedTrainAlarm','getSelectedTrainWarnig',
                      'TotalNoOfAlarm','TotalNoOfWarning','getminTempOfAxelLHRH','getmaxTempOfAxelLHRH',
                      'getminTempOfWheel','getmaxTempOfWheel','getminTempOfBrake','getmaxTempOfBrake'])
    },
    methods:{
        ...mapActions(['TrainTransactionSet','SelectedTrainTransaction']),
  
     fetchDataByIdMainView(event,value){
      let id=event?event.target.value:value;
      this.SelectedTrainTransaction(id); 
      this.$emit("trainId",id) ;
      this.$emit("trainIdAlarm",id);  
      this.$emit("intTrainWarnigId",id);    
      console.log(id)
     
    }
   
    
    },
    created:async function(){
        await this.TrainTransactionSet();
        let allTrains=this.getAllTrainTransaction;
        this.fetchDataByIdMainView(false,allTrains[0].IntTrainId)
        let seletedTrainArray=this.getSelectedTrainTRansaction;
        this.selectTrain=seletedTrainArray[0];
       
    },

}
</script>

<style>

</style>