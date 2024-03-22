import { Button, Popover, Form, Checkbox } from 'antd'
import { useState } from 'react'

const RenderAddDocumentos = ({ record }) => {

    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values) => {

        setIsLoading(true)

        try {
            await fetch(`http://127.0.0.1:3030/api/documentos/${record.alumno_id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })

        } catch(error) {
            throw error
        }

        setIsLoading(false)

        window.location.reload(false);

    }
    
    const content = () => (
        <Form 
            onFinish={onFinish}
            initialValues={{
                "acta_de_nacimiento": record.acta_de_nacimiento,
                "curp": record.curp,
                "comprobante_de_domicilio": record.comprobante_de_domicilio,
                "mayor_quince": record.mayor_quince,
                "fotos": record.fotos
            }}
        >

            <Form.Item name="acta_de_nacimiento" valuePropName="checked">
                <Checkbox style={{ lineHeight: '32px' }} disabled={record.acta_de_nacimiento ? true : false}>Acta de nacimiento</Checkbox>
            </Form.Item>
            <Form.Item name="curp" valuePropName="checked">
                <Checkbox style={{ lineHeight: '32px' }} disabled={record.curp ? true : false}>Curp</Checkbox>
            </Form.Item>
            <Form.Item name="comprobante_de_domicilio" valuePropName="checked">
                <Checkbox style={{ lineHeight: '32px' }} disabled={record.comprobante_de_domicilio ? true : false}>Comprobante de domicilio</Checkbox>
            </Form.Item>
            <Form.Item name="mayor_quince" valuePropName="checked">
                <Checkbox style={{ lineHeight: '32px' }} disabled={record.mayor_quince ? true : false}>Mayor de 15</Checkbox>
            </Form.Item>
            <Form.Item name="fotos" valuePropName="checked">
                <Checkbox style={{ lineHeight: '32px' }} disabled={record.fotos ? true : false}>Fotos</Checkbox>
            </Form.Item>
            

            <Form.Item>
                <Button htmlType='submit' type='primary' loading={isLoading}>Aceptar</Button>
            </Form.Item>
        </Form>
    )

    return ( 
        <div style={{textAlign: 'center'}}>
            <Popover
                title={`Añadir documento`}
                trigger="click"
                content={content}
            >
                <Button type='primary' style={{backgroundColor: '#32B75F'}}>Añadir</Button>
            </Popover>
        </div>
     );
}
 
export default RenderAddDocumentos;