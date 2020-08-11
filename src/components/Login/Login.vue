<template>
    <div class="container center">
        <div class="row">
        <div class="col-12 login-page">
        <div class="login-box">
    <div class="container">
       <h5 class="login-title" >Login</h5> 
        <div>
            
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control"  />
                
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control"  />
                
            </div><br>
         <div class="login-button">
          <button   class="login-btn"  v-on:click="Login" >LogIn</button>
          </div>
        </div>
    </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import router from '../../router/index'
export default {
    name:"Login",
    data:function(){
        return{
            username:'',
            password:'',
            user:[],
        }
    },
    computed:{
        ...mapGetters(['GetUser','GetSiteCode']),
    },
    methods:{ ...mapActions(['UserData','UserSiteDetails','setLogin']),
    Login:async function(){
        let context=this;
        console.log(this);
        let userObj={
            username:context.username,
            password:context.password,
        }
     await this.UserData(userObj) ;
     this.user=this.GetUser;
     if(this.user.length>0)
     {
      await this.UserSiteDetails({IntUserId:this.user[0].IntUserId});
      window.localStorage.setItem("Site_Code",this.GetSiteCode[0].NvcharStationCode);
      window.localStorage.setItem("IntUserId",this.GetSiteCode[0].IntUserId);
      this.setLogin();
      router.push({name:'SimpleView'});

     }
     else
     {
         alert("Username or password incorrect")
     }
    }
    }
}
</script>

<style>
.login-button{
    padding-bottom: 10px;
    float: left;
}
.login-btn{
  background-color: #ff009d;
  padding: 4px 10px 4px 10px; 
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  opacity: .65;
  border-radius: 5px;
  border: 0px;
}
.login-box{
    width: 40%;
    float: left;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    min-height: auto;
    margin-left: 30%;
    margin-top: 10%;
 
}
.login-page{
    height: 100vh;
}
label{
  padding-top: 10px;
  padding-bottom: 0px;
  font-size: 13px;
  float: left;
}
.form-label-group  {
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 6px;
  width: 250px;
}
   
.form-control {
  padding-top: 10px;
  padding-bottom: 10px;
} 

.form-control {
  padding: 4px 10px 4px 10px !important;
  font-size: 13px !important;
  height: 28px !important;
}

.login-title{
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
    margin-top: 10px;

}

</style>