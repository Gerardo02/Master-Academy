import { Form, Input, Select, Button } from 'antd';

const NuevoUsuario = () => {
    const [form] = Form.useForm();
    return (
        <div className='form-newuser'>
            <h1>Crear nuevo usuario</h1>
            <Form
                form={ form }
                name="dependencies"
                autoComplete="off"
                style={{ maxWidth: 600 }}
                layout="vertical"
            >
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

                {/* Field */}
                <Form.Item
                label="Confirmar contraseña"
                name="password2"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
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
                    <Input />
                </Form.Item>

                <Form.Item
                label="Permiso"
                name="permisos_id"
                rules={[
                    {
                        required: true,
                    },
                ]}
                >
                    <Select />
                </Form.Item>

                <br /><br />
                
                <Form.Item>
                    <Button htmlType="submit" type="primary">Crear</Button>
                </Form.Item>

            </Form>
        </div>
    );
  };
  export default NuevoUsuario;