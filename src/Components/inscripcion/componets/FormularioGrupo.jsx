import { Input, Form, Table, Col, Button, Select, TimePicker} from "antd";
import { useEffect, useState } from "react";
import { useMainData } from "../../../MainDataProvider";


const dayOptions = [
    {
        value: 'lunes',
        label: 'Lunes',
    },
    {
        value: 'martes',
        label: 'Martes',
    },
    {
        value: 'miercoles',
        label: 'Miercoles',
    },
    {
        value: 'jueves',
        label: 'Jueves',
    },
    {
        value: 'viernes',
        label: 'Viernes',
    },
    {
        value: 'sabado',
        label: 'Sabado',
    },
    {
        value: 'domingo',
        label: 'Domingo',
    },
]


const FormularioGrupo = ({ columnsAlumnosPorInscribir, especialidadData, nombresData, relacionData }) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [displayTable, setDisplayTable] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [cicloActivo, setCicloActivo] = useState(false)
    const [optionsSelect, setOptionsSelect] = useState([])
    const [cicloId, setCicloId] = useState(0)
    const [alumnosCount, setAlumnosCount] = useState(0)
    const [tableData, setTableData] = useState([])
    const [especialidadId, setEspecialidadId] = useState(0)
    const { ciclosData } = useMainData()

    useEffect(() => {
        ciclosData.map((elem) => {
            if(elem.activo === true) {
                setCicloActivo(true)
                setCicloId(elem.id)
                return
            }
        })
    }, [ciclosData])

    useEffect(() => {

        const disabledSelectEspecialidad = (especialidad) => {
            for(let i = 0; i < relacionData.length; i++){
                if(relacionData[i].especialidad_id === especialidad.id) return false
            }
            return true
        }

        const options = especialidadData.map((elem) => ({
            value: elem.id,
            label: elem.materia,
            disabled: disabledSelectEspecialidad(elem),
        }))

        setOptionsSelect(options)

    }, [relacionData, especialidadData])

    useEffect(() => {
        setButtonDisabled(tableData.length === 0 ? false : true);
    }, [tableData])


    const finishForm = async (fieldsValue) => {
        setIsLoading(true)

        const { horario, ...restValues } = fieldsValue;

        const values = {
            ...restValues,
            'entrada': horario[0].format('h:mm a'),
            'salida': horario[1].format('h:mm a'),
            'trimestre': 1,
            'cantidad_de_alumnos': alumnosCount,
            'ciclo_escolar_id': cicloId
        };

        try {
            const response = await fetch('http://127.0.0.1:3030/api/grupos', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })

            const data = await response.json();

            for(let i = 0; i < alumnosCount; i++){
                const alumnosInscritos = {
                    "alumno_id": tableData[i].id,
                    "grupo_activo_id": data.id,
                    "grupo_aprobado_id": 0,
                    "especialidad_id": 0
                }
                const especialidadRevoked = {
                    "especialidad_id": especialidadId
                }
                await fetch('http://127.0.0.1:3030/api/alumnos/grupos', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(alumnosInscritos)
                })
                await fetch(`http://127.0.0.1:3030/api/alumnos/grupos/especialidad/${tableData[i].id}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(especialidadRevoked)
                })

            }
        } catch(error) {
            throw error
        }

        setIsLoading(false)

        window.location.reload(false);
    }

    

    

    const onChangeSelectMateria = (value) => {
        setDisplayTable(true)
        setTableData([]);
        setAlumnosCount(0);
        setEspecialidadId((prevValue) => {

            if(prevValue !== value){
                for(let i = 0; i < nombresData.length; i++){
                    for(let j = 0; j < nombresData[i].especialidad.length; j++){
    
                        if(nombresData[i].especialidad[j].id === value){
                            let dataAlumno = {
                                id: nombresData[i].id,
                                nombre: nombresData[i].nombre,
                                apellidos: nombresData[i].apellidos,
                                matricula: nombresData[i].matricula
                            }
    
                            setTableData((prevData) => [...prevData, dataAlumno]);
                            setAlumnosCount((count) => count + 1);
                            break;
                        }
                    }
                }
                return value;

            }
            return prevValue;
        });
        

    }

   
    return ( 
        <>
        {cicloActivo ? 
            <div>
                <div style={{maxWidth: '250px', margin: '0 auto', padding: '0 auto', textAlign: 'center' }}>
                    <h1>Dar de alta un grupo</h1>
                    <br /><br />

                    <Form onFinish={finishForm} layout="vertical">

                        <Col span={24} >
                            <Form.Item
                                name='nombre'
                                label='Nombre:'
                                rules={[
                                    {
                                        required: true,
                                        message: "Nombre requerido"
                                    },
                                ]}
                            >
                                <Input placeholder="Ejemplo: '3B'" />
                            </Form.Item>
                        </Col>

                        <Col span={24} >
                            <Form.Item
                                name='nombre_maestro'
                                label='Nombre del maestro:'
                                rules={[
                                    {
                                        required: true,
                                        message: "Nombre del maestro requerido"
                                    },
                                ]}
                            >
                                <Input placeholder="Nombre completo" />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name='especialidad_id'
                                label='Materia:'
                                rules={[
                                    {
                                        required: true,
                                        message: "Nombre del maestro requerido"
                                    },
                                ]}
                            >
                                <Select placeholder="Selecciona una materia" options={optionsSelect} onChange={onChangeSelectMateria} />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name='dia'
                                label='Dia:'
                                rules={[
                                    {
                                        required: true,
                                        message: "Dia requerido"
                                    },
                                ]}
                            >
                                <Select placeholder="Selecciona un dia" options={dayOptions} />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name='horario'
                                label='Horario:'
                                rules={[
                                    {
                                        type: "array",
                                        required: true,
                                        message: "Horario requerido"
                                    },
                                ]}
                            >
                                <TimePicker.RangePicker use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} />
                            </Form.Item>
                        </Col>
                        <br /><br />

                    
                        <Col span={24}>
                            <Form.Item>
                                <Button block disabled={!buttonDisabled} type="primary" htmlType="submit" loading={isLoading}>Registrar</Button>
                            </Form.Item>
                        </Col>

                    </Form>
                    

                </div>
                <div className="table-alumnos-especialidad">
                    <Table columns={columnsAlumnosPorInscribir} dataSource={tableData} style={{display: displayTable ? 'block' : 'none'}} rowKey="id" title={() => (<strong style={{textAlign: 'center', fontSize: '20px'}}>Alumnos a inscribirse</strong>)} />
                </div>
            </div> 

            : <h1>Sin ciclo escolar activo</h1>
        }
            
        </>
     );
}
 
export default FormularioGrupo;