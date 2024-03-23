import { Form, Input, Button } from "antd";

const EditarUsuario = ({ layout }) => {

    const [form] = Form.useForm();

    const onFinish = async (values) => {

        const filteredValues = Object.keys(values).reduce((acc, key) => {
            if (key !== 'usuario_viejo') {
              acc[key] = values[key];
            }
            return acc;
          }, {});

        try {
            const response = await fetch(`https://back-fiber-production.up.railway.app/api/usuarios/${values.usuario_viejo}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(filteredValues)
            })
            const getBack = await response.json()

            if(getBack === 'usuario no existe'){
                form.setFields([
                    {
                        name: 'usuario_viejo',
                        value: values.usuario_viejo,
                        errors: ['Usuario incorrecto'],
                    },
                    
                ]);
                throw new Error("Usuario no existe")
            }else if(getBack === 'Wrong password'){
                form.setFields([
                    {
                        name: 'password',
                        value: values.password,
                        errors: ['Contraseña incorrecta'],
                    },
                ]);
                throw new Error("Contrasena incorrecta")
            }

            window.location.reload(false);
        } catch(error) {
            throw error
        }


    }

    return ( 
        <div className="form-editar">
            <h1>Cambiar nombre de usuario</h1>
            <Form
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    {...layout}
                    label="Usuario"
                    name="usuario_viejo"
                    rules={[
                        {
                            required: true,
                            message: "Usuario Obligatorio"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    {...layout}
                    label="Nuevo usuario"
                    name="usuario"
                    rules={[
                        {
                            required: true,
                            message: "Nuevo Usuario Obligatorio"
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
                            message: "Contraseña obligatoria"
                        },
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
 
export default EditarUsuario;