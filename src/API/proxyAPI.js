import axios from 'axios';

export default{ 
    GetAllProxyData:function(){
        return axios.get('http://novius-railtech.com/msruserviceTest/api/tblProxySensor/GetAllProxySensor') 
    },
    GetAllSensors_Devices:async function(){
       return axios.get('http://novius-railtech.com/msruserviceTest/api/mstSensors_Devices/GetAllSensors_Devices');
    }, 
    updateProxyData:async function(proxyData){
        return axios.post('http://novius-railtech.com/msruserviceTest/api/tblProxySensor/UpdateProxySensor',proxyData)
    }
}