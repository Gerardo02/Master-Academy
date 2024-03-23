import { Row, Col, Button, Input, Form, InputNumber, Select } from "antd";
import { useEffect, useState } from "react";
import { generateRandomNumberString } from "../../../MatriculaGen";

const InscpcionAlumno = ({ especialidadData }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [nombresData, setNombresData] = useState([])

    useEffect(() => {
        try{
            fetchAlumnosNombresData()
        }catch(error){
            throw error
        }
    }, [])

    useEffect(() => {

    }, [nombresData])

    const fetchAlumnosNombresData = async () => {
        try {
            const response = await fetch('https://back-fiber-production.up.railway.app/api/alumnos/nombres');
            const data = await response.json();
            setNombresData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const options = especialidadData.map((elem) => ({
        value: elem.id,
        label: elem.materia,
    }))

    const finishFormInscripcion = async (value) => {

        setIsLoading(true)

        const { especialidad_id, ...rest } = value
        try {
            await fetch('https://back-fiber-production.up.railway.app/api/alumnos', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(rest)
            })

            for(let i = 0; i < especialidad_id.length; i++) {
                
                if(especialidad_id.length === 0) break

                const especialidadResponse = {
                    "grupo_activo_id": 0,
                    "grupo_aprobado_id": 0,
                    "especialidad_id": especialidad_id[i]
                }

                await fetch('https://back-fiber-production.up.railway.app/api/alumnos/especialidad', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(especialidadResponse)
                })

            }

        } catch(error) {
            throw error
        }

        setIsLoading(false)

        window.location.reload(false);


    }


    return (
        <>
            <div className="formulario-inscripcion-alumno">
                <h1>Inscripcion de alumno</h1>
                <Form onFinish={finishFormInscripcion} layout="vertical" initialValues={{'matricula': generateRandomNumberString(8)}}>
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
                                <Input disabled placeholder="Matricula"/>
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

                            <Form.Item
                                name="especialidad_id"
                                label="Especialidad:"
                                rules={[{
                                    required: true,
                                    message: 'Especialidad es obligatorio'
                                }]}
                            >
                                {/* <Select options={options} /> */}
                                <Select
                                    mode="multiple"
                                    
                                    placeholder="Especialidad"
                                    options={options}
                                />

                            </Form.Item>
                        </Col>

                        
                    </Row>

                    <Form.Item>
                        <Button htmlType="submit" type="primary" loading={isLoading} >Inscribir</Button>
                    </Form.Item>
                </Form>
            
            </div>
        </> 
     );
}
 
export default InscpcionAlumno;