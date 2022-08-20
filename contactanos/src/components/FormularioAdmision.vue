<template>
<div class="container bg-light">
    <form action="#" >
        <div class="row">
            <h2 class="text-center mb-4">Informacion Personal</h2>
            <div class="col">
                <label for="" class="form-label">Nombre</label>
                <input type="text" class="form-control" v-model="Formulario.nombre">
                <label for="" class="form-label">Apellido</label>
                <input type="text" class="form-control" v-model="Formulario.apellido">
  
            </div>
            <div class="col">
                <label for="" class="form-label">correo</label>
                <input type="text" class="form-control" v-model="Formulario.correo">
                <label for="" class="form-label">Telefono</label>
                <input type="number" class="form-control" v-model="Formulario.telefono">
            </div>
            <div class="col">
                <label for="" class="form-label">Sexo</label>
                <input type="text" class="form-control" v-model="Formulario.sexo">
                <label for="" class="form-label">Fecha Nacimiento</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Nacimiento">
            </div>
        </div>
        <div class="row mt-5">
            <h2 class="text-center mb-4">Estudios Realizados</h2>
            <div class="col">
                <label for="" class="form-label">Nombre de la Primaria</label>
                <input type="text" class="form-control" v-model="Formulario.Nombre_Primaria">
                <label for="" class="form-label">Nombre de la Secundaria</label>
                <input type="text" class="form-control" v-model="Formulario.Nombre_Secundaria">
            </div>
            <div class="col">
                <label for="" class="form-label">Fecha de Inicio</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Inicio_Primaria">
                <label for="" class="form-label">Fecha de Inicio</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Inicio_Secundario">
            </div>
            <div class="col">
                <label for="" class="form-label">Fecha de Finalizacon</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Fin_Primaria">
                <label for="" class="form-label">Fecha de Finalizacon</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Fin_Secundario">
            </div>
        </div>
        <div class="row mt-5 mb-5">
            <h2 class="text-center mb-4">Experiencia Laboral</h2>
            <div class="col">
                <label for="" class="form-label">Nombre de la Empresa</label>
                <input type="text" class="form-control" v-model="Formulario.Nombre_Empresa_1">
                <label for="" class="form-label">Nombre de la Empresa</label>
                <input type="text" class="form-control" v-model="Formulario.Nombre_Empresa_2">
            </div>
            <div class="col">
                <label for="" class="form-label">Fecha de Inicio</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Inicio_Primera_Empresa">
                <label for="" class="form-label">Fecha de Inicio</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Inicio_Segunda_Empresa">
            </div>
            <div class="col">
                <label for="" class="form-label">Fecha de Finalizacon</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Fin_Primera_Empresa">
                <label for="" class="form-label">Fecha de Finalizacon</label>
                <input type="Date" class="form-control" v-model="Formulario.Fecha_Fin_Segunda_Empresa">
            </div>
        </div>
        <div class="row  mb-5">
            <button type="submit" class="btn btn-dark w-100" @click.prevent="procesarFormularios">Enviar</button>
        </div>
    </form>
</div>
</template>

<script>
import FormularioAdVue from '@/views/FormularioAd.vue';

import Swal from 'sweetalert2'
import { mapActions } from 'vuex';
const shortid =require('shortid');
    export default {
                data() {
            return {
                Formulario:{
                    id:'',
                    nombre:'',
                    apellido:'',
                    correo:'',
                    telefono:'',
                    sexo:'',
                    Fecha_Nacimiento:'',
                    Nombre_Primaria:'',
                    Nombre_Secundaria:'',
                    Fecha_Inicio_Primaria:'',
                    Fecha_Fin_Primaria:'',
                    Fecha_Inicio_Secundario:'',
                    Fecha_Fin_Secundario:'',
                    Nombre_Empresa_1:'',
                    Nombre_Empresa_2:'',
                    Fecha_Inicio_Primera_Empresa:'',
                    Fecha_Fin_Primera_Empresa:'',
                    Fecha_Inicio_Segunda_Empresa:'',
                    Fecha_Fin_Segunda_Empresa:'',

                }

            }
        },
        methods: {
            validEmail(correo) {
                var re = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
                return re.test(correo);
},
            ...mapActions(['set3Formulario']),
            procesarFormularios(){
                   if(!(this.Formulario.nombre, this.Formulario.apellido, this.Formulario.correo,this.Formulario.sexo,
                this.Formulario.telefono, this.Formulario.Fecha_Nacimiento, this.Formulario.Nombre_Primaria,this.Formulario.Nombre_Secundaria,
                this.Formulario.Fecha_Inicio_Primaria,this.Formulario.Fecha_Fin_Primaria,this.Formulario.Fecha_Inicio_Secundario,
                this.Formulario.Fecha_Fin_Secundario,this.Formulario.Nombre_Empresa_1,this.Formulario.Nombre_Empresa_2,
                this.Formulario.Fecha_Inicio_Primera_Empresa,this.Formulario.Fecha_Fin_Primera_Empresa,this.Formulario.Fecha_Inicio_Segunda_Empresa,
                this.Formulario.Fecha_Fin_Segunda_Empresa)){
                     Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Los campos estan vacios!",
                }); return
                }
                else  if(!this.validEmail(this.Formulario.correo)){
                    Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Escriba correctamente el correo!",
                });
                    return
                }
                 else  if(this.Formulario.Fecha_Inicio_Primaria> this.Formulario.Fecha_Fin_Primaria){
                     Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "La fechas de la primaria estan incorrectas!",
                });
                    return
                }
                else  if(this.Formulario.Fecha_Inicio_Secundario> this.Formulario.Fecha_Fin_Secundario){
                     Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "La fechas de la secundaria estan incorrectas!",
                });
                    return
                }
                else  if(this.Formulario.Fecha_Inicio_Primera_Empresa> this.Formulario.Fecha_Fin_Primera_Empresa){
                     Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "La fechas de la Primera Empresa estan incorrectas!",
                });
                    return
                }
                else  if(this.Formulario.Fecha_Inicio_Segunda_Empresa> this.Formulario.Fecha_Fin_Segunda_Empresa){
                     Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "La fechas de la Segunda Empresa estan incorrectas!",
                });
                    return
                } 
                else{
                    Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "La copia de seguridad se creo correctamente.",
                });
                }
                this.Formulario.id = shortid.generate()

                this.set3Formulario(this.Formulario)
                this.Formulario={
                    correo:''
                }
            },
            enviar(){
              
               
            }
        },
    }
</script>

<style  scoped>

</style>