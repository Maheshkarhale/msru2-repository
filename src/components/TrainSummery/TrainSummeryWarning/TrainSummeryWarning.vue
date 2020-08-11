<template>
    <div class="p-l">
  <div class="table-container">
          <h6 class="title-font-warning">List of Warning</h6>
        <div class="custom-scrollbar-css-warning"> 
          <table class="table table-bordered">
                  <thead class="thead-light">
                    <tr>
                      <th>Axel No</th>
                      <th>Coach No</th>
                      <th>Position</th>
                      <th>Side</th>
                      <th>Temp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for='(warning,tblwarning) in allTrain_Warning' :key="tblwarning">
                      <td>{{warning.IntAxelNo}}</td>
                      <td>{{warning.NvcharCoachNo}}</td>
                      <td>{{warning.IntCoachPosition}}</td>
                      <td>{{warning.NvcharSide}}</td>
                      <td>{{warning.DecTemperature}}</td>
                      <td>{{warning.NvcharDescription}}</td>
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
    name:'TrainSummeryWarnings',
   
    computed:{
      ...mapGetters(['allTrain_Warning','TotalNoOfWarning'])
    
     },
   created:function(){
     console.log(TotalNoOfAlarm);
   let  TotalNoOfAlarm=this.TotalNoOfWarning;
    },
    
}

</script>
<style>
.title-font-warning{
    font-size: 10px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 4px;
    float: left;
}
</style>