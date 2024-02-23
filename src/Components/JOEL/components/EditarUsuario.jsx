import { Form, Input, Button } from "antd";

const EditarUsuario = ({ layout }) => {
    return ( 
        <div className="form-editar">
            <h1>Cambiar nombre de usuario</h1>
            <Form
                onFinish={(e) => console.log(e)}
            >
                <Form.Item
                    {...layout}
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
                    {...layout}
                    label="Nuevo usuario"
                    name="nuevo_usuario"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    {...layout}
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