import { Form, Input, Button } from "antd";

const EditarUsuario = ({ tipo }) => {
    return ( 
        <div className="form-editar">
            <h1>{tipo === 'password' ? 'Cambiar contraseña' : 'Cambiar nombre de usuario'}</h1>
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
                    <Button htmlType="submit" type="primary" style={{backgroundColor: '#32B75F'}}>Aceptar</Button>
                </Form.Item>
            </Form>
        </div>
            
     );
}
 
export default EditarUsuario;