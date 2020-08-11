export const setTemperatureLog=(state,data)=>{
    window.localStorage.setItem('coachPosition',0);
      let temperaturDataForLHChart=[];
      let temperaturDataForRHChart=[];
      let Train_temperaturelog=data[0];
      let alarmData=data[1];
      let train_warning=data[2];
      let min=1000;
      let minAp=1000;
      let maxAp=0;
      let max=0;
      let minTempOfLH=1000;
      let minTempOfWheelLH=1000;
      let minTempOfWheelRH=1000;
      let maxTempOfWheelLH=0;
      let maxTempOfWhellRH=0;
      let minTempOfRH=1000;
      let maxTempOfLH=0;
      let maxTempOfRH=0;  
      let minTempOfBrakeLH=1000;
      let minTempOfBrakeRH=1000;
      let maxTempOfBrakeLH=0;
      let maxTempOfBrakeRH=0;
      let minTempOfAxelBoth=1000;
      let maxTempOfAxelBoth=0;
      let minTempOfWheelBoth=1000;
      let maxTempOfWheelBoth=0;
      let minTempOfBrakeBoth=1000;
      let maxTempOfBrakeBoth=0;
     
      temperaturDataForLHChart.push(["Axle No.", "Temperature"])
      temperaturDataForRHChart.push(["Axle No.", "Temperature"])
       for(let i=0;i<Train_temperaturelog.length;i++)
       {
        temperaturDataForLHChart.push([Train_temperaturelog[i].IntAxleNo,Train_temperaturelog[i].DecTs1])
        temperaturDataForRHChart.push([Train_temperaturelog[i].IntAxleNo,Train_temperaturelog[i].DecTs2])
        let result=false;
        let trainTemNewCoach=Train_temperaturelog[i];
        trainTemNewCoach.isNewCoach=false;
        Train_temperaturelog[i]=trainTemNewCoach;
        if(parseInt(window.localStorage.getItem('coachPosition'))!=Train_temperaturelog[i].IntCoachPosition)
        {
            result=true
            trainTemNewCoach.isNewCoach=result;
            Train_temperaturelog[i]=trainTemNewCoach;
            window.localStorage.setItem('coachPosition',Train_temperaturelog[i].IntCoachPosition);
        }
         if(min>Train_temperaturelog[i].DecTs1){
           min=Train_temperaturelog[i].DecTs1;
         }
         if(minAp>Train_temperaturelog[i].DecTs2)
         {
           minAp=Train_temperaturelog[i].DecTs2;
         }
         if(maxAp<Train_temperaturelog[i].DecTs2)
         {
           maxAp=Train_temperaturelog[i].DecTs2;
         }
         if(max<Train_temperaturelog[i].DecTs1)
         {
           max=Train_temperaturelog[i].DecTs1;
         }
          let trainTempLog=Train_temperaturelog[i];
          trainTempLog.is_Alarm=false;
          trainTempLog.is_Warning=false;
          Train_temperaturelog[i]=trainTempLog;
         for(let j=0;j<alarmData.length;j++)
         {
           if(Train_temperaturelog[i].IntAxleNo==alarmData[j].IntAxelNo)
           {
             let trainTempLog=Train_temperaturelog[i];
             trainTempLog.is_Alarm=true;
             if(alarmData[j].NvcharSide=='RH')
             {
                trainTempLog.is_RH=true; 
             }
            else
             {
                trainTempLog.is_LH=true;   
             }
             Train_temperaturelog[i]=trainTempLog;
             
           }
         }
         for(let k=0;k<train_warning.length;k++)
         {
            if(Train_temperaturelog[i].IntAxleNo==train_warning[k].IntAxelNo)
            {
              let trainTempLog=Train_temperaturelog[i];
              trainTempLog.is_Warning=true;
              if(train_warning[k].NvcharSide=='RH')
             {
                trainTempLog.is_RH=true; 
             }
             else
             {
                trainTempLog.is_LH=true;   
             }
              Train_temperaturelog[i]=trainTempLog;
            }
         }
       }

       for(let i=0;i<Train_temperaturelog.length;i++){
        if(minTempOfLH>Train_temperaturelog[i].DecTs1){   
          minTempOfLH=Train_temperaturelog[i].DecTs1 ;   
        }
        if(minTempOfRH>Train_temperaturelog[i].DecTs2){
          minTempOfRH=Train_temperaturelog[i].DecTs2 ;   
        }
        minTempOfAxelBoth=Math.min(minTempOfLH,minTempOfRH)

       if(maxTempOfLH<Train_temperaturelog[i].DecTs1){
        maxTempOfLH=Train_temperaturelog[i].DecTs1 ;   
       }
       if(maxTempOfRH<Train_temperaturelog[i].DecTs2){
        maxTempOfRH=Train_temperaturelog[i].DecTs2 ;   
       }
         
       } maxTempOfAxelBoth=Math.max(maxTempOfLH,maxTempOfRH)
       
       for(let i=0;i<Train_temperaturelog.length;i++){
        if(minTempOfWheelLH>Train_temperaturelog[i].DecTs3){
          minTempOfWheelLH=Train_temperaturelog[i].DecTs3;   
        }
        if(minTempOfWheelRH>Train_temperaturelog[i].DecTs4){
      
          minTempOfWheelRH=Train_temperaturelog[i].DecTs4;   
        }
        minTempOfWheelBoth=Math.min(minTempOfWheelLH,minTempOfWheelRH);
    
        if(maxTempOfWheelLH<Train_temperaturelog[i].DecTs3){
          maxTempOfWheelLH=Train_temperaturelog[i].DecTs3;   
        }
        if(maxTempOfWhellRH<Train_temperaturelog[i].DecTs4){
          
          maxTempOfWhellRH=Train_temperaturelog[i].DecTs4;   
        }

        maxTempOfWheelBoth=Math.max(maxTempOfWheelLH,maxTempOfWhellRH);
       }

       for(let i=0;i<Train_temperaturelog.length;i++){
        if(minTempOfBrakeLH>Train_temperaturelog[i].DecTs5){
          minTempOfBrakeLH=Train_temperaturelog[i].DecTs5;   
        }
        if(minTempOfBrakeRH>Train_temperaturelog[i].DecTs6){
      
          minTempOfBrakeRH=Train_temperaturelog[i].DecTs6;   
        }
     
    
        if(maxTempOfBrakeLH<Train_temperaturelog[i].DecTs5){
          maxTempOfBrakeLH=Train_temperaturelog[i].DecTs5;   
        }
        if(maxTempOfBrakeRH<Train_temperaturelog[i].DecTs6){
          maxTempOfBrakeRH=Train_temperaturelog[i].DecTs6;   
        }
      
       }
       console.log("brake temppp",minTempOfBrakeBoth)
       minTempOfBrakeBoth=Math.min(minTempOfBrakeLH,minTempOfBrakeRH);
       console.log("brake temppp",maxTempOfBrakeBoth)
       maxTempOfBrakeBoth=Math.max(maxTempOfBrakeLH,maxTempOfBrakeRH);

       state.minApTemp=minAp;
       state.maxApTemp=maxAp;
       state.minTemp=min;
       state.maxTemp=max;
       state.train_alarm=alarmData;
       state.train_warning=train_warning;
       state.train_temperature=Train_temperaturelog;
       state.minTempOfAxelLHRH=minTempOfAxelBoth;
       state.maxTempOfAxelLHRH=maxTempOfAxelBoth;
       state.minTempOfWheelLHRH=minTempOfWheelBoth;
       state.maxTempOfWheelLHRH=maxTempOfWheelBoth;
       state.minTempOfBrakeLHRH=minTempOfBrakeBoth;
       state.getmaxTempOfBrake=maxTempOfBrakeBoth;
       state.temperatureLogForLHChart=temperaturDataForLHChart;
       state.temperatureLogForRHChart=temperaturDataForRHChart;
}