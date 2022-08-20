<template>

    <div class="navbar">
        <div class="caja"><router-link to="/" class="navbarT">Formularios</router-link></div>
        <div class="caja"><router-link to="/parte1" class="navbarT" >ParteUno</router-link></div>
        <div class="caja"><router-link to="/parte2" class="navbarT" >ParteDos</router-link></div>
        <div class="caja"><router-link to="/" class="btn">Tareas</router-link></div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
.navbar{
    background: rgb(49, 47, 47);
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto 20px;
    line-height: 40px;
}
.caja{
    text-align: center;
}
.navbarT {
    color: white;
    font-size: larger;
}
.navbarT:hover {
    color: white;
    text-decoration: none;
}
.container{

}
.btn{
    color: white;
    font-size: larger;
}   
.btn:hover{
    color: white;
    background: black;
    box-shadow: 0.3px 0.3px  rgb(240, 234, 234) ;
}  
.navbarP{
  color: white;
    font-size: larger;
}

</style>
