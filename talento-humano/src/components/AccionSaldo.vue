<template>
    <button @click="this.$emit('accion')" :disabled="Desactivar" > {{texto}}</button>
</template>

<script >
   export default{
    props:{
        texto: String,
        Desactivar: Boolean
    }
   } 
</script>

<style  scoped>

</style>