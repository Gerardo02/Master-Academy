import { Button, Popover, Select, Form, Col } from 'antd'
import { useAuth } from '../../AuthContext';

const RenderSpecializations = ({ record }) => {
    const { especialidadData } = useAuth();

    const onFinish = async (values) =>{

        for(let i = 0; i < values.especialidad_id.length; i++) {
            const response = {
                "alumno_id": record.id,
                "grupo_activo_id": 0,
                "grupo_aprobado_id": 0,
                "especialidad_id": values.especialidad_id[i]
            }

            try {
                await fetch('https://back-fiber-production.up.railway.app/api/alumnos/grupos', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response)
            })} catch(error) {
                throw error
            }

        }

        window.location.reload(false);
        
    }

    const onFinish2 = async (values) =>{

        for(let i = 0; i < values.especialidad_id.length; i++) {
            const response = {
                "especialidad_id": values.especialidad_id[i]
            }

            try {
                await fetch(`https://back-fiber-production.up.railway.app/api/alumnos/grupos/especialidad/${record.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response)
            })} catch(error) {
                throw error
            }

        }

        window.location.reload(false);
        
    }

    const content = record.especialidad.map((elem) => (
        <p key={elem.id}>{elem.materia}</p>
    ));

    const options = especialidadData.map((elem) => {
        let checkEspecialidad = false

        record.especialidad.map((elem2) => {
            if(elem.id === elem2.id){
                checkEspecialidad = true
                return
            }

        })

        if(checkEspecialidad){
            return {
                label: elem.materia,
                disabled: true
            }
        }

        return {
            value: elem.id,
            label: elem.materia,
        }
        
    });

    const options2 = especialidadData.map((elem) => {
        let checkEspecialidad = false

        record.especialidad.map((elem2) => {
            if(elem.id === elem2.id){
                checkEspecialidad = true
                return
            }

        })

        if(checkEspecialidad){
            return {
                value: elem.id,
                label: elem.materia,
                
            }
        }

        return {
            label: elem.materia,
            disabled: true
        }
        
    });

    const content2 = (
        <div>
        <Form onFinish={onFinish} layout="vertical">
            <Col span={20}>
                <Form.Item name='especialidad_id' rules={[{ required: true, message: 'Especialidad obligatoria' }]}>
                    <Select mode="multiple" placeholder="Especialidad" options={options} />
                </Form.Item>
            </Col>

            <Form.Item>
                <Button htmlType='submit' type='primary'>Aceptar</Button>
            </Form.Item>
        </Form>
        </div>
    );

    const content3 = (
        <div>
        <Form onFinish={onFinish2} layout="vertical">
            <Col span={20}>
                <Form.Item name='especialidad_id' rules={[{ required: true, message: 'Especialidad obligatoria' }]}>
                    <Select mode="multiple" placeholder="Especialidad" options={options2} />
                </Form.Item>
            </Col>

            <Form.Item>
                <Button htmlType='submit' type='primary'>Aceptar</Button>
            </Form.Item>
        </Form>
        </div>
    );
    return (
        <div style={{textAlign: 'center'}}>
        {
            record.especialidad.length === 0 ? 

            <Popover
                title={`Inscribir especialidades a ${record.nombre}`}
                trigger="click"
                content={content2}
            >
                <Button type='primary' style={{backgroundColor: '#32B75F'}}>Inscribir especialidad</Button>
            </Popover> : 
            <div>
                <Popover
                    title={`Especialidades inscritas de ${record.nombre}`}
                    trigger="click"
                    content={content}
                >
                    <Button type='primary'>Ver Especialidades</Button>
                </Popover><br /><br />
                <Popover
                    title={`Inscribir especialidades a ${record.nombre}`}
                    trigger="click"
                    content={content2}
                >
                    <Button type='primary' style={{backgroundColor: '#32B75F'}}>Inscribir especialidad</Button>
                </Popover><br /><br />
                <Popover
                    title={`Inscribir especialidades a ${record.nombre}`}
                    trigger="click"
                    content={content3}
                >
                    <Button type='primary' style={{backgroundColor: 'red'}}>Quitar especialidad</Button>
                </Popover>
            </div>
        }
        </div>
    );
}
 
export default RenderSpecializations;