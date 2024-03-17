// MainDataContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const MainDataContext = createContext();

export const MainDataProvider = ({ children }) => {
  const [ciclosData, setCiclosData] = useState([]);
  const [documentosData, setDocumentosData] = useState([])
  const [alumnosData, setAlumnosData] = useState([])
  const [gruposData, setGruposData] = useState([])
  const [gruposConcluidosData, setGruposConcluidosData] = useState([])
  const [historialData, setHistorialData] = useState([])



  useEffect(() => {
    fetchCiclosEscolares()
    fetchAlumnosData()
    fetchDocumentosEntregados()
    fetchGruposActivos()
    fetchGruposConcluidos()
    fetchHistorialAdmin()
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

  const fetchGruposActivos = async () => {
    try{
      const response = await fetch('http://127.0.0.1:3030/api/grupos')
      const data = await response.json()
      setGruposData(data)

    }catch(error){
      throw error
    }
  }

  const fetchGruposConcluidos = async () => {
    try{
      const response = await fetch('http://127.0.0.1:3030/api/grupos/concluidos')
      const data = await response.json()
      setGruposConcluidosData(data)

    }catch(error){
      throw error
    }
  }

  const fetchHistorialAdmin = async () => {
    try{
      const response = await fetch('http://127.0.0.1:3030/api/historial')
      const data = await response.json()
      setHistorialData(data)

    }catch(error){
      throw error
    }
  }

  return (
    <MainDataContext.Provider value={{ ciclosData, alumnosData, documentosData, gruposData, gruposConcluidosData, historialData }}>
      {children}
    </MainDataContext.Provider>
  );
};

export const useMainData = () => {
  return useContext(MainDataContext);
};
