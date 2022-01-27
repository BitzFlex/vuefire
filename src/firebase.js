import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

var firebaseConfig = {
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
messaging.usePublicVapidKey("Your Web push key");

// messaging.usePublicVapidKey('BHtTUZeVoHuJQc40ao2g41EQ6VY_w4D53hb7PGU6UA-8m12tO5OnNmZXsi_TbqjmdpWLYnPTi37zBHYo8QfHVOM')


export default messaging
