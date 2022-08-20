<template>
    <main >
        <div class="container m-auto shadow phoone ">
            <div class="row  rounded-3 ">
                <div class="col bg rounded-3 d-none d-lg-block  col-md-5 col-lg-5 col-xl-6">
                    
                </div>
                <div class="col  rounded-3 ps-2  ">
                    
                    
                    <h2 class="fw-blod text-center py-5">Contactanos</h2>
                            <div class="alert alert-danger alert-dismissible fade show p-2" role="alert" v-show="errors.length > 0"  dismissible>
                            <i class="bi-exclamation-octagon-fill"></i>
            <li v-for="(error, index) in errors" :key="index">{{error}}</li>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
                                    <div class="alert alert-success " v-show="enviado.length > 0" >
            <li v-for="(enviados, index) in enviado" :key="index">{{enviados}}
            </li>
        </div>
                    <form action="#" @submit="signUpButtonPressed">
                        <div class="row linea ">
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label ">Nombre</label>
                                <input type="text" class="form-control w-90 border border-secondary" v-model="nombre" 
                                :class="[this.nombre === this.errors ? 'is-invalid' : '']">
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Apellido</label>
                                <input type="text" class="form-control border border-secondary" v-model="apellido">
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Usuario</label>
                                <input type="text" class="form-control border border-secondary" v-model="usuario">
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Correo Electronico</label>
                                <input type="email" class="form-control border border-secondary" id="exampleInputEmail1" v-model="correo" >
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="form-label">Cedula</label>
                                <input type="number" class="form-control border border-secondary" v-model="cedula">
                            </div>
                            <div class="col-6 mb-3 malk">
                                <label for="" class="from-label">Telefono</label>
                                <input type="number" v-model="numero" class="form-control border border-secondary">
                            </div>
                             <div class="row-6 text-center mb-4 ">
                                <label for="" class="form-label mt-4  mb-0">Mensaje</label>
                                <textarea class="mt-4 w-100 form-control border border-secondary" v-model="mensaje"></textarea>
                            </div>
                                                    <div class="row">
                            <button class="btn btn-primary w-75 m-auto mt-3 mb-5"  @click.prevent="signUpButtonPressed">
                                Enviar
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Swal from 'sweetalert2'

    export default {
        data() {
            return {
            nombre: "",
            apellido: "",
            correo: "",
            numero: "",
            cedula: "",
            usuario: "",
            mensaje: "",
            errors: [],
            enviado: []
            }
        },
        methods:{
            ValocaciomAP(nombre){
                var val = /^[A-Za-z ]+$/;
                return val.test(nombre)
                
            }
            ,
            signUpButtonPressed() {
            this.errors = [];
            if (!this.nombre, !this.apellido, !this.correo, !this.cedula, !this.usuario,  !this.numero) {
                 Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Los campos estan vacios.',
        });return}
        if (!this.ValocaciomAP(this.nombre)) {
                 Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo nombre solo puede contener letras',
        });return}
        if (!this.ValocaciomAP(this.apellido)) {
                 Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo apellido solo puede contener letras',
        });return}
        if(this.mensaje === ''){
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Escriba su mensaje',
        });return
        }
        if(this.nombre > 3){
                Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre debe c',
        });return
        }

            this.nombre=''
            this.apellido=''
            this.correo=''
            this.numero=''
            this.cedula=''
            this.mensaje=''
            this.usuario=''
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'El formulario fue enviado con exito.',
          
        });

        }

    }
}
</script>

<style  scoped>
main{
    height: 100vh;
    display: flex;
    align-items: center;
    
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.b{
    background: rgb(214, 63, 88);
}
.bg{
    background-image: url(../assets/prueba.png);  
}
.row{
    width: 100%;
    background: #fffffffa;
}
input{
    width: 85%;
    height: 33px;
    margin-left: 10px;
}
label{
    text-align: center;
}
textarea{
    margin: auto;
}
.btn{
    height: 40px;
}
@media (min-width: 300px) { 
    main{
        margin: 30px;
    }
 }

 @media (max-width: 300px) { 
    main{
        margin: 30px;
        height: 100%;
    }
    .linea{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .malk{
        width: 100%;
    }
 }
 .alert{
    list-style: none;
    width: 50%;
    margin: auto;
 }
</style>