<template>
 <div  class="p-top">
        <div class="left-box mar-bot ">
            <div class="scroll-one">
                
            <div class="title-left-simple">  
               <span class="train-heading">Heading</span>   
                 <span class="btn-load"><button class="load-btn" >Load</button></span>
                  </div> 
                <div class="container-left pd-top custom-scrollbar-css" >
                    <ul v-for="(trasaction,i) in getAllTrainTransaction" :key="i">
                        <li><span  class="data-left-title-se bg-color" v-on:click="fetchDataById(trasaction.IntTrainId)">{{trasaction.NvcharDescription}}</span></li> 
                    </ul>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name:'TrainTrans',
    computed:{
        ...mapGetters(['getAllTrainTransaction','getSelectedTrain','getSelectedTrainAlarm','getSelectedTrainWarnig'])
    },
    methods:{
        ...mapActions(['TrainTransactionSet','SelectedTrainTransaction']),
  
     fetchDataById(id){
      this.SelectedTrainTransaction(id); 
      this.$emit("trainId",id) ;
      this.$emit("trainIdAlarm",id);  
      this.$emit("intTrainWarnigId",id);    
    }
   
    
    },
   
     created(){
     
    },
    mounted: async function(){
     await this.TrainTransactionSet();   
     console.log("I am called",this.getSelectedTrain)
     this.$emit("trainId",this.getSelectedTrain) ;
     this.$emit("trainIdAlarm",this.getSelectedTrainAlarm); 
     this.$emit("intTrainWarnigId",this.getSelectedTrainWarnig);  
     console.log("selected trainIdAlarm",this.getSelectedTrainAlarm);
     console.log("Selected Train",this.getSelectedTrain) ; 
    }
 
}

</script>

<style>
.train-heading{
background-color: #f5f5f5;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    
    border-radius: 4px 4px 0px 0px;
    float: left;
    width: 50%;
    text-align: left;
    margin-top: 3px;
  

}
 .load-btn{
    background-color: #ed2160;
    padding: 2px 12px 2px 8px; 
    font-size: 12px;
    border: 0px;
    border-radius: 5px;
    float:right;
    color: #ffffff;
}
.btn-load{
      float: right;
    width: 50%;
}

/* .bg-color:hover {
  background-color: rgb(21, 219, 245);
} */
 .left{
     width: 12%;
     float: left;
     min-height: auto;
 }
 .data-left-title-se{
    font-size: 12px;
    color: #000000;
    font-weight: 500 ;
    display:inline-block;
    margin-left: 5px;
    color: #2c3e50;
 }

.p-top{
        padding-top: 15px;
}

 
 .left-box{
     width: 100%;
     float: left;
     background-color: #fff;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
     border-radius: 4px;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
     height: 100vh; 
     margin-bottom: 10px;
}

.title-left-simple {
    background-color: #f5f5f5;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 5px 10px 8px 10px;
    border-radius: 4px 4px 0px 0px;
    border-bottom: 1px solid #ebebeb;
    float: left;
    width: 100%;
}
 .container-left {
padding: 0px !important;
float: left;
width: 100%;
 }
 .container-left ul{
     list-style: none; 
     line-height: 10px;
     cursor: pointer;
     text-align: left;
 }

.container-left ul li{
border-bottom: 1px solid #e4edef;
      width: 100%;
    padding: 5px;
    margin-bottom: 0px !important;
}
.container-left ul li:hover{
 background-color: #dcecf9;

}

.custom-scrollbar-css {
  min-height: 450px; 
  height: 600px;
}


/* Custom Scrollbar using CSS */
.custom-scrollbar-css {
  overflow-y: scroll;
}

/* scrollbar width */
.custom-scrollbar-css::-webkit-scrollbar {
  width: 8px;
}

/* scrollbar track */
.custom-scrollbar-css::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.custom-scrollbar-css::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
 
}

</style>