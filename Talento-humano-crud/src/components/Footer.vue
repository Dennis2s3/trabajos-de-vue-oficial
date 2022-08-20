<template>
<main>
    <section class="footer">
        <div class="social">
            <a href="#"><i class="fa-brands fa-instagram-square"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
            <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
            <a href="#"><i class="fa-brands fa-snapchat-square"></i></a>
        </div>
        <ul class="list">
            <li>
                <a href=""><router-link to="/" class="navbarT">Inicio</router-link></a>
            </li>
            <li>
                <a href=""><router-link to="/TerminosyCondiciones" class="navbarT">Terminos Y condiciones</router-link></a>
            </li>
            <li>
                <a href=""><router-link to="/Contactanos" class="navbarT">Contactanos</router-link></a>
            </li>
            <li>
                <a href=""><router-link to="/" class="navbarT">Sobre Nosotros</router-link></a>
            </li>
            <li>
                <a href=""><router-link to="/" class="navbarT">Nos encontramos</router-link></a>
            </li>
            <li>
                <a href=""><router-link to="/" class="navbarT">Ayuda</router-link></a>
            </li>
        </ul>
        <p class="copyrigth">
            Dnte 2021, Dante.com. Tiene todos los derechos de la pagina.
        </p>
    </section>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped >
main{
    margin-top: -200px;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.footer{
    padding: 130px 0;
    background-color: rgb(243, 226, 210);
    padding-bottom: 35px;
    position: absolute;
    bottom: 0;
    margin-bottom: -190px;
    width: 100%;


}
.footer .social{
    text-align: center;
    padding-bottom: 25px;
    color: rgb(27, 25, 25);
}
.footer .social a{
    font-size: 28px;
    color: inherit;
    border: 1px rgb(209, 209, 209) solid;
    width: 40px;
    line-height: 38px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 8px; 
    opacity: 0.79;
}
.footer .social a:hover{
    opacity: 0.9;
}
.footer ul{
    margin-top: 0;
    padding: 0;
    list-style: none;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
}
.footer ul a{
    color: inherit;
    text-decoration: none;
    opacity: 0.89;
}
.footer ul li{
    display: inline-block;
    padding: 0 15px;
}
.footer ul li a:hover{
    opacity: 1;
}
.footer .copyrigth{
    margin-top: 15px;
    text-align: center;
    font-size: 18px;
    color: rgb(88, 88, 88);
}
</style>