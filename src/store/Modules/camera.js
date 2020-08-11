import CameraAPI from '../../API/cameraAPI'

const state={
  camera_data:[],
  sensor_data:[],
}

const getters={ 
    getAllCameraData:state=>state.camera_data,
    getAllSensorData:state=>state.sensor_data,
}

const actions={
    async CameraData({commit}){
    const response=await CameraAPI.GetAllCameraData();
    console.log(response.data);
    commit('tblCameraData',response.data)
    },
    async SensorsData({commit}){
    const response=await CameraAPI.GetAllSensors_Devices()
    console.log(response.data);
    commit("tblSensorData",response.data)
    },
    async updateCameraData({commit},cameratData){
        const response=await CameraAPI.updateCameraData(cameratData)
        console.log(response.data);
        commit("updateCameraData",cameratData)
    }
}

const mutations={
    tblCameraData:(state,CameraData)=>{ 
        state.camera_data=CameraData
    },
    tblSensorData:(state,sensor_data)=>{
      state.sensor_data=sensor_data
    },
    updateCameraData:(state,cameratData)=>{
        state.camera_data=cameratData
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}