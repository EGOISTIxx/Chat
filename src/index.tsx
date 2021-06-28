import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import 'firebase/firestore'

import App from './components/App/App'
import { Context } from './common/context/context'

const firebaseConfig = {
  apiKey: 'AIzaSyA-H4Hlop8WxrFMeHwftArKeQNEQUylDGg',
  authDomain: 'open-cchat.firebaseapp.com',
  databaseURL:
    'https://open-cchat-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'open-cchat',
  storageBucket: 'open-cchat.appspot.com',
  messagingSenderId: '1087886140224',
  appId: '1:1087886140224:web:a8aca32fa989ea7870d0a5',
}

firebase.initializeApp(firebaseConfig)

const store = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
