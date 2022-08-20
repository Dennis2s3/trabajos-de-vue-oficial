<template>
    <div class="text-center">
        <h3>Filtrar por ciudad</h3>
        <div class="btn-group mb-3">
            <button class="btn btn-dark" @click="filtro('Manta')">Manta</button>
            <button class="btn btn-dark" @click="filtro('Montrecristi')">Montecristi</button>
            <button class="btn btn-dark" @click="filtro('Portoviejo')">Portoviejo</button>
            <button class="btn btn-dark" @click="filtro('')">Todos</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'

    export default {
        setup() {
            const store = useStore()

            const filtro = (Ciudad)=>{
                store.dispatch('filtrarRegion', Ciudad)
            }
            return {filtro}
        }
    }
</script>

<style  scoped>

</style>