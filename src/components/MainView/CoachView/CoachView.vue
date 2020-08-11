<template>
<div>
    <div class="coach-view-left">
                        <h6 class="coachview-title-font">Coach View</h6>
                        
                        <div class="train-one">
                            <div class="con1">
                            <span class="coach-heading">Coach:</span>
                            <ul class="border-con list-text">
                                <li class="border-span">No</li>
                                <li class="border-span">{{getCoachPosition1}}</li>
                                <li class="border-span">Position</li>
                                <li class="border-span-last">{{getCoachPosition1}}</li>
                            </ul>
                        </div>
                        <div class="con-train">
                            <span class="row">
                            <button type="button" class="btn btn-primary-save btn-xs" style="background-color: #989898; width:40px" v-on:click="prevCoach1">Prev</button>
                            <span class="train-img"><img src="@/assets/Novius_LHB.png" alt="Train image1" style="width: 110px; height: 34px"></span>
                      </span>
                        </div>
                        <div class="con-box">
                            <span class="heading1">Axel No.</span>
                            <span  v-for="(temperature,temp) in trainIdKey" :key="temp"><span class="title-num" v-if="getCoachPosition1==temperature.IntCoachPosition" >{{temperature.IntAxleNo}}</span></span>
                           
                        </div>

                        <div class="con-box">
                                <span class="heading-lh">LH:</span>
                              <span  v-for="(temperature,temp) in trainIdKey" :key="temp">
                            <span class="title-box-lh" v-if="(temperature.is_Alarm && getCoachPosition1==temperature.IntCoachPosition) && temperature.is_LH" style="background-color:red"></span>
                            <span class="title-box-lh" v-else-if="(temperature.is_Warning && getCoachPosition1==temperature.IntCoachPosition) && temperature.is_LH" style="background-color:yellow"></span>
                            <span class="title-box-lh" v-else-if="getCoachPosition1==temperature.IntCoachPosition" style="background-color:green"></span>
                            </span>
                        </div>

                            <div class="con-box">
                                    <span class="heading-rh">RH:</span>
                                 
                            <span  v-for="(temperature,temp) in trainIdKey" :key="temp">
                            <span class="title-box-rh" v-if="(temperature.is_Alarm && getCoachPosition1==temperature.IntCoachPosition) && temperature.is_RH" style="background-color:red"></span>
                            <span class="title-box-rh" v-else-if="(temperature.is_Warning && getCoachPosition1==temperature.IntCoachPosition) && temperature.is_RH" style="background-color:yellow"></span>
                            <span class="title-box-rh" v-else-if="getCoachPosition1==temperature.IntCoachPosition" style="background-color:green"></span>
                            </span>
                                </div>
                        </div>
                     
                        
                        <div class="train-two">
                            <div class="con1">
                                <ul class="border-con list-text m-b">
                                    <li class="border-span">No</li>
                                    <li class="border-span">{{getCoachPosition2}}</li>
                                    <li class="border-span">Position</li>
                                    <li class="border-span-last">{{getCoachPosition2}}</li>
                                </ul>
                            </div>
                            <div class="con-train">
                                <span class="row">
                            
                                <span class="train-img"><img src="@/assets/Novius_LHB.png" alt="Train image" style="width: 110px; height: 34px"></span>
                               <button type="button" class="btn btn-primary btn-xs" v-on:click="nextCoach1">Next</button>
                                </span>
                           </div>
                            <div class="con-box-second" >
                                <span  v-for="(temperature,temp) in trainIdKey" :key="temp">
                                <span class="title-num" style="margin:5px"  v-if="getCoachPosition2==temperature.IntCoachPosition">{{temperature.IntAxleNo}}</span>
                                </span>
                                
                            </div>
                        
                       <div class="con-box-lh-second">
                            <span  v-for="(temperature,temp) in trainIdKey" :key="temp">
                            <span class="title-box" v-if="(temperature.is_Alarm && getCoachPosition2==temperature.IntCoachPosition) && temperature.is_LH" style="background-color:red"></span>
                            <span class="title-box" v-else-if="(temperature.is_Warning && getCoachPosition2==temperature.IntCoachPosition) && temperature.is_LH" style="background-color:yellow"></span>
                            <span class="title-box" v-else-if="getCoachPosition2==temperature.IntCoachPosition" style="background-color:green"></span>
                            </span>
                        </div>
                        
                        <div class="con-box-rh-second">
                            <span  v-for="(temperature,temp) in trainIdKey" :key="temp">
                            <span class="title-box" v-if="(temperature.is_Alarm && getCoachPosition2==temperature.IntCoachPosition) && temperature.is_RH" style="background-color:red"></span>
                            <span class="title-box" v-else-if="(temperature.is_Warning && getCoachPosition2==temperature.IntCoachPosition) && temperature.is_RH" style="background-color:yellow"></span>
                            <span class="title-box" v-else-if="getCoachPosition2==temperature.IntCoachPosition" style="background-color:green"></span>
                            </span>
                        </div>
                        
                        </div>
                       
                         
                      <!--  <div class="coach-number-image">
                            <img src="" alt="Train video" style="width: 398px; height: 115px">
                        </div>-->

                        <div class="btn-container">
                            <div class="row">
                            <div class="col-md-8">
                            <div class="form-group">
                                <label for="" class="coach-number-title">Coach Number</label>
                                <input type="text" class="form-control-sourcetech" id="exampleInputEmail1" aria-describedby="emailHelp" v-on:keyup.enter="submitCoachNumber"  placeholder="Enter Train name">
                            </div>
                        </div>
                    </div>
                  <div class="row">
                      
                       <div class="col-md-6">
                              <div class="img-outer-con">
                                    <div class="heading-axel">Axle Image</div>
                                    <div class="image-con" >
                                            <img src="" alt="Train image"  style="width: 200px; height: 115px">
                                           
                                    </div>
                                    <div class="heading-bot-img">AP Side Axle Image</div>
                                </div>
                       </div>
                       <div class="col-md-6">
                           <div class="img-outer-con1">
                                    <div class="image-con" >
                                            <img src="" alt="Train image"  style="width: 200px; height: 115px">
                                           
                                    </div>
                                    <div class="heading-bot-img">MP Side Axle Image</div>
                                </div>
                       </div>
                    </div>
                        </div>
                    </div> 
                    
                    <!-- Right section-->
                    <div class="coach-view-right">
                    <div class="row">
                        <div class="col-5">
                            <div class="con-right">
                        <div class="dec-one-r">
                         <h6 class="title-font">Axle Wise Temprature liiustration</h6>
                         <h6 class="title-font-one">Hot axle hot wheel system ( in C )LH</h6>
                         <Div class="coa-data-left" >
                           
                             <span class="c-po">position</span>
                             <span class="c-p-nu">{{getCoachPosition1}}</span>
                         </Div>
                        </div>
                            </div>
                            <div  v-for="(temperature,temp) in trainIdKey" :key="temp" >
                                  <ul class="border-con list-text" v-if="getCoachPosition1==temperature.IntCoachPosition">
                                    <li class="border-span">Axle Temp</li>
                                    <li class="border-span">{{temperature.DecTs1}}</li>
                                    <li class="border-span">Wheel Temp</li>
                                    <li class="border-span">{{temperature.DecTs3}}</li>
                                    <li class="border-span">Brake Dise Temp</li>
                                    <li class="border-span-last">{{temperature.DecTs5}}</li>
        
                                  </ul>
                                </div>
                        </div>
                        <div class="col-2">
                            <div class="dec-two-ri">
                            <span class="left-coach">L</span>
                            <span class="right-coach">R</span>
                        </div>
                             <div class="tra-img-con1" v-for="(temperature,i) in trainIdKey" :key="i">
                                <span class="number-tool"  v-on:click="fetchImagesById(temperature.IntTrainId,temperature.IntAxleNo)" v-if="getCoachPosition1==temperature.IntCoachPosition">{{temperature.IntAxleNo}}</span>
                                <SVGvue1 v-bind:temperature="temperature"></SVGvue1>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="con-left">
                        <div class="dec-three-ri">
                        <h6 class="title-font">Axle Wise Temprature liiustration</h6>
                         <h6 class="title-font-one">Hot axle hot wheel system ( in C )RH</h6>
                         <div class="coa-data-right1">
                            
                             <span class="c-po">position</span>
                             <span class="c-p-nu">{{getCoachPosition1}}</span>
                         </div>
                         </div>
                         </div>
                            <div  v-for="(temperature,temp) in trainIdKey" :key="temp" >
                                  <ul class="border-con list-text" v-if="getCoachPosition1==temperature.IntCoachPosition">
                                    <li class="border-span">Brake Temp</li>
                                    <li class="border-span-last" >{{temperature.DecTs6}}</li> 
                                    <li class="border-span ">Wheel Temp</li>
                                    <li class="border-span" >{{temperature.DecTs4}}</li>
                                    <li class="border-span">Axle Temp</li>
                                    <li class="border-span" >{{temperature.DecTs2}}</li>
        
                                  </ul>
                                </div>
                    </div>

                        </div>
                    
                      <div class="row">
                          <div class="col-5">
                       <Div class="coa-data-left second-train-cposition">

                             <span class="c-po">position</span>
                             <span class="c-p-nu" >{{getCoachPosition2}}</span>
                         </Div>
                           <div  v-for="(temperature,temp) in trainIdKey" :key="temp+500" >
                                  <ul class="border-con list-text" v-if="getCoachPosition2==temperature.IntCoachPosition">
                                    <li class="border-span">Axle Temp</li>
                                    <li class="border-span">{{temperature.DecTs1}}</li>
                                    <li class="border-span">Wheel Temp</li>
                                    <li class="border-span">{{temperature.DecTs3}}</li>
                                    <li class="border-span">Brake Dise Temp</li>
                                    <li class="border-span-last">{{temperature.DecTs5}}</li>
        
                                  </ul>
                                </div>
                         </div>
                         
                        <div class="col-2">
                              <div class="tra-img-con" style="" v-for="(temperature,i) in trainIdKey" :key="'a'+i">
                                <span class="number-tool svg-number" v-on:click="fetchImagesById(temperature.IntTrainId,temperature.IntAxleNo)" v-if="getCoachPosition2==temperature.IntCoachPosition">{{temperature.IntAxleNo}}</span>
                               <SVGvue2 class="svgvue2-mar" v-bind:temperature="temperature"></SVGvue2>
                            </div>
                        </div>
                        <div class="col-5">
                          <div class="coa-data-right second-train-cposition">
                             <span class="c-po">position</span>
                             <span class="c-p-nu" >{{getCoachPosition2}}</span>
                         </div>
                              <div  v-for="(temperature,temp) in trainIdKey" :key="temp+500" >
                                  <ul class="border-con list-text" v-if="getCoachPosition2==temperature.IntCoachPosition">
                                    <li class="border-span">Brake Dise Temp</li>
                                    <li class="border-span-last">{{temperature.DecTs6}}</li>                                  
                                    <li class="border-span">Wheel Temp</li>
                                    <li class="border-span">{{temperature.DecTs4}}</li>
                                    <li class="border-span">Axle Temp</li>
                                    <li class="border-span">{{temperature.DecTs2}}</li>
        
                                  </ul>
                                </div>
                        </div>
                    </div>
