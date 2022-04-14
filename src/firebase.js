import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import config from './config'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

firebase.initializeApp(config)
const auth=firebase.auth()
const db=firebase.firestore()
const provider=new GoogleAuthProvider()
export {auth,db,provider}