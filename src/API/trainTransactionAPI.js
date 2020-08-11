import axios from 'axios';
const instance=axios.create(
    {
        baseURL: 'http://novius-railtech.com/Msruservice'
    }
)
instance.defaults.headers.common['AuthorizClientIdation'] = "MSRU_Malda";
export default{
    GetAllTrainTransaction:function(){ 
        
        return axios.get("http://novius-railtech.com/Msruservice/api/tblTrainTransaction/GetAllTrainTransaction",{
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
    }
    ,
    GetSelectTrainTransaction:function(id){ 
        
        return axios.post('http://novius-railtech.com/Msruservice/api/tblTrainTransaction/SelectTrainTransactionInfo',{
            IntTrainId:id
        },
        {
            headers: {
                'X-ClientId':  window.localStorage.getItem("Site_Code")
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

    GetAxleImageSelector:function(TrainTransactioId,AxelNumber){ 
        let site_code=window.localStorage.getItem("Site_Code");
        return axios.get('http://novius-railtech.com/AxleImageSelector/api/Get_Image_URL/GetImage?SiteCode='+site_code+'&TrainTransactioId='+TrainTransactioId+'&AxelNumber='+AxelNumber
        ).then(function (response) {
            console.log("Images response",response)
            return response;
        })
        .catch(function (error){
            console.log(error);
            
        })
    }
}
