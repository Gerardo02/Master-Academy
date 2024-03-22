import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import PrivateRoute from "./PrivateRoute.jsx";
import { useAuth } from "./AuthContext.jsx";

const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./Components/Dashboard/Dashboard.jsx'))
const ControEscolar = lazy(() => import('./Components/control_escolar/pages/control_escolar/Index.jsx'));
const Administracion = lazy(() => import('./Components/pagos/pages/pagos/Index.jsx'))
const Documentacion = lazy(() => import('./Components/documentacion/page/Index.jsx'))
const Inscripcion = lazy(() => import('./Components/inscripcion/pages/Index.jsx'))
const Administrador = lazy(() => import('./Components/JOEL/pages/Index.jsx'))

const router = () => {

    const { permission } = useAuth();

    return ( 
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/home" element={<PrivateRoute routeName={'home'} />}>
                <Route path="/home" element={<Home />} />
            </Route>

            <Route path="/control_escolar" element={<PrivateRoute permission={permission} routeName={'control'} />}>
                <Route path="/control_escolar" element={<ControEscolar />} />
            </Route>

            <Route path="/administracion" element={<PrivateRoute permission={permission} routeName={'administracion'} />}>
                <Route path="/administracion" element={<Administracion />} />
            </Route>

            <Route path="/documentacion" element={<PrivateRoute routeName={'documentacion'} />}>
                <Route path="/documentacion" element={<Documentacion />} />
            </Route>

            <Route path="/inscripcion" element={<PrivateRoute permission={permission} routeName={'inscripcion'} />}>
                <Route path="/inscripcion" element={<Inscripcion />} />
            </Route>

            <Route path="/administrador" element={<PrivateRoute permission={permission} routeName={'administrador'} />}>
                <Route path="/administrador" element={<Administrador />} />
            </Route>
            
        </Routes>
     );
}
 
export default router;