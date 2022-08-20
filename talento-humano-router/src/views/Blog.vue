<template>
    <Titulo texto="Mi titulo de mi blog"/>
    <button @click="ConsumirAPI" class="btn" >Mostrar API</button>
   <div v-for="item in arrayBlog" :key="item.id">
   <router-link :to="`/blog/${item.id}`">{{ item.title }}</router-link>    
    </div>
</template>

<script >
    import Titulo from '../components/Titulo'
    export default{
        components:{
            Titulo
        },
        data() {
            return {
                arrayBlog: []
            }
        },
        methods:{
            async ConsumirAPI(){
                try {
                    const data = await fetch('https://jsonplaceholder.typicode.com/posts') 
                    const array = await data.json()
                    this.arrayBlog = array
                    console.log(array)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>
<style>
.btn{
    color: black;
    width: 50%;
    background: pink;
    height: 5rem;
    font-size: 2rem;
    cursor: pointer;
    font-weight: 700;
    border-radius: 0.8rem;
}
.btn:hover{
    background: rgb(107, 228, 107);
}
</style>
