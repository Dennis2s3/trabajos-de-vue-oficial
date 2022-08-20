<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Navbar/>
 
  <Cuenta/>
</template>

<script>
import Titulo from './components/Titulo'
import Cuenta from  './components/Cuenta'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Titulo,
    Cuenta,
    Navbar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50PX;
}
</style>
