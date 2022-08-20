<template>
    <!-- Remove the container if you want to extend the Footer to full width. -->
  <!-- Footer -->
  <footer class="text-center text-white " >
    <!-- Grid container -->
    <div class="container-xxl">
      <!-- Section: Links -->
      <section class="mt-1">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold ">
              <a href="#!" class="text-white text-decoration-none"><router-link to="/" class="text-decoration-none text-white">Inicio</router-link></a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark text-decoration-none"><router-link to="/TerminosyCondiciones" class="text-decoration-none text-white">Terminos Y condiciones</router-link></a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark text-decoration-none"><router-link to="/Contactanos" class="text-decoration-none text-white">Contactanos</router-link></a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark text-decoration-none"><router-link to="/SobreNosotros" class="text-decoration-none text-white">Sobre Nosotros</router-link></a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->


          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold-6">
              <a href="#!" class="text-white text-decoration-none"><router-link to="/Ayuda" class="text-decoration-none text-white">Ayuda</router-link></a>
            </h6>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-5" />

      <!-- Section: Text -->
      <section class="mb-3">
        <div class="row d-flex justify-content-center text-white">
          <div class="col-lg-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <section class="text-center mb-3 ">
        <a href="https://www.facebook.com/david.anchundia.50/" class="text-white me-4" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/" class="text-white me-4" target="_blank"> 
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://mail.google.com/mail/u/1/" class="text-white me-4" target="_blank">
          <i class="fab fa-google"></i>
        </a>
        <a href="https://www.instagram.com/d4nte_30/" class="text-white me-4" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/DennisDavidAnchundia" class="text-white me-4" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
         class="text-center p-2 text-white border border-b-white "
         
         >
      © 2022 Copyright:
      <a class="text-white " 
         >DANTE.com</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->

<!-- End of .container -->
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
footer{
    font-family: 'Rubik Moonrocks', cursive;
    background-color: #384B61;
}

</style>