import axios from 'axios';

export default{
  GetAllWarning:function(intTrainWarnigId){
    return axios.post('http://novius-railtech.com/Msruservice/api/tblWarning/SelectWarningInfo',{
        IntTrainId:intTrainWarnigId,
    },
    {

    headers: {
        'X-ClientId': window.localStorage.getItem("Site_Code")
        }
    
    }
    ).then(function(response){
        console.log(response)
        return response;
    })
    .catch(function(error){
        console.log(error);
    })
   }
}