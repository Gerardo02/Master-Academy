import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { lazy } from "react";


const ControEscolar = lazy(() => import('./Components/control_escolar/pages/control_escolar/Index.jsx'));


const PrivateRoute = ({ permission, routeName }) => {
    const { isAuthenticated } = useAuth();
    
    if(routeName === 'home' || routeName === 'documentacion') {
      return isAuthenticated ? (
        <Outlet />
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
        <Outlet />
      ) : (
        <Navigate to="/home" replace />
      );
    }

    if(routeName === 'inscripcion') {
      return isAuthenticated && permission.inscripcion ? (
        <Outlet />
      ) : (
        <Navigate to="/home" replace />
      );
    }

    if(routeName === 'administrador') {
      return isAuthenticated && permission.administrador ? (
        <Outlet />
      ) : (
        <Navigate to="/home" replace />
      );
    }

};

export default PrivateRoute;