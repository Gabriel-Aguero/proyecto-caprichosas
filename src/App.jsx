import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import NavBar from './components/NavBar';

import PreguntasFrecuentes from './components/pages/PreguntasFrecuentes';
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto'
import Footer from './components/Footer';

import ProductList from './components/pages/ProductList';
import Inicio from './components/pages/Inicio';



function App() {
  return (    
      <BrowserRouter>
        <NavBar />
        

        <Routes>
            
            <Route index element={<Inicio/>} />
            <Route path={"/productos"} element={<ProductList />}/>
            <Route path={"/preguntas-frecuentes"} element={<PreguntasFrecuentes />} />
            <Route path={"/nosotros"} element={<Nosotros />} />
            <Route path={"/contacto"} element={<Contacto />} />
            <Route path={"*"} element={<Navigate replace to="/" />} />
          
        </Routes>
        
        <Footer />
      </BrowserRouter>
    

  );
}

export default App;

