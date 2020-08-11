<template>
    <div>
        <img src="@/assets/Novius_MSRU_4S_TVGUI.jpg"  width="90%">
        <div class="btn-pyrometer">
           <span><button type="button" class="btn-t2" v-on:click="pyrometerT2Data" data-toggle="modal" data-target="#ModalOfPyrometerConfigration">T2</button></span> 
           <span><button type="button" class="btn-t4" v-on:click="pyrometerT4Data" data-toggle="modal" data-target="#ModalOfPyrometerConfigration">T4</button></span> 
           <span><button type="button" class="btn-t6" v-on:click="pyrometerT6Data" data-toggle="modal" data-target="#ModalOfPyrometerConfigration">T6</button></span> 
           <span><button type="button" class="btn-t3" v-on:click="pyrometerT3Data" data-toggle="modal" data-target="#ModalOfPyrometerConfigration">T3</button></span> 
           <span><button type="button" class="btn-t5" v-on:click="pyrometerT5Data" data-toggle="modal" data-target="#ModalOfPyrometerConfigration">T5</button></span> 
           <span><button type="button" class="btn-t1" v-on:click="pyrometerT1Data" data-toggle="modal" data-target="#ModalOfPyrometerConfigration">T1</button></span> 
        </div>
<div class="modal fade" id="ModalOfPyrometerConfigration" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="strip1">
        <h5 class="modal-title" id="exampleModalLongTitle">Proxy Configration For Axle Temp.</h5>
      </div> 
        <button type="button" class="close" data-toggle="modal" data-target="#ModalOfPyrometerConfigration"  data-dismiss="#ModalForCameraConfigrationLH" aria-label="Close" >
          <span aria-hidden="true" class="close-btn">&times;</span>
        </button>
      <div class="modal-body" >
        <form>
         <div class="form-group row" >
           <label  class="col-sm-4 col-form-label">Pyrometer Name:</label>
           <div class="col-sm-8">
            <input type="text" class="form-control" id="inputPyrometerName"  v-model="dialogData.deviceName" readonly="readonly">
           </div>
         </div>
      <div class="row">
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Comp Port:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputCompPort" v-model="dialogData.NvcharComPort" readonly="readonly">
           </div>
         </div>
        </div>
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">BitRate:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputBitRate" v-model="dialogData.IntBitRate" readonly="readonly">
           </div>
         </div>
        </div>
      </div>
          <div class="row">
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Pin Command:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputPinCommand" v-model="dialogData.NvcharPinCommand"  readonly="readonly">
           </div>
         </div>
        </div>
      </div>
         <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Box Address:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputBoxAddress" v-model="dialogData.NvcharBoxAddress" readonly="readonly" >
           </div>
         </div>
         <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Head Address:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputHeadAddress"  v-model="dialogData.NvcharHeadAddress" readonly="readonly">
           </div>
         </div>
        <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Description:</label>
           <div class="col-sm-8">
             <textarea class="form-textarea" id="exampleDescriptionOfPyrometer" cols="36" rows="3" v-model="dialogData.NvcharDescription" readonly="readonly"></textarea>
           </div>
         </div>
         <div class="row">
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Location:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputPortno"  v-model="dialogData.NvcharDeviceLocation" readonly>
           </div>
         </div>
        </div>
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Side:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputFramePerSecond" v-model="dialogData.side" readonly>
           </div>
         </div>
        </div>
      </div>
         <div class="form-buttton">
           <button class="btn-save" type="button" v-on:click="updatePyrometerDataModel">Save</button>
           <span class="btn-cancel" style="  margin: 5px; float: right; " data-toggle="modal" data-target="#ModalOfPyrometerConfigration"  data-dismiss="#ModalOfPyrometerConfigration" aria-label="Close" onsubmit="return false">
             Cancel
           </span>
           <button class="btn-edit" type="button" v-on:click="readonlyOfPyrometer" >Edit</button>
         </div>
        </form>
      </div>  
    </div>
  </div>
