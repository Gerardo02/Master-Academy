import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import PrivateRoute from "./PrivateRoute.jsx";
import { useAuth } from "./AuthContext.jsx";

const App = lazy(() => import('./App.jsx'));


const router = () => {

    const { permission } = useAuth();

    return ( 
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/home" element={<PrivateRoute routeName={'home'} />} />

            <Route path="/control_escolar" element={<PrivateRoute permission={permission} routeName={'control'} />} />


            <Route path="/administracion" element={<PrivateRoute permission={permission} routeName={'administracion'} />} />

            <Route path="/documentacion" element={<PrivateRoute routeName={'documentacion'} />} />

            <Route path="/inscripcion" element={<PrivateRoute permission={permission} routeName={'inscripcion'} />} />

            <Route path="/administrador" element={<PrivateRoute permission={permission} routeName={'administrador'} />} />
            
        </Routes>
     );
}
 
export default router;