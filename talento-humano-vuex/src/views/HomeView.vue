<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 
      :style="colorContador"
    >  {{Titulo}}:  {{contador}}</h1>
    <button @click="AccionIncrementar">Incrementar</button>
    <BtnDisminuir />

    <hr>
    <BotonAccion :estado="true"/>
    <BotonAccion :estado="false"/>
  </div>
</template>

<script>
import BotonAccion from '../components/BotonAccion'
import BtnDisminuir from '../components/BtnDisminuir'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'HomeView',
  components: {
    BtnDisminuir, BotonAccion
  },
  data() {
    return {
      Titulo: 'Mi contador vuex'
    }
  },
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color': 'green'}: {'color': 'red'}]
    }
  },
  methods:{
    ...mapMutations(['incrementar']),
    ...mapActions(['AccionIncrementar'])
    
  }
}
</script>
