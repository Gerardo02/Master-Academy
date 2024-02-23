import { Form, Input, Button } from "antd";
import "../styles/index.css"

const EditarPassword = ({ layout }) => {
    return ( 
        <div className="form-editar">
            <h1>Cambiar contraseña</h1>
            <Form
            
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
                    <Input  />
                </Form.Item>

                <Form.Item
                    {...layout}
                    label="Nueva contraseña"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Contraseña obligatoria'
                        },
                    ]}
                    
                >
                    <Input.Password  />
                </Form.Item>

                {/* Field */}
                <Form.Item
                    {...layout}
                    label="Confirmar contraseña"
                    name="password2"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Contraseña obligatoria'
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                                }
                                return Promise.reject(new Error('Las contraseñas no coinciden'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type="primary" style={{backgroundColor: '#32B75F'}}>Aceptar</Button>
                </Form.Item>
            </Form>
        </div>
            
     );
}
 
export default EditarPassword;