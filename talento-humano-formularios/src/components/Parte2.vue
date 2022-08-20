<template>
    <form action="">
        <div class="titulo">
                        <h3 class="text">{{title}}</h3>
        <div class="contenedor-padre">
            <div class="caja-hijo">
                <input
                type="checkbox" 
                id="Check"
                class="boton"
                v-model="tarea.categoria"
                value="JavaScript"
                >
                <label for="Check">JavaScript</label>
             </div>
             <div class="caja-hijo">
                <input
                type="checkbox" 
                id="Check-2"
                class="boton"
                v-model="tarea.categoria"
                value="PhP"
                >
                <label for="Check-2">PhP</label>
             </div>
        </div>
        </div>
    </form>
    <p>{{tarea}}</p>
</template>

<script >
   export default{
    data() {
        return {
            title: 'Hola',
            tarea:{
                categoria: []
            }
        }
    },
   } 
</script>

<style  scoped>
.titulo{
    border: 0.2rem black solid;
    text-align: center;
    margin: 3rem auto auto auto ;
    width: 20%;
}
.contenedor-padre{
    display: grid;
    grid-template-columns: auto auto ;
    justify-content: center;  
}
.caja-hijo{
    margin-left: 0.9rem;
    margin-right: 0.9rem;
}
p{
    text-align: center;
}
</style>