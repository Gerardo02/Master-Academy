// AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './Hooks/useLocalStorage';
import { AuthTokenGenerator } from './AuthTokenGenerator';

const AuthContext = createContext();
const authToken = AuthTokenGenerator();
//const permissionToken = AuthTokenGenerator();


export const AuthProvider = ({ children }) => {
  const [especialidadData, setEspecialidadData] = useState([])
  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEspecialidadesData = async () => {
      try {
        const response = await fetch('https://back-fiber-production.up.railway.app/api/especialidad');
        const data = await response.json();
        setEspecialidadData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEspecialidadesData();
  }, []);

  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage("Auth", false, true)
  const [permission, setPermission] = useLocalStorage("Permission", '', true);

  const login = async (credentials) => {
    try {
      const response = await fetch('https://back-fiber-production.up.railway.app/api/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.status === 201) {
        // If the response status is not 200, handle the error
        setIsAuthenticated(false);
        throw new Error(`Wrong User`);
      }

      if (response.status === 202) {
        // If the response status is not 200, handle the error
        setIsAuthenticated(false);
        throw new Error(`Wrong Password`);
      }

      if (response.status !== 200) {
        // If the response status is not 200, handle the error
        setIsAuthenticated(false);
        throw new Error(`Unexpected request error`);
      }
      
      const data = await response.json();

      setPermission(data);

      // If the response status is OK, set isAuthenticated to true
      setIsAuthenticated(true);

    } catch (error) {
      // Handle any errors that occurred during the fetch
      //console.error('Error in the login:', error);
      // You might want to throw or handle the error differently
      throw error;
    }
  };

  const logout = () => {
    // Perform logout logic here
    // Example: Remove token from localStorage
    //localStorage.removeItem('token');
    navigate('/');
    setIsAuthenticated(false);
    // clearAuth();
    // clearPerm();
    

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, permission, especialidadData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
