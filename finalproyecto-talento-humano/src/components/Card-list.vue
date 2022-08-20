<template>
    <div class="row">
        <div class="col-4 mb-3"
        v-for="pais in paises" :key="pais.nombre"
        >           <Card :pais="pais"/>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import Card from './Card.vue'
    export default {
        
    setup() {
        const store = useStore();
        const paises = computed(() => {
            return store.getters.tipoProfesionalEmpleado
        });
         onMounted( async() => {
            await store.dispatch("getpaises");
            await store.dispatch('filtrarRegion', 'Manta')
        });
        return { paises };
    },
    components: { Card }
}
</script>

<style  scoped>
.col-4{
    row-gap: 4px;
    column-gap: 4px;
}
@media(max-width: 767px){
  .row{
    display: grid;
    grid-template-columns: auto auto;
  }
}
@media(max-width: 500px){
  .row{
    display: grid;
    grid-template-columns: auto;
    margin: auto;
  }
}
</style>