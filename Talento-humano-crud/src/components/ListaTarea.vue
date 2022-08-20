<template>
    <table>
        
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Sexo</th>
                <th scope="col">Estado Civil</th>
                <th scope="col">Edad</th>
                <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="item in tareas" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nombre}}</td>
                <td>
                    <span v-for="(cat, index) in item.categoria" :key="index">
                        {{ (item.categoria.length === index +1) ? cat : cat + ', ' }}
                    </span>
                </td>
                <td>{{item.estado}}</td>
                <td>{{item.numero}}</td>
                <td>
                    <button class="btn btn-danger ml-2 brn-sm" @click="deleteTarea(item.id)">Eliminar</button>
                    <router-link 
                    class="btn btn-warning ml-2 brn-sm"
                    :to="{name: 'Editar',
                        params:{
                            id: item.id
                                }
                        }"
                        >
                    Editar</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState(['tareas'])
        },
        methods:{
            ...mapActions(['deleteTarea'])
        }

    }
</script>

<style  scoped>
th, td {
  border-bottom: 1px solid #ddd;
  padding: 0.3rem;
}
table{
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}
tr:nth-child(even) {background-color: #f2f2f2;}
.Boton{
    border-radius: 0.5rem;
    height: 2.1rem;
    background: red;
    color: white;
    font-size: large ;
    margin-right: 1rem;
}


</style>