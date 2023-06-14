<template>
    <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>

</template>


<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>
* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: rgba(0,0,0,4);
  color: #fff

}
  
.app {
  width: 80%;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}
</style>