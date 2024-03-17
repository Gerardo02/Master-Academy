import { List } from 'antd';
import { useMainData } from '../../../MainDataProvider';
import { useEffect, useState } from 'react';

const HistorialAlumno = ({ data }) => {

    const { historialData } = useMainData()

    const [historial, setHistorial] = useState([])
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setHistorial(historialData)
    }, [historialData])

    useEffect(() => {
        console.log(historial)
        for(let i = 0; i < historial.length; i++) {
            const expression = `${historial[i].fecha} - ${historial[i].movimiento} realizado por ${historial[i].alumno.nombre} ${historial[i].alumno.apellidos} a las ${historial[i].hora} con un monto de ${historial[i].monto}$`

            setDataSource((prev) => [...prev, expression] )
        }
        console.log(dataSource)
    }, [historial])
    
    return ( 
        <>
            <h1 style={{textAlign: 'center'}}>Historial de pagos</h1>
            <List
                
                bordered
                dataSource={dataSource}
                renderItem={(item) => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </>
     );
}
 
export default HistorialAlumno;