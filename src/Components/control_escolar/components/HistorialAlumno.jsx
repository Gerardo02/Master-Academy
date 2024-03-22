import { Button, Table } from 'antd';
import { columnsHistorialAlumno } from '../../../Declarations/Tables/Columns';

const HistorialAlumno = ({ alumnosData }) => {
    return ( 
        <div className='table-historial-alumnos'>
            <h1>Historial Academico</h1>
            <Table columns={columnsHistorialAlumno} dataSource={alumnosData} rowKey='id' size='small' />
        </div>
     );
}
 
export default HistorialAlumno;