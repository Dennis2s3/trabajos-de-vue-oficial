import firebase from 'firebase'
import { Ref, onUnmounted } from 'vue'

const config ={
    apiKey: "AIzaSyAFVtfji1O6YROETZJL9io2uog1xJghqh8",
    authDomain: "formularios-vue.firebaseapp.com",
    projectId: "formularios-vue",
    storageBucket: "formularios-vue.appspot.com",
    messagingSenderId: "774896704546",
    appId: "1:774896704546:web:c36d4232c99f2374ea3e7b"
  }

const firebaseapp = firebase.initializeApp(config)

const db = firebaseapp.firestore()
const userscollection = db.collection('users')

export const  createUser =  user =>{
    return userscollection.add(user)
}

export const getUser =async id=>{
    const user = await userscollection.doc(id).get()
    return user.exists ? user.data(): null 
}

export const updateUser = (id, user)=>{
    return userscollection.doc(id).update(user)
}

export const  deleteUser = id =>{
    return userscollection.doc(id).delete()
}

export const useLoadUsers = () =>{
    const users = ref ([])
    userscollection.onSnapshot(snapshot =>{
        users.value = snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}) )
    })
    onUnmounted(close)
    return users
} 
