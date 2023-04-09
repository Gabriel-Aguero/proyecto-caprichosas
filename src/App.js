import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponents from './componentes/Layout/NavBarComponents';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Preguntas from './componentes/paginas/Preguntas';
import Nosotros from './componentes/paginas/Nosotros.jsx';
import Contacto from './componentes/paginas/Contacto.jsx';
import ProductList from './componentes/paginas/ProductList';
import { AuthProvider } from './context/AuthContext.jsx';
import CarouselComponents from './componentes/Layout/Carousel';
import Footer from './componentes/Layout/Footer';
import Main from './componentes/Layout/Main';
import ComoComprar from './componentes/paginas/ComoComprar';
import Visitanos from './componentes/Layout/Visitanos';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBarComponents />
        <CarouselComponents />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="categoria/:categoriaName" element={ <ProductList /> }/>          
          <Route path="preguntas-frecuentes" element={<Preguntas />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <ComoComprar />
        <Visitanos />        
      <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

