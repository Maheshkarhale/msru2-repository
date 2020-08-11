<template>
    <div>
        
  <!-- modal -->
  <div class="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel"  data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div>
        <div class="strip1">
        <h5 class="modal-title" id="exampleModalLabel">Configer Devices</h5>
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
     <div>
   <nav class="navbar navbar-expand-lg navbar-light" >
        <ul class="navbar-nav">
          <li  class="nav-item1">
             <router-link to = "/camera" class="nav-link1" style="text-decoration: none; color:black">
             <span  >Camera</span>
             </router-link>
            
          </li>
          <li  class="nav-item1 ">
            <router-link to = "/proxy"  class="nav-link1" style="text-decoration: none; color:black">
            <span   style="font-family: Arial, Helvetica, sans-serif;" >Proxy</span>
            </router-link>
          </li>
         <li  class="nav-item1 ">
            <router-link to = "/pyrometer"  class="nav-link1" style="text-decoration: none; color:black">
            <span   style="font-family: Arial, Helvetica, sans-serif;" >Pyrometer</span>
            </router-link>
          </li>
          <li  class="nav-item1 ">
            <a class="nav-link1"  style="font-family: Arial, Helvetica, sans-serif;" >Profile</a>
          </li>
          <li  class="nav-item1 ">
            <a class="nav-link1"  style="font-family: Arial, Helvetica, sans-serif;" >Diameter</a>
          </li>
        </ul>     
   </nav>
   <hr class="hr-bottom">
     </div> 
      </div>
    
      <div class="modal-body">
     <router-view>
       
     </router-view>
     
      </div>
 
    </div>
  </div>
</div>
<!-- modal end -->

</div>
</template>

<script>
// import Camera from '../SystemConfiguration/Camera/Camera';
// import Proxy from '../SystemConfiguration/Proxy/Proxy';

export default {
 
  data:function() {
    return{
    isShowingCamera:false,
    isShowingProxy:false
    }
  },
  components:{
    // Camera,
    // Proxy
  }

}
</script>

<style>
.strip1{
  height: 30px;
  background-color: #f5f4f4;
  border-radius: 4px;
  width: 99.9%;
  

}
.close{
  font-size: 13px;
  font-weight: 600;
  position: relative;
  bottom: 25px;
  right: 10px;
}
.modal-title {
  font-size: 13px;
  font-weight: 600;
  padding-top: 5px;
  float: left; 
  padding-left: 10px;
}
.nav-item1{
    padding-left: 10px;
    padding-right: 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    line-height: 26px;
 }
 .nav-item1:hover{
    border-bottom: 2px solid #008cff;
  
}
.hr-bottom{
 margin-top: 0px;

}
.camera-font{
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}


</style>