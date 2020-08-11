import axios from 'axios';


export default{
    GetSelectedUser:function(User){
        return axios.post('http://novius-railtech.com/msrumaster/api/MstUser/SelectUserInfo',{
            NvcharUserName:User.username,
            NvcharPassword:User.password
        }
         ).then(function (response) {
            console.log(response)
            return response;
        })
        .catch(function (error){
            alert("Something went wrong");
            console.log(error);
            
        })
    },
    GetSiteCode:function(user){
        return axios.post('http://novius-railtech.com/msrumaster/api/tblUserDetails/SelectUserDetailsInfo',{
            "IntUserId":user.IntUserId
        }).then(response=>{console.log(response);return response});
    }
  
}


