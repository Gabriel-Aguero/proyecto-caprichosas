import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore"


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
}

export function AuthProvider({ children }) {

  const [listproduct, setListProduct] = useState([]); 
  
   
  // Recuperar los productos de la base de datos 
  const getDatos = async () => {
    const datos = await getDocs(collection(db, "productos"));
    let docs = [];
    datos.forEach(documento => {
      docs.push({ ...documento.data(), id: documento.id })
    });
    setListProduct(docs);
  }

  useEffect(() => {
    getDatos();
  }, [])
 
  
  return (
    <authContext.Provider value={{ listproduct }}>
      {children}
    </authContext.Provider>

  )
}