</div>
                        

                </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import SVGvue2 from './SVGvue2';
import SVGvue1 from './SVGvue1';
export default {
    name:'CoachView',
    props:['trainIdKey'],
    data:function(){
        return{
            temperature:this.trainIdKey,
            coachPosition:1,
            coachPosition2:2,
        }
    },
    components:{
     SVGvue2,
     SVGvue1,
    },
    computed:{
      ...mapGetters(['allTrain_Temperature','getSelectedTrain','allTrain_alarm',
      'getCoachMainViewData','getCoachPosition1','getCoachPosition2','getSelectedAxleImages']),
    },
    methods:{...mapActions(['Train_temperaturelog','getTemperatureLogForCoach',
    'setStateCoachPositionWithPosition','SelectorAxleImages']),
    nextCoach1:function(){
     if(this.isValidCoachNo())
     {
        this.setStateCoachPositionWithPosition(2);
        console.log(this.getCoachPosition1);
     }
     if(!this.isValidCoachNo())
     {
         this.prevCoach1()
     }
      
    },
    prevCoach1:function(){
       this.setStateCoachPositionWithPosition(-2); 
       console.log(this.getCoachPosition2);
    },
    fetchImagesById:function(TrainTransactioId,AxelNumber){
         console.log(TrainTransactioId+"I am axle number"+AxelNumber)
        this.SelectorAxleImages({TrainTransactioId,AxelNumber})
       
        console.log(this.getSelectedAxleImages);
        
    },
    submitCoachNumber()
    {
        
    },
    isValidCoachNo()
    {
      let valid=false;  
      for(let i=0;i<this.trainIdKey.length;i++)
      {
          if(this.trainIdKey[i].IntCoachPosition==this.getCoachPosition1)
          {
              valid=true;
              break;
          }
      }

      return valid;
    }
    
    },
      
    created:function(){
        
     this.temperature=this.allTrain_Temperature;
     console.log(this.temperature)
    
    
    },
    destroyed:function(){
    this.setStateCoachPositionWithPosition(0);
    }
    ,
    updated:function(){ 
     console.log("Updated",this.trainIdKey);
     
    }

}
</script>

