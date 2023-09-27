import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Row, Col, Form, Button } from 'antd'
import './App.css'


function App() {


  const navigate = useNavigate()


  
  return (
    <>
      
      <Button onClick={() => navigate('/alumnos')}>Alumnos</Button>
      <Button onClick={() => navigate('/control_escolar')}>Control Escolar</Button>
      <Button onClick={() => navigate('/admin')}>Administracion</Button>
      <Button onClick={() => navigate('/servicios')}>Servicios</Button>

      
    </>
  )
}

export default App
