import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));
const ControEscolar = lazy(() => import('./components/control_escolar/pages/control_escolar/Index.jsx'));
const Pagos = lazy(() => import('./components/pagos/pages/pagos/Index.jsx'))


const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/control_escolar" element={<ControEscolar />} />
            <Route path="/pagos" element={<Pagos />} />
        </Routes>
     );
}
 
export default router;