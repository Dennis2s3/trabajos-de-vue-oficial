<template>
    <h1>{{texto}}</h1>
</template>

<script >
    export default{
        name:'Titulo',
        props:{
            texto: String
        }
    }
</script>

<style  scoped>
    h1{
        color: black;
        text-transform: uppercase;
    }
    h1:hover{
        color: red;
        background: rgb(136, 196, 231);
    }
</style>