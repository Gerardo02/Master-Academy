import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));
const Alumnos = lazy(() => import('./components/Alumnos/pages/alumnos/index.jsx'));
const InfoAlumno = lazy(() => import('./components/Alumnos/pages/InfoAlumno/index.jsx'));

const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Alumnos" element={<Alumnos />}/>
            <Route path="/InfoAlumno" element={<InfoAlumno />}/>
        </Routes>
     );
}
 
export default router;