import { Button, Card, Popconfirm, Popover, Row, Col } from "antd"
import Formulario from "./Formulario"
import { Excel } from "antd-table-saveas-excel";


const Grupos = ({ gruposData, setCurrentOption, setSelectedComponent, columnsAlumnosInscritos, nombresData }) => {
    
    const content = (record) => {
        return (
            <div>
                <p><strong>Cantidad de alumnos: </strong>{record.cantidad_de_alumnos}</p>
                <p><strong>Trimestre: </strong>{record.trimestre}</p>
                <p><strong>Categoria: </strong>{record.especialidad.especialidad}</p>
            </div>
        )
    }

    const onConfirm = (record) => {
        setCurrentOption('editGroup')

        setSelectedComponent(<Formulario record={record} setCurrentOption={setCurrentOption} columnsAlumnosInscritos={columnsAlumnosInscritos} nombresData={nombresData} />)

    }

    const filteredData = (record) => {
        let array = []

        for(let i = 0; i < nombresData.length; i++){
            for(let j = 0; j < nombresData[i].grupos_activos.length; j++){
                if(nombresData[i].grupos_activos[j].id === record.id){
                    array =[...array, {
                        "id": nombresData[i].id,
                        "nombre": nombresData[i].nombre,
                        "apellidos": nombresData[i].apellidos,
                        "matricula": nombresData[i].matricula
                    }]

                    break;
                }
            }
        }

        return array;
    }

    const onClick = (record) => {
        const excel = new Excel();
        excel
        .addSheet("Listas")
        .addColumns(columnsAlumnosInscritos)
        .addDataSource(filteredData(record), {
            str2Percent: true
        })
        .saveAs(`Lista-grupo-${record.nombre}.xlsx`);
      
    }

    return ( 
        <div className="groups-center">
          
            <Row gutter={[10, 10]}>
                {gruposData.map((element) => {
                    return (
                        <Col span={8} key={element.id}>
                            <Card title={element.nombre} >
                                <p><strong>Maestro: </strong>{element.nombre_maestro}</p>
                                <p><strong>Materia: </strong>{element.especialidad.materia}</p>
                                <p><strong>Dia: </strong>{element.dia}</p>
                                <p><strong>Entrada: </strong>{element.entrada}</p>
                                <p><strong>Salida: </strong>{element.salida}</p>
                                
                                <Popover
                                    title={`Informacion de ${element.nombre}`}
                                    trigger="click"
                                    content={ _=> content(element)}
                                >
                                    <Button>Info</Button>
                                </Popover>
                                <Button onClick={() => onClick(element)}>Descargar Lista</Button>
                                <Popconfirm
                                    title={`Seguro que quieres editar el grupo ${element.nombre}`}
                                    onConfirm={ _=> onConfirm(element)}
                                    okText="Si"
                                    cancelText="No"
                                >
                                    <Button type="primary" ghost>Editar</Button>
                                </Popconfirm>
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