<template>
<main>
    <Titulos class="title" texto="Terminos y Condiciones de nuestra pagina"/>
    <TerminosyCondiciones/>
</main>
</template>

<script>
import TerminosyCondiciones from '@/components/TerminosyCondiciones.vue';
import Titulos from '@/components/Titulos.vue';
    export default {
    components: { TerminosyCondiciones, Titulos }
}
</script>

<style  scoped>
main{
    height: 100vh;
}
.title{
    text-align: center;
    font-weight: 650;
    margin-top: 25px;
}
@media (max-width: 661px){
    main{
        height: 100%;
    }
}
</style>