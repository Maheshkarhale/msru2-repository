<template>
<div>
    <img src="@/assets/Novius_MSRU_4S_TVGUI.jpg" alt="" height="80%" width="80%">
<div class="right-left-button" >
<button  class="btn-left" v-on:click="auxCameraData" data-toggle="modal" data-target="#ModalForCameraConfigration"  >AUX Box Camera</button>     
<button class="btn-right" v-on:click="mainPanelData" data-toggle="modal" data-target="#ModalForCameraConfigration">Main Panel Camera</button>  
</div>


<!-- modal For Camera Configration RH -->
<!-- Model -->
<div class="modal fade" id="ModalForCameraConfigration" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="strip1">
        <h5 class="modal-title" id="exampleModalLongTitle">Camera Configration For {{dialogData.CameraName}}</h5>
      </div> 
        <button type="button" class="close" data-toggle="modal" data-target="#ModalForCameraConfigration"  data-dismiss="#ModalForCameraConfigration" aria-label="Close" >
          <span aria-hidden="true" class="close-btn" >&times;</span>
        </button>
      <div class="modal-body" >
        <form>
         <div class="form-group row" >
           <label  class="col-sm-4 col-form-label">IP Address:</label>
           <div class="col-sm-8">
            <input type="text" class="form-control" id="inputIPAddress" v-model="dialogData.NvcharIPAddress" readonly="readonly">
           </div>
         </div>
      <div class="row">
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">port No:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputPortno" v-model="dialogData.IntPortNo" readonly="readonly">
           </div>
         </div>
        </div>
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Frame Per Second:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputFramePerSecond" v-model="dialogData.IntFSP" readonly="readonly">
           </div>
         </div>
        </div>
      </div>
         <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Protocol:</label>
           <div class="col-sm-4">
            <select class="custom-select mr-sm-2 form-control" id="inlineFormCustomSelect" v-model="dialogData.NvcharProtocol" readonly="readonly">
             
             <option value="RTSP">RTSP</option>
           </select>
           </div>
         </div>
            <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Camera Name:</label>
           <div class="col-sm-8">
            <input type="text" class="form-control" id="inputcameraname" v-model="dialogData.CameraName" readonly="readonly" >
           </div>
         </div>
            <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Camera Make:</label>
           <div class="col-sm-8">
            <input type="text" class="form-control" id="inputCameraMake" v-model="dialogData.NvcharMake" readonly="readonly">
           </div>
         </div>
            <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Stream URL:</label>
           <div class="col-sm-8">
            <input type="text" class="form-control" id="inputSteamURL"  v-model="dialogData.NvcharStreamURL" readonly="readonly">
           </div>
         </div>
          <div class="row">
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-8 col-form-label">Location:</label>
           <div class="col-sm-4">
            <input type="text" class="form-control" id="inputLocation" v-model="dialogData.NvcharDeviceLocation"  readonly>
           </div>
         </div>
        </div>
        <div class="col-6">
            <div class="form-group row">
           <label  class="col-sm-6 col-form-label">Side:</label>
           <div class="col-sm-6">
            <input type="text" class="form-control" id="inputSide" v-model="dialogData.side"  readonly>
           </div>
         </div>
        </div>
      </div>
        <div class="form-group row">
           <label  class="col-sm-4 col-form-label">Description:</label>
           <div class="col-sm-8">
             <textarea class="form-textarea" id="exampleDescription" cols="36" rows="3" v-model="dialogData.NvcharDescription" readonly="readonly"></textarea>
           </div>
         </div>
         <div class="form-buttton">
           <button class="btn-save" type="button"  v-on:click="updateCameraDataModel">Save</button>
           <span class="btn-cancel" style="  margin: 5px; float: right; " data-toggle="modal" data-target="#ModalForCameraConfigration"  data-dismiss="#ModalForCameraConfigration" aria-label="Close" onsubmit="return false">
             Cancel
           </span>
           <button class="btn-edit" type="button"    v-on:click="toggleReadonly">Edit</button>
         
           
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
             auxCamera:{},
             mainPainel:{},
             dialogData:{},
             isLoading:true,            
         }
     },
      computed:{
      ...mapGetters(['getAllCameraData','getAllSensorData'])
      
      
    },
      methods:{...mapActions(['CameraData','SensorsData','updateCameraData']),
      auxCameraData(){
       this.dialogData=this.auxCamera;
       console.log("tbl_two data",this.dialogData);
      },
      mainPanelData(){
        this.dialogData=this.mainPainel;
      },
      async updateCameraDataModel(){
      this.isLoading=true;
      await this.updateCameraData(this.dialogData);
      this.isLoading=false;
      },
       toggleReadonly(){
        document.getElementById('inputIPAddress').removeAttribute('readonly');
        document.getElementById('inputPortno').removeAttribute('readonly');
        document.getElementById('inputFramePerSecond').removeAttribute('readonly');
        document.getElementById('inlineFormCustomSelect').removeAttribute('readonly');
        document.getElementById('inputcameraname').removeAttribute('readonly');
        document.getElementById('inputCameraMake').removeAttribute('readonly');
        document.getElementById('inputSteamURL').removeAttribute('readonly');
        document.getElementById('exampleDescription').removeAttribute('readonly');
        
 }
     },

  created:async function(){
     this.isLoading=true;
     await this.SensorsData();
     await this.CameraData();
     this.getAllSensorsData=this.getAllSensorData
     let cameraArray=this.getAllCameraData;
     console.log("cameraArray",cameraArray);
     this.getAllSensorsData.forEach(Element=>{
       if(Element.NvcharDeviceType=="CAMERA" && Element.NvcharDeviceSide=="MP")
       {
         cameraArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.mainPainel=element;
             this.mainPainel.side=Element.NvcharDeviceSide;
             this.mainPainel.CameraName=Element.NvcharDeviceName;
             this.mainPainel.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
       if(Element.NvcharDeviceType=="CAMERA" && Element.NvcharDeviceSide=="AP")
       {
         cameraArray.forEach(element=>{
           if(element.IntDeviceID==Element.IntDeviceID)
           {
             this.auxCamera=element;
             this.auxCamera.side=Element.NvcharDeviceSide;
             this.auxCamera.CameraName=Element.NvcharDeviceName;
             this.auxCamera.NvcharDeviceLocation=Element.NvcharDeviceLocation
           }
         })
       }
     })
     this.isLoading=false;
    },
    
}
</script>
<style>
.right-left-button button{
position: relative;
bottom: 240px;

}
.btn-left{
  margin-right: 320px;
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
}
.btn-right{
  margin-left: 30px;
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
}
.close-btn{
  float: right;
}
.btn-edit{
  border: none;
  background-color: #0099ff;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
}
.btn-cancel{
  border: none;
  background-color: #8c8d8d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
}
.btn-save{
  border: none;
  background-color: #ff009d;
  padding: 4px 10px 4px 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  border-radius: 4px;
}
.form-buttton button{
  margin: 5px;
  float: right;
}
.col-form-label {
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 13px;
}
.form-group  label{
 font-size: 13px;
font-weight: 600;
}
   
.form-control  {
  padding-top: 10px;
  padding-bottom: 10px;
} 
.form-textarea{
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
}
</style>