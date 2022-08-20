<template>
    <button @click="AccionDisminuir(50)">Disminuir</button>
</template>

<script>
    import { mapActions } from 'vuex' 
    export default {
        methods:{
            ...mapActions(['AccionDisminuir'])
        }
        
    }
</script>

<style  scoped>

</style>