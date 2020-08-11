<template>
<div>

   <nav class="navbar navbar-expand-sm navbar-dark" >
        
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="logo" style="width:100%; height: 36px;">
        </a>
   </nav>
  <nav class="navbar navbar-expand-sm navbar-dark" >
      
        <!-- Links -->
        <ul v-if="GetIsLoggedIn!='notLogin'" class="navbar-nav">
               <li class="nav-item">
            <router-link to = "/msru/controlpanel" class="nav-link">
                <span><img src="../assets/control_panel.png" style="width: 20px;" alt="Control panel" ></span>
               <span>Control Panel </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to = "/msru/simpleview" class="nav-link">
                <span><img src="../assets/control_panel.png" style="width: 20px;" alt="Control panel" ></span>
               <span>Simple View </span>
            </router-link>
          </li>
          <li class="nav-item">
           <router-link to = "/msru/mainview" class="nav-link"> 
                <span><img src="../assets/MainView.png" style="width: 20px;" alt="Control panel" ></span>
               <span>Main View</span>
          
            </router-link>
          </li>
      
          <li class="nav-item">
          <router-link to = "/msru/alarmpage" class="nav-link">
                <span><img src="../assets/Alarm.png" style="width: 20px;" alt="Control panel" ></span>
               <span> Alarm  </span>
           </router-link>
          </li>
              <li class="nav-item">
          <router-link to = "/msru/trainsummery" class="nav-link">
                <span><img src="../assets/Report.png" style="width: 20px;" alt="Control panel" ></span>
               <span> Train Summary </span>
          </router-link>
         </li>
         <!--    <li class="nav-item">
            <a class="nav-link" href="#">
                <span><img src="../assets/database.png"  style="width: 20px;" alt="Control panel" ></span>
               <span> Train Report </span>
            </a>
          </li>-->
       </ul>
       <ul v-if="GetIsLoggedIn!='notLogin'" class="navbar-nav ml-auto">
           <li class="nav-item">
               <div class="nav-link" v-on:click="Logout" style="cursor:pointer"> <b>Logout</b> </div>
          </li>
       </ul>
      </nav>
      </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
    name:'Header',
    computed:{
      ...mapGetters(['GetIsLoggedIn'])
    }
    ,
    methods:{...mapActions(['setLogout']),
        Logout(){
            window.localStorage.removeItem("IntUserId");
            window.localStorage.removeItem("Site_Code");
            this.setLogout();
            this.$router.push('/msru');
        }
    }

}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
 }
.img-auto{
    margin: 0px;
    padding: 0px;
    width: 100%; 
}
 body{
    background-color: #e9e9e9 !important;
 }
 
 .header{
     height: 100vh;
 }
 .navbar-style{
     box-shadow: 0 5px 10px #efefef;
     text-transform: uppercase;
 }
 .logo{
     height: 45px;
     padding: 2px 10px;
 }
 .icon-bar{
     background: darkorange;
 }
 li a{
     color: #333333;
 }
 .leftside, .rightside{
     height: 100vh;
     width: 100%;
 }
 
 @media screen and (min-width:768px) {
 
     .leftside, .rightside{
         height: 100vh;
     }
 
 }
 
 .leftside{
     background: gray;
 }
 .rightside{
     background: blue;
 }
 nav.navbar.navbar-expand-sm.bg-dark.navbar-dark{
     padding: 0px;
 }
 a.navbar-brand{
     padding: 0px;
 }
 .navbar-brand{
    margin-right: 0px !important; 
 }
 nav.navbar.navbar-expand-sm.navbar-dark{
     background-color: #343a44;
 }
 .navbar{
     padding: 0px !important;
 }
 
 .table tr th{
     font-size: 13px;
     
     font-weight: 400;
 }
 .table td, .table th{
     padding: 2px 2px 2px 10px !important;
 }
 .table td{
     font-size: 13px;
     color: #666666;
 }
 .table .thead-light th{
     background-color: #f0a055 !important;
     color: #ffffff !important;
 }
 .table .thead-drk th{
     background-color: #ed2160;
     color: #ffffff;
 }
 .image-con{
     width: 100%;
     float: left;
     position: relative;
     background-color: f3f3f3;
     border: 1px solid #e0e0e0;
     padding: 6px;
     border-radius:4px;
 }
 
 
 .heading-bot-img{
     width: 100%;
     float: left;
     position: relative;
     font-size: 11px;
     color: #333333;
     font-weight: 500;
     margin-top: 5px;
 }
 
 .footer-copyright.text-center.py-3{
     font-size: 12px;
     color: #666666;
 }
 .p-top{
     padding-top: 15px;
 }
 .left-icon{
     float: left;
     width: 20%;
 }
 .right-heading{
     float: left;
     width: 76%;
     margin-left: 4%;
 }
 .dym{
     width: 72px;
     height: 72px;
 }
 
 .navbar-dark .navbar-nav .nav-link{
    color: #ffffff !important;
    font-size: 13px !important;
    font-weight: 500 !important;
 }
 
 li.nav-item{
    padding-left: 30px;
    padding-right: 30px;
    border-right: 1px solid #555e6c;
 }
 .header-top{
     width: 100%;
     float: left;
     height: 32px;
 }
</style>