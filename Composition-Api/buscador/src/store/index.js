import { createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],
    paisesFiltrados:[]
  },
 
  mutations: {
    setPaises(state, peyload){
      state.paises = peyload;
    },
    setPaisesFiltrados(state, peyload){
      state.paisesFiltrados =  peyload;
    }
  },
  actions: {
    async getpaises ({commit}){
      try {
        const res = await fetch("api-paises.json")
        const data = await res.json()
        commit("setPaises", data)

      } catch (error) {
        console.log(error)
      }
    },
    filtrarRegion({commit, state}, Ciudad){
      const filtro =state.paises.filter(pais =>
          pais.Ciudad.includes(Ciudad)
        )
        commit('setPaisesFiltrados', filtro)
    },
    filtroNombre({commit, state}, texto){
      const textoCliente = texto.toLowerCase()
      const  filtro = state.paises.filter(pais =>{
         const textoApi= pais.nombre.toLowerCase()
         if(textoApi.includes(textoCliente)){
          return  pais
         }
         
      })
      commit('setPaisesFiltrados', filtro)
    }
  },
  getters:{
    tipoProfesionalEmpleado(state){
      return state.paisesFiltrados.sort((a, b) =>
         a.common < b.common ? 1: -1
      )
    }
  },
  modules: {
  }
})
