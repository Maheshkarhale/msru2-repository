import proxyAPI from '../../API/proxyAPI';

const state={
    proxy_data:[],
    sensor_data:[],
  }
  
  const getters={ 
    getAllProxyData:state=>state.proxy_data,
    getAllSensorDataProxy:state=>state.sensor_data,
}

const actions={
    async ProxyData({commit}){
    const response=await proxyAPI.GetAllProxyData()
    console.log(response.data);
    commit('tblProxyData',response.data)
    },
    async SensorsData({commit}){
    const response=await proxyAPI.GetAllSensors_Devices()
    console.log(response.data);
    commit("tblSensorData",response.data)
    },
    async updateProxyData({commit},proxyData){
        const response=await proxyAPI.updateProxyData(proxyData)
        console.log(response.data);
        commit("updateCameraData",proxyData)
    }
}
 
const mutations={
    tblProxyData:(state,ProxyData)=>{ 
        state.proxy_data=ProxyData
    },
    tblSensorData:(state,sensor_data)=>{
      state.sensor_data=sensor_data
    },
    updateProxyData:(state,proxyData)=>{
        state.proxy_data=proxyData
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}