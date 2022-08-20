<template>
  <div class="about">
    <h2>contador: {{contador}}</h2>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>
<script>
import { ref } from 'vue';

export default{
  setup(){
    const contador = ref(0);
    const aumentar = () =>{
      contador.value ++
    }
    const disminuir = () =>{
      contador.value --
    }
    return {contador, aumentar, disminuir}
  }
}
</script>
