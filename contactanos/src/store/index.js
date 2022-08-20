import { createStore } from 'vuex'

export default createStore({
  state: {
    contactousuario:[],
    contactanos:{
      id:'',
      nombre: '',
      apellido:'',
      usuario:'',
      correo:'',
      cedula: 0,
      telefono: 0,
      mensaje:''
    },
    copiaS:[],
    Copia:{
      id:'',
      copiaSeguridad:''
  },
    Formularios:[],
    Formulario:{
      id:'',
      nombre:'',
      apellido:'',
      correo:'',
      telefono:'',
      sexo:'',
      Fecha_Nacimiento:'',
      Nombre_Primaria:'',
      Nombre_Secundaria:'',
      Fecha_Inicio_Primaria:'',
      Fecha_Fin_Primaria:'',
      Fecha_Inicio_Secundario:'',
      Fecha_Fin_Secundario:'',
      Nombre_Empresa_1:'',
      Nombre_Empresa_2:'',
      Fecha_Inicio_Primera_Empresa:'',
      Fecha_Fin_Primera_Empresa:'',
      Fecha_Inicio_Segunda_Empresa:'',
      Fecha_Fin_Segunda_Empresa:'',
  }

  },
  getters: {
  },
  mutations: {

    set(state,peyload){
      state.contactousuario.push(peyload)
    },
    set2(state,payload){
      state.copiaS.push(payload)
      console.log(state.copiaS)
    },
    set3(state, poyload){
      state.Formularios.push(poyload)
    }
  },
  actions: {
    async setcontactousuario({commit}, contactanos){
      try {
        const res = await fetch(`https://proyecto-talento-humano-p-default-rtdb.firebaseio.com/contactanos/${contactanos.id}.json`,{
          method:'PUT',
          body: JSON.stringify(contactanos),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const datosDB = await res.json()
      } catch (error) {
        console.log(error)
      }
      commit('set', contactanos)
    },
    async set2copiaS({commit}, Copia){
      try {
        const res = await fetch(`https://proyecto-talento-humano-p-default-rtdb.firebaseio.com/CopiaDeSeguridad/${Copia.id}.json`,{
          method:'PUT',
          body: JSON.stringify(Copia),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const CopiasDB = await res.json()
      } catch (error) {
        console.log(error)
      }
      commit('set2', Copia)
    },
    async set3Formulario({commit}, Formulario){
      try {
        const res = await fetch(`https://proyecto-talento-humano-p-default-rtdb.firebaseio.com/FormulariosTrabajo/${Formulario.id}.json`,{
          method:'PUT',
          body: JSON.stringify(Formulario),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const FormularioBD = await res.json()
      } catch (error) {
        console.log(error)
      }
      commit('set3', Formulario )
    }
    
  },
  modules: {
  }
})
