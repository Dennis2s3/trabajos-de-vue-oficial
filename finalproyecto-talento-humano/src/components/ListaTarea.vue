<template>
<main>
<div class="table-responsive">
    <table class="table table-bordered border-dark ">
        
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Incidencia</th>
                <th scope="col">Tipo Administrador</th>
                <th scope="col">Tipo Incidencia</th>
                <th scope="col">Hora Envio</th>
                <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="item in tareas" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.categoria}}</td>
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
    </div>
</main>
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
.table{
    width: 90%;
    margin: auto;
    margin-top: 5rem;
    background-color: rgba(255, 255, 255, 0.829);
}
main{
    height: 100%;
    margin-bottom: 25px;
}


</style>