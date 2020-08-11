
import PyrometerAPI from '../../API/pyrometerAPI'

const state={
  pyrometer_data:[],

}

const getters={ 
    getAllPyrometeData:state=>state.pyrometer_data,
    
}

const actions={
    async PyrometerData({commit}){
    const response=await PyrometerAPI.GetAllPyrometerData();
    console.log(response.data);
    commit('tblPyrometerData',response.data)
    },
  
    async updatePyrometerData({commit},pyrometerData){
        const response=await PyrometerAPI.updatePyrometerData(pyrometerData);
        console.log(response.data);
        commit("updatePyrometerData",pyrometerData)
    }
}

const mutations={
    tblPyrometerData:(state,PyrometerData)=>{ 
        state.pyrometer_data=PyrometerData
    },
  
    updatePyrometerData:(state,pyrometerData)=>{
        state.pyrometer_data=pyrometerData
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}