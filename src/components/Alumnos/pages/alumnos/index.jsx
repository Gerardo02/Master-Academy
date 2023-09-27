import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Row, Col, Form, Button } from 'antd'
import '..//styles/alumnos.css'
import Title from 'antd/es/typography/Title'

function Alumnos() {
    const [setInformation] = useState('')

    return ( <>
        <Form onFinish={(value) => setInformation(value)}>
            <Row gutter={[10, 5]}>
                <Col span={24}>
                <Title color='#fff'>Matricula</Title>
                
                </Col>

                <Col span={24}>
                <Form.Item
                    name="Matricula"
                >
                    <Input placeholder='ejm. 123456' />
                </Form.Item>
                
                </Col>
                
                <Col span={24}>
                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Buscar</Button>
                    </Form.Item>
                </Col>
            
            </Row>

            </Form>

      
      
    </> );
}
 
export default Alumnos;