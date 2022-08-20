import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    tareas:[],
    tarea:{
      id: '',
      nombre:'',
      categoria:[],
      estado:'',
      numero:0      
    }
  },
  getters: {
  },
  mutations: {
    set(state, peyload){
      state.tareas.push(peyload)
      console.log(state.tareas)
    },
    eliminar(state, peyload){
      state.tareas = state.tareas.filter(item => item.id !== peyload)
    },
    tarea(state, peyload){
      if(!state.tareas.find(item=> item.id === peyload)){
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item=> item.id === peyload)
    },
    update(state, peyload){
      state.tareas =state.tareas.map(item => item.id === peyload.id ? peyload : item)
      router.push('/')
    }

  },
  actions: {
    setTareas({commit}, tarea){
      commit('set', tarea)
    },
    deleteTarea({commit}, id){
      commit('eliminar', id)
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})
