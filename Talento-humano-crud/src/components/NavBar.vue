<template>
    <header class="header">
    <nav class="nav">
        <a class="logo"><router-link to="/"  class="caja" ><img class="imgen" v-for="img in imagines" v-bind:src="img"></router-link></a>
        <button  @click="buttom" class="nav-toggle">
            <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="nav-menu nav-menu_visible">
            <li class="nav-menu-item"><a href="#" class="nav-menu-link"><router-link class="nav-link" to="/" >  Inicio</router-link></a></li>
            <li class="nav-menu-item"><a href="#" class="nav-menu-link"><router-link class="nav-link" to="/home" v-if="usuarioAutenticado">Tareas</router-link></a></li>
            <li class="nav-menu-item"><a href="#" class="nav-menu-link"><router-link class="nav-link" to="/ingreso"  v-if="!usuarioAutenticado" >Ingresar</router-link></a></li>
            <li class="nav-menu-item"><a href="#" class="nav-menu-link"><router-link class="nav-link" to="/registro"  v-if="!usuarioAutenticado" >Registrar</router-link></a></li>
            <li class="nav-menu-item"><a href="#" class="nav-menu-link"><button  class="nav-link" v-if="usuarioAutenticado" @click="cerrarSesion">Cerrar{{  }}Sesion</button></a></li>
        </ul>
    </nav>
  </header>                      

                     
                        
        
                                
                        
           
                                                     
                        
                                                               
                         
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            imagines:['https://grupotalentohumano.com/wp-content/uploads/2021/11/Logo-TH.png']
        }
    },
    computed:{
        ...mapGetters(['usuarioAutenticado']),
        buttom(){
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        navToggle.addEventListener('click', () =>{
            navMenu.classList.toggle("nav-menu_visible")
        })
        }
    },
    methods:{
        ...mapActions(['cerrarSesion']),

    }
}
</script>
<style scoped>


.header{
    background: rgb(73, 116, 197);
    height: 90px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}
.nav{
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}
.nav-link{
    color: white;
    text-decoration: none;
    margin-left: 11px;

}
.nav-menu-link{
    text-decoration: none;
}
.nav-menu{
    display: flex;
    margin-right: 23px;
    list-style: none;
}
.nav-menu-item{
    font-size: 18px;
    line-height: 70px;
    width: max-content;
}
.logo {
    width: 20%;
    line-height: 80px;
}
img{
    width: 100%;
}
.nav-menu-link:hover{
    background-color: rgb(243, 243, 243);
    height: auto;
}
.nav-toggle{
    color: white;
    background: none;
    border: none;
    font-size: 30px;
    padding: 0 20px;
    line-height: 60px;
    display: none;
}
@media(max-width: 768px){
    .header{
        height: 60px;
    }
    .logo{
        line-height: 50px;
        width: 25%;
    }
    img{
        width: 110%;
    }
    .nav-menu{
        flex-direction: column;
        align-items: center;
        margin: 0;
        background-color: rgb(13, 36, 63);
        position: fixed;
        left: 0;
        top: 60px;
        width: 100%;
        padding: 0;
        height: calc(100% - 60px);
        overflow-y: auto;
        left: 100%;
        transition: left 0.3s;
    }
    .nav-menu-item{
        line-height: 70px;
    }
    .nav-toggle{
        display: block;
    }
    .nav-menu_visible{
        left: 0;
    }
}
</style>
