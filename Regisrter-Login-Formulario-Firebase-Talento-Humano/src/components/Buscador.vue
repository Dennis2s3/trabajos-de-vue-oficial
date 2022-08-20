<template>
<div class="input">
    <label for="" class="form-label text-dark fw-normal fs-4 mt-3" >Busqueda de empleados por nombres.</label>
    <input  type="text"
            placeholder="Ingrese Nombre"
            class="form-control  text-center  border border-secondary"
            v-model="texto"
            @keyup="provesarInput"
    > 
</div>      
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
    export default {
        setup() {
            const texto = ref('')
            const store = useStore()

            const provesarInput= ()=>{
                console.log(texto.value)
                store.dispatch('filtroNombre', texto.value)
            }

            return {texto,provesarInput }
        }
    }
</script>

<style  scoped>
input{
    width: 35%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
}
@media(max-width: 400px){
    input{
        width: 90%;
    }

}
</style>