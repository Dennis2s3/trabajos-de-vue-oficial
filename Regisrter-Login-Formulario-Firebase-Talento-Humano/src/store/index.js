import { createStore } from 'vuex'
import router from '@/router'
import Swal from 'sweetalert2'

export default createStore({
  state: {
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
  },

    copiaS:[],
    Copia:{
      id:'',
      copiaSeguridad:''
  },
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
    paises:[],
    paisesFiltrados:[],
    tareas:[],
    tarea:{
      id: '',
      nombre:'',
      categoria:[],
      estado:'',
      numero:0      
    },
    user: null,
    error:{tipo: null, mensaje: null}
  },
  getters: {
  },
  mutations: {
    set3(state, poyload){
      state.Formularios.push(poyload)
    },
    set2(state,payload){
      state.copiaS.push(payload)
      console.log(state.copiaS)
    },
    set(state,peyload){
      state.contactousuario.push(peyload)
    },
    serError(state, peyload){
      if(peyload === null){
        return state.error = {tipo: null, mensaje: null}
      }
      if(peyload ==="EMAIL_NOT_FOUND"){
        return state.error = 
         Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El correo que ingreso no esta registrado.',
          
    
        });
        
      }

      if(peyload ==="INVALID_PASSWORD"){
        return state.error =Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La contrasena que escribio no es la correcta.!',
    
        });
      }
      if(peyload ==="WEAK_PASSWORD : Password should be at least 6 characters"){
        return  state.error =Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La contrasena debe contener como minimo 6 caracteres!.',
    
        });
      }
      if(peyload ==="MISSING_PASSWORD"){
        return  state.error = Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Escriba su contrasena!',
    
           });
      }
      if(peyload ==="EMAIL_EXISTS"){
        return  state.error = Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El correo que ingreso ya esta registrado.!',
    
           });
      }
      if(peyload ==="INVALID_EMAIL"){
        return state.error =Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Formato de correo no valido.!',
    
           });
      }
      if(peyload ===null){
        return state.error = {tipo: 'email', tipo:'password', }
      }

    },
    serUser(state, peyload){
      state.user =peyload
    },
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
    },
    setPaises(state, peyload){
      state.paises = peyload;
    },
    setPaisesFiltrados(state, peyload){
      state.paisesFiltrados =  peyload;
    },


  },
  actions: {
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
    cerrarSesion({commit}){
      commit('serUser', null)
      router.push('/')
      localStorage.removeItem('usuario')
    },
    async ingresoUsuario({commit}, usuario){
      console.log(usuario)
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRFdzx1Tqpr0CuAEGBMcYCT0Z01dMZ-q8',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })

        })
        const userDB = await res.json()
        if(userDB.error){
          console.log(userDB.error) 
          return commit('serError',userDB.error.message )
        }
        commit('serUser', userDB)
        commit('serError', null )
        router.push('/')
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async registrarUser({commit}, usuario){
      try {
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRFdzx1Tqpr0CuAEGBMcYCT0Z01dMZ-q8`,{
          method:'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            usuario:usuario.usuario,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if(userDB.error){
          console.log(userDB.error) 
          return commit('serError',userDB.error.message )
        }
        commit('serUser', userDB)
        commit('serUser', null)
        router.push('/ingreso')
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async cargarLocalStorage({commit, state}){
      if(localStorage.getItem('usuario')){
        commit('serUser', JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('serUser', null)
      }
      try {
        const res = await fetch(`https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
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
    async setTareas({commit, state}, tarea){
      try {
        const res = await fetch(`https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
    async deleteTarea({commit, state}, id){
      try {
        const res = await fetch(`https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`,{
          method: 'DELETE',   
          
        })
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'Eliminado con exito!',
  });
        commit('eliminar', id)
        
      } catch (error) {
        console.log(error)
      }
    },
    setTarea({commit}, id){
      commit('tarea', id)
      
    },
    async updateTarea({commit, state}, tarea){
      try {
        const res  = await fetch(`https://fomulario-talento-humano-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`,{
          method: 'PATCH',
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()
        commit('update', dataDB)
        router.push('/home')
      } catch (error) {
        console.log(error)
      }
      
    },
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
    },
    
  },
  getters:{
    usuarioAutenticado(state){
      return !!state.user
        },
        tipoProfesionalEmpleado(state){
          return state.paisesFiltrados.sort((a, b) =>
             a.common < b.common ? 1: -1
          )
        }
  },
  modules: {
  }
})

