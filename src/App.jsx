import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Row, Col, Form, Button } from 'antd'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [information, setInformation] = useState('')
  const navigate = useNavigate();


  
  return (
    <>
      <Dashboard />
      
    </>
  )
}

export default App
