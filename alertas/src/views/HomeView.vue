<template>
  <div class="home">
    <button @click="doSomething">Enviar</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'


export default {
  name: 'HomeView',
  components: {
    
  },
  methods:{
    doSomething()
    {
      Swal.fire({
            title: 'OPPS',
            text:   "wow",
            icon: 'warning',
          
        });
}
  }}
</script>
