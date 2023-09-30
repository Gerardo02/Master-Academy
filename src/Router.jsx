import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));
const ControEscolar = lazy(() => import('./components/control_escolar/pages/control_escolar/Index.jsx'));
const Pagos = lazy(() => import('./components/pagos/pages/pagos/Index.jsx'))
const Alumnos = lazy(() => import('./components/Alumnos/pages/alumnos/index.jsx'));
const InfoAlumno = lazy(() => import('./components/Alumnos/pages/InfoAlumno/index.jsx'));

const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/control_escolar" element={<ControEscolar />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/Alumnos" element={<Alumnos />}/>
            <Route path="/InfoAlumno" element={<InfoAlumno />}/>
        </Routes>
     );
}
 
export default router;