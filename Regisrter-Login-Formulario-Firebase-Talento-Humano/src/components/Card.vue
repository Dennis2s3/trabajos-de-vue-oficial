<template>
    <div class=" card bg-light  ">
        <div class="">
                    <div class=" card-body ">
                        
            <h5 class="text-center">{{pais.nombre}}</h5>
            <p class="text-center imagen">
                <img :src="pais.foto" alt="" class="">
            </p>
            <p class="card-text text-center ">
                <span class="fw-semibold text-primary"> <h6 class="fw-bold text-dark">Profesion:</h6>  {{pais.profesion}}</span><br>
                <span class="fw-semibold text-primary"> <h6 class="fw-bold text-dark">Ciudad:</h6> {{pais.Ciudad}} </span>
            </p>
            <div >
            </div>
        </div>
        </div>
    </div>
</template>

<script>

    export default {
     data() {
        return {
            pais: []
        }
     },
        props:['pais']
    }
</script>

<style  scoped>
span, h6{
  font-size: 20px;
}
img{
    width: 290px;
    height: 300px;
    object-fit: cover;
}
.card{
    height: 100%;
    
}
@media(max-width: 767px){
  .card{
    width: 360%;
    margin:auto;
  }
    img{
        width: 100%;
    }
    span, h6{
  font-size: 20px;
}
}
@media(max-width: 400px){
  .card{
    width: 280%;
    margin: 33px;
    
  }
  img{
    width: 100%;
    
  }
  span, h6{
  font-size: 19px;
}

}
@media(max-width: 350px){
  .card{
    width: 280%;
    margin: 25px;
    
  }
  img{
    width: 120%;
    margin-left: -9px;
    
  }
  span, h6{
  font-size: 19px;
}

}

</style>