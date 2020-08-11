import axios from 'axios';


export default{  
    GetAllAlarm:function(trainIdAlarm){
        console.log("selected train id alarm",trainIdAlarm)
        return axios.post('http://novius-railtech.com/Msruservice/api/tblAlarm/SelectAlarmInfo',{
            IntTempLogId:null,
            IntTrainId:trainIdAlarm,
            IntBogiTypeId:null,
            IntAxleNo:null,
            NvcharCoachNo:null,
            IntCoachPosition:null,
            DecTs1:null,
            DecTs2:null,
            DecTs3:null,
            DecTs4:null,
            DecTs5:null,
            DecTs6:null,
            DecAxel_Speed:null,
            NvcharDescription:null,
            DtDateofCreation:null,
            DtDateofModification:null,
            YnDeleted:null
        },
        {
            headers: {
                'X-ClientId': window.localStorage.getItem("Site_Code")
            }
        }
       ).then(function (response) {
            console.log(response)
            return response;
        })
        .catch(function (error){
            console.log(error);
            
        })
    },

  
}


