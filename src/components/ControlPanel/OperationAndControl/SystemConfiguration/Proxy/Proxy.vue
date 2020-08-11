<template>
    <div>
    <img src="@/assets/Novius_MSRU_4S_TVGUI.jpg" alt="" height="80%" width="80%"> 
<div class="end-center-start-btn" >
     <div class="up-end-btn"> 
         <button  class="btn-end" v-on:click="endProxyData" data-toggle="modal" data-target="#ModalOfProxyConfigrationForStart">End</button>
     </div>
     <div class="up-center-btn">     
      <button class="btn-center" v-on:click="centerProxyData" data-toggle="modal" data-target="#ModalOfProxyConfigrationForStart">Center</button>  
     </div>
     <div class="up-start-btn">     
      <button class="btn-start" v-on:click="startProxyData"  data-toggle="modal" data-target="#ModalOfProxyConfigrationForStart">Start</button>  
     </div>
</div>



<!-- Model For Start Proxy-->
<div class="modal fade" id="ModalOfProxyConfigrationForStart" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="strip1">
        <h5 class="modal-title" id="exampleModalLongTitle">Proxy Configration For {{dialogData.DeviceName}}</h5>
      </div> 
        <button type="button" class="close" data-toggle="modal" data-target="#ModalOfProxyConfigrationForStart"  data-dismiss="#ModalForCameraConfigrationLH" aria-label="Close" >
          <span aria-hidden="true" class="close-btn">&times;</span>
        </button>
      <div class="modal-body" >
        <form>
         <div class="form-group row" >
           <label  class="col-sm-4 col-form-label">Proxy Name:</label>
           <div class="col-sm-8">
            <input type="text" class="form-control" id="inputProxyName" v-model="dialogData.DeviceName" readonly="readonly">
           </div>
         </div>
      <div class="row">
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">GPIO Pin:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputGPIOPin"  v-model="dialogData.IntGpioPin" readonly="readonly">
           </div>
         </div>
        </div>
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Pin:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputPin" v-model="dialogData.IntPin" readonly="readonly">
           </div>
         </div>
        </div>
      </div>
          <div class="row">
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Location:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputLocation" v-model="dialogData.NvcharLocation" readonly>
           </div>
         </div>
        </div>
      </div>
         <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Stream URL:</label>
           <div class="col-sm-8">
            <input type="text" class="form-control" id="inputSteamURLOfProxy" v-model="dialogData.NvcharStreamURL"  readonly="readonly">
           </div>
         </div>
        <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Description:</label>
           <div class="col-sm-8">
             <textarea class="form-textarea" id="exampleDescriptionOfProxy" cols="36" rows="3" v-model="dialogData.NvcharDescription" readonly="readonly"></textarea>
           </div>
         </div>
         <div class="form-buttton">
           <button class="btn-save" type="button" v-on:click="updateProxyDataModel">Save</button>
           <span class="btn-cancel" style="  margin: 5px; float: right; " data-toggle="modal" data-target="#ModalOfProxyConfigrationForStart"  data-dismiss="#ModalOfProxyConfigrationForStart" aria-label="Close" onsubmit="return false">
             Cancel
           </span>
           <button class="btn-edit" type="button" v-on:click="readonlyOfProxy">Edit</button>
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
             startProxy:{},
             centerProxy:{},
             endProxy:{},
             dialogData:{},
             isLoading:true,            
         }
     },
       computed:{
      ...mapGetters(['getAllProxyData','getAllSensorDataProxy'])
      
    },
  methods:{...mapActions(['ProxyData','SensorsData','updateProxyData']),
      startProxyData(){
       this.dialogData=this.startProxy;
       console.log(this.dialogData);
      },
      centerProxyData(){
        this.dialogData=this.centerProxy;
      },
      endProxyData(){
        this.dialogData=this.endProxy;
        console.log(this.dialogData)
      },
      async updateProxyDataModel(){
      this.isLoading=true;
      await this.updateProxyData(this.dialogData);
      this.isLoading=false;
      },
       readonlyOfProxy(){
        document.getElementById('inputProxyName').removeAttribute('readonly');
        document.getElementById('inputGPIOPin').removeAttribute('readonly');
        document.getElementById('inputPin').removeAttribute('readonly');
        document.getElementById('inputSteamURLOfProxy').removeAttribute('readonly');
        document.getElementById('exampleDescriptionOfProxy').removeAttribute('readonly');
       
        }
      },

 created:async function(){
     this.isLoading=true;
     await this.SensorsData();
     await this.ProxyData();
     this.getAllSensorsData=this.getAllSensorDataProxy
     let proxyArray=this.getAllProxyData;
     console.log("proxyArray",proxyArray);
     this.getAllSensorsData.forEach(Element=>{
       if(Element.NvcharDeviceType=="PROXY" && Element.NvcharDeviceSide=="E")
       {
         proxyArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.endProxy=element;
             this.endProxy.side=Element.NvcharDeviceSide;
             this.endProxy.DeviceName=Element.NvcharDeviceName
             this.endProxy.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
       if(Element.NvcharDeviceType=="PROXY" && Element.NvcharDeviceSide=="C")
       {
         proxyArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.centerProxy=element;
             this.centerProxy.side=Element.NvcharDeviceSide;
             this.centerProxy.DeviceName=Element.NvcharDeviceName
             this.centerProxy.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
        if(Element.NvcharDeviceType=="PROXY" && Element.NvcharDeviceSide=="S")
       {
         proxyArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.startProxy=element;
             this.startProxy.side=Element.NvcharDeviceSide;
             this.startProxy.DeviceName=Element.NvcharDeviceName
             this.startProxy.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
     })
     this.isLoading=false;
    },
    
}
</script>
<style>
.btn-end{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  width: 65px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
  bottom: 500px;
  margin-left: 75px;
}
.btn-center{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
  bottom: 353px;
  margin-left: 80px;
}
.btn-start{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
   position: relative;
  bottom: 213px;
  margin-left: 80px;
}
</style>