import { Button, Popover, Select, Form, Radio } from 'antd'
import { useState } from 'react';

const RenderAcreditar = ({ record }) => {

    const [value, setValue] = useState(1);


    const options = record.grupos_aprobados.map((elem) => ({
        value: elem.id,
        label: elem.especialidad.materia,
    }))

    const onChangeRadio = (e) => {

        setValue(e.target.value);

        // Reset form fields to default values
    };

    const onFinish = async (values) => {
        const { grupo_aprobado_id, ...rest } = values

        const estadoValues = {
            ...rest,
            'alumno_id': record.id
        }

        try{
            
            await fetch(`https://back-fiber-production.up.railway.app/api/alumnos/grupos/concluidos/${grupo_aprobado_id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(estadoValues)
            })
            
        }catch(error){
            throw error
        }

        window.location.reload(false);
    }

    const content = (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item
                    name='grupo_aprobado_id'
                    rules={[
                        {
                            required: true,
                            message: "Campo requerido"
                        },
                    ]}
                >
                    <Select
                        placeholder="Materia"
                        options={options}
                    />

                </Form.Item>

                <Form.Item
                    name='estado'
                    rules={[
                        {
                            required: true,
                            message: "Campo requerido"
                        },
                    ]}
                >
                    <Radio.Group onChange={onChangeRadio} value={value}>
                        <Radio value={2}>Desercion</Radio>
                        <Radio value={3}>Acreditado</Radio>
                        <Radio value={4}>No Acreditado</Radio>
                    </Radio.Group>

                </Form.Item>
                <br />
                <Form.Item>
                    <Button htmlType='submit' type='primary'>Aceptar</Button>

                </Form.Item>
            </Form>
            
        </div>
    )
    return ( 
        <div>
            <Popover
                title={<h3>Acreditar</h3>}
                trigger="click"
                content={content}
            >
                <Button type='primary'>Acreditar</Button>
            </Popover>
        </div>
     );
}
 
export default RenderAcreditar;