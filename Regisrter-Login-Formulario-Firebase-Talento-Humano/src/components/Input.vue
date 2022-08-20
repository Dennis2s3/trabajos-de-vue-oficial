<template>
<main>
  <div class="container  mt-5 ">
    <h2 >Reportes de Incidencias.</h2>
    <div class="row ">
        <label for="" class="form-label ">Descripcion de la Indidencia</label>
        <input type="text" class="form-control" v-model.trim="tarea.nombre" >
    </div>
      <div class="col ">
        
      <div class="row " >
         <label for="">Selecciones su Cargo</label>
        <select class="form-select text-center"  v-model.trim="tarea.categoria" aria-label="Default select example" name="options" id="options">
          <option value="0" >Seleccione su cargo</option>
          <option value="General">General</option>
          <option value="Espesifica">Espesifica</option>
        </select>
      </div>
      <div class="row">
            <label for="">Selecciones su Incidencia </label>
          <select  v-model.trim="tarea.estado" class="form-select text-center " aria-label="Default select example"  >
            <option value="0">Seleccione su indicencia</option>
            <option value="Urgente">Urgente</option>
            <option value="Rutinaria">Rutinaria</option>
          </select>
      </div>
      <div class="row ">
        <label for="">Hora de envio de la incidencia</label>
        <input type="time" class="form-control mb-5" v-model.trim="tarea.numero">
      </div>
      </div>
      <button type="submit" class="btn btn-dark mb-5" @click="validarIncidencia">Enviar Incidencia</button>
  </div>
</main>

   <!--  <input 
    type="text"
    class="form-control"
    placeholder="Ingrese la incidencia"
    v-model.trim="tarea.nombre"
    >
    <div class="Contenedor-padre">
    <div class="Container-Check">
      <input 
      type="checkbox"
      class="boton"
      id="Boton-1"
      v-model="tarea.categoria"
      value="General"
      >
      <label for="Boton-1" class="Texto">General</label>

    
      <input 
      type="checkbox"
      class="boton-1"
      id="Boton-2"
      v-model="tarea.categoria"
      value="Espesifico"
      >
      <label for="Boton-2" class="Texto-1">Espesifico</label>
      </div>
    <div class="Container-Check">
      <input 
      type="radio" 
      class="boton"
      id="radio-1"
      value="urgente"
      v-model="tarea.estado"
      >
      <label for="radio-1" class="Texto">Urgente</label>

      <input 
      type="radio" 
      class="boton-1"
      id="radio-2"
      value="Importante"
      v-model.number="tarea.estado"
      >
      <label for="radio-2" class="Texto-1">Importante</label>
    </div>
    </div>
    <div class="mt-3">
      <input 
        id="numero"
        type="time"
        v-model="tarea.numero"
        class="form-control"
      >
    </div>
    <button class="btn btn-dark mt-4 btn-block " type="submit" :disabled="bloquear">
      Enviar
    </button> -->
</template>

<script >

import Swal from 'sweetalert2'

    export default{
    data() {
        return {
          tarea:{
        id: '',
        nombre:'',
        categoria:'',
        estado:'',
        numero:0
      }
        };
    },
    props: {
        tarea: Object
    },
    computed: {
        bloquear() {
            return this.tarea.nombre.trim() === "" ? true : false;
        }
    },
    components: {  },
    methods:{

   validarIncidencia(){
        if(!this.nombre){
           Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Escriba la incidencia que desea reportar!',
        });return
        }

      } 
    }
}

</script >

<style  scoped>
.container{
  background-color: rgba(255, 255, 255, 0.829);
  width: 50%;
  border-radius: 5px;
  padding-top: 25px;
}
h2{
  margin-top: 5px;
}
main{
  height: 100%;
}
label{
  color: black;
  font-size: 18px;
  margin-top: 0.5rem;
}
input{
  width: 45%;
  margin: auto;
  margin-top: 0.3rem;
  text-align: center;
}
select{
  width: 45%;
  margin: auto;
    margin-top: 0.3rem;

}
@media(max-width: 840px){
  .container{
    width: 70%;
  }
}
@media(max-width: 600px){
  .container{
    width: 80%;
  }
}
@media(max-width: 350px){
 input, select{
  width: 70%;
 }
}
</style>