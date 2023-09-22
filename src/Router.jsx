import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.jsx'));


const router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
     );
}
 
export default router;