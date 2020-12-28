import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBM8gLRneuHPDYI8sdwesqteVnf3uvyuKw",
    authDomain: "hireme-48bb9.firebaseapp.com",
    databaseURL: "https://hireme-48bb9-default-rtdb.firebaseio.com",
    projectId: "hireme-48bb9",
    storageBucket: "hireme-48bb9.appspot.com",
    messagingSenderId: "49942263335",
    appId: "1:49942263335:web:9c59e35bbd08283c954002",
    measurementId: "G-14G5XT7RHT"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;