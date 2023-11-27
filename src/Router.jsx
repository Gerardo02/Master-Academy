import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./Components/Dashboard/Dashboard.jsx'))
const ControEscolar = lazy(() => import('./Components/control_escolar/pages/control_escolar/Index.jsx'));
const Administracion = lazy(() => import('./Components/pagos/pages/pagos/Index.jsx'))
const Documentacion = lazy(() => import('./Components/documentacion/page/Index.jsx'))
const Inscripcion = lazy(() => import('./Components/inscripcion/pages/Index.jsx'))
const Administrador = lazy(() => import('./Components/JOEL/pages/Index.jsx'))

const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/control_escolar" element={<ControEscolar />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/documentacion" element={<Documentacion />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
            <Route path="/administrador" element={<Administrador />} />
        </Routes>
     );
}
 
export default router;