import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCmJok-jXA8s99BZf0alZAX_aVF5X-jq3k',
  authDomain: 'kirimdataesp.firebaseapp.com',
  databaseURL: 'https://kirimdataesp-default-rtdb.firebaseio.com',
  projectId: 'kirimdataesp',
  storageBucket: 'kirimdataesp.appspot.com',
  messagingSenderId: '315549869657',
  appId: '1:315549869657:web:ae690bbb0ba7ea174fb348'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

export const auth = getAuth(app)
export const userDatabase = getDatabase(app)
export const dbTanaman = getFirestore(app)
export default db
