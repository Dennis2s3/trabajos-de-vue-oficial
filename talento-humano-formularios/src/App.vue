<template>
  <NavBar/>
  <div class="contenedor">
    <router-view/>
  </div>

</template>

<script>
  import Parte1 from './components/Parte1'
  import NavBar from './components/NavBar'

  export default{
    components:{
    NavBar,Parte1
}
  }
</script>

<style>
  .contenedor{
    margin: 0rem 4rem 0rem 4rem;
  }
</style>
