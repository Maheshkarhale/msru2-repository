import axios from 'axios';

export default{
  GetTemperatur:function(trainId){
   return axios.post('http://novius-railtech.com/Msruservice/api/tblTemperatureLog/SelectTemperatureLog',
   {
  IntTempLogId:null,
  IntTrainId:trainId,
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
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  })
  }
  
  
}