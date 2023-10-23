import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./Components/Dashboard/Dashboard.jsx'))
const ControEscolar = lazy(() => import('./Components/control_escolar/pages/control_escolar/Index.jsx'));
const Administracion = lazy(() => import('./Components/pagos/pages/pagos/Index.jsx'))
const Alumnos = lazy(() => import('./Components/Alumnos/pages/alumnos/index.jsx'));
const InfoAlumno = lazy(() => import('./Components/Alumnos/pages/InfoAlumno/index.jsx'));
const Documentacion = lazy(() => import('./Components/documentacion/page/Index.jsx'))

const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/control_escolar" element={<ControEscolar />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/alumnos" element={<Alumnos />}/>
            <Route path="/infoalumno" element={<InfoAlumno />}/>
            <Route path="/documentacion" element={<Documentacion />} />
        </Routes>
     );
}
 
export default router;