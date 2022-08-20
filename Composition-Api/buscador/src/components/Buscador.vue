<template>
    <input  type="text"
            placeholder="Ingrese Nombre"
            class="form-control my-3"
            v-model="texto"
            @keyup="provesarInput"
    >   
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

<style lang="scss" scoped>

</style>