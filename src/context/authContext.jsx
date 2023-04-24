import { createContext, useContext } from "react";
import { auth } from "../firebaseConfig";
import {
    // createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // onAuthStateChanged,
    // signOut,
    // sendPasswordResetEmail
  } from "firebase/auth"

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
}

// //   funcion de firebase para registrarme   
// const signup = (email, password) => 
// createUserWithEmailAndPassword(auth, email, password);


// funcion de firebase para logearme 
const login = (email, password) =>
signInWithEmailAndPassword(auth, email, password);

// // cerrar sesion 
// const logout = () => signOut(auth);

// // Resetear password  
// const resetPassword = (email) => {
// sendPasswordResetEmail(auth, email);
// }

export function AuthProvider({ children }) {
 
  
  return (
    <authContext.Provider value={{ login }}>
      {children}
    </authContext.Provider>

  )
}
