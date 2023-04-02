import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PantallaInicio from './vistas/PantallaInicio';
import Ingreso from './vistas/Ingreso';
import Registro from './vistas/Registro';
import CambiarClave from './vistas/CambiarClave';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PantallaInicio/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/ingreso' element={<Ingreso/>} />
        <Route path='/cambiarClave' element={<CambiarClave/>} />
      </Routes>
    </Router>
  );
}

export default App;
