import { Row, Col, Button, Input, Form, InputNumber } from "antd";
import { useState } from "react";


const EditarAlumno = ({ selectedAlumnos, setCurrentOption }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { especialidad, grupos_activos, grupos_aprobados, ...rest } = selectedAlumnos;

    const onFinish = async (values) => {
        setIsLoading(true)
        try{
            await fetch(`https://back-fiber-production.up.railway.app/api/alumnos/${selectedAlumnos.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })
        }catch(error){
            setIsLoading(false)

            throw error
        }
        setIsLoading(false)
        window.location.reload(false);
    }

    const onClickCanclear = () => {
        setCurrentOption('editarAlumno')
    }

    return ( 
        
        <div className="formulario-inscripcion-alumno">
            <h1>Editar alumno</h1>
            <Form onFinish={onFinish} layout="vertical" initialValues={rest}>
                <Row gutter={10}>
                    <Col span={4} offset={6}>
                        <Form.Item
                            name="nombre"
                            label="Nombre:"
                            rules={[{
                                required: true,
                                message: 'Nombre es obligatorio'
                            }]}
                        >
                            <Input placeholder="Nombre"/>
                        </Form.Item>

                        <Form.Item
                            name="apellidos"
                            label="Apellidos:"
                            rules={[{
                                required: true,
                                message: 'Apellidos es obligatorio'
                            }]}
                        >
                            <Input placeholder="Apellidos"/>
                        </Form.Item>

                        <Form.Item
                            name="matricula"
                            label="Matricula:"
                            rules={[{
                                required: true,
                                message: 'Matricula es obligatorio'
                            }]}
                        >
                            <Input placeholder="Matricula"/>
                        </Form.Item>

                        <Form.Item
                            name="fecha_nacimiento"
                            label="Fecha de nacimiento:"
                            rules={[{
                                required: true,
                                message: 'Fecha de nacimiento es obligatorio'
                            }]}
                        >
                            <Input placeholder="Fecha de nacimiento"/>
                        </Form.Item>

                        <Form.Item
                            name="edad"
                            label="Edad:"
                            rules={[{
                                required: true,
                                message: 'Edad es obligatorio'
                            }]}
                            
                        >
                            <InputNumber style={{ width: "100%" }}placeholder="Edad"/>
                        </Form.Item>

                        
                    </Col>

                    <Col span={4}>
                        <Form.Item
                            name="curp"
                            label="Curp:"
                            rules={[{
                                required: true,
                                message: 'Curp es obligatorio'
                            }]}
                        >
                            <Input placeholder="Curp"/>
                        </Form.Item>

                        <Form.Item
                            name="nombre_tutor"
                            label="Nombre del tutor:"
                            
                        >
                            <Input placeholder="Nombre del tutor"/>
                        </Form.Item>

                        <Form.Item
                            name="celular_tutor"
                            label="Celular del tutor:"
                        >
                            <Input placeholder="Celular del tutor"/>
                        </Form.Item>
                        <Form.Item
                            name="localidad"
                            label="Localidad:"
                            rules={[{
                                required: true,
                                message: 'Localidad es obligatorio'
                            }]}
                        >
                            <Input placeholder="Localidad"/>
                        </Form.Item>

                        <Form.Item
                            name="direccion"
                            label="Direccion:"
                            rules={[{
                                required: true,
                                message: 'Direccion es obligatorio'
                            }]}
                        >   
                            <Input placeholder="Direccion"/>
                        </Form.Item>

                        
                        
                    </Col>

                    <Col span={4}>
                        <Form.Item
                            name="codigo_postal"
                            label="Codigo postal:"
                            rules={[{
                                required: true,
                                message: 'Codigo postal es obligatorio'
                            }]}
                        >
                            <Input placeholder="Codigo Postal"/>
                        </Form.Item>

                        <Form.Item
                            name="telefono_fijo"
                            label="Telefono fijo:"
                        >
                            <Input placeholder="Telefono Fijo"/>
                        </Form.Item>

                        <Form.Item
                            name="celular"
                            label="Celular:"
                            rules={[{
                                required: true,
                                message: 'Celular es obligatorio'
                            }]}
                        >
                            <Input placeholder="Celular"/>
                        </Form.Item>

                        <Form.Item
                            name="correo"
                            label="Correo electronico:"
                        >
                            <Input placeholder="Correo electronico"/>
                        </Form.Item>

                    </Col>

                    
                </Row>

                <Form.Item>
                    <Button style={{width: '100px'}} htmlType="submit" type="primary" loading={isLoading} >Editar</Button>
                </Form.Item>
                <Button style={{width: '100px'}} danger onClick={onClickCanclear}>Cancelar</Button>
            </Form>
        
        </div>
        
     );
}
 
export default EditarAlumno;