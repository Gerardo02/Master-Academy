import { Button, Card, Popconfirm, Popover, Row, Col, Collapse } from "antd"
import Formulario from "./Formulario"
import { Excel } from "antd-table-saveas-excel";
import { useMainData } from "../../../MainDataProvider";
import { useState } from "react";


const Grupos = ({ gruposData, setCurrentOption, setSelectedComponent, columnsAlumnosInscritos, nombresData }) => {

    const { ciclosData, gruposConcluidosData } = useMainData()

    const keyForItem = (ciclo) => {
        return ciclo.map((elem) => {
            if(elem.activo === true){
                return elem.id
            } 
        })
    }

    const keyItem = keyForItem(ciclosData)
    
    const content = (record) => {
        return (
            <div>
                {record.horario.map((elem) => (
                    <div>
                        <h3>Dia {elem.diaData}</h3>
                        <p><strong>Dia: </strong>{elem.dia}</p>
                        <p><strong>Entrada: </strong>{elem.entrada}</p>
                        <p><strong>Salida: </strong>{elem.salida}</p>
                    </div>
                ))}
                
            </div>
        )
    }

    const items = [
        {
          key: keyItem,
          label: <strong>{ciclosData.map((elem) => {
            if(elem.activo === true) return `Ciclo: ${elem.nombre} ${elem.year}`
          })} <font color='green'>Activo</font></strong>,
          children: 
            gruposData.length !== 0 ? <Row gutter={[10, 10]}>
                {gruposData.map((element) => {
                    if(element.ciclo_escolar.activo === true) {
                        return (
                        
                            <Col span={8} key={element.id}>
                                <Card title={element.nombre} >
                                    <p><strong>Maestro: </strong>{element.nombre_maestro}</p>
                                    <p><strong>Materia: </strong>{element.especialidad.materia} de <br />{element.especialidad.especialidad}</p>
                                    <p><strong>Cantidad de alumnos: </strong>{element.cantidad_de_alumnos}</p>
                                    <p><strong>Ciclo: </strong>{element.ciclo_escolar.nombre} {element.ciclo_escolar.year}</p>
                                    
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
            </Row> : <h1>No hay grupos inscritos</h1>,
        },
    ];

    const gatherArrayData = () => {
        let array = []
        for(let i = 0; i < ciclosData.length; i++) {
            if(ciclosData[i].activo === true) continue;
            const arrayElem = {
                key: ciclosData[i].id,
                label: <span>Ciclo: {ciclosData[i].nombre} {ciclosData[i].year} <strong><font color='red'>Concluido</font></strong></span>,
                children: 
                <Row gutter={[10, 10]}>
                    {gruposConcluidosData.map((element) => {
                        if(element.ciclo_escolar.id === ciclosData[i].id) {
                            return (
                            
                                <Col span={8} key={element.id}>
                                    <Card title={element.nombre} >
                                        <p><strong>Materia: </strong>{element.especialidad.materia} de <br />{element.especialidad.especialidad}</p>
                                        <p><strong>Cantidad de alumnos: </strong>{element.cantidad_de_alumnos}</p>
                                        <p><strong>Ciclo: </strong>{element.ciclo_escolar.nombre} {element.ciclo_escolar.year}</p>
                                        
                                        <Button onClick={() => onClick(element)}>Descargar Lista</Button>
                                        
                                    </Card>
                                </Col>
                                    
                            )

                        }
                    })}
                </Row>,
            }

            array = [...array, arrayElem]
        }

        return array
    }

    const itemsFinishedCycle = gatherArrayData()

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
            {ciclosData.some((elem) => elem.activo) ? <Collapse items={items} defaultActiveKey={[keyItem]} /> : <span></span>}
            <Collapse items={itemsFinishedCycle} />
            
           
            <br />
            
        </div>
     );
}
 
export default Grupos;