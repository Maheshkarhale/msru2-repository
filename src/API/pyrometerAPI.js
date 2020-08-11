import axios from 'axios';

export default{
    GetAllPyrometerData:function(){
        return axios.get('http://novius-railtech.com/msruserviceTest/api/tblTempratureSensor/GetAllTempratureSensor') 
    },
 
    updatePyrometerData:async function(pyrometerData){
        return axios.post('http://novius-railtech.com/msruserviceTest/api/tblTempratureSensor/UpdateTempratureSensor',pyrometerData)
    }
}