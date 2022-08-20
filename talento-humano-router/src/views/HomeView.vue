<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/logo.png">
    <Titulo texto="Pagina de Inicio"/>
  </div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
  name: 'HomeView',
  components: {
    Titulo
  }
}
</script>
<style scoped>
  .img{
  animation: float 3s linear infinite;
  }
  @keyframes float {
    0%, 100%{
        transform: translateX(1rem);

    }
    50%{
        transform: translateX(-.9rem);
    }
}
</style>
