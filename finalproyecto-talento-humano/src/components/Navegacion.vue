<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><router-link class="logo nav-link text-dark fw-bold" to="/" >Talento <span class="text-primary">Humano</span> </router-link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse centrar " id="navbarNav">
      <ul class="navbar-nav fw-semibold">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="#"><router-link class="nav-link" to="/" >  Inicio</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#"><router-link class="nav-link" to="/ingreso"  v-if="!usuarioAutenticado" >Ingresar</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link class="nav-link" to="/registro"  v-if="!usuarioAutenticado" >Registrar</router-link></a>
        </li>
                <li class="nav-item">
          <a class="nav-link prioridad" href="#"><router-link class="nav-link " to="/home" v-if="usuarioAutenticado">Reportes</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link class="nav-link " to="/EmpleadosActivos" v-if="usuarioAutenticado">Empleados</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link cerrar" v-if="usuarioAutenticado" @click="cerrarSesion">Cerrar Sesion</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
<!-- <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><router-link class="logo nav-link" to="/" >Talento <span>Humano</span> </router-link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="hov nav-link active " aria-current="page" href="#"><router-link class="nav-link" to="/" >  Inicio</router-link></a>
        <a class=" nav-link" href="#"><router-link class="nav-link " to="/home" v-if="usuarioAutenticado">Reportes</router-link></a>
        <a class="  nav-link" href="#"><router-link class="nav-link " to="/EmpleadosActivos" v-if="usuarioAutenticado">Empleados</router-link></a>
        <a class="  nav-link" href="#"><router-link class="nav-link" to="/ingreso"  v-if="!usuarioAutenticado" >Ingresar</router-link></a>
        <a class="  nav-link "><router-link class="nav-link" to="/registro"  v-if="!usuarioAutenticado" >Registrar</router-link></a>
        <a  v-if="usuarioAutenticado" @click="cerrarSesion" class="hovs nav-link">Cerrar seccion</a>
      </div>
    </div>
  </div>
</nav> -->
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
    }
    ,

     methods:{
        ...mapActions(['cerrarSesion']),

    }
     }
</script>

<style  scoped>

.centrar{
    display: flex;
    justify-content: flex-end;

}
.nav-link{
    padding: 0;
    margin: 0;
    color: white;
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 15px;
    margin-top: 15px;
}
.nav-link:hover, .nav-link.active{
  color: darkslateblue;
}
.cerrar{
    cursor: pointer;
}
.navbar{
    background-color: rgb(51, 142, 226);
    font-family: 'Kreon', serif;
   
}
.logo{
  font-size: 29px;
}
.container-fluid{
  max-width: 1270px;
}
@media (max-width: 991px){
  .centrar{
    justify-content: center;
    transition: .5 ease all;
  }
  .prioridad{
    margin-top: -27px;
  }
}
@media (max-width: 575px){
  .logo{
    font-size: 25px;
    margin-left: 15px;
  }
}
@media (max-width: 375px){
  .logo{
    font-size: 20px;
    margin-left: 10px;
  }
}
@media (max-width: 282px){
  .logo{
    font-size: 19px;
    margin-left: 10px;
  }
  .nav-link{
    font-size: 16px;
  }
}

/* nav{
    display: flex;
    justify-content: flex-end;
    background: #4697FA;
}
.collapse{
    display: flex;
    justify-content: flex-end;
}
.nav-link{
    color: white;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
}
.logo{
    font-size: 30px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}
span{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: rgb(201, 75, 212);
}

.nav-link:hover, .nav-link.active{
    color: rgb(177, 82, 221);
}
@media  (max-width:991px ) {
    .collapse{
        justify-content: center;
        
    }
    .prioridad{
        margin-bottom: -20px;
    }
    .nav-link{
        font-weight: 500;
        font-size: 18px;
    }
    .logo{
        font-size: 25px;
    }

}
@media  (max-width:485px ){
        .collapse{
        justify-content: center;
        
    }
        .prioridad{
        margin-bottom: -20px;
    }
    .nav-link{
        font-weight: 500;
        font-size: 16px;
    }
    .logo{
        font-size: 20px;
    }
}
@media  (max-width:250px ){
        .collapse{
        justify-content: center;
        
    }
        .prioridad{
        margin-bottom: -20px;
    }
    .nav-link{
        font-weight: 500;
        font-size: 14px;
    }
    .logo{
        font-size: 17px;
    }
}
.nvl{
    text-decoration: none;
    border: none;
    background: none;
}
.hovs{
    display: flex;
    align-items: center;
} */
</style>