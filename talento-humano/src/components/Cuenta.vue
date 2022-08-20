<template>
    <h2>Cuenta Bancaria {{Cuenta}}</h2>
    <h2>Saldo: {{Saldo}}</h2>
    <h2>Cuenta: {{Estado ? 'Activa' : 'Desactivada'}}</h2>
    <div class="Array" v-for="(Servicio, index) in Servicios" :key="index">
        {{index+1}} - {{ Servicio }}
    </div>
    <AccionSaldo texto= "Aumentar Saldo" @accion="aumentar"/>
    <AccionSaldo texto= "Disminuir Saldo"  @accion="disminuir"
    :Desactivar = "Desactivar"
    />
</template>

<script >
import AccionSaldo from "./AccionSaldo.vue";

    export default{
    components:{
        AccionSaldo
    },
    data() {
        return {
            Saldo: 1000,
            Cuenta: "Visa",
            Estado: true,
            Servicios: ["Giros", "Abono", "Transferencia"],
            Desactivar: false 
        };
    }, 
    methods: {
        aumentar(){
            this.Saldo = this.Saldo +100
            this.Desactivar= false
        },
        disminuir() {    
            if(this.Saldo===0){
                this.Desactivar = true
                alert('Saldo Agotado')
            } 
            else{
                this.Saldo = this.Saldo -100
            }                      
        }
    }
    
}
</script>

<style  scoped>
    h2  {
        color: black;
        text-transform: uppercase;
    }
    .Array{
        color: black;
        text-transform: uppercase;
    }
</style>
