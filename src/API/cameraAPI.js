import axios from 'axios';

export default{
    GetAllCameraData:function(){
        return axios.get('http://novius-railtech.com/msruserviceTest/api/tblCamera/GetAllCamera') 
    },
    GetAllSensors_Devices:async function(){
       return axios.get('http://novius-railtech.com/msruserviceTest/api/mstSensors_Devices/GetAllSensors_Devices');
    }, 
    updateCameraData:async function(cameraData){
        return axios.post('http://novius-railtech.com/msruserviceTest/api/tblCamera/UpdateCamera',cameraData)
    }
}