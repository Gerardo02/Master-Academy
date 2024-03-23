import { Button, Form, Input } from "antd";

const EliminarUsuario = ({ layout }) => {

    const [form] = Form.useForm();

    const onFinish = async (value) => {
        try{
            const response = await fetch('https://back-fiber-production.up.railway.app/api/usuarios', {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(value),
            });
            const getBack = await response.json()

            if(getBack === 'usuario no existe'){
                form.setFields([
                    {
                        name: 'usuario',
                        value: value.usuario,
                        errors: ['Usuario incorrecto'],
                    },
                    
                ]);
                throw new Error("Usuario no existe")
            }else if(getBack === 'Wrong password'){
                form.setFields([
                    {
                        name: 'password',
                        value: value.password,
                        errors: ['Contraseña incorrecta'],
                    },
                ]);
                throw new Error("Contrasena incorrecta")
            }

            window.location.reload(false);

        }catch(error){
            console.log(error)
        }
        
    }

    return ( 
    <div className="form-eliminar">
        <h1>Eliminar usuario</h1>
        <Form
        form={form}
            onFinish={onFinish}
        >
            <Form.Item
                {...layout}
                label="Usuario"
                name="usuario"
                rules={[
                    {
                        required: true,
                        message: 'Usuario requerido'
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
                        message: 'Contraseña requerida'
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" type="primary" style={{backgroundColor: 'red'}}>Eliminar</Button>
            </Form.Item>
        </Form>
    </div>
     );
}
 
export default EliminarUsuario;