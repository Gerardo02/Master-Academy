import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Row, Col, Form, Button } from 'antd'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [information, setInformation] = useState('')
  const navigate = useNavigate();


  const ejemplo = () => {
    console.log(information.Nombre)
  }

  
  return (
    <>
      <Dashboard/>

      {/* <Form onFinish={(value) => setInformation(value)}>
        <Row gutter={[10, 5]}>
          <Col span={12}>
            <Form.Item
              name="Nombre"
            >
              <Input placeholder='Ruben' />

            </Form.Item>
            
          </Col>

          <Col span={12}>
            <Form.Item
              name="Apellido"
            >
              <Input placeholder='Apellido' />
            </Form.Item>
            
          </Col>

          <Col span={24}>
            <Form.Item
              name="Ciudad"
            >
              <Input placeholder='Ciudad' />
            </Form.Item>
            
          </Col>

          <Form.Item>
            <Button htmlType='submit' type='primary'>Submit</Button>
          </Form.Item>

      
        </Row>

      </Form> */}


      {/* <Button onClick={ejemplo}>Information</Button> */}
      
      
    </>
  )
}

export default App
