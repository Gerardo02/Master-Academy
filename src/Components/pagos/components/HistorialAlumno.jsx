import { List } from 'antd';
import { useMainData } from '../../../MainDataProvider';
import { useEffect, useState } from 'react';

const HistorialAlumno = () => {

    const { historialData } = useMainData()

    const [historial, setHistorial] = useState([])
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setHistorial(historialData)
    }, [historialData])

    useEffect(() => {
        // Reverse the historial array to display the latest items first
        const reversedHistorial = historial.slice().reverse();
        const formattedData = reversedHistorial.map(item => {
            return `${item.fecha} - ${item.movimiento} realizado por ${item.alumno.nombre} ${item.alumno.apellidos} a las ${item.hora} con un monto de ${item.monto}$`;
        });
        setDataSource(formattedData);
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