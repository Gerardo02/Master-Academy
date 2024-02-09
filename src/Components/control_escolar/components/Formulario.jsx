import { Input, Form, Row, Col, Button, Select, TimePicker} from "antd";

const options = [
    {
        value: 'cortes',
        label: 'Cortes'
    },
    {
        value: 'unas',
        label: 'Unas'
    }
]

const finishForm = (fieldsValue) => {
    const rangeTimeValue = fieldsValue['horario'];
    const values = {
        ...fieldsValue,
        'entrada': rangeTimeValue[0].format('HH:mm'),
        'salida': rangeTimeValue[1].format('HH:mm'),
    }
    

}

const Formulario = () => {
   
    return ( 
        <div className="root-formulario">
            <h1>Editar grupo</h1>
            <br /><br />

            <Form onFinish={finishForm} layout="vertical">

                <Row gutter={16}>
                    <Col span={4} offset={5}>
                        <Form.Item
                            name='maestro'
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

                    <Col span={4}>
                        <Form.Item
                            name='materia'
                            label='Materia'
                            rules={[
                                {
                                    required: true,
                                    message: "Nombre del maestro requerido"
                                },
                            ]}
                        >
                            <Select placeholder="Selecciona una materia" options={options} />
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <Form.Item
                            name='horario'
                            label='Horario'
                            rules={[
                                {
                                    type: "array",
                                    required: true,
                                    message: "Horario requerido"
                                },
                            ]}
                        >
                            <TimePicker.RangePicker format={'HH:mm'} type="time" />
                        </Form.Item>
                    </Col>
                </Row>

                <br /><br />

                <Row>
                    <Col span={2} offset={5}>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">Editar</Button>
                        </Form.Item>
                    </Col>
                </Row>



            </Form>
            

        </div>
     );
}
 
export default Formulario;