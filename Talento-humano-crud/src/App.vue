<template>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, explicabo? Ad vero eius, adipisci praesentium magni distinctio? Eius laboriosam vero doloremque temporibus cum necessitatibus, iusto, fugiat aliquam cupiditate debitis quibusdam.

  <NavBar/>
  <div class="contenedor">
    <router-view/>
  </div>
  <div class="ref">
<Footer/>
</div>
</template>

<script>
  import NavBar from './components/NavBar'
import Footer from './components/Footer.vue'

  export default{
    components:{
    NavBar,
    Footer
}
  }
</script>

<style>


</style>
