<template>
    <div class=" card ">
        <div class="">
                    <div class=" card-body ">
            <h5 class="text-center">{{pais.nombre}}</h5>
            <p class="text-center">
                <img :src="pais.foto" alt="" class="img-fluid w-50">
            </p>
            <p class="card-text text-center ">
                <span class="fw-semibold text-primary"> <h6 class="fw-bold text-dark">Profesion:</h6>  {{pais.profesion}}</span><br>
                <span class="fw-semibold text-primary"> <h6 class="fw-bold text-dark">Pais:</h6> {{pais.pais}}</span><br>
                <span class="fw-semibold text-primary"> <h6 class="fw-bold text-dark">Edad:</h6>{{pais.Edad}} anos</span><br>
                <span class="fw-semibold text-primary"> <h6 class="fw-bold text-dark">Ciudad:</h6> {{pais.Ciudad}} </span>
            </p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['pais']
    }
</script>

<style  scoped>
.card{
    height: 100%;
}
</style>