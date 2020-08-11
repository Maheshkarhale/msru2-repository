<template>
<div class="p-l">
  <div class="table-container">
          <h6 class="title-font-warning">List of Warning</h6>
        <div class="custom-scrollbar-css-warning-tbl"> 
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
    name:'Warnings',
   
    computed:{
      ...mapGetters(['allTrain_Warning','TotalNoOfWarning'])
    
     },
   created:function(){
     console.log(TotalNoOfAlarm);
   let  TotalNoOfAlarm=this.TotalNoOfWarning;
    },
    
}
</script>

<style  scoped>


 .p-l{
     padding-left: 0px !important;
 }

.table th td{
    padding: 10px;
    border-radius: 2px;
}

.table .thead-light th{
    background-color: #f0a055;
    color: #ffffff ;
}

.table .thead-drk th{
    background-color: #ed2160;
    color: #ffffff;
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

.custom-scrollbar-css-warning-tbl{ 
 height: 130px; 
 width:100%; 
 overflow-x: hidden; 
 overflow-x: auto; 
 text-align:justify; 
 float: left;
 }

.custom-scrollbar-css-warning-tbl::-webkit-scrollbar {
  width: 8px;
}

/* scrollbar track */
.custom-scrollbar-css-warning-tbl::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.custom-scrollbar-css-warning-tbl::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  background-image: linear-gradient(to top, #00d2ff 0%, #3a7bd5 100%);
}
</style>