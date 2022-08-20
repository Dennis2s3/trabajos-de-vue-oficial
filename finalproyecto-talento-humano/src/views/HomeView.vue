<template>
<main>
  <form   @submit.prevent="procesarFormulario">
    
    <Input :tarea="tarea" />
    

  </form>
  <ListaTarea/>
  </main>

</template>

<script>
import Input from '../components/Input.vue'
import ListaTarea from '../components/ListaTarea.vue'
import {mapActions} from 'vuex'
const shortid = require('shortid');
import Swal from 'sweetalert2'


export default {
  name: 'HomeView',
  components: {
    Input,
    ListaTarea,
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
    ...mapActions(['setTareas', 'cargarLocalStorage']),
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
       Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Reporte de Incidencai registrada con exito!',
        });return
    }

  },
    created(){
    this.cargarLocalStorage()
  }
}
</script>
<style scoped>
main{
  height: 100%;

}

</style>