<template >
<main>
    <h2 class="mt-5">Editar Incidencia</h2>
    <form @submit.prevent="updateTarea(tarea)">
         <Input :tarea="tarea"/>
    </form>
</main>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Input from '@/components/Input.vue'
export default {
    components:{
        Input:'Editar'
    },
    computed: {
        ...mapState(["tarea"])
    },
    methods: {
        ...mapActions(["setTarea" , 'updateTarea'])
    },
    created() {
        this.setTarea(this.$route.params.id);
    },
    components: { Input }
}
</script>
<style scoped>
h2{
    text-align: center;
}
</style>
