import { Button, Popover } from 'antd'

const RenderHistorialAlumno = ({ record }) => {

    const content = (
        <div>
            {
                record.grupos_activos.length === 0 ? <span>No hay grupos activos</span> : 
                record.grupos_activos.map((elem) => (
                    <div key={elem.id}>
                        <p><strong>Nombre:</strong> {elem.nombre}</p>
                        <p><strong>Especialidad:</strong> {elem.especialidad.materia}</p>
                        <br />
                    </div>
                    
                ))
            }
        </div>
    )

    return ( 
        <>
            <Popover
                title={<h3>Grupos Activos</h3>}
                trigger="click"
                content={content}
            >
                <Button type='primary'>Ver</Button>
            </Popover>
        </>
     );
}
 
export default RenderHistorialAlumno;