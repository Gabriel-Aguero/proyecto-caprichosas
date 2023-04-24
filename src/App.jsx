import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/authContext.jsx';
import NavBarComponents from './components/layout/NavBarComponents';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/pages/Nosotros.jsx';
import PreguntasFrecuentes from './components/pages/PreguntasFrecuentes';
import Footer from './components/layout/Footer';
import ScrollTo from './components/ScrollTo';
import Ingresar from './components/pages/Ingresar';
import UpdatePrice from './components/UpdatePrice';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBarComponents />      
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />}/>   
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>        
          <Route path={"/preguntasfrecuentes"} element={<PreguntasFrecuentes/>} />
          <Route path={"/nosotros"} element={<Nosotros />} />
          <Route path={"/ingresar"} element={<Ingresar />} />
          <Route path={"/updateprice"} element={<UpdatePrice />} />
          <Route path={"*" }element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />        
        <ScrollTo/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

