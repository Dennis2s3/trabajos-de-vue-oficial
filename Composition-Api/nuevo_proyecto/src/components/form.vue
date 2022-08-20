<template>
    <div>
        <form action="" @submit.prevent="onSubmit">
            <label for="" class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="form.name">
            <label for="" class="form-label">Contrsena</label>
            <input type="password" class="form-control" v-model="form.pass">

            <button class="btn btn-dark" type="submit">Crear Usuario</button>
        </form>
    </div>
</template>

<script>

import { createUser } from '../firebase'
import { reactive } from 'vue'
    export default {
        setup() {
            const form = reactive({name: '', pass:''})

            const onSubmit = async() =>{}
            
            return {form, onSubmit}
        }
    }
</script>

<style  scoped>

</style>