import { Form, Input, Button } from "antd";
import "../styles/index.css"

const EditarPassword = ({ layout }) => {

    const [form] = Form.useForm();

    const onFinish = async (values) => {

        const filteredValues = Object.keys(values).reduce((acc, key) => {
            if (key !== 'password2') {
              acc[key] = values[key];
            }
            return acc;
        }, {});

        try {
            const response = await fetch(`http://127.0.0.1:3030/api/password`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(filteredValues)
            })
            const getBack = await response.json()

            if(getBack === 'usuario no existe'){
                form.setFields([
                    {
                        name: 'usuario',
                        value: values.usuario,
                        errors: ['Usuario incorrecto'],
                    },
                    
                ]);
                throw new Error("Usuario no existe")
            }

            window.location.reload(false);

        } catch(error) {
            throw error
        }

        


    }

    return ( 
        <div className="form-editar">
            <h1>Cambiar contraseña</h1>
            <Form
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    {...layout}
                    label="Usuario"
                    name="usuario"
                    rules={[
                        {
                            required: true,
                            message: "Usuario obligatorio"
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