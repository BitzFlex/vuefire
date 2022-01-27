// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.

importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js')


// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyBPHkqDHBtotCiNuakkIWQnF-SWMUvsuGk",
  authDomain: "fcm-testbed-fbbbd.firebaseapp.com",
  projectId: "fcm-testbed-fbbbd",
  storageBucket: "fcm-testbed-fbbbd.appspot.com",
  messagingSenderId: "614806521332",
  appId: "1:614806521332:web:d699c337bd3af6c4f725a1",
  measurementId: "G-ED07H23JES"
})


const app = firebase.initializeApp(firebaseConfig)
