<template>
    <button @click="BotonAccion({estado: estado, numero:10})">{{textoBoton}}</button>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props:{
            estado: Boolean
        },
        computed:{
            textoBoton(){
                return this.estado ? 'Amentar': 'Disminuir'
            }
        },
        methods:{
            ...mapActions(['BotonAccion'])
        }
    }
</script>

<style scoped>

</style>