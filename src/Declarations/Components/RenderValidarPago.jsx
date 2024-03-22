import { Button, Popover, Form, Radio } from 'antd'
import { useState } from 'react';

const RenderValidarPago = ({ record }) => {

    const [value, setValue] = useState(1);


    const onChangeRadio = (e) => {

        setValue(e.target.value);

        // Reset form fields to default values
    };

    const onFinish = async (values) => {
        const requestJson = {
            ...values,
            'adeudo': record.adeudo === 'Debe' ? false : record.adeudo === 'Al corriente' ? true : false
        }

        try{
            
            await fetch(`http://127.0.0.1:3030/api/administracion/${record.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestJson)
            })
            
        }catch(error){
            throw error
        }
        window.location.reload(false);

    }

    const content = (
        <div>
            <Form
                onFinish={onFinish}
            >
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
                        <Radio value={0}>Pendiente</Radio>
                        <Radio value={1}>En proceso</Radio>
                        <Radio value={2}>Listo</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button htmlType='submit' type='primary'>Validar</Button>
                </Form.Item>
            </Form>
            
        </div>
    )


    return ( 
        <>
            <Popover
                title={<h3>Validar Pago</h3>}
                trigger="click"
                content={content}
            >
                <Button onClick={_=> console.log(record)} type='primary'>Validar</Button>

            </Popover>
        </>
     );
}
 
export default RenderValidarPago;