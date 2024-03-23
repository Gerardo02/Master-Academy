import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { lazy } from "react";


const ControEscolar = lazy(() => import('./Components/control_escolar/pages/control_escolar/Index.jsx'));
const Home = lazy(() => import('./Components/Dashboard/Dashboard.jsx'))
const Administracion = lazy(() => import('./Components/pagos/pages/pagos/Index.jsx'))
const Documentacion = lazy(() => import('./Components/documentacion/page/Index.jsx'))
const Inscripcion = lazy(() => import('./Components/inscripcion/pages/Index.jsx'))
const Administrador = lazy(() => import('./Components/JOEL/pages/Index.jsx'))

const PrivateRoute = ({ permission, routeName }) => {
    const { isAuthenticated } = useAuth();
    
    if(routeName === 'home') {
      return isAuthenticated ? (
        <Home />
      ) : (
        <Navigate to="/" replace />
      );
    }

    if(routeName === 'documentacion') {
      return isAuthenticated ? (
        <Documentacion />
      ) : (
        <Navigate to="/" replace />
      );
    }

    if(routeName === 'control') {
      return isAuthenticated && permission.control_escolar ? (
        <ControEscolar />
      ) : (
        <Navigate to="/home" replace />
      );
    }

    if(routeName === 'administracion') {
      return isAuthenticated && permission.administracion ? (
        <Administracion />
      ) : (
        <Navigate to="/home" replace />
      );
    }

    if(routeName === 'inscripcion') {
      return isAuthenticated && permission.inscripcion ? (
        <Inscripcion />
      ) : (
        <Navigate to="/home" replace />
      );
    }

    if(routeName === 'administrador') {
      return isAuthenticated && permission.administrador ? (
        <Administrador />
      ) : (
        <Navigate to="/home" replace />
      );
    }

};

export default PrivateRoute;