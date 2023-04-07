import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Vue from 'vue'
import App from './App'
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2w4LSsyyPrRpKnSbPhVV507gDyw0cts0",
  authDomain: "ryuya-yamanaka.firebaseapp.com",
  databaseURL: "https://ryuya-yamanaka-default-rtdb.firebaseio.com",
  projectId: "ryuya-yamanaka",
  storageBucket: "ryuya-yamanaka.appspot.com",
  messagingSenderId: "164195097560",
  appId: "1:1:64195097560:web:188f64c69fa98bf704f0ad",
  measurementId: "G-CKM5Y6R8D0"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { auth,db };
new Vue({
  el:'#app',
  conponents: {
    App
  },
  render: h => h(App)
})


//auth databaseの追加
/*const auth = firebase.auth();
const database = firebase.firestore();

export {auth,database};*/