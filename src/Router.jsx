import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));
const ControEscolar = lazy(() => import('./components/control_escolar/pages/control_escolar/Index.jsx'));


const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/control_escolar" element={<ControEscolar />} />
        </Routes>
     );
}
 
export default router;