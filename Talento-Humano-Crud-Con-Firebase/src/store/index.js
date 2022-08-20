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
    cargar(state, peyload){
      state.tareas = peyload
    },
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
    async cargarLocalStorage({commit}){
      try {
        const res = await fetch('https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas.json')
        const dataDB = await res.json()
        const arrayTareas = []
        for(let id in dataDB){
          arrayTareas.push(dataDB[id])
        }
        console.log(arrayTareas)
        commit('cargar', arrayTareas)
      } catch ( error) {
        console.log(error)
      }
    },
    async setTareas({commit}, tarea){
      try {
        const res = await fetch(`https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        
        const dataDB = await res.json()
        console.log(dataDB)
      } catch (error) {
        console.log(error)
      }
      commit('set', tarea)
    },
    async deleteTarea({commit}, id){
      try {
        const res = await fetch(`https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas/${id}.json`,{
          method: 'DELETE',   
        })
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    async updateTarea({commit}, tarea){
      try {
        const res  = await fetch(`https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: 'PATCH',
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()
        commit('update', dataDB)
      } catch (error) {
        console.log(error)
      }
      
    }
  },
  modules: {
  }
})
