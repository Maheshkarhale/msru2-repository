<template>
<div>
    <div class="table-container">
        <h6 class="title-font-warnig">List of Warning</h6>
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
                  <tr v-for='(warning,tblwarning) in trainWarningIdKey' :key="tblwarning">
                      <td>{{warning.IntAxelNo}}</td>
                      <td>{{warning.NvcharCoachNo}}</td>
                      <td>{{warning.IntCoachPosition}}</td>
                      <td>{{warning.NvcharSide}}</td>
                      <td>{{warning.DecTemperature}}</td>
                     </tr>
                </tbody>
             
              </table>
                 </div>
    </div>
        <div class="table-container">
                     <!-- For Graph -->
        </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'MainViewWarning',
    props:['trainWarningIdKey'],
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
.title-font-warnig{
    font-size: 10px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 4px;
    float: left;
}

 .custom-scrollbar-css-warning{
 height: 130px; 
 width:100%; 
 overflow-x: hidden; 
 overflow-x: auto; 
 text-align:justify; 
 float: left;
}



/* scrollbar width */
.custom-scrollbar-css-warning::-webkit-scrollbar {
  width: 8px;
}

/* scrollbar track */
.custom-scrollbar-css-warning::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.custom-scrollbar-css-warning::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  
}
</style>