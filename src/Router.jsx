import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));
const ControEscolar = lazy(() => import('./Components/control_escolar/pages/control_escolar/Index.jsx'));
const Pagos = lazy(() => import('./Components/pagos/pages/pagos/Index.jsx'))
const Alumnos = lazy(() => import('./Components/Alumnos/pages/alumnos/index.jsx'));
const InfoAlumno = lazy(() => import('./Components/Alumnos/pages/InfoAlumno/index.jsx'));
const Documentacion = lazy(() => import('./Components/documentacion/page/Index.jsx'))

const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/control_escolar" element={<ControEscolar />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/alumnos" element={<Alumnos />}/>
            <Route path="/infoalumno" element={<InfoAlumno />}/>
            <Route path="/documentacion" element={<Documentacion />} />
        </Routes>
     );
}
 
export default router;