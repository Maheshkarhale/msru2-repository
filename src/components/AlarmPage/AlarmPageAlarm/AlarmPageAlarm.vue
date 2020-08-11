<template>
    <div class="p-r">
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
                                    <th>Error</th>
                                  </tr>
                                </thead>
                               
                                <tbody>
                                  <tr v-for="(alarms,alarmtemp) in allTrain_Alarm " :key="alarmtemp">
                                    <td>{{alarms.IntAxelNo}}</td>
                                    <td>{{alarms.NvcharCoachNo}}</td>
                                    <td>{{alarms.IntCoachPosition}}</td>
                                    <td>{{alarms.NvcharSide}}</td>
                                    <td>{{alarms.DecTemperature}}</td>
                                    <td>{{alarms.NvcharDescription}}</td>
                                 
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