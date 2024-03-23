import { Form, Input, Button, Select } from "antd";

const EditarPermiso = ({ layout, permisosData }) => {

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const response = await fetch(`https://back-fiber-production.up.railway.app/api/permisos`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
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

    const options = permisosData.map((elem) => ({
        value: elem.id,
        label: elem.permiso,
    }))

    return ( 
        <div className="form-editar-permiso">
            <h1>Cambiar permiso de usuario</h1>
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
                            message: "Nuevo Usuario Obligatorio"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    {...layout}
                    label="Nuevo permiso"
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

                <Form.Item>
                    <Button htmlType="submit" type="primary" style={{backgroundColor: '#32B75F'}}>Aceptar</Button>
                </Form.Item>
            </Form>
        </div>
     );
}
 
export default EditarPermiso;