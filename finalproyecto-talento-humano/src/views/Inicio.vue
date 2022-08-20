<template>
<main>
    
    <div class="container-fluid     ">
        <div class="row inicio-respon">
            <div class="col  inicio">
                    <h2 class="w-75 mb-3 titulo-inicio" >GESTION DE <span class="titulo-span">TALENTO HUMANO</span> </h2>
                     <p class="parrafo ">Te ayudamos a conocer tu carrera desde dentro, contamos con un extenso grupo de 
                        profesionales que accesoraran de la mejor manera, para que asi puedas conseguir 
                        tu objetivo.</p>
            </div>
        <div class="col Inicio-dos">
            <img src="../assets/Inicio.png" alt="" class="imagen-inicio">
        </div>
        </div>
      
    </div>



</main>

</template>

<script>
    export default {
        methods:{
            
        }
    }
</script>

<style  scoped>
main{
    height: 100%;
    
}
.inicio{
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 20%;
    margin-left: 50px;
}
.parrafo{
    width: 75%;
    text-align: justify;
    margin-left: 10px;
    font-size: 20px;
}
.imagen-inicio{
    width: 110%;
    animation: float 3s linear infinite;
}
@keyframes float {
    0%, 100%{
        transform: translateX(0rem);

    }
    50%{
        transform: translateX(-2rem);
    }
}

.Inicio-dos{
    margin-right: 10rem;
}
@media (max-width: 940px) {
    .inicio-respon{
        display: grid;
        grid-template-columns: auto;
        
    }
    .inicio{
        width: 100%;
        align-items: center;
        margin: auto;
        margin-top: 5rem;
    }
    .Inicio-dos{
        width: auto;
    }
    .imagen-inicio{
        margin-left: 80px;
}

}
@media (max-width: 600px){
        .Inicio-dos{
        width: 50%;

    }
    @keyframes float {
    0%, 100%{
        transform: translateX(0rem);

    }
    50%{
        transform: translateX(-0.4rem);
    }
    
}
.imagen-inicio{
    width: 210%;
    margin-left: 20px;
}
}
.titulo-inicio{
    font-size: 40px;
    font-weight: 600;
}
.titulo-span{
    color: #3476b8;
}
</style>