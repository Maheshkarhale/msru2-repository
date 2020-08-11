import Warning from '../../API/warningAPI';

const state={
    train_warning:[]
}
const getters={
  allTrain_warnign:state=>state.train_warning,
 
  
}
const actions={
async TrainWarningData({commit},intTrainWarnigId){
    const response=await Warning.GetAllWarning(intTrainWarnigId);
    console.log("warning",response.data);
    commit('tblTrainWarning',response.data)
},
}

const mutations={
    tblTrainWarning:(state,TrainWarnigData)=>{
        state.train_warning=TrainWarnigData;
        }

}
export default{
    state,
    getters,
    actions,
    mutations
}