<template>
  <div class="container">
    <form action="#" >
                        <div class="row linea ">
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label ">Nombre</label>
                                <input type="text" class="form-control w-90 border border-secondary"
                                v-model.trim="contactanos.nombre"  
                               >
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Apellido</label>
                                <input type="text" class="form-control border border-secondary"
                                 v-model.trim="contactanos.apellido"
                                >
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Usuario</label>
                                <input type="text" class="form-control border border-secondary" 
                                v-model.trim="contactanos.usuario"
                                >
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Correo Electronico</label>
                                <input type="email" class="form-control border border-secondary" id="exampleInputEmail1" 
                                v-model.trim="contactanos.correo"
                                >
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Cedula</label>
                                <input type="number" class="form-control border border-secondary" 
                                v-model.trim="contactanos.cedula"
                                >
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="from-label">Telefono</label>
                                <input type="number"  class="form-control border border-secondary"
                                v-model.trim="contactanos.telefono"
                                >
                            </div>
                             <div class="row-6 text-center mb-4 ">
                                <label for="" class="form-label mt-4  mb-0">Mensaje</label>
                                <textarea class="mt-4 w-100 form-control border border-secondary" v-model.trim="contactanos.mensaje"></textarea>
                            </div>
                        <div class="row">
                            <button class="btn btn-primary w-75 m-auto mt-3 mb-5" @click.prevent="procesarform" >
                                Enviar
                            </button>
                        </div>
                        </div>
                    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
const shortid =require('shortid');
import Swal from 'sweetalert2'

export default {

  data() {
    return {
      contactanos:{
        nombre: '',
        apellido:'',
        usuario:'',
        correo:'',
        cedula: 0,
        telefono: 0,
        mensaje:''
      }
    }
  },
  methods: {
    validEmail(correo) {
                var re = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
                return re.test(correo);
},
    ValidaNombre(nombre) {
            let re = /^[A-Za-z ]+$/;
            return re.test(nombre);
        },
    validatelefono_cedula(telefono){
            let re = /^\d{10}$/;
            return re.test(telefono)
    },
    ...mapActions(['setcontactousuario']),
    procesarform(){
       if(!(this.contactanos.nombre, this.contactanos.apellido, this.contactanos.usuario, this.contactanos.correo,
        this.contactanos.cedula, this.contactanos.telefono, this.contactanos.mensaje)){
              Swal.fire({
              icon: "error",
              title: "Error",
              text: "Los campos estan vacios!",
          }); return
        }else  if(!this.validEmail(this.contactanos.correo)){
              Swal.fire({
              icon: "error",
              title: "Error",
              text: "Escriba correctamente el correo!",
          });
              return          
        }else if(!this.ValidaNombre(this.contactanos.nombre)){
              Swal.fire({
              icon: "error",
              title: "Error",
              text: "En el nombre solo se aceptan letras!",
          });
              return 
        }else if(!this.ValidaNombre(this.contactanos.apellido)){
              Swal.fire({
              icon: "error",
              title: "Error",
              text: "En el apellido solo se aceptan letras!",
          });
              return 
        }
        else if(!this.validatelefono_cedula(this.contactanos.telefono) ){
           Swal.fire({
              icon: "error",
              title: "Error",
              text: "El telefono debe tener 10 numeros!",
          });
              return 
        }else if(!this.validatelefono_cedula(this.contactanos.cedula) ){
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "La cedula debe tener 10 numeros!",
          });
              return 
        }else{
            Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "La copia de seguridad se creo correctamente.",
                });
        }


      //generar id de contactanos
      this.contactanos.id = shortid.generate()
      //enviar los datos decontacto
      this.setcontactousuario(this.contactanos)

      this.contactanos ={
        id:'',
         nombre: '',
        apellido:'',
        usuario:'',
        correo:'',
        cedula: 0,
        telefono: 0,
        mensaje:''
      }
    }
  },
}
</script>
