<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{Titulo}}: {{contador}}</h2>
    <input type="text" v-model="texto">
    <h1>{{texto}}</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'
  export default{
    data() {
    return {
      Titulo: 'Mi contador vuex',
      texto: ''
    }
  },
  computed:{
    ...mapState(['contador'])
  }
  }
</script>