<style>

form-control-sourcetech{
border: 1px solid #ced4da;

}
    

.st0{fill:#F0A155;}
.st1{fill:#915CA6;stroke:#602C84;stroke-miterlimit:10;}
.st2{fill:#915CA6;}
.st3{fill:#602C84;}
.second-train-cposition{
    padding: 10px;
}

.title-box-lh{
    width: 16px;
    height: 14px;
    background: #9a58bc;
    float: left;
    margin-left: 10px;
    border-radius: 2px;
    margin-top: 2px;
}
.title-box-rh{
    width: 16px;
    height: 14px;
    background: #9a58bc;
    float: left;
    margin-left: 9px;
    border-radius: 2px;
    margin-top: 2px;
}
.con-box-lh-second{
     margin-left: 20px;
     width: 100%;
    float: left;
    margin-bottom: 3px;
}
.con-box-rh-second{
     margin-left: 20px;
     width: 100%;
    float: left;
    margin-bottom: 3px;
}
.title-box-rh-second{
    width: 16px;
    height: 14px;
    background: #9a58bc;
    float: left;
    margin-left: 10px;
    border-radius: 2px;
    margin-top: 2px;
}
.border-span li{
    padding-top: 15px;
}
.bogi-button1{
    position: relative;
    top: 30px;
}
.bogi-button{
    position: relative;
    top: 20px;
}
.next-btn{
    position: relative;
    left: 55px;
    bottom: 24px;
}
.heading-lh{
    margin-left: 48px;
    color: #9a58bc;
    font-size: 12px;
    font-weight: 500;
    float: left;
}
.svgvue2-mar{
    position: relative;
    top: 50px;
}
.svg-number{
 position: relative;
    top: 50px;
}

.right{
    width: 87%;
    float: right;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    margin-left: 0.15625%;
    min-height: auto;
    margin-bottom: 10px;

}
.coach-view-right{
    padding: 10px;
}
.heading-rh{
    color: #0083b4;
    margin-left: 48px;
    font-size: 12px;
    font-weight: 500;
    float: left;
}
.border-con{
    border: 1px solid #959595;
    border-radius: 4px;
}
.border-span{
    border-right: 1px solid #959595;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 11px;
    line-height: 20px;
    padding: 2px 4px 2px 4px;
}
.border-span-last{
 padding-left: 5px;
    padding-right: 5px;
    font-size: 11px;
    line-height: 13px;
    padding: 3px;
    padding-top: 5px;
}
.list-text{
    list-style: none;
    display: inline-flex;
    margin-bottom: 17px !important;
}
span.train-img{
    float: left;
    margin-left: 39px;
}
.title-num{
    font-size: 11px;
    color: #666666;
    margin: 5px;
}
.title-num-mar{
    font-size: 11px;
    color: 666666;
    margin-left: 64px;
}
.con1{
    /* width: 100%; */
    float: left;
    margin-bottom: 10px;
}
.con-train{
    width: 100%;
    float: left;
   
}
.con-box{
    width: 100%;
    float: left;
    margin-bottom:3px;
   
}
.con-box-second{
        width: 100%;
    float: left;
    margin-bottom:3px;
    padding-right: 35px;
}
.title-box-mar{
    margin-left: 68px;
    width: 16px;
    height: 14px;
    background: #9a58bc;
    float: left;
    border-radius: 2px; 
    margin-top: 2px;  
}
.title-box{
    width: 16px;
    height: 14px;
    background: #9a58bc;
    float: left;
    margin-left: 10px;
    border-radius: 2px;
    margin-top: 2px;
}
.m-b{
    margin-left: 30px;
}
.coach-number-image{
    float: left;
    width: 95%;
    border: 1px solid #e0e0e0;
    margin-top: 15px;
    border-radius: 4px;
    background: #f3f3f3;
    padding: 4px;
}
.con-right{
    width: 100%;
    float: left;
    margin-bottom: 10px;
}
.con-left{
 width: 100%;
    float: left;
    margin-bottom: 10px;
    padding-left: 50px;
}
.con-right-nomar{
    width: 100%;
    float: left;
    
}
.con-right-last{
    width: 70%;
    float: left;
    margin-bottom: 10px;
    margin-left: 15%;
}
.btn-container{
    width: 100%;
    float: left;
}
label.title-font {
    margin-bottom: 3px;
    margin-top: 5px;
}
.heading-img{
    float: right;
     margin-bottom: 3px;
     margin-top: 5px;
    font-size: 11px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 700;
}
.btn-primary-new{
    color: #fff;
    background-color: #00aff0;
    border-color: #00668c;
}
button.btn.btn-primary.btn-xs{
    color: #fff;
    background-color: #00aff0;
    border-color: #00668c;
    font-size: 12px;
    padding: 1px 6px 1px 6px;
    margin-left: 25px;
    margin-top: 5px;
    height: 24px;

}
.form-group{
    margin-bottom: 0px !important;
}
.edit-btn{
margin-top: 19px;
float: left;
}
.save-btn{
margin-top:19px;
float: left;
margin-left: 10px;
}
button.btn.btn-primary-save.btn-xs{
     font-size: 12px;
    padding: 1px 5px 1px 5px;
    background-color: #989898;
    border: 1px solid #787878;
    color: #ffffff;
    height: 24px;
    margin-top: 5px;
    margin-left: 15px;
}
.dec-one-ri{
    float: left;
    width: 37%;
    position: relative;
    margin-right: 2%;
}
.dec-two-ri{
    float: left;
    width: 19%;
    position: relative;
    margin-right: 2%;
}
.dec-three-ri{
    float: left;
    position: relative;
    margin-right: 2%;
    

}
.title-font{
    font-size: 10px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 4px;
}
.coach-number-title{
     float: left;
    position: relative;
    font-size: 10px !important;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 5px;
    font-weight: 500 !important;
    margin-top: 5px;
}
.coachview-title-font {
    font-size: 10px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 4px;
    padding: 5px;
}
.coach-view-left{
    width: 34%;
    float: left;
    position: relative;
    padding: 10px;
    color: #666666;
}
.title-font-one{
    font-size: 11px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 700;
}
.coa-data-left{
    width: 100%;
    float: left;
}
.coa-data-right{
    width: 100%;
    float: left;
}
 .coa-data-right{
   
    width: 100%;
    float: right;
} 
.heading1{
   font-size: 12px;
    position: relative; 
    right: 20px;
    font-weight: 500
}
.coach-heading{
    font-size: 12px;
    font-weight: 500;
    padding-right: 30px;
    color: #000000;
}
.c-in{
    float: left;
    width: 20%;
    margin-left: 10px;
    margin-top:2px;
}
.c-n{
    float: left;
}
.form-group label{
    font-size: 10px;
}
.c-po{
    margin-left: 10px;
}
.c-p-nu{
    margin-left:5px;
}
.left-coach{
    float: left;
    background-color: #9a58bc;
    color: #ffffff;
    border-radius: 50px;
    width: 18px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    margin-top: 31px;
    margin-left: 10px;
}
.train-two {
    width: 49%;
    float: left;
    position: relative;
    margin-left: 2%;
    margin-top: 0px !important; 
}
.train-one {
    width: 35%;
   
}
.right-coach{
    float: left;
    background-color: #0083b4;
    color: #ffffff;
    border-radius: 50px;
    width: 18px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    margin-left: 74px;
    position: relative;
    bottom: 18px;
    
}
.co-le-top{
    width: 100%;
    float: left;
    position: relative;
    margin-bottom: 10px;
}
.co-le-bot{
    width: 100%;
    float: left;
    position: relative;
}
.co-le-top-sec{
    width: 100%;
    float: left;
    position: relative;
    margin-top: 20px;
    margin-bottom: 10px;
   
}
.co-le-bot-sec{
    width: 100%;
    float: left;
    position: relative;
   
}
.tra-whe-one{
    width: 100%;
    float: left;
    position: relative;
    margin-top: -7px;
}
.number-tool{
    position: relative;
    z-index: 1;
    right: 28px;
    padding: 2px 5px 2px 5px;
    margin-left: 55px;
    background-color: #00aff0;
    text-align: center;
    vertical-align: middle;
    line-height: 16px;
    border-radius: 3px;
    color: #ffffff;
    font-size: 10px;
    cursor: pointer;
}
.tra-img-con{
    width: 100%;
    position: relative;
    float: left;
    top: -21px;
}
.tra-img-con1{
    width: 100%;
    position: relative;
    float: left;
    /* top: -21px; */
}
.tra-img-con-bot{
    width: 100%;
    position: relative;
    float: left;
    top: -21px;
    margin-top: 10px;
}
.co-rh-top{
    width: 100%;
    float: left;
    position: relative;
    margin-bottom: 10px;
}
.image-con{
    width: 100%;
    height: auto;
    float: left;
    position: relative;
    background-color: f3f3f3;
    border: 1px solid #e0e0e0;
    padding: 6px;
    border-radius:4px;
}
.img-outer-con{
    width: 100%;
    float: left;
    position: relative;
}
.img-outer-con1{
    position: relative;
    top:25px;
}
.heading-axel{

    float: left;
    position: relative;
    font-size: 10px;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 5px;
    font-weight: 500;
     margin-top: 5px;
}
.li-styling{
    list-style-type:none;
        /* width:10%; */
        display:inline;
        padding-right:10px;
        padding-left:10px;
        margin:0px;
        text-align:center;
        
        
}
</style>