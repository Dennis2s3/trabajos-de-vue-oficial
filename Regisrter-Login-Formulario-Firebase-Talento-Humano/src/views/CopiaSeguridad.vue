<template>
<div class="container">
    <form action="#" @submit="" >
<p>

  <button class="submit-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Copia de Seguridad
  </button>
</p>
<div class="collapse" id="collapseExample">
  <label class="zip-label" >Nombre</label>
  <input type="text"  v-model="Copia.copiaSeguridad">
  <button class="submit-btn" type="submit" @click.prevent="enviar" >Crear Copia de Seguridad</button>
</div>
      <br>
  <button type="button" class="toggle-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="Restaurarcopia">
  Restaurar Copia de Seguridad
</button>
   

   
    </form>
    
</div>

</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex';
const shortid =require('shortid');
    export default {
    data() {
        return {
            Copia: {
                id: "",
                copiaSeguridad: ""
            }
        };
    },
    methods: {
        ...mapActions(["set2copiaS"]),
        procesarform() {
        },
        enviar() {
            if (!this.Copia.copiaSeguridad) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Escriba la copia de seguridad!",
                });
                return;
            }
            else {
                Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "La copia de seguridad se creo correctamente.",
                });
            }
            //generar id 
            this.Copia.id = shortid.generate();
            //enviar datos  
            this.set2copiaS(this.Copia);
            this.Copia = {
                id: "",
                copiaSeguridad: ""
            };
        },
        Restaurarcopia(){
          Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "La copia de seguridad se creo correctamente.",
                });
        }
    }
}
</script>

<style  scoped>
form {
  margin: 0 auto;
  text-align: center;
}
.submit-btn, .toggle-btn {
  height: 56px;
  width: 260px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  margin-top: 10px;
  background-color: #2371DF;
  color: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 8px;
}
.toggle-btn {
  margin-top: 30px;
  opacity: 1;
  height: 56px;
}
.collapse.in + .toggle-btn, .collapsing + .toggle-btn {
  margin-top: -50px;
  opacity: 0;
  transition: margin .35s ease,  opacity .2s ease, height .2s ease;
}
#toggle-form {
  width: 260px;
  margin: 0 auto;
}
#toggle-form.in + .toggle-btn {
  opacity: 0;
}
.zip-label {
  transform: translateY(16px);
  background: white;
  padding: 0 10px;
  font-weight: 900 !important;
  font-size: 18px;
}
input {
  height: 60px;
  width: 260px;
  display: block;
  padding-left: 16px;
  font-size: 18px;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border-radius: 5px;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  cursor: text;
  color: black;
  text-align: center;
  margin: 0 auto;
  border: 2px solid black;
  color: black;
  max-width: 260px;
  font-weight: 700;
}
.modal-dialog{
  text-align: center;
}
</style>