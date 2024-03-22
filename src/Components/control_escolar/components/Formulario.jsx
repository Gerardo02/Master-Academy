import { Input, Form, Table, Col, Button, Select, TimePicker, Alert } from "antd";
import { useState, useMemo } from "react";
import dayjs from "dayjs";
import { useAuth } from "../../../AuthContext";

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


const Formulario = ({ record, setCurrentOption, columnsAlumnosInscritos, nombresData }) => {

    const { especialidadData } = useAuth();

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [displayTable, setDisplayTable] = useState(true)
    const [visible, setVisible] = useState(false);
    const [selectedAlumnos, setSelectedAlumnos] = useState([])

    const filteredData = () => {
        let array = []

        for(let i = 0; i < nombresData.length; i++){
            for(let j = 0; j < nombresData[i].grupos_activos.length; j++){
                if(nombresData[i].grupos_activos[j].id === record.id){
                    array =[...array, {
                        "id": nombresData[i].id,
                        "nombre": nombresData[i].nombre,
                        "apellidos": nombresData[i].apellidos,
                        "matricula": nombresData[i].matricula
                    }]

                    break;
                    
                }
            }
        }

        return array;
    }

    
    const finishForm = async (fieldsValue) => {


        let values = {}
        let horarioResult = []
        if(record.horario.length === 1) {
            const { horario, dia, ...restValues } = fieldsValue;

            values = {
                ...restValues,
                'trimestre': record.trimestre,
                'cantidad_de_alumnos': record.cantidad_de_alumnos
            };

            horarioResult = [
                {
                    'dia': dia,
                    'entrada': horario[0].format('h:mm a'),
                    'salida': horario[1].format('h:mm a'),
                    'diaData': 1
                },
            ]
        }else if(record.horario.length === 2) {
            const { horario, dia, horario2, dia2, ...restValues } = fieldsValue;

            values = {
                ...restValues,
                'trimestre': record.trimestre,
                'cantidad_de_alumnos': record.cantidad_de_alumnos
            };

            horarioResult = [
                {
                    'dia': dia,
                    'entrada': horario[0].format('h:mm a'),
                    'salida': horario[1].format('h:mm a'),
                    'diaData': 1
                },
                {
                    'dia': dia2,
                    'entrada': horario2[0].format('h:mm a'),
                    'salida': horario2[1].format('h:mm a'),
                    'diaData': 2
                },
            ]
        }else if(record.horario.length === 3) {
            const { horario, dia, horario2, dia2, horario3, dia3, ...restValues } = fieldsValue;

            values = {
                ...restValues,
                'trimestre': record.trimestre,
                'cantidad_de_alumnos': record.cantidad_de_alumnos
            };

            horarioResult = [
                {
                    'dia': dia,
                    'entrada': horario[0].format('h:mm a'),
                    'salida': horario[1].format('h:mm a'),
                    'diaData': 1
                },
                {
                    'dia': dia2,
                    'entrada': horario2[0].format('h:mm a'),
                    'salida': horario2[1].format('h:mm a'),
                    'diaData': 2
                },
                {
                    'dia': dia3,
                    'entrada': horario3[0].format('h:mm a'),
                    'salida': horario3[1].format('h:mm a'),
                    'diaData': 3
                },
            ]
        }

        try {
            await fetch(`http://127.0.0.1:3030/api/grupos/${record.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })

            for(let i = 0; i < selectedAlumnos.length; i++){
                if(selectedAlumnos.length === 0) break;

                const dataAlumno = {
                    "alumno_id": selectedAlumnos[i]
                }

                await fetch(`http://127.0.0.1:3030/api/alumnos/grupos/${record.id}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dataAlumno)
                })
            }

            setCurrentOption('groups')


        } catch(error) {
            throw error
        }

        try {

            for(let i = 0; i < horarioResult.length; i++){
                await fetch(`http://127.0.0.1:3030/api/horario/${record.id}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(horarioResult[i])
                })
            }
            
        }catch(error) {
            throw error
        }

        window.location.reload(false);
        
    }

    const options = especialidadData.map((elem) => ({
        value: elem.id,
        label: elem.materia,
    }))

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedAlumnos(selectedRowKeys)
            setVisible(true)
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };

    return ( 
        <>
            <h1 style={{maxWidth: '250px', margin: '0 auto', padding: '0 auto', textAlign: 'center' }}>Editar Grupo</h1>
            <br /><br />
            
            <div style={{maxWidth: '250px', margin: '0 auto', padding: '0 auto', textAlign: 'center' }}>
                
                <Form 
                    onFinish={finishForm} 
                    layout="vertical"
                    initialValues={record.horario.length === 1 ? {
                        "nombre": record.nombre,
                        "nombre_maestro": record.nombre_maestro,
                        "especialidad_id": record.especialidad.id,
                        "dia": record.horario[0].dia,
                        "horario": [dayjs(record.horario[0].entrada, 'h:mm a'), dayjs(record.horario[0].salida, 'h:mm a')],
                        "trimestre": record.trimestre,
                        "cantidad_de_alumnos": record.cantidad_de_alumnos
                    } : record.horario.length === 2 ? {
                        "nombre": record.nombre,
                        "nombre_maestro": record.nombre_maestro,
                        "especialidad_id": record.especialidad.id,
                        "dia": record.horario[0].dia,
                        "horario": [dayjs(record.horario[0].entrada, 'h:mm a'), dayjs(record.horario[0].salida, 'h:mm a')],
                        "dia2": record.horario[1].dia,
                        "horario2": [dayjs(record.horario[1].entrada, 'h:mm a'), dayjs(record.horario[1].salida, 'h:mm a')],
                        "trimestre": record.trimestre,
                        "cantidad_de_alumnos": record.cantidad_de_alumnos
                    } : record.horario.length === 3 ? {
                        "nombre": record.nombre,
                        "nombre_maestro": record.nombre_maestro,
                        "especialidad_id": record.especialidad.id,
                        "dia": record.horario[0].dia,
                        "horario": [dayjs(record.horario[0].entrada, 'h:mm a'), dayjs(record.horario[0].salida, 'h:mm a')],
                        "dia2": record.horario[1].dia,
                        "horario2": [dayjs(record.horario[1].entrada, 'h:mm a'), dayjs(record.horario[1].salida, 'h:mm a')],
                        "dia3": record.horario[2].dia,
                        "horario3": [dayjs(record.horario[2].entrada, 'h:mm a'), dayjs(record.horario[2].salida, 'h:mm a')],
                        "trimestre": record.trimestre,
                        "cantidad_de_alumnos": record.cantidad_de_alumnos
                    } : {}}
                >

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
                            <Input placeholder="Ejemplo: '3B'" onChange={() => setVisible(true)} />
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
                            <Input placeholder="Nombre completo" onChange={() => setVisible(true)} />
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
                            <Select disabled placeholder="Selecciona una materia" options={options}/>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            name='dia'
                            label='Dia 1:'
                            rules={[
                                {
                                    required: true,
                                    message: "Dia requerido"
                                },
                            ]}
                        >
                            <Select placeholder="Selecciona un dia" options={dayOptions} onChange={() => setVisible(true)} />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            name='horario'
                            label='Horario 1:'
                            rules={[
                                {
                                    type: "array",
                                    required: true,
                                    message: "Horario requerido"
                                },
                            ]}
                        >
                            <TimePicker.RangePicker use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} onChange={() => setVisible(true)} />
                        </Form.Item>
                    </Col>

                    {record.horario.length === 2 ? 
                    <div>
                        <Col span={24}>
                            <Form.Item
                                name='dia2'
                                label='Dia 2:'
                                rules={[
                                    {
                                        required: true,
                                        message: "Dia requerido"
                                    },
                                ]}
                            >
                                <Select placeholder="Selecciona un dia" options={dayOptions} onChange={() => setVisible(true)} />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name='horario2'
                                label='Horario 2:'
                                rules={[
                                    {
                                        type: "array",
                                        required: true,
                                        message: "Horario requerido"
                                    },
                                ]}
                            >
                                <TimePicker.RangePicker use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} onChange={() => setVisible(true)} />
                            </Form.Item>
                        </Col>
                    </div> : <span></span>
                    }

                    {record.horario.length === 3 ? 
                    <div>

                        <Col span={24}>
                            <Form.Item
                                name='dia2'
                                label='Dia 2:'
                                rules={[
                                    {
                                        required: true,
                                        message: "Dia requerido"
                                    },
                                ]}
                            >
                                <Select placeholder="Selecciona un dia" options={dayOptions} onChange={() => setVisible(true)} />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name='horario2'
                                label='Horario 2:'
                                rules={[
                                    {
                                        type: "array",
                                        required: true,
                                        message: "Horario requerido"
                                    },
                                ]}
                            >
                                <TimePicker.RangePicker use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} onChange={() => setVisible(true)} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name='dia3'
                                label='Dia 3:'
                                rules={[
                                    {
                                        required: true,
                                        message: "Dia requerido"
                                    },
                                ]}
                            >
                                <Select placeholder="Selecciona un dia" options={dayOptions} onChange={() => setVisible(true)} />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name='horario3'
                                label='Horario 3:'
                                rules={[
                                    {
                                        type: "array",
                                        required: true,
                                        message: "Horario requerido"
                                    },
                                ]}
                            >
                                <TimePicker.RangePicker use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} onChange={() => setVisible(true)} />
                            </Form.Item>
                        </Col>
                    </div> : <span></span>
                    }
                    

                    

                
                    <Col span={24}>
                        <Form.Item>
                            <Button block disabled={!buttonDisabled} type="primary" htmlType="submit">Confirmar</Button>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Button danger block onClick={_=> setCurrentOption('groups')}>Cancelar</Button>
                    </Col>


                </Form>
                

            </div>

            <br />

            {visible && (
                <Alert
                    message="Informacion importante"
                    description="Presiona confirmar para guardar los cambios"
                    type="info"
                    showIcon
                    className="alerta-amber"
                    closable
                    afterClose={() => setVisible(false)}
                />
            )}

            

            <div className="table-alumnos-especialidad">
                
                <Table 
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    columns={columnsAlumnosInscritos} 
                    dataSource={filteredData()} 
                    style={{display: displayTable ? 'block' : 'none'}} 
                    rowKey="id" 
                    title={() => (<strong style={{textAlign: 'center', fontSize: '20px'}}>Selecciona los alumnos que se desee retirar</strong>)} 
                />
            </div>

            <br /><br />
            
        </>
     );
}
 
export default Formulario;