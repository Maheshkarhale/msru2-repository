<template>
 <div>
   <P class="rh-temp-heading">RH Temperature chart</P>
    <GChart type="LineChart"
                :data="getTemperatureLogForRHChart"
                :options="chartOptions"
                :events="chartEvents">
    </GChart>
</div>   
</template>

<script>
import { GChart } from 'vue-google-charts';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'RH_Chart',
     components:{
     GChart,
    },
    data(){
        return{
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        legend: {position: 'none'},
        hAxis:{
          title:"Axel Number",
          textStyle: {
            color: '#1a237e',
            fontSize: 10,
            bold: true
        },
        titleTextStyle: {
            color: '#1a237e',
            fontSize: 12,
            bold: true
        }
        },
        vAxis: {
        title: 'Temperature',
        textStyle: {
            color: '#1a237e',
            fontSize: 10,
            bold: true
        },
        titleTextStyle: {
            color: '#1a237e',
            fontSize: 12,
            bold: true
        }
      }
        
      },
      chartEvents:{
        'onmouseover':(d)=>{
          let index=d.row;
          let trainCoachPosition=this.allTrain_Temperature[index].IntCoachPosition;
          window.localStorage.setItem('stsCoachPosition',trainCoachPosition);
        },
        'select':()=>{
        
        if(window.localStorage.getItem('stsCoachPosition')!=null) 
        {
          this.setStateCoachPositionWithPositionForChart(window.localStorage.getItem('stsCoachPosition'));
        } 
        
        }
        
      }
        }
    },
    computed:{...mapGetters(['allTrain_Temperature','getTemperatureLogForRHChart']),
    },
    methods:{...mapActions(['setStateCoachPositionWithPositionForChart'])}
    ,
   
    created(){
     
    }

}
</script>
<style>
.rh-temp-heading{
font-size: 10px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 4px;
    margin-top: 5px;
    font-weight: 500;
   
}
</style>