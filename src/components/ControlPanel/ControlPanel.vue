<template>
<div class="container">
  <div class="col-12 maintanace-bg" >
   
   <OperationAndControl></OperationAndControl>
   <Maintanance></Maintanance>
   </div>
   </div>
</template>

<script>
import OperationAndControl from '../ControlPanel/OperationAndControl/OperationAndControl'
import Maintanance from '../ControlPanel/Maintanance/Maintanance'
import {mapGetters} from 'vuex';
// import {mapActions} from 'vuex';
export default {
 computed:{
      ...mapGetters(['getAllCameraData','getAllTrainTransaction'])
    },
 components:{
     OperationAndControl,
     Maintanance,
 }   
}
</script>
<style>

</style>