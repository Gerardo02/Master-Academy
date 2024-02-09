import { Input, Form, Button, Space } from "antd";
import "../styles/index.css"

const BuscarAlumno = () => {
    return ( 
        <div className="barra-busqueda">
            <h1>Matricula</h1>
            <Form onFinish={(e) => console.log(e)}>
                <Space>
                    <Form.Item name='matricula'>
                        <Input placeholder="Buscar matricula" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">Buscar</Button>
                    </Form.Item>
                </Space>
            </Form>
        </div>
     );
}
 
export default BuscarAlumno;