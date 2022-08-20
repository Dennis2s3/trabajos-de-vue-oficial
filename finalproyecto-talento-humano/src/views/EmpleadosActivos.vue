<template>
<main>
  <div class="container bg-light rounded-3">
    <h1 class="text-center fw-semibold mt-5 mb-5">Empleados Actuales </h1>
    <Ciudades/>
    <Buscador/>
    <CardList/>
  </div>
</main>  
</template>

<script>
import CardList from '@/components/Card-list.vue';
import Ciudades from '@/components/Ciudades.vue';
import Buscador from '@/components/Buscador.vue';


export default {
  components: {
    CardList,
    Ciudades,
    Buscador
}
}
</script>
<style>
@media(max-width: 577px){
  main{
    margin: 30px;
  }
}
</style>