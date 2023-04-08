
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponents from './componentes/Layout/navbar/NavBarComponents';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Preguntas from './componentes/paginas/Preguntas';
import Nosotros from './componentes/paginas/Nosotros.jsx';
import Contacto from './componentes/paginas/Contacto.jsx';
import Inicio from './componentes/paginas/Inicio.jsx';
import ProductList from './componentes/paginas/ProductList';

function App() {
  return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarComponents />} >
            <Route index element={<Inicio />} />
            <Route path="productos" element={<ProductList />} />
            <Route path="preguntas-frecuentes" element={<Preguntas />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;

