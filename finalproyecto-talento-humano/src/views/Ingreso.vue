<template>
    <main>
        <div class="container shadow  ">
            <div class="row ">
                <div class="col bg-white bg d-none d-lg-block  col-md-5 col-lg-5 col-xl-6 rounded-3 ">
                </div>
                <div class="col bg-white rounded-3">
                    <div class="text-end">
                        <h3 class="me-3 mt-5">Talento <span color="pink">Humano</span> </h3>
                    </div>

                    <form action="#" @submit.prevent="procesarFormulario">
                        <h3 class="mb-5 mt-5">Ingreso de Usuarios</h3>
                        <div class="row mb-4 ">
                            <label for="" class="from-label ">Correo Electronico</label>
                            <input type="email" class="form-control border border-secondary"
                            placeholder="Email"
                            v-model.trim="email"
                            :class="[error.tipo === 'email' ? 'is-invalid' : ''  ]"
                            >
                        </div>
                        <div class="row mb-5" >
                            <label for="" class="from-label">Contrasena</label>
                            <input type="password" class="form-control border border-secondary"
                            placeholder="Password"
                            v-model.trim="password1"
                            :class="[error.tipo === 'password' ? 'is-invalid' : '']"
                            >
                        </div>
                        <button class="btn btn-primary w-50 mb-5" >Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
<!-- <transition      
    name="fade"
>
<h1>Ingreso de Usuarios</h1>
</transition>
    
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
        :class="[error.tipo === 'email' ? 'is-invalid' : ''  ]"

        >

        <input 
        type="password" 
        placeholder="Password"
        v-model.trim="password1"
        class="im form-control my-2"
        :class="[error.tipo === 'password' ? 'is-invalid' : '']"
        :disable="bloquear"
        >
 
       <div class="contenerdor-boton">

        <button 
        class="btn btn-primary"
        type="submit"

        >Ingresar
        </button>
        </div>
        </div>
    </form> -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2'
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
            ...mapActions(['ingresoUsuario']),
            async procesarFormulario(){
                await this.ingresoUsuario({email:this.email, password: this.password1})
                if(this.error.tipo !== null){
                    return
                }
                this.email= '';
                this.password1= '';
                
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
@media (max-width: 300px){
    input{
        text-align: center;
    }
}
/* main{
    margin-bottom: 55px;
}
.alert{
    text-align: center;
    width: 40%;
    margin: auto;
}
.contenerdor-boton{
    display: flex;
    width: 50%;
    align-items: center;
    margin:  2rem auto;
    z-index: 100;
}
.im{
    width: 35%;
    margin: auto;
    text-align: center;
    font-size: large;
    color: black;
    height: 3rem;
}
.lista{
    list-style: none;
    text-align: center;
}
.Padre{
    display: grid;
    grid-template-columns: auto;
    margin-top: 2rem;
}
h1{
    margin-top: 3rem;
    text-align: center;
}



.btn{
  width: 40%;
  background-color: #2772e2;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;
}
.error{
    text-align: center;
    color: red;
}
 */
</style>