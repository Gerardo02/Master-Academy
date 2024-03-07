// MainDataContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const MainDataContext = createContext();

export const MainDataProvider = ({ children }) => {
  const [ciclosData, setCiclosData] = useState([]);
  const [documentosData, setDocumentosData] = useState([])
  const [alumnosData, setAlumnosData] = useState([])


  useEffect(() => {
    fetchCiclosEscolares()
    fetchAlumnosData()
    fetchDocumentosEntregados()
  }, []);

  const fetchCiclosEscolares = async () => {
    try{
      const response = await fetch('http://127.0.0.1:3030/api/ciclo')
      const data = await response.json()
      setCiclosData(data)

    }catch(error){
      throw error
    }
  }

  const fetchDocumentosEntregados = async () => {
    try{
      const response = await fetch('http://127.0.0.1:3030/api/documentos')
      const data = await response.json()
      setDocumentosData(data)
    }catch(error){
      throw error
    }
    
  }

  const fetchAlumnosData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3030/api/alumnos')
      const data = await response.json()
      setAlumnosData(data)
    }catch(error) {
      throw error
    }
  }

  return (
    <MainDataContext.Provider value={{ ciclosData, alumnosData, documentosData }}>
      {children}
    </MainDataContext.Provider>
  );
};

export const useMainData = () => {
  return useContext(MainDataContext);
};
