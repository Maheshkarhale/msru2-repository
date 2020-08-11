import Login from '../../API/loginAPI'



const state={
 user:[],
 UserSiteDetails:[],
 isLoggedIn:window.localStorage.getItem("IntUserId") || "notLogin"  
}
const getters={
 GetUser:state=>state.user,
 GetSiteCode:state=>state.UserSiteDetails,
 GetIsLoggedIn:state=>state.isLoggedIn,
}
const actions={

    async UserData({commit},user){
        const response=await Login.GetSelectedUser(user);
        console.log("user response",response.data)
        commit('mstUser',response.data)
        },
    async UserSiteDetails({commit},user){
        const response=await Login.GetSiteCode(user);
        console.log("site code response",response.data);
        commit('mstUserSiteCode',response.data)
    },
    setLogout({commit}){
      commit('logout');
    },
    setLogin({commit}){
        commit('login');
    } 
}

const mutations={
mstUser:(state,UserData)=>{
    state.user=UserData;
},
mstUserSiteCode:(state,UserSiteCode)=>{
    state.UserSiteDetails=UserSiteCode
},
logout:(state)=>{
    state.isLoggedIn="notLogin"
},
login:(state)=>{
  state.isLoggedIn=window.localStorage.getItem("IntUserId");
}
  
}
export default{
    state,
    getters,
    actions,
    mutations
}