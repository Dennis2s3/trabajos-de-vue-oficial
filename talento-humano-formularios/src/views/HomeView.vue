<template>
  <form @submit.prevent="procesarFormulario">
    <input 
    type="text"
    class="Form"
    placeholder="Ingere Nombre"
    v-model.trim="tarea.nombre"
    >
    <div class="Contenedor-padre">
    <div class="Container-Check">
      <h3 class="Titulo">{{Title}}</h3>
      <input 
      type="checkbox"
      class="boton"
      id="Boton-1"
      v-model="tarea.categoria"
      value="Masculino"
      >
      <label for="Boton-1" class="Texto">Masculino</label>

    
      <input 
      type="checkbox"
      class="boton-1"
      id="Boton-2"
      v-model="tarea.categoria"
      value="Femenino"
      >
      <label for="Boton-2" class="Texto-1">Femenino</label>
      </div>
    <div class="Container-Check">
      <h3>{{Title2}}</h3>
      <input 
      type="radio" 
      class="boton"
      id="radio-1"
      value="casado"
      v-model="tarea.estado"
      >
      <label for="radio-1" class="Texto">Casado</label>

      <input 
      type="radio" 
      class="boton-1"
      id="radio-2"
      value="divorciado"
      v-model.number="tarea.estado"
      >
      <label for="radio-2" class="Texto-1">Divorciado</label>
    </div>
    </div>
    <div class="mt-2">
      <input 
        type="number"
        v-model="tarea.numero"
        class="form-control"
      >
    </div>
    <button class="btn btn-dark mt-4 btn-block " type="submit" :disabled="bloquear">
      Procesar
    </button>
  </form>
  <p>{{tarea}}</p>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      Title:'Sexo',
      Title2:'Estado Civil',
      tarea:{
        nombre:'',
        categoria:[],
        estado:'',
        numero:0
      }
    }
  },
  methods:{
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim()===''){
        console.log('Campo Vacio')
        return
      }
      console.log('Campos Enviados')
      this.tarea={
        nombre:'',
        categoria:[],
        estado:'',
        numero:0
        
      }
    }
  },
  computed:{
    bloquear(){
      return this.tarea.nombre.trim()==="" ? true : false
    }
  }
}
</script>
<style>
.Form{
  margin-top: 2rem;
  width: 100%;
  height: 2.5rem;
}
.Form:hover{
  border: 2px solid rgb(16, 124, 224);
  box-shadow: 1px  rgb(16, 124, 224);
}
.boton{
  margin-top: 10px;
}
.Texto{
  margin-left: 5px;
}
.boton-1{
  margin-top: 10px;
  margin-left: 10px;
}
.Texto-1{
  margin-left: 5px;
}
p{
  text-align: center;
}
.Container-Check{
  margin-top: 1rem;
  text-align: center;
  border: 1px black solid;
  margin-left: 0.5rem;
  margin-right:0.5rem ;
  padding: 0.5rem;
}
.Contenedor-padre{
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;

}
</style>