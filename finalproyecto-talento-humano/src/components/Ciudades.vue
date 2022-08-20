<template>
    <div class="text-center">
        <h3 class=" fw-semibold">Filtrar por ciudad</h3>
        
        <div class="btn-group mb-3 ">
            <button class="btn btn-primary me-1 rounded-2" @click="filtro('Manta')">Manta</button>
            <button class="btn btn-primary me-1 rounded-2" @click="filtro('Montrecristi')">Montecristi</button>
            <button class="btn btn-primary  me-1 rounded-2" @click="filtro('Portoviejo')">Portoviejo</button>
            <button class="btn btn-primary  me-1 rounded-2" @click="filtro('')">Todos</button>
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
button{
    font-size: 18px;
}
@media(max-width: 475px){
    .btn-group{
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: auto;
    }
    .btn{
        margin: 2px;

    }
}
@media(max-width: 400px){
    .btn-group{
        align-items: center;
    }
    .btn{
        margin: 2px;
        width: 150%;
        font-size: 18px;
    }
}
@media(max-width: 300px){
    .btn-group{
        align-items: center;
    }
    .btn{
        margin: 2px;
        width: 180%;
        font-size: 17px;
    }
}
</style>