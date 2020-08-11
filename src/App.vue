<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view> 
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
//import SimpleView from './components/SimpleView/SimpleView';
//import MainView from './components/MainView/MainView';
export default {
  name: 'App',
  components:{
     Header,
     Footer,
    // SimpleView,
   //  MainView
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
