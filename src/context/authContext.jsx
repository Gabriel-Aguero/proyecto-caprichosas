import { createContext, useContext } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
}

// funcion de firebase para logearme 
const login = (email, password) =>
signInWithEmailAndPassword(auth, email, password);


export function AuthProvider({ children }) {
 
  
  return (
    <authContext.Provider value={{ login }}>
      {children}
    </authContext.Provider>

  )
}
