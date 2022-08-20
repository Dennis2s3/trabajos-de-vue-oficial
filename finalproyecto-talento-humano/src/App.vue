<template>
  <div class="app">
    <navegacion/>
    <router-view/>
    <abajo/>
   
  </div>
  
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import Abajo from './components/Abajo.vue';
  import {mapActions} from 'vuex'

    export default {
    components: {
    Navegacion,
    Abajo
},methods:{
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Kreon', serif;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app{
  min-height: 100vh;
  position: relative;
  background-color: rgba(199, 199, 199, 0.459)
;

}


nav a {
  font-weight: bold;
  color: #ff6600;
}

nav a.router-link-exact-active {
  color: #470f6d;
}
</style>
