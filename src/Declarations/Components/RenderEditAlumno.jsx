import { Button } from 'antd'

const RenderEditAlumno = ({ record }) => {
    return ( 
        <div style={{textAlign: 'center'}}>
            <Button type='primary' onClick={() => console.log(record)}>Editar</Button>
        </div>
    );
}
 
export default RenderEditAlumno;