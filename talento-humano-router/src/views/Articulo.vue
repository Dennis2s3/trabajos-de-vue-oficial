<template>
    <Titulo texto="Ruta con Parametros"/>
    <h2>Parametro: {{$route.params.id}}</h2>
    <h3>{{Articulo.title}}</h3>
    <p>{{Articulo.id}} - {{Articulo.body}}</p>

</template>

<script>
    import Titulo from '../components/Titulo'
    export default {
        components:{
            Titulo
        },
        data() {
            return {
                Articulo: {

                }
            }
        },
        methods:{
            async MostrarArticulo(){
              try {
                    const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                    const objeto = await data.json()
                    console.log(objeto)
                    this.Articulo = objeto
              } catch (error) {
                console.log(error)
              }

            }
        },
        created(){
            this.MostrarArticulo()
        }
    }
</script>

<style  scoped>

</style>