import ReactDOM from 'react-dom/client'
import './index.css'
import { initializeApp } from "firebase/app";
import App from './App'



initializeApp({
  apiKey: "AIzaSyCk07_KmIxZETICPDvW2sJvdE_jwPmoD6M",
  authDomain: "miprimeraapp-55f31.firebaseapp.com",
  projectId: "miprimeraapp-55f31",
  storageBucket: "miprimeraapp-55f31.appspot.com",
  messagingSenderId: "916050476394",
  appId: "1:916050476394:web:74a2bcdcb65aa284da3913",
  measurementId: "G-QPD0G2LJFJ"
});

 const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  
  <App />
 
  </div>
 
)