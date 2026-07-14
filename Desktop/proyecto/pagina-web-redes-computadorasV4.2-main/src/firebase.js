// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // <-- Importamos la autenticación
import { getFirestore } from "firebase/firestore"; // <-- Importamos Firestore (base de datos)

const firebaseConfig = {
  apiKey: "AIzaSyB38XmA_FFACJ9sCYXGabkH3vxvzRnYxSc",
  authDomain: "cursoredes-f379a.firebaseapp.com",
  projectId: "cursoredes-f379a",
  storageBucket: "cursoredes-f379a.firebasestorage.app",
  messagingSenderId: "495060119667",
  appId: "1:495060119667:web:f3dbbfec303b4b7626ba06"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportamos los servicios que usarán tus componentes Login, Register, Dashboard y Formulario
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // <-- Instancia de Firestore para toda la app