<template>
  <div class="container">
    <h1 class="text-center">Paises api</h1>
    <Ciudades/>
    <Buscador/>
    <CardList/>
  </div>
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
