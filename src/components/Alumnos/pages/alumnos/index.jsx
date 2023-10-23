import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Row, Col, Form, Button } from 'antd'
import '..//styles/alumnos.css'
import Title from 'antd/es/typography/Title'
import InfoAlumno from '../InfoAlumno'

function Alumnos() {
    const [information, setInformation] = useState('')
    const navigate = useNavigate()

    return ( <>
        <Button onClick={() => navigate('/home')}>Regresar</Button>
        <br />
        <Form onFinish={(value) => setInformation(value)}>
            <Row gutter={[10, 5]}>

                <Col span={24}>
                    <Title color='#fff'>Matricula</Title>
                </Col>

                <Col span={24}>
                    <Form.Item
                        name="Matricula"
                        rules={[{required: true, message: 'Matricula es requerida'}]}
                    >
                        <Input placeholder='Matricula ej. 12345' />
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item>
                        <Button htmlType='submit' type='primary' onClick={() => navigate('/infoalumno')}>Buscar</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </> );
}
 
export default Alumnos;