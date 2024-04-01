import { Input, Form, Table, Col, Button, Select, TimePicker, Radio } from "antd";
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
    const [value, setValue] = useState(1);
    const [dayTwo, setDayTwo] = useState(false)
    const [dayThree, setDayThree] = useState(false)

    const { ciclosData } = useMainData()
    const [form] = Form.useForm();

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

    const onChangeRadioDay = (e) => {
        
        if (e.target.value === 1) {
            setDayTwo(false);
            setDayThree(false);
            form.setFieldsValue({'dia2': '', 'horario2': [], 'dia3': '', 'horario3': []});
            
        } else if (e.target.value === 2) {
            setDayTwo(true);
            setDayThree(false);
            form.setFieldsValue({'dia3': '', 'horario3': []});

        } else if (e.target.value === 3) {
            setDayTwo(true);
            setDayThree(true);
        }

        setValue(e.target.value);

        // Reset form fields to default values
    };


    const finishForm = async (fieldsValue) => {
        setIsLoading(true)

        const { horario1, horario2, horario3, dia1, dia2, dia3, ...restValues } = fieldsValue;

        const values = {
            ...restValues,
            'horario': [
                {
                    'dia': dia1,
                    'entrada': horario1[0].format('h:mm a'),
                    'salida': horario1[1].format('h:mm a'),
                    'diaData': 1
                },
                {
                    'dia': dia2,
                    'entrada': horario2.length === 0 ? '' : horario2[0].format('h:mm a'),
                    'salida': horario2.length === 0 ? '' : horario2[1].format('h:mm a'),
                    'diaData': 2
                },
                {
                    'dia': dia3,
                    'entrada': horario3.length === 0 ? '' : horario3[0].format('h:mm a'),
                    'salida': horario3.length === 0 ? '' : horario3[1].format('h:mm a'),
                    'diaData': 3
                },
            ],
            'trimestre': 1,
            'cantidad_de_alumnos': alumnosCount,
            'ciclo_escolar_id': cicloId
        };

        const { horario, ...rest } = values

        try {
            const response = await fetch('http://127.0.0.1:3030/api/grupos', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(rest)
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

        try{
            for(let i = 0; i < 3; i++){
                if(horario[i].dia === '') continue
                await fetch('http://127.0.0.1:3030/api/horario', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(horario[i])
                })
            }
        }catch(error){
            throw error
        }

        console.log(horario)

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
                <div style={{maxWidth: '275px', margin: '0 auto', padding: '0 auto', textAlign: 'center' }}>
                    <h1>Dar de alta un grupo</h1>
                    <br /><br />

                    <Form form={form} onFinish={finishForm} layout="vertical" initialValues={{'dia2': '', 'horario2': [], 'dia3': '', 'horario3': []}}>

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
                        <h3>Dias</h3>
                        <Radio.Group onChange={onChangeRadioDay} value={value}>
                            <Radio value={1}>Un dia</Radio>
                            <Radio value={2}>Dos dias</Radio>
                            <Radio value={3}>Tres Dias</Radio>
                        </Radio.Group> <br /><br />

                        <Col span={24}>
                            <Form.Item
                                name='dia1'
                                label='Dia 1:'
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
                                name='horario1'
                                label='Horario 1:'
                                rules={[
                                    {
                                        type: "array",
                                        required: true,
                                        message: "Horario requerido"
                                    },
                                ]}
                            >
                                <TimePicker.RangePicker style={{width: '100%'}} use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} />
                            </Form.Item>
                        </Col>

                        <Col span={24} style={{display: dayTwo ? 'block' : 'none'}}>
                            <Form.Item
                                name='dia2'
                                label='Dia 2:'
                                rules={[
                                    {
                                        required: dayTwo,
                                        message: "Dia requerido"
                                    },
                                ]}
                            >
                                <Select placeholder="Selecciona un dia" options={dayOptions} />
                            </Form.Item>
                            
                        </Col>

                        <Col span={24} style={{display: dayTwo ? 'block' : 'none'}}>
                            <Form.Item
                                name='horario2'
                                label='Horario 2:'
                                rules={[
                                    {
                                        type: "array",
                                        required: dayTwo,
                                        message: "Horario requerido"
                                    },
                                ]}
                            >
                                <TimePicker.RangePicker style={{width: '100%'}} use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} />
                            </Form.Item>
                        </Col>

                        <Col span={24} style={{display: dayThree ? 'block' : 'none'}}>
                            <Form.Item
                                name='dia3'
                                label='Dia 3:'
                                rules={[
                                    {
                                        required: dayThree,
                                        message: "Dia requerido"
                                    },
                                ]}
                            >
                                <Select placeholder="Selecciona un dia" options={dayOptions} />
                            </Form.Item>
                            
                        </Col>

                        <Col span={24} style={{display: dayThree ? 'block' : 'none'}}>
                            <Form.Item
                                name='horario3'
                                label='Horario 3:'
                                rules={[
                                    {
                                        type: "array",
                                        required: dayThree,
                                        message: "Horario requerido"
                                    },
                                ]}
                            >
                                <TimePicker.RangePicker style={{width: '100%'}} use12Hours format={'h:mm a'} type="time" placeholder={["Entrada", "Salida"]} />
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

            : <h1 style={{textAlign: 'center'}}>Sin ciclo escolar activo</h1>
        }
            
        </>
     );
}
 
export default FormularioGrupo;