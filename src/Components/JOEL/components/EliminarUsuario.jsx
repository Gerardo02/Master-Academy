import { Button, Form, Input } from "antd";

const EliminarUsuario = () => {
    return ( 
    <div className="form-eliminar">
        <h1>Eliminar usuario</h1>
        <Form>
            <Form.Item
                label="Usuario"
                name="usuario"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" type="primary" style={{backgroundColor: 'red'}}>Eliminar</Button>
            </Form.Item>
        </Form>
    </div>
     );
}
 
export default EliminarUsuario;