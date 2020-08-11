<template>
<div>
     
  <div class="container">
       <div class="col-md-12 p-top">
            <div class="main-tit">Opration and control</div>
     </div>
      <div class="row">

               <div class="col-md-4 card-box" data-toggle="modal" data-target="#exampleModal" data-backdrop="static" data-keyboard="false">
                <div class="left-icon">
                    <span class="dym"> <img src="@/assets/system_conf.jpg" alt="logo" ></span>
                </div>
                <div class="right-heading">
                    <h3 class="card-hed">System Configuration</h3>
                    <h6 class="card-discr">Configuring general parameters.</h6>
                </div>
               </div>

               <div class="col-md-4 card-box">
                <div class="left-icon">
                    <span class="dym"> <img src="@/assets/alarm_configuration.jpg" alt="logo" ></span>
                </div>
                <div class="right-heading">
                    <h3 class="card-hed">Alarm Configuration</h3>
                    <h6 class="card-discr">To configure alarm schedule, notification & other advanced parameters.</h6>
                </div>
               </div>

               <div class="col-md-4 card-box">
                <div class="left-icon">
                    <span class="dym"> <img src="@/assets/report-_configuration.jpg" alt="logo" ></span>
                </div>
                <div class="right-heading">
                    <h3 class="card-hed">Report Configuration</h3>
                    <h6 class="card-discr">Management of reports and configuration of user defined report.</h6>
                </div>
               </div>

               <div class="col-md-4 card-box">
                <div class="left-icon">
                    <span class="dym"> <img src="@/assets/user_management.jpg" alt="logo" ></span>
                </div>
                <div class="right-heading">
                    <h3 class="card-hed">User Management</h3>
                    <h6 class="card-discr">To add, delete users and assigning the permissions.</h6>
                </div>
               </div>

               <div class="col-md-4 card-box">
                <div class="left-icon">
                    <span class="dym"> <img src="@/assets/log_search.jpg" alt="logo" ></span>
                </div>
                <div class="right-heading">
                    <h3 class="card-hed">Log Search</h3>
                    <h6 class="card-discr">Searching, viewing and backing up local and remote based logs.</h6>
                </div>
               </div>

               <div class="col-md-4 card-box">
                <div class="left-icon">
                    <span class="dym"> <img src="@/assets/message_que_status.jpg" alt="logo" ></span>
                </div>
                <div class="right-heading">
                    <h3 class="card-hed">Message Que Status</h3>
                    <h6 class="card-discr">Check status of messages sent from system.</h6>
                </div>
               </div>

           
            </div>
  </div>   
<SystemConfiguration></SystemConfiguration>

</div>  

</template>

<script>
import SystemConfiguration from './SystemConfiguration/SystemConfiguration';
import {mapGetters} from 'vuex';
export default {
    components:{
        SystemConfiguration
    },
     computed:{
      ...mapGetters(['getAllCameraData','getAllTrainTransaction'])
      
      
    },
}
</script>

<style>
.p-top{
     padding-top: 15px;
 }
  .main-tit{
    width: 100%;
    height: 30px;
    padding: 7px;
    background-color: #072659;
    margin-bottom: 20px;
    color: #fff;
    line-height: 19px;
    padding-left: 14px;
    font-size: 14px;
    text-transform: uppercase;
    text-align: left;
 }
  .dym{
     width: 72px;
     height: 72px;
 }
 .card-hed{
    font-size: 18px;
    color: #0a64c8;
    font-weight: 700;
 }
 .card-discr{
    font-size: 12px;
    color: #666666;
    font-weight: 500;
 }
 .card-box{
    padding: 20px;
 }
 .card-box:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    border-radius: 6px;
 }
 
 .header-top{
     width: 100%;
     float: left;
     height: 32px;
 }
</style>