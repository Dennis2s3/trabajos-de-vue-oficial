<template>
<main class="mx-5 mt-5 bgs mb-5 rounded-3">
    <div class="container-fluid uno ">
        <div class="row sdas">
           <h2 class="mb-5">Gestion de Talento Humano Uleam</h2>
            <div class="col ">
                <img src="../assets/SobreNosotros/aboutus.jpg" alt="" class="img-fluid imagen-uno">
            </div>
            <div class="col titulo">
                <h3 class=" mb-3 ">Quiénes somos - Misión</h3>
                <p class="text mb-5" >Somos un equipo de profesionales orientados al desarrollo del capital humano de nuestros clientes, mediante la implementación de programas de fortalecimiento y sistemas metodológicos de gestión del talento humano.</p>
                <h3 class=" titulo mb-3">Visión</h3>
                <p class="text">Convertirnos en la empresa de mayor impulso, desarrollo y crecimiento del talento humano de nuestros clientes, impactando en la consecución de sus objetivos estratégicos.</p>
            </div>
        </div>
    </div>
    <div class="container-fluid dos ">
        <div class="row parte-2 titulo">
            <div class="col ">
                <h3 class=" mb-3 titulo3">Oferta de valor</h3>
                <p class="text" >Nos convertimos en el socio estratégico de nuestros clientes, 
                    mediante la gestión del talento humano de manera técnica y metodológica, 
                    desarrollando planes, programas y sistemas a la medida de sus necesidades. 
                    Gracias a la confianza de nuestros clientes, proponemos nuestros valores 
                    corporativos: <span>Confidencialidad, Ética Profesional, Responsabilidad, Eficiencia, 
                    Compromiso, Liderazgo.</span> 
                    </p>
            </div>
            <div class="col">
                <img src="../assets/SobreNosotros/img-about-3.jpg" alt="" class="none">
            </div>
            <div class="col">
                <h3 class=" mb-3">
                    Equipo de profesionales
                </h3>
                <p class="text">
                    Contamos con un grupo de profesionales con experiencia entre 12 y 25 años, 
                    entrenados y certificados en diferentes campos como: gestión estratégica del 
                    talento humano, gestión por procesos, competencias laborales, coaching ejecutivo y 
                    organizacional, liderazgo, entrenamiento y formación de equipos, neurociencias, 
                    metodologías de selección, inteligencia emocional entre otros.
                </p>
            </div>
        </div>
    </div>
    <div class="container-fluid tres">
          <div class="row parte-tres ">
           <h2 class="mb-4">Impotancia del fortalecimiento organizacional.</h2>
            <div class="col ">
                <p class="text texto-3">
                    Las Empresas se desarrollan en un entorno altamente competitivo, innovador y cambiante, 
                    donde las tecnologías y los modelos de gestión caducan o son copiados con facilidad por 
                    la competencia, dificultando su permanencia en el mercado.
                    <br>
                    <br>
                    La gestión del talento humano es de vital importancia en la creación de ventajas competitivas 
                    para la empresa, puesto que permite el desarrollo de un conjunto de competencias que la distinguen 
                    de las demás, proporcionando una base a largo plazo para realizar las innovaciones, cambios, 
                    desarrollo de productos y servicios y el logro de la misión y objetivos empresariales.
                    <br>
                    <br>
                    Es urgente trabajar en el desarrollo integral del equipo humano, que no sólo consiste 
                    en facilitar nuevos conocimientos, sino también en desarrollar comportamientos, habilidades 
                    y destrezas, así como fomentar una cultura de logro en un ambiente laboral apropiado, 
                    que fomente la productividad, el trabajo en equipo y la competitividad.
                    <br>
                    <br>
                    Una fuerza laboral implementada como una estrategia puede hacer que los planes de 
                    negocio sean una realidad, al contar con un equipo competente, calificado, comprometido
                     e involucrado.
                </p>
            </div>
            <div class="col">
                <img src="../assets/SobreNosotros/fuerza-empresarial.jpg" alt="" class="img-fluid imagen-3">
            </div>
        </div>
    </div>
    <div class="container-fluid  ">
        <div class="row parte-cuatro" >
            <h2 class="mb-5">Conoce al equipo</h2>
            <div class="col">
                <div >

                    <img class="imagen mb-3 img-fluid" src="../assets/SobreNosotros/Integrante-1.jpg" alt="" >
                    <h3 class="mb-3">Dennis David Anchundia</h3>
                    <p class="epo"> 
                        Soy un Estudiante de la carrera de Tecnologias de la Informacion,
                        soy experto en la realizacion de paginas web, por lo tanto estoy a cargo 
                        de este proyecto.
                        Cada seccion  que visualize en esta pagina web, ha sido cautelosamente realizada
                        por mi parte, el margen de errores que se puede encontrar en la misma en muy bajo.
                    </p>
                </div>
            </div>

        </div>
    </div>
</main>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

.text{
    text-align: justify;
}
.imagen{
    height: 250px;
    width: 320px;
    object-fit: cover;
}
.epo{
    width: 250px;
    margin: auto;
    text-align: justify;
}
.bgs{
}
.uno{
    margin-bottom: 7rem;
}
.dos{
    margin-bottom: 7rem;
}
.tres{
    margin-bottom: 7rem;
}
.titulo{
    text-align: left;
}
@media(max-width: 1050px){
    .sdas{
        display: grid;
        grid-template-columns: auto;
    }
    .imagen-uno{
        width: 100vh;
    }
    .titulo{
        text-align: center;
    }
    .parte-tres{
        display: grid;
        grid-template-columns: auto;
    }
    .imagen-3{
        width: 100vh;
    }
    .titulo3{
        text-align: center;
    }
    .none{
        display: none;
    }
        .parte-2{
        display: grid;
        grid-template-columns: auto auto auto;
    }
}
@media(max-width: 955px) {
    

}
@media(max-width: 520px){
    .parte-2{
        display: grid;
        grid-template-columns: auto ;
    }
}
@media(max-width: 380px){
    .epo{
        width: 100%;
    }
    .parte-cuatro{
        display: grid;
        grid-template-columns: auto;
    }
}
@media(max-width: 300px){
    .texto-3{
        width: 90%;
    }
    .parte-tres{
        width: 100%
    }
}
</style>