import { Form, Input, Select, Button } from 'antd';
import { useState, useEffect } from 'react';

const NuevoUsuario = ({ permisosData }) => {
    const [form] = Form.useForm();

    const [postDataUsuario, setPostDataUsuario] = useState(null)

    const options = permisosData.map((elem) => ({
        value: elem.id,
        label: elem.permiso,
    }))

    const onFinish = (values) => {
        // Exclude the 'password2' field from the form data
        const formDataWithoutPassword2 = { ...values };
        delete formDataWithoutPassword2.password2;
        setPostDataUsuario(values);
        // Now, you can use formDataWithoutPassword2 for submission
        console.log(formDataWithoutPassword2);
    
        // Perform your submission logic here
    };

    const nuevoUsuarioPostRequest = async () => {
        if(postDataUsuario === null) return

        try {
            await fetch('http://127.0.0.1:3030/api/usuarios', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postDataUsuario)
        })} catch(error) {
            throw error
        }

        window.location.reload(false);
    }

    useEffect(() => {

        nuevoUsuarioPostRequest()

    }, [postDataUsuario])
    
    return (
        <div className='form-newuser'>
            <h1>Crear nuevo usuario</h1>
            <Form
                form={ form }
                name="dependencies"
                autoComplete="off"
                style={{ maxWidth: 600 }}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                label="Usuario"
                name="usuario"
                rules={[
                    {
                        required: true,
                        message: 'Usuario obligatorio'
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
                        message: 'Contraseña obligatoria'
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
                    <Input />
                </Form.Item>

                <Form.Item
                label="Permiso"
                name="permisos_id"
                rules={[
                    {
                        required: true,
                        message: 'El campo permisos es obligatorio'
                    },
                ]}
                >
                    <Select options={options} />
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