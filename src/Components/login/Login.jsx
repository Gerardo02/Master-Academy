import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import '../styles/index.css'
import { useAuth } from "../../AuthContext";
import { useEffect } from "react";

const Login = () => {

    const { login } = useAuth();

    const navigate = useNavigate()

    const [form] = Form.useForm();

    useEffect(() => {
        // Clear the entire localStorage
        localStorage.clear();

    },[])

    


    const onFinish = async (credentials) => {
        try {
            // Call the login function with the provided credentials
            await login(credentials);

            // If login is successful, navigate to the home page
            navigate('/home');
        } catch (error) {
            // Handle any errors that occurred during the login
            if(error.message === 'Wrong User'){
                form.setFields([
                    {
                        name: 'usuario',
                        value: credentials.usuario,
                        errors: ['Usuario incorrecto'],
                    },
                    
                ]);
            }else if(error.message === 'Wrong Password'){
                form.setFields([
                    {
                        name: 'password',
                        value: credentials.password,
                        errors: ['Contraseña incorrecta'],
                    },
                ]);
            }else{
                console.error(error)
            }
            // You might want to show an error message to the user

            
        }
    };

    return ( 
        <div className="main-login">
            
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src="/MasterAcademyLogo.png" alt="Logo" width="353" height="123"></img>

            <br />
            <br />
            <br />
            <br />
            
            <Form
                form={form}
                name="credentials"
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Usuario"
                    name="usuario"
                    rules={[
                        {
                        required: true,
                        message: 'Ingrese un usuario',
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
                        message: 'Ingrese contraseña',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                 
                >
                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                        Iniciar sesión
                    </Button>
                </Form.Item>
            </Form>
        </div>
     );
}
 
export default Login;