import TrainTransactionAPI from '../../API/trainTransactionAPI';


const state={
    train_Transaction:[],
    selectTrain_Transaction:[],
    selectedTrainId:0,
    selectedTrainIdAlarm:0,
    selectedTrainIdWarning:0,
    SelectedAxleImages:[]
}

const getters={
getAllTrainTransaction:state=>state.train_Transaction,
getSelectedTrain:state=>state.selectedTrainId,
getSelectedTrainTRansaction:state=>state.selectTrain_Transaction,
getSelectedTrainAlarm:state=>state.selectedTrainIdAlarm,
getSelectedTrainWarnig:state=>state.selectedTrainIdWarning,
getSelectedAxleImages:state=>state.SelectedAxleImages
 }

const actions={
    async TrainTransactionSet({commit}){
        const response=await TrainTransactionAPI.GetAllTrainTransaction();
        commit('settblTrainTransaction',response.data)
        console.log(response.data)
    },

    async SelectedTrainTransaction({commit},id){
        const response=await TrainTransactionAPI.GetSelectTrainTransaction(id);
        commit('settblSelectedTrainTransaction',response.data)
        console.log(response.data)
    },

    async SelectorAxleImages({commit},details){
        const response=await TrainTransactionAPI.GetAxleImageSelector(details.TrainTransactioId,details.AxelNumber);
        commit('settblSelectorAxleImages',response.data)
        console.log(response.data)
    }
}
    const mutations={
        settblTrainTransaction:(state,TrainTransactionSet)=>{
            state.train_Transaction=TrainTransactionSet;
            console.log("transaction",TrainTransactionSet[0].IntTrainId);
            state.selectedTrainId=TrainTransactionSet[0].IntTrainId;
            var selectedTrainTempArray=[];
            selectedTrainTempArray.push(TrainTransactionSet[0]);
            state.selectTrain_Transaction=selectedTrainTempArray;
        },

        settblSelectedTrainTransaction:(state,SelectedTrainTransaction)=>{
            var selectedTrainTempArray=[];
            selectedTrainTempArray.push(SelectedTrainTransaction[0]);
            state.selectTrain_Transaction=selectedTrainTempArray;
        },

        settblSelectorAxleImages:(state,SelectorAxleImages)=>{
            var selectedAxleImagesTempArray=[];
              selectedAxleImagesTempArray.push(SelectorAxleImages[0]);
              state.SelectedAxleImages=selectedAxleImagesTempArray;
        }
    }
export default{
    state,
    getters,
    actions,
    mutations
}