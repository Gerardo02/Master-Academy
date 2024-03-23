import { Input, InputNumber, Form, Button } from "antd";
import { useMainData } from "../../../MainDataProvider";
import dayjs from 'dayjs';


const RegistroPago = () => {

    const { alumnosData } = useMainData()

    const onFinish = async (values) => {
        const { matricula, ...rest } = values
        let getId = {}
        for(let i = 0; i < alumnosData.length; i++) {
            if(alumnosData[i].matricula === matricula){
                getId = { 
                    ...rest,
                    'alumno_id': alumnosData[i].id,
                    'movimiento': 'Pago',
                    'hora': dayjs().format('h:mm a'),
                    'fecha': dayjs().format('DD/MM/YYYY')
                }
                break;
            }
            if(i === alumnosData.length - 1) {
                alert('no existe el alumno xdxdxd')
                return
            }
        }

        try {
            await fetch(`https://back-fiber-production.up.railway.app/api/administracion/pago/${getId.alumno_id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({'dinero': getId.monto})
            })
        }catch(error) {
            throw error
        }

        try {
            await fetch('https://back-fiber-production.up.railway.app/api/historial', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(getId)
            })
        }catch(error) {
            throw error
        }

        window.location.reload(false);

    }

    return ( 
        <div className="barra-busqueda">
            <h1>Registrar pago</h1>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item 
                    name='matricula'
                    rules={[
                        {
                            required: true, 
                            message: 'matricula requerida'
                        },
                    ]}  
                >
                    <Input placeholder="Matricula" />
                </Form.Item>

                <Form.Item 
                    name='monto'
                    rules={[
                        {
                            required: true, 
                            message: 'monto requerido'
                        },
                    ]}  
                >
                    <InputNumber prefix="$" suffix="MXN" placeholder="Monto" style={{width: '100%'}} />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type="primary">Registrar</Button>
                </Form.Item>
            </Form>
        </div>
     );
}
 
export default RegistroPago;