import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponents from './components/layout/NavBarComponents';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Preguntas from './components/pages/Preguntas';
import Nosotros from './components/pages/Nosotros.jsx';
import Contacto from './components/pages/Contacto.jsx';
import ProductList from './components/pages/ProductList';
import { AuthProvider } from './context/authContext.jsx';
import Main from './components/layout/Main';
import Carousel from './components/layout/Carousel';
import ComoComprar from './components/layout/ComoComprar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBarComponents />      
        <Carousel />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="categoria/:categoriaName" element={ <ProductList /> }/>          
          <Route path="preguntas-frecuentes" element={<Preguntas />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <ComoComprar />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

