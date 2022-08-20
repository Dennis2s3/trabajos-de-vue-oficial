<template>
    <Titulos texto="Preguntas frecuentes" class="titulo"/>
    <main class="d-flex align-items-center">
        
        <div class="accordion container " id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Donde estamos Ubicados?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body text-start">
         Facultad de Ciencias Informaticas: Vía San Mateo, Manta – Manabí – Ecuador
         <br>
         Universidad Laica Eloy Alfaro de Manbi: Vía San Mateo, Manta – Manabí – Ecuador
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        La Universidad es publica o privada?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body text-start">
        La Universidad Laica Eloy Alfaro de Manabi es Publica
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Tengo que dar el examen de la SENESCYT para ingresar ala Universidad?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body text-start">
        Tiene que dar el Examen otorgado de la SENESCYT para poder ingresar a nuestra Universidad
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFor">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFor" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Cuales son las carreras que ofrece la Uleam?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFor" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFor">
      <div class="accordion-body text-start">
        Cuenta con 22 Carretas Universitarias, y 17 Postgrados que puede realizar.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Cuantas materias puedo tomar por semestre?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div class="accordion-body text-start">
        Puede tomar las materias que usted crea conveniente.
      </div>
    </div>
  </div>
</div>
    </main>
</template>

<script>
import Titulos from './Titulos.vue';
    export default {
    components: { Titulos }
}
</script>

<style  scoped>
.titulo{
    margin-bottom: 3rem;
    color: black;
}
.accordion-body{
  background-color: rgba(109, 161, 238, 0.527);
}
</style>