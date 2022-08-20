<template>
  <Titulo texto="Formulario" class="texto"/>
  <form   @submit.prevent="procesarFormulario">
    
    <Input :tarea="tarea" />
    

  </form>
  <ListaTarea/>
</template>

<script>
import Input from '../components/Input.vue'
import ListaTarea from '../components/ListaTarea.vue'
import {mapActions} from 'vuex'
import Titulo from '@/components/Titulo.vue';
const shortid = require('shortid');

export default {
  name: 'HomeView',
  components: {
    Input,
    ListaTarea,
    Titulo
},
  data() {
    return {
      Title:'Sexo',
      Title2:'Estado Civil',
      tarea:{
        id: '',
        nombre:'',
        categoria:[],
        estado:'',
        numero:0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim()===''){
        console.log('Campo Vacio')
        return
      }
      console.log('Campos Enviados')
      //generar id

      this.tarea.id =shortid.generate()
      console.log(this.tarea.id)

      this.setTareas(this.tarea)


      this.tarea={
        id: '',
        nombre:'',
        categoria:[],
        estado:'',
        numero:0
        
      }
    }
  }
}
</script>
<style>
h3{
  text-align: center;
}
.texto{
  text-align: center;
}
</style>