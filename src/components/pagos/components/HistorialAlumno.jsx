import { List } from 'antd';

const HistorialAlumno = ({ data }) => {
    return ( 
        <>
            <h1 style={{textAlign: 'center'}}>Historial de pagos</h1>
            <List
                
                bordered
                dataSource={data}
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