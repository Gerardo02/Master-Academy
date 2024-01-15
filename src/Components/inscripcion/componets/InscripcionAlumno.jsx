import { Row, Col, Button, Input, Form, InputNumber, Select } from "antd";
import { useEffect, useState } from "react";

// const options = [
//     {
//       value: 'Estilismo y diseño de imagen',
//       label: 'Estilismo y diseño de imagen',
//       children: [
//         {
//           value: 'hangzhou',
//           label: 'Hangzhou',
          
//         },
//       ],
//     },
//     {
//       value: 'Barberia',
//       label: 'Barberia',
//       children: [
//         {
//           value: 'nanjing',
//           label: 'Nanjing',
          
//         },
//       ],
//     },
//     {
//         value: 'Cosmetología',
//         label: 'Cosmetología',
//         children: [
//           {
//             value: 'nanjing',
//             label: 'Nanjing',
            
//           },
//         ],
//       },
//   ];

const InscpcionAlumno = ({ especialidadData }) => {

    const [postDataAlumno, setPostDataAlumno] = useState(null)
    const options = especialidadData.map((elem) => ({
        value: elem.materia,
        label: elem.materia,
    }))

    const finishFormInscripcion = (value) => {
        setPostDataAlumno(value)
    }

    const inscripcionAlumnoPostRequest = async () => {
        if(postDataAlumno === null) return

        try {
            await fetch('http://127.0.0.1:3030/api/alumnos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postDataAlumno)
        })} catch(error) {
            throw error
        }

        window.location.reload(false);
    }

    useEffect(() => {

        inscripcionAlumnoPostRequest()

    }, [postDataAlumno])

    return (
        <>
            <div className="formulario-inscripcion-alumno">
                <h1>Inscripcion de alumno</h1>
                <Form onFinish={finishFormInscripcion} layout="vertical">
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
                                    message: 'Nombre es obligatorio'
                                }]}
                            >
                                <Input placeholder="Apellidos"/>
                            </Form.Item>

                            <Form.Item
                                name="matricula"
                                label="Matricula:"
                                rules={[{
                                    required: true,
                                    message: 'Nombre es obligatorio'
                                }]}
                            >
                                <Input placeholder="Matricula"/>
                            </Form.Item>

                            <Form.Item
                                name="fecha_nacimiento"
                                label="Fecha de nacimiento:"
                                rules={[{
                                    required: true,
                                    message: 'Nombre es obligatorio'
                                }]}
                            >
                                <Input placeholder="Fecha de nacimiento"/>
                            </Form.Item>

                            <Form.Item
                                name="edad"
                                label="Edad:"
                                rules={[{
                                    required: true,
                                    message: 'Nombre es obligatorio'
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
                                    message: 'Nombre es obligatorio'
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
                                    message: 'Nombre es obligatorio'
                                }]}
                            >
                                <Input placeholder="Localidad"/>
                            </Form.Item>

                            <Form.Item
                                name="direccion"
                                label="Direccion:"
                                rules={[{
                                    required: true,
                                    message: 'Nombre es obligatorio'
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
                                    message: 'Nombre es obligatorio'
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
                                    message: 'Nombre es obligatorio'
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

                            {/* <Form.Item
                                name="especialidad"
                                label="Especialidad:"
                                rules={[{
                                    required: true,
                                    message: 'Nombre es obligatorio'
                                }]}
                            > */}
                                <Select options={options} />
                            {/* </Form.Item> */}
                        </Col>

                        
                    </Row>

                    <Form.Item>
                        <Button htmlType="submit" type="primary">Inscribir</Button>
                    </Form.Item>
                </Form>
            
            </div>
        </> 
     );
}
 
export default InscpcionAlumno;