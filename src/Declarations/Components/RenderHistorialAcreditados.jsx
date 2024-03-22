import { Button, Popover } from 'antd'

const RenderHistorialAcreditado = ({ record }) => {

    const content = (
        <div>
            {
                record.grupos_aprobados.length === 0 ? <span>No hay materias concluidas</span> : 
                record.grupos_aprobados.map((elem) => (
                    <div key={elem.id}>
                        {
                            elem.estado === 'En proceso' ? <p><font color="orange">En proceso</font></p> :
                            elem.estado === 'Desercion' ? <p><font color="red">Desercion</font></p> :
                            elem.estado === 'Acreditado' ? <p><font color="green">Acreditado</font></p> :
                            elem.estado === 'No Acreditado' ? <p><font color="red">No Acreditado</font></p> : <p>ERROR</p>

                        }
                        <p><strong>Materia:</strong> {elem.especialidad.materia} </p>
                        <p><strong>Especialidad:</strong> {elem.especialidad.especialidad}</p>
                        <br />
                    </div>
                    
                ))
            }
        </div>
    )
    return ( 
        <div>
            <Popover
                title={<h3>Materias Acreditadas</h3>}
                trigger="click"
                content={content}
            >
                <Button type='primary'>Ver</Button>
            </Popover>
        </div>
     );
}
 
export default RenderHistorialAcreditado;