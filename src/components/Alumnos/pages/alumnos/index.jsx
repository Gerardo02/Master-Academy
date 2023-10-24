import { useNavigate } from 'react-router-dom'
import { Input, Form, Button, Space } from 'antd'
import '../styles/alumnos.css'

function Alumnos() {
    const navigate = useNavigate()

    return ( 
    <>
        <Button onClick={() => navigate('/home')}>Regresar</Button>
        <div className="barra-busqueda">
            <h1>Matricula</h1>
            <Form onFinish={(e) => console.log(e)}>
                <Space>
                    <Form.Item name='matricula'>
                        <Input placeholder="Buscar matricula" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" onClick={() => navigate('/infoalumno')}>Buscar</Button>
                    </Form.Item>
                </Space>
            </Form>
        </div>
    </> );
}
 
export default Alumnos;