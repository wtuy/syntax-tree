<template>
  <div id="app">
    <DrawMenu id="drawMenu" />
    <!--Ning id="graphDrawer"></Ning-->
    <!--iframe src="https://jsfiddle.net/"></iframe-->

  </div>
</template>
<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DrawMenu from './components/DrawMenu'
//require('./components/graph-creator.css')
//require('./components/graph-creator.js')


//try out
//require('./components/ningjs.js')
//import GraphCreator from 'src/components/graph-creator.js'
//import Ning from './components/Ning'



export default {
  name: 'app',
  components : {
    DrawMenu
  }
}
//document.getElementById("ning").innerHTML = "I'm writing from app.vue";
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: none;
  color: #2c3e50;
  margin-top: 60px;
}
.row{
  width:100%;
}
/*#drawMenu{
  width: 30%;
  float: right;
}*/
</style>