</div>
 <Loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></Loading>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    components:{
    Loading
    },  
  data:function(){
         return{
             getAllSensorsData:[],
             fullPage:true,
             pyrometerT1:{},
             pyrometerT2:{},
             pyrometerT3:{},
             pyrometerT4:{},
             pyrometerT5:{},
             pyrometerT6:{},
             dialogData:{},
             isLoading:true,            
         }
     },
 computed:{
      ...mapGetters(['getAllPyrometeData','getAllSensorData'])
      },     
 methods:{...mapActions(['PyrometerData','SensorsData','updatePyrometerData']),
      pyrometerT1Data(){
       this.dialogData=this.pyrometerT1;
       console.log("tbl_two data",this.dialogData);
      },
      pyrometerT2Data(){
        this.dialogData=this.pyrometerT2;
      },
       pyrometerT3Data(){
        this.dialogData=this.pyrometerT3;
      },
       pyrometerT4Data(){
        this.dialogData=this.pyrometerT4;
      },
       pyrometerT5Data(){
        this.dialogData=this.pyrometerT5;
      },
       pyrometerT6Data(){
        this.dialogData=this.pyrometerT6;
      },
      async updatePyrometerDataModel(){
      this.isLoading=true;
      await this.updatePyrometerData(this.dialogData);
      this.isLoading=false;
      },
       readonlyOfPyrometer(){
        document.getElementById('inputPyrometerName').removeAttribute('readonly');
        document.getElementById('inputCompPort').removeAttribute('readonly');
        document.getElementById('inputBitRate').removeAttribute('readonly');
        document.getElementById('inputPinCommand').removeAttribute('readonly');
        document.getElementById('inputBoxAddress').removeAttribute('readonly');
        document.getElementById('inputHeadAddress').removeAttribute('readonly');
        document.getElementById('exampleDescriptionOfPyrometer').removeAttribute('readonly');
        }
     },    
    created:async function(){
     this.isLoading=true;
     await this.SensorsData();
     await this.PyrometerData();
     this.getAllSensorsData=this.getAllSensorData
     console.log("sensore Data",this.getAllSensorData)
     let pyrometerArray=this.getAllPyrometeData;
     console.log("pyrometerArray",pyrometerArray);
     this.getAllSensorsData.forEach(Element=>{
       if(Element.NvcharDeviceLocation=="T1" && Element.NvcharDeviceSide=="MP")
       {
         pyrometerArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.pyrometerT1=element;
             this.pyrometerT1.side=Element.NvcharDeviceSide;
             this.pyrometerT1.deviceName=Element.NvcharDeviceName;
             this.pyrometerT1.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
       if(Element.NvcharDeviceLocation=="T2" && Element.NvcharDeviceSide=="AP")
       {
         pyrometerArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.pyrometerT2=element;
             this.pyrometerT2.side=Element.NvcharDeviceSide;
              this.pyrometerT2.deviceName=Element.NvcharDeviceName;
             this.pyrometerT2.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
        if(Element.NvcharDeviceLocation=="T3" && Element.NvcharDeviceSide=="MP")
       {
         pyrometerArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.pyrometerT3=element;
             this.pyrometerT3.side=Element.NvcharDeviceSide;
             this.pyrometerT3.deviceName=Element.NvcharDeviceName;
             this.pyrometerT3.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
        if(Element.NvcharDeviceLocation=="T4" && Element.NvcharDeviceSide=="AP")
       {
         pyrometerArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.pyrometerT4=element;
             this.pyrometerT4.side=Element.NvcharDeviceSide;
             this.pyrometerT4.deviceName=Element.NvcharDeviceName;
             this.pyrometerT4.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
        if(Element.NvcharDeviceLocation=="T5" && Element.NvcharDeviceSide=="MP")
       {
         pyrometerArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.pyrometerT5=element;
             this.pyrometerT5.side=Element.NvcharDeviceSide;
             this.pyrometerT5.deviceName=Element.NvcharDeviceName;
             this.pyrometerT5.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
        if(Element.NvcharDeviceLocation=="T6" && Element.NvcharDeviceSide=="AP")
       {
         pyrometerArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.pyrometerT6=element;
             this.pyrometerT6.side=Element.NvcharDeviceSide;
             this.pyrometerT6.deviceName=Element.NvcharDeviceName;
             this.pyrometerT6.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
     })
     this.isLoading=false;
    },  
}
</script>

<style>
.btn-t1{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
  left: 60px;
}
.btn-pyrometer{
 position: relative;
  bottom: 410px;
}
.btn-t2{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
   position: relative;
  right: 75px;
}
.btn-t3{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
  left: 30px;
}
.btn-t4{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
  right: 60px;
}
.btn-t5{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
  left: 40px;
}
.btn-t6{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
  right: 50px;
}
</style>