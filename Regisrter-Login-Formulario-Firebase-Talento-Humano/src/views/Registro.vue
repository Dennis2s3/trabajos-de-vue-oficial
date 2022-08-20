<template>

<main>
        <div class="container shadow  ">
            <div class="row ">
                <div class="col bg-white bg d-none d-lg-block  col-md-5 col-lg-5 col-xl-6 rounded-3">
                </div>
                <div class="col bg-white rounded-3">
                    <div class="text-end">
                        <h3 class="me-3 mt-5">Talento <span color="pink">Humano</span> </h3>
                    </div>

                    <form action="#" @submit.prevent="procesarFormulario">
                        <h3 class="mb-5 mt-5">Registro de Usuarios</h3>
                        <div class="row mb-4">
                            <label for="" class="from-label">Correo Electronico</label>
                            <input type="email" class="form-control border border-secondary"
                            placeholder="Email"
                            v-model.trim="email"
                            >
                        </div>
                        <div class="row mb-4">
                            <label for="" class="from-label">Usuario</label>
                            <input 
                                type="text" 
                                placeholder="Usuario"
                                v-model.trim="usuario"
                                class=" im form-control my-2 border border-secondary" >
                        </div>
                        <div class="row mb-5" >
                            <label for="" class="from-label">Contrasena</label>
                            <input type="password" class="form-control border border-secondary"
                            placeholder="Password"
                            v-model.trim="password1"
                            >
                        </div>
                        <button class="btn btn-primary w-50 mb-5">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
<!-- <main>
    <h1>Registro de Usuarios</h1>
    <div class="alert alert-danger" v-if="error.tipo !== null">
        {{error.mensaje}}
    </div>
    <form @submit.prevent="procesarFormulario">
        <div class="Padre">
            
        <input 
        type="text" 
        placeholder="Email"
        v-model.trim="email"
        class=" im form-control my-2"
        :class="[error.tipo === 'email' ? 'is-invalid' : '']"
        >
         <input 
        type="text" 
        placeholder="Usuario"
        v-model.trim="usuario"
        class=" im form-control my-2"
        >
        <input 
        type="password" 
        placeholder="Password"
        class=" im form-control my-2"
        :class="[error.tipo === 'password' ? 'is-invalid' : '']"
        v-model.trim="password1"
        :disable="bloquear"
        >
 
       <div class="contenerdor-boton">
       
        <button 
        class="btn btn-primary"
        type="submit"

        >Registrar
        </button>
        </div>
        </div>
    </form>
</main> -->
</template>

<script>
import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                password1: '',
                usuario: ''
            }
        },
        computed:{
            bloquear(){
                if(this.errors=== null){
                    return true
                }

                return true       
            },
            ...mapState(['error'])
   
        },
        methods:{
            ...mapActions(['registrarUser']),
            async procesarFormulario(){
                await this.registrarUser({email:this.email, password: this.password1, usuario:this.usuario})
                 if(this.error.tipo !== null){
                    return
                }
                this.email= '';
                this.password1= '';
                this.usuario='';

            }
        }   
    }
</script>

<style  scoped>
main{
    height: 100%;
    margin-top: 7rem;
    margin-bottom: 7rem;
}
.bg{
    background-image: url(../assets/prueba.png);
    background-size: 100%;
}
span{
    color: rgb(201, 75, 212);
}
input{
    width: 70%;
    margin: auto;
}

</style>