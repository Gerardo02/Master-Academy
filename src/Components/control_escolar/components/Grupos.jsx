import { Button, Card, Popconfirm, Popover, Row, Col, Collapse } from "antd"
import Formulario from "./Formulario"
import { Excel } from "antd-table-saveas-excel";
import { useMainData } from "../../../MainDataProvider";


const Grupos = ({ gruposData, setCurrentOption, setSelectedComponent, columnsAlumnosInscritos, nombresData }) => {

    const { ciclosData } = useMainData()
    
    const content = (record) => {
        return (
            <div>
                <p><strong>Dia: </strong>{record.dia}</p>
                <p><strong>Entrada: </strong>{record.entrada}</p>
                <p><strong>Salida: </strong>{record.salida}</p>
            </div>
        )
    }

    const items = [
        {
          key: '1',
          label: <strong>{ciclosData.map((elem) => {
            if(elem.activo === true) return `Ciclo: ${elem.nombre} ${elem.year}`
          })}</strong>,
          children: 
            <Row gutter={[10, 10]}>
                {gruposData.map((element) => {
                    if(element.ciclo_escolar.activo === true) {
                        return (
                        
                            <Col span={8} key={element.id}>
                                <Card title={element.nombre} >
                                    <p><strong>Maestro: </strong>{element.nombre_maestro}</p>
                                    <p><strong>Materia: </strong>{element.especialidad.materia} de <br />{element.especialidad.especialidad}</p>
                                    <p><strong>Cantidad de alumnos: </strong>{element.cantidad_de_alumnos}</p>
                                    <p><strong>Ciclo: </strong>{element.ciclo_escolar.nombre} {element.ciclo_escolar.year}</p>
                                    <p><strong>Categoria: </strong>{element.especialidad.especialidad}</p>
                                    
                                    <Popover
                                        title={`Horario de ${element.nombre}`}
                                        trigger="click"
                                        content={ _=> content(element)}
                                    >
                                        <Button>Horario</Button>
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
                                
                        )

                    }
                })}
            </Row>,
        },
    ];

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

            <Collapse items={items} defaultActiveKey={['1']} />
            
           
            <br />
            
        </div>
     );
}
 
export default Grupos;