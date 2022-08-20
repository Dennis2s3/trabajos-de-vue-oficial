<template>
  <div class="home">
    <Form/>
  </div>
</template>

<script>
import Form from '@/components/form.vue'
// @ is an alias to /src

export default {
  components: {
    contador: 0,
    Form
},
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    aumentar(){
      this.contador ++
    },
    disminuir(){
      this.contador --
    }
  },
}
</script>
