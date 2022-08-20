import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 101
  },
  getters: {
  },
  mutations: {
      incrementar(state, numero){
        state.contador = state.contador + numero
      },
      disminuir(state, numero){
        state.contador = state.contador-numero
      }
  },
  actions: {
      AccionIncrementar({commit}){
        commit('incrementar', 10)
      },
      AccionDisminuir({commit}, numero){
        commit('disminuir', numero)
      },
      BotonAccion({commit}, objeto){
        if(objeto.estado){
          commit('incrementar', objeto.numero)
        }else{
          commit('disminuir', objeto.numero)
        }
      }
  },
  modules: {
  }
})
