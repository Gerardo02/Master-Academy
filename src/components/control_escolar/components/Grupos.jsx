import { Button, Card, Space, Row, Col } from "antd"
import '../styles/index.css'

const Grupos = ({ setCurrentOption, groupData }) => {
    const onClick = (e) => {
        console.log(e.currentTarget.id)
        if (e.currentTarget.id === 'editar') setCurrentOption('editGroup')
        
        else if (e.currentTarget.id === 'eliminar') setCurrentOption('deleteGroup')
        
        
    }
    return ( 
        <div className="groups-center">
          
                <Row gutter={[10, 10]}>
                    {groupData.map((element) => {
                        return (
                            <Col span={8}>
                                <Card title={element.id} key={element.id}>
                                    <p><strong>Maestro: </strong>{element.nombreMaestro}</p>
                                    <p><strong>Especialidad/materia: </strong>{element.especialidad}</p>
                                    <p><strong>Horario: </strong>{element.horario}</p>
                                    <Button onClick={onClick} id="editar" >Editar</Button>
                                    <Button danger onClick={onClick} id="eliminar">Eliminar</Button>
                                </Card>
                            </Col>
                            
                        )})
                    }
                </Row>
           
            <br />
            
        </div>
     );
}
 
export default Grupos;