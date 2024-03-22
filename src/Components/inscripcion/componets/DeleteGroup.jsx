import { Button, Card, Row, Col, Popconfirm, Popover } from "antd"


const DeleteGroup = ({ gruposData }) => {

    const onConfirm = async (record) => {
        try {
            const response = await fetch(`http://127.0.0.1:3030/api/grupos/${record.id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
            });
        
            if (!response.ok) {
                // handle the case where the delete request was not successful
                throw new Error(`Failed to delete record with ID ${record.id}`);
            }
        
            // Optionally, you can check the response or perform additional actions if needed

          
          } catch (error) {
            // Handle any errors that occurred during the fetch
            console.error('Error during delete request:', error);
            // You might want to throw or handle the error differently
            throw error;
          }
  
          window.location.reload(false);
    }

    const content = (record) => {
        return (
            <div>
                <p><strong>Cantidad de alumnos: </strong>{record.cantidad_de_alumnos}</p>
                <p><strong>Trimestre: </strong>{record.trimestre}</p>
                <p><strong>Categoria: </strong>{record.especialidad.especialidad}</p>
                <p><strong>Entrada: </strong>{record.entrada}</p>
                <p><strong>Salida: </strong>{record.salida}</p>
            </div>
        )
    }

    return ( 
        <div className="groups-center">
            {gruposData.length === 0 ? <h1>No hay grupos inscritos</h1> : 
                <Row gutter={[10, 10]}>
                    {gruposData.map((element) => {
                        return (
                            <Col span={8} key={element.id}>
                                <Card title={element.nombre} >
                                    <p><strong>Maestro: </strong>{element.nombre_maestro}</p>
                                    <p><strong>Materia: </strong>{element.especialidad.materia}</p>
                                    
                                    <Popover
                                        title={`Informacion de ${element.nombre}`}
                                        trigger="click"
                                        content={ _=> content(element)}
                                    >
                                        <Button>Info</Button>
                                    </Popover>

                                    <Popconfirm
                                        title={`Seguro que quieres eliminar el grupo ${element.nombre}`}
                                        onConfirm={ _=> onConfirm(element)}
                                        okText="Si"
                                        cancelText="No"
                                    >
                                        <Button danger>Eliminar</Button>
                                    </Popconfirm>
                                </Card>
                            </Col>
                            
                        )})
                    }
                </Row>
            }
          
            
           
            <br />
            
        </div>
     );
}
 
export default DeleteGroup;