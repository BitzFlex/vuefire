import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

const firebaseConfig = {
    apiKey: "AIzaSyBPHkqDHBtotCiNuakkIWQnF-SWMUvsuGk",
    authDomain: "fcm-testbed-fbbbd.firebaseapp.com",
    projectId: "fcm-testbed-fbbbd",
    storageBucket: "fcm-testbed-fbbbd.appspot.com",
    messagingSenderId: "614806521332",
    appId: "1:614806521332:web:d699c337bd3af6c4f725a1",
    measurementId: "G-ED07H23JES"
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging() 
console.log(messaging)
messaging.usePublicVapidKey('BDQjD0qScSM0TEHgEsjIUXHLJT0kgIGSN7OjS0m0PkH0jwVKvi8eujKoOQoqsTsO9as4THjWXmXlEye7u55zCes')


Notification.requestPermission()
  .then((permission) => {
    console.log('permission ', permission)
    if (permission !== 'granted') {
      alert('알림을 허용해주세요')
    }
  })

  messaging.getToken().then(token =>{
    console.log(token)
})


messaging.onMessage(payload => {
        console.log(payload)
        alert(payload.data.message)
      })  

export default messaging
