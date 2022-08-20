<template>
<main>
    <div class="principal">
        <FormularioAdmision/>
    </div>
</main>

</template>

<script>
import FormularioAdmision from '@/components/FormularioAdmision.vue';
    export default {

    components: { FormularioAdmision }
}
</script>

<style  scoped>
main{
    height: 100%;
}
.principal{
    margin-top: 5rem;
    margin-bottom: 3rem;
}
</style>