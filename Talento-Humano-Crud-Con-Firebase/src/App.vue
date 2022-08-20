<template>
  <NavBar/>
  <div class="contenedor">
    <router-view/>
  </div>

</template>

<script>
  import NavBar from './components/NavBar'
  import {mapActions} from 'vuex'

  export default{
    components:{
    NavBar
},
  methods:{
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
  }
</script>

<style>
  .contenedor{
    margin: 0rem 4rem 0rem 4rem;
  }
</style>
