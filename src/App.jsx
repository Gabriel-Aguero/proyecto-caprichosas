import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import PreguntasFrecuentes from './components/pages/PreguntasFrecuentes';
import Footer from './components/layout/Footer';

function App() {
  return (  

      <BrowserRouter>
        <Routes>
          <Route index element={<Inicio/>} />
          <Route path={"/preguntas-frecuentes"} element={<PreguntasFrecuentes />} />
          <Route path={"*"} element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;

