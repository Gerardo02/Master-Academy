import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import '../styles/index.css'
import { useEffect, useState } from "react";

const Login = () => {

    const navigate = useNavigate()
    const [access, setAccess] = useState(false)

    const onFinish = (values) => {
        console.log('Success:', values);
        setAccess(true)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setAccess(false)
    };

    useEffect(() => {
        if(access) navigate('/home')
    }, [access])

    return ( 
        <div className="main-login">
            
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src="src/assets/MasterAcademyLogo.png" alt="Girl in a jacket" width="353" height="123"></img>

            <br />
            <br />
            <br />
            <br />
            
            <Form
                
                name="credentials"
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Usuario"
                    name="usuario"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
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
                        message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ span: 1 }}
                >
                    <Checkbox>Recuerdame</Checkbox>
                </Form.Item>

                <Form.Item
                 wrapperCol={{ span: 8 }}
                >
                    <Button type="primary" htmlType="submit" >
                        Iniciar sesión
                    </Button>
                </Form.Item>
            </Form>
        </div>
     );
}
 
export default Login;