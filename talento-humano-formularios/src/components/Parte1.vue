<template>
    <h1 class="Text">{{title}}</h1>
    <form>
    <input 
    type="text"
    class="Form"
    placeholder="Ingere Nombre"
    v-model="texto"
    >

    
  </form>
  <p>{{texto}}</p>
</template>

<script>
import HomeViewVue from '@/views/HomeView.vue';
export default {
        data() {
        return {
            title: 'Practica de uso de V-Model en inpunt-Formulario',
            texto: ''
        };
    },
}
</script>

<style  scoped>
.Text{
    text-align: center;
}
</style>