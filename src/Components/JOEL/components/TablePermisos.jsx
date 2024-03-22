import { Table } from 'antd'

const TablePermisos = ({ columnsPermisos, permisosData }) => {

    return ( 
        <>
            <Table columns={columnsPermisos} dataSource={permisosData} rowKey="id" pagination={{ pageSize: 20 }} size='small' />
        </> 
    );
}
 
export default TablePermisos;