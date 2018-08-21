import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDD10bV2l7QJ2Do8LmMlMSd34WCi_oZXwI",
    authDomain: "reactjs-ee687.firebaseapp.com",
    databaseURL: "https://reactjs-ee687.firebaseio.com",
    projectId: "reactjs-ee687",
    storageBucket: "reactjs-ee687.appspot.com",
    messagingSenderId: "607307384544"
})

const db = firebase.database(firebaseApp)

const base = Rebase.createClass(db)

export const providers = {
    'facebook' : new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base